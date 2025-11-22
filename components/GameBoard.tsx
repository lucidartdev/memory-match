"use client";
import Tile from "./Tile";

type GameBoardProps = {
  board: number[];
  states: ("hidden" | "revealed" | "matched")[];
  onTileClick: (index: number) => void;
};

export default function GameBoard({ board, states, onTileClick }: GameBoardProps) {
  const size = Math.sqrt(board.length);
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${size}, 64px)` }}>
      {board.map((v, i) => (
        <Tile key={i} value={v} state={states[i]} onClick={() => onTileClick(i)} />
      ))}
    </div>
  );
}
