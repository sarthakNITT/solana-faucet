import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Input } from "@repo/ui/input";

export default function AirdropSection () {
    return (
        <Card className="bg-black/30 backdrop-blur-sm border-gray-800 max-w-sm">
            <CardHeader>
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
                // value={airdropAmount}
                // onChange={(e) => setAirdropAmount(e.target.value)}
                className="bg-black/50 border-gray-700 text-white text-xs h-8"
              />
              <Button 
                // onClick={handleAirdrop}
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