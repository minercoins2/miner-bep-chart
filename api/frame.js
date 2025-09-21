export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    version: "vNext",
    image: "https://minercoins-mfa1wq8in-minercoins.vercel.app/step2.png",
    buttons: [
      { label: "Lanjut", action: "post" }
    ]
  });
}
