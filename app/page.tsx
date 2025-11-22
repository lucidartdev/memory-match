import ConnectWallet from "@/components/ConnectWallet";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Memory Match On-Chain</h1>
      <ConnectWallet />
      <div className="space-x-4 mt-4">
        <Link href="/create" className="px-4 py-2 bg-green-600 text-white rounded-lg">Create Game</Link>
      </div>
    </div>
  );
}
