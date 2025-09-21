export default function handler(req, res) {
  res.status(200).json({
    version: "vNext",
    image: "https://minercoins-git-main-minercoins.vercel.app/preview.png",
    buttons: [{ label: "Mulai" }],
    post_url: "https://minercoins-git-main-minercoins.vercel.app/api/frame"
  });
}export default function handler(req, res) {
  // Cek method POST (sesuai format Farcaster Frame)
  if (req.method === "POST") {
    const { untrustedData } = req.body || {};

    // Response ke Warpcast
    return res.status(200).json({
      type: "frame",
      title: "Minercoins Frame",
      image: "https://minercoins-hls3xvccn-minercoins.vercel.app/preview.png",
      buttons: [
        { label: "Mainkan Lagi", action: "post" },
        { label: "Website", action: "link", target: "https://minercoins-hls3xvccn-minercoins.vercel.app" }
      ]
    });
  }

  // Kalau bukan POST → tolak
  return res.status(405).json({ error: "Method not allowed" });
}
