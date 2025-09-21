// pages/api/frame.js

export default function handler(req, res) {
  res.status(200).json({
    type: "frame",
    version: "vNext",
    image: "https://minercoins.vercel.app/preview.png", // ganti kalau perlu
    buttons: [
      { label: "Mulai" }
    ],
    postUrl: "https://minercoins.vercel.app/api/frame"
  });
}
