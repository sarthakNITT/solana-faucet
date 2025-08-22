import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { useState } from "react";

interface DashboardProps {
  activeSection: string;
}

export default function DashboardSection ({ activeSection }: DashboardProps) {
    const [balance, setBalance] = useState<number>(0);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs flex items-center">
                    Wallet Balance
                </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                <div className="text-lg font-medium text-blue-400">{balance.toFixed(4)} SOL</div>
                </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs flex items-center">
                    Quick Airdrop
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                <Input
                    type="number"
                    placeholder="Amount (SOL)"
                    // value={airdropAmount}
                    // onChange={(e) => setAirdropAmount(e.target.value)}
                    className="bg-black/50 border-gray-700 text-white text-xs h-7"
                />
                <Button 
                    // onClick={handleAirdrop}
                    className="w-full bg-black border border-gray-700 text-white text-xs py-1 h-7 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                >
                    Request Airdrop
                </Button>
                </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                <CardTitle className="text-white text-xs flex items-center">
                    Quick Send
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-0">
                <Input
                    placeholder="Recipient Address"
                    // value={sendToAddress}
                    // onChange={(e) => setSendToAddress(e.target.value)}
                    className="bg-black/50 border-gray-700 text-white text-xs h-7"
                />
                <Input
                    type="number"
                    placeholder="Amount (SOL)"
                    // value={sendAmount}
                    // onChange={(e) => setSendAmount(e.target.value)}
                    className="bg-black/50 border-gray-700 text-white text-xs h-7"
                />
                <Button className="w-full bg-black border border-gray-700 text-white text-xs py-1 h-7 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
                    Send Tokens
                </Button>
                </CardContent>
            </Card>
        </div>
    );
}