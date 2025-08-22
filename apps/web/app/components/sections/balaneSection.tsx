import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { 
  Copy,
  CheckCircle
} from 'lucide-react';

export default function BalanceSection () {
    const wallet = useWallet()
    const [balance, setBalance] = useState<number>(0);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };    
    return (
        <Card className="bg-black/30 backdrop-blur-sm border-gray-800 max-w-lg">
            <CardHeader>
                <CardTitle className="text-white text-sm flex items-center">
                Wallet Balance Details
                </CardTitle>
                <CardDescription className="text-gray-400 text-xs">
                View your current Solana wallet balance and transaction history
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="bg-black/50 rounded p-3 border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Current Balance</div>
                <div className="text-xl font-medium text-blue-400">{balance.toFixed(4)} SOL</div>
                <div className="text-xs text-gray-500 mt-1">≈ ${(balance * 25).toFixed(2)} USD</div>
                </div>
                
                <div className="bg-black/50 rounded p-3 border border-gray-700">
                <div className="text-xs text-gray-400 mb-2">Wallet Address</div>
                <div className="flex items-center space-x-2">
                    <code className="text-xs bg-black px-2 py-1 rounded text-blue-400 flex-1 truncate">
                    {wallet.publicKey!.toString()}
                    </code>
                    <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(wallet.publicKey!.toString())}
                    className="text-xs px-2 py-1 h-6 bg-black border-gray-700 text-white hover:bg-gray-900 hover:border-blue-500"
                    >
                    {copied ? <CheckCircle className="w-2 h-2" /> : <Copy className="w-2 h-2" />}
                    </Button>
                </div>
                </div>
            </CardContent>
        </Card>
    );
}