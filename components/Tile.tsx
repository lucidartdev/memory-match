"use client";
type TileProps = {
  value: number;
  state: "hidden" | "revealed" | "matched";
  onClick: () => void;
};

export default function Tile({ value, state, onClick }: TileProps) {
  let bg = "bg-gray-300";
  if (state === "revealed") bg = "bg-yellow-400";
  if (state === "matched") bg = "bg-green-400";

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center text-xl font-bold cursor-pointer ${bg} border rounded-md`}
      onClick={onClick}
    >
      {state === "hidden" ? "?" : value}
    </div>
  );
}
