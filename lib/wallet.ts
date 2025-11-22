'use client';
import { createAppKit } from '@reown/appkit';
import { ethersAdapter } from '@reown/appkit-adapter-ethers';

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

export const metadata = {
  name: "Memory Match On-Chain",
  description: "Competitive on-chain memory match game",
  url: "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"]
};

export const chains = [
  {
    id: 84531, // Base Sepolia
    name: "Base Sepolia",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!
  }
];

export const appKit = createAppKit({
  adapters: [ethersAdapter()],
  metadata,
  projectId,
  networks: chains,
});
