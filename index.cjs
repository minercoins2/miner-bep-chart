// index.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { ethers } = require("ethers");

const app = express();
app.use(bodyParser.json());

const DATA_FILE = "data.json";
function loadData(){
  if(!fs.existsSync(DATA_FILE)) {
    const init = { users: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(init,null,2));
    return init;
  }
  return JSON.parse(fs.readFileSync(DATA_FILE));
}
function saveData(data){ fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2)); }

let data = loadData(); // data.users = [{username, password, wallet, hasMiner}]

// --- CONFIG: GANTI sesuai milikmu ---
const tokenAddress = (process.env.TOKEN_ADDRESS || "0xYOUR_TOKEN_ADDRESS").toLowerCase();
const ownerAddress = (process.env.OWNER_ADDRESS || "0xYOUR_OWNER_ADDRESS").toLowerCase();
const providerUrl  = process.env.PROVIDER_URL || "https://mainnet.infura.io/v3/YOUR_INFURA_KEY";
const minToken = ethers.parseUnits(process.env.MIN_TOKEN || "100", 18); // contoh 100 token
// --------------------

const provider = new ethers.JsonRpcProvider(providerUrl);
const abi = [ "event Transfer(address indexed from, address indexed to, uint256 value)", "function balanceOf(address owner) view returns (uint256)" ];
const contract = new ethers.Contract(tokenAddress, abi, provider);

// Helper: cari user
function findUser(username){ return data.users.find(u => u.username === username); }

// ===== Endpoints =====

// 1) Register
app.post("/register", (req,res)=>{
  const { username, password, wallet } = req.body;
  if(!username || !password) return res.status(400).json({error:"username & password required"});
  if(findUser(username)) return res.status(400).json({error:"username exists"});
  data.users.push({ username, password, wallet: wallet ? wallet.toLowerCase() : null, hasMiner:false });
  saveData(data);
  res.json({success:true, message:"registered"});
});

// 2) Login (simple)
app.post("/login", (req,res)=>{
  const { username, password } = req.body;
  const u = findUser(username);
  if(!u || u.password !== password) return res.status(401).json({error:"invalid credentials"});
  res.json({success:true, username: u.username, wallet: u.wallet, hasMiner: !!u.hasMiner});
});

// 3) Request buy info (server returns owner address & required amount)
app.get("/buyInfo", (req,res)=>{
  res.json({
    ownerAddress,
    requiredAmount: minToken.toString(),
    requiredDisplay: ethers.formatUnits(minToken, 18) + " TOK"
  });
});

// 4) Confirm purchase: user provides txHash and their wallet
app.post("/confirmBuy", async (req,res)=>{
  try{
    const { username, wallet, txHash } = req.body;
    if(!username || !wallet || !txHash) return res.status(400).json({error:"username, wallet, txHash required"});
    const u = findUser(username);
    if(!u) return res.status(404).json({error:"user not found"});
    // verify tx on chain
    const receipt = await provider.getTransactionReceipt(txHash);
    if(!receipt) return res.status(400).json({error:"tx not found or not mined yet"});
    // find Transfer log from wallet -> ownerAddress of tokenAddress
    const transferTopic = contract.interface.getEventTopic("Transfer");
    let matched = null;
    for(const log of receipt.logs){
      if(log.address.toLowerCase() !== tokenAddress) continue;
      if(!log.topics || log.topics[0] !== transferTopic) continue;
      // parse
      const parsed = contract.interface.parseLog(log);
      const from = parsed.args.from.toLowerCase();
      const to = parsed.args.to.toLowerCase();
      const value = parsed.args.value; // bigint
      if(from === wallet.toLowerCase() && to === ownerAddress && value >= minToken){
        matched = { from, to, value: value.toString() };
        break;
      }
    }
    if(!matched) return res.status(400).json({error:"no matching Transfer found (from wallet->owner with required amount)"});
    // mark user as owner of miner
    u.wallet = wallet.toLowerCase();
    u.hasMiner = true;
    saveData(data);
    return res.json({success:true, message:"purchase verified, miner granted", tx: txHash, details: matched});
  }catch(e){
    console.error(e);
    return res.status(500).json({error: "server error", detail: (e && e.message) ? e.message : String(e)});
  }
});

// 5) Mining (only for users who bought miner)
app.post("/mine", (req,res)=>{
  const { username } = req.body;
  const u = findUser(username);
  if(!u) return res.status(404).json({error:"user not found"});
  if(!u.hasMiner) return res.status(403).json({error:"must buy miner first"});
  // mining logic (simulasi)
  res.json({success:true, message:`mining started for ${username}`});
});

// 6) status
app.get("/status", (req,res)=>{
  const { username } = req.query;
  const u = findUser(username);
  if(!u) return res.json({found:false});
  res.json({found:true, user:u});
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running at http://127.0.0.1:${port}`));
