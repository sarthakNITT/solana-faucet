import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function AirdropSection () {
  const [amt, setAmt] = useState<string>("0");
  const { connection } = useConnection();
  const wallet = useWallet();

async function handleAirdrop() {
  if (!wallet.connected || !wallet.publicKey) {
    alert("Connect your wallet first!");
    return;
  }

  const solAmount = Number(amt);
  if (solAmount <= 0 || solAmount > 2) {
    alert("Enter an amount between 0 and 2 SOL");
    return;
  }

  try {
    console.log("1");
    
    const signature = await connection.requestAirdrop(wallet.publicKey, solAmount * LAMPORTS_PER_SOL);
    console.log("2");
    await connection.confirmTransaction(signature, "confirmed");
    console.log("3");
    alert(`Requested ${solAmount} SOL airdrop successfully!`);
  } catch (err) {
    console.error(err);
    alert("Airdrop failed. Check console for details.");
  }
}

    return (
        <Card className="bg-black/30 backdrop-blur-sm border-gray-800 max-w-sm">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-white text-sm flex items-center">
                Request SOL Airdrop
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs">
                Request test SOL tokens for development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                type="number"
                placeholder="Amount (SOL)"
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
                className="bg-black/50 p-2 border-gray-700 text-white text-xs h-8"
              />
              <Button 
                onClick={handleAirdrop}
                className="w-full bg-black border border-gray-700 text-white text-xs py-2 h-8 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
              >
                Request Airdrop
              </Button>
              <p className="text-xs text-gray-400">
                Note: Airdrops are limited on devnet. Maximum 2 SOL per request.
              </p>
            </CardContent>
        </Card>
    );
}