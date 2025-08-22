import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Input } from "@repo/ui/input";

export default function SendSection () {
    return (
        <Card className="p-2 gap-2 flex flex-col bg-black/30 backdrop-blur-sm border-gray-800 max-w-sm">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-white text-sm flex items-center">
                Send SOL Tokens
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs">
                Transfer SOL to another wallet address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                placeholder="Recipient Wallet Address"
                // value={sendToAddress}
                // onChange={(e) => setSendToAddress(e.target.value)}
                className="bg-black/50 p-2 border-gray-700 text-white text-xs h-8"
              />
              <Input
                type="number"
                placeholder="Amount (SOL)"
                // value={sendAmount}
                // onChange={(e) => setSendAmount(e.target.value)}
                className="bg-black/50 p-2 border-gray-700 text-white text-xs h-8"
              />
              <Button className="w-full bg-black border border-gray-700 text-white text-xs py-2 h-8 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 transition-all duration-200">
                Send Tokens
              </Button>
              <p className="text-xs text-gray-400">
                Transaction fees will be deducted from your balance.
              </p>
            </CardContent>
        </Card>
    );
}