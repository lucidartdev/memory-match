"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getGame, revealTile } from "@/lib/contract";
import GameBoard from "@/components/GameBoard";

export default function PlayGamePage() {
  const params = useParams();
  const gameId = Number(params.gameId);
  const [board, setBoard] = useState<number[]>([]);
  const [states, setStates] = useState<("hidden"|"revealed"|"matched")[]>([]);
  const [status, setStatus] = useState("");

  const loadGame = async () => {
    try {
      const g = await getGame(gameId);
      setBoard(g.board.map((b: any) => Number(b)));
      setStates(g.states.map((s: any) => ["hidden","revealed","matched"][s]));
    } catch(e) { console.error(e); }
  };

  useEffect(() => { loadGame(); }, [gameId]);

  const handleTileClick = async (index: number) => {
    try {
      setStatus("Processing move...");
      await revealTile(gameId, index);
      await loadGame();
      setStatus("");
    } catch(e:any) {
      setStatus("Error: "+e.message);
    }
  };

  if(board.length === 0) return <p className="p-4">Loading game...</p>;

  return (
    <div className="p-8 space-y-4">
      <GameBoard board={board} states={states} onTileClick={handleTileClick} />
      {status && <p>{status}</p>}
    </div>
  );
}
