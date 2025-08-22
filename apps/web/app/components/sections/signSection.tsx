import { Button } from "@repo/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Textarea } from "@repo/ui/textarea";
import { useState } from "react";
import { ed25519 } from '@noble/curves/ed25519';
import { 
  Copy,
  CheckCircle
} from 'lucide-react';
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from 'bs58';

export default function SignSection () {
  const wallet = useWallet();
  const [copied, setCopied] = useState(false);
  const [signedMessage, setSignedMessage] = useState('');
  const [messageToSign, setMessageToSign] = useState('');

  async function handleSignMessage () {
    if (!wallet.publicKey) throw new Error('Wallet not connected!');
    if (!wallet.signMessage) throw new Error('Wallet does not support message signing!');
    const encodedMessage = new TextEncoder().encode(messageToSign);
    const signature = await wallet.signMessage(encodedMessage);
    if (!ed25519.verify(signature, encodedMessage, wallet.publicKey.toBytes())) throw new Error('Message signature invalid!');
    alert('success '+`Message signature: ${bs58.encode(signature)}`);
  }
    return (
        <Card className="bg-black/30 backdrop-blur-sm border-gray-800 max-w-lg">
            <CardHeader className="flex flex-col">
              <CardTitle className="text-white text-sm flex items-center">
                Sign Message
              </CardTitle>
              <CardDescription className="text-gray-400 text-xs">
                Cryptographically sign a message with your wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                placeholder="Enter message to sign..."
                value={messageToSign}
                onChange={(e) => setMessageToSign(e.target.value)}
                className="bg-black/50 p-2 border-gray-700 text-white text-xs min-h-[80px] resize-none"
              />
              <Button 
                onClick={handleSignMessage}
                className="w-full bg-black border border-gray-700 text-white text-xs py-2 h-8 hover:bg-gray-900 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
              >
                Sign Message
              </Button>
              
              {signedMessage && (
                <div className="bg-black/50 rounded p-3 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-2">Signed Message (Base64)</div>
                  <div className="flex items-center space-x-2">
                    <code className="text-xs bg-black px-2 py-1 rounded text-blue-400 flex-1 break-all">
                      {signedMessage}
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                    //   onClick={() => copyToClipboard(signedMessage)}
                      className="text-xs px-2 py-1 h-6 bg-black border-gray-700 text-white hover:bg-gray-900 hover:border-blue-500"
                    >
                      {copied ? <CheckCircle className="w-2 h-2" /> : <Copy className="w-2 h-2" />}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
        </Card>
    );
}