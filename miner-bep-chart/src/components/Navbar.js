"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Miner BEP</h1>

        {/* Tombol Hamburger */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden mt-2 flex flex-col gap-2">
          <li><a href="/" className="block p-2 hover:bg-gray-700 rounded">Home</a></li>
          <li><a href="/about" className="block p-2 hover:bg-gray-700 rounded">About</a></li>
        </ul>
      )}
    </nav>
  );
}
