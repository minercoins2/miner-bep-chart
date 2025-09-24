"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

    let frame = 0;
    function draw() {
      ctx.fillStyle = "#fcd34d"; // background kuning
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Meja
      ctx.fillStyle = "#92400e";
      ctx.fillRect(150, 180, 100, 20);

      // Orang
      ctx.fillStyle = "#f472b6"; // kepala
      ctx.fillRect(160, 130, 20, 20);

      ctx.fillStyle = "#2563eb"; // badan
      ctx.fillRect(158, 150, 24, 30);

      ctx.fillStyle = "#1d4ed8"; // kaki
      ctx.fillRect(158, 180, 8, 20);
      ctx.fillRect(174, 180, 8, 20);

      // Laptop
      ctx.fillStyle = "#111827"; // base
      ctx.fillRect(190, 160, 40, 10);
      ctx.fillStyle = frame % 20 < 10 ? "#22c55e" : "#16a34a"; // layar kedip
      ctx.fillRect(192, 140, 36, 20);

      // Rig mining
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(250, 150, 80, 50);

      // VGA card warna-warni
      const colors = ["#ef4444", "#3b82f6", "#10b981"];
      colors.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.fillRect(255 + i * 20, 155, 15, 40);
      });

      // Fan animasi
      ctx.fillStyle = "#6b7280";
      ctx.beginPath();
      ctx.arc(310, 175, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#374151";
      ctx.beginPath();
      ctx.arc(
        310,
        175,
        8,
        (frame / 10) % (Math.PI * 2),
        (frame / 10) % (Math.PI * 2) + Math.PI / 2
      );
      ctx.fill();

      frame++;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-200 to-amber-400 p-4">
      <h1 className="text-4xl font-bold mb-2">Pixel Mining Room</h1>
      <p className="mb-4">Animasi orang, laptop mining, dan rig VGA berkipas</p>

      <canvas
        ref={canvasRef}
        className="border-4 border-black rounded-lg"
        style={{ imageRendering: "pixelated" }}
      />

      <p className="mt-4 text-center">
        Ruangan pixel dengan animasi mining rig, laptop, dan orang duduk.
      </p>
    </main>
  );
}
