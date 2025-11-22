"use client";
import { useState } from "react";
import { createGame } from "@/lib/contract";

export default function CreateGameForm() {
  const [gridSize, setGridSize] = useState(4);
  const [status, setStatus] = useState("");

  const handleCreate = async () => {
    const total = gridSize * gridSize;
    const cards = Array.from({ length: total }, (_, i) => Math.floor(i / 2));
    try {
      setStatus("Creating game...");
      await createGame(gridSize, cards);
      setStatus("Game created!");
    } catch (e: any) {
      console.error(e);
      setStatus("Error: " + e.message);
    }
  };

  return (
    <div className="max-w-md p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Create Memory Match Game</h2>
      <label>
        Grid Size (2-8):
        <input
          type="number"
          min={2}
          max={8}
          value={gridSize}
          onChange={(e) => setGridSize(Number(e.target.value))}
          className="ml-2 px-2 py-1 border rounded"
        />
      </label>
      <button
        onClick={handleCreate}
        className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Create Game
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
