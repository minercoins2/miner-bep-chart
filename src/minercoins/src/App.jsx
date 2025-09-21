import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import React, { useState } from "react";

function App() {
  const [coins, setCoins] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">
        ⛏️ MinerCoins
      </h1>

      <p className="mb-4 text-lg">
        Your Coins:{" "}
        <span className="text-green-400 font-bold">{coins}</span>
      </p>

      <button
        onClick={() => setCoins(coins + 1)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition"
      >
        Start Mining
      </button>
    </div>
  );
}

export default App;

