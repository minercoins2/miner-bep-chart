const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to MinerCoins</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: black;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      overflow: hidden;
    }
    h1 {
      font-size: 2em;
      margin-top: 20px;
      color: cyan;
      text-shadow: 0 0 15px cyan;
    }
    .logo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid cyan;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 0 0 20px cyan;
    }
    .pickaxe {
      width: 70px;
      height: 8px;
      background: cyan;
      position: absolute;
      transform-origin: bottom right;
      animation: swing 2s infinite ease-in-out;
    }
    .pickaxe::before {
      content: "";
      position: absolute;
      left: -18px;
      top: -8px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 3px solid cyan;
    }
    @keyframes swing {
      0% { transform: rotate(-30deg); }
      50% { transform: rotate(30deg); }
      100% { transform: rotate(-30deg); }
    }
  </style>
</head>
<body>
  <div class="logo">
    <div class="pickaxe"></div>
  </div>
  <h1>🚀 Welcome to MinerCoins</h1>
  <p>Mining the future, one block at a time ⛏️</p>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(\`🚀 Server running at http://127.0.0.1:\${PORT}\`);
});
