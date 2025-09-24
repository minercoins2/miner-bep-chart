"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white relative">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b border-yellow-500">
        <h1 className="text-xl font-bold text-yellow-400">BigCoin</h1>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400 transition"
        >
          MENU
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1b263b] border-l border-yellow-500 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-yellow-500">
          <h2 className="text-yellow-400 font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X className="text-yellow-400" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col mt-4">
          <li>
            <a
              href="#actions"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
            >
              Actions
            </a>
          </li>
          <li>
            <a
              href="#stats"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
            >
              Stats
            </a>
          </li>
          <li>
            <a
              href="#mining"
              className="block px-4 py-3 hover:bg-yellow-500 hover:text-black"
            >
              Mining
            </a>
          </li>
        </ul>
      </div>

      {/* Content */}
      <main className="p-6">
        <p className="text-gray-300">🚀 Welcome to your mining dashboard!</p>
      </main>
    </div>
  );
}
