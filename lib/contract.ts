import { ethers } from "ethers";
import { appKit } from "./wallet";
import MemoryMatchABI from "@/abi/MemoryMatch.json";

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MEMORYMATCH_ADDRESS!;

async function getSigner() {
  const wallet = await appKit.getWallet();
  if (!wallet) throw new Error("Wallet not connected");
  const provider = await wallet.getEthersProvider();
  return provider.getSigner();
}

// Create new game
export async function createGame(gridSize: number, board: number[]) {
  const signer = await getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, MemoryMatchABI, signer);
  const tx = await contract.createGame(gridSize, board);
  return await tx.wait();
}

// Reveal tile
export async function revealTile(gameId: number, index: number) {
  const signer = await getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, MemoryMatchABI, signer);
  const tx = await contract.revealTile(gameId, index);
  return await tx.wait();
}

// Get game state
export async function getGame(gameId: number) {
  const wallet = await appKit.getWallet();
  if (!wallet) throw new Error("Wallet not connected");
  const provider = await wallet.getEthersProvider();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, MemoryMatchABI, provider);
  return await contract.getGame(gameId);
}

// Get player games
export async function getPlayerGames(address: string) {
  const wallet = await appKit.getWallet();
  if (!wallet) throw new Error("Wallet not connected");
  const provider = await wallet.getEthersProvider();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, MemoryMatchABI, provider);
  return await contract.getPlayerGames(address);
}
