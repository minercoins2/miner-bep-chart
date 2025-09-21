export default function handler(req, res) {
  res.status(200).json({
    version: "vNext",
    image: "https://minercoins-hls3xvccn-minercoins.vercel.app/preview.png",
    buttons: [
      { label: "Mulai" }
    ],
    post_url: "https://minercoins-hls3xvccn-minercoins.vercel.app/api/frame"
  });
}
