"use client";
import { appKit } from "@/lib/wallet";

export default function ConnectWallet() {
  return (
    <button
      onClick={() => appKit.open()}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Connect Wallet
    </button>
  );
}
