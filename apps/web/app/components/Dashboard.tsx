import { useWallet } from "@solana/wallet-adapter-react"
import { Card, CardContent } from "@repo/ui/card"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AirdropSection from "./sections/airdropSection";
import SignSection from "./sections/signSection";
import BalanceSection from "./sections/balaneSection";
import SendSection from "./sections/sendSection";

interface DashboardProps {
  activeSection: string;
}

export default function Dashboard ({ activeSection }: DashboardProps) {
    const wallet = useWallet();

    function Show () {
        if(activeSection === "sign") {
            return <SignSection />;
        }else if(activeSection === "airdrop") {
            return <AirdropSection/>
        }else if(activeSection === "balance") {
            return <BalanceSection/>
        }else if(activeSection === "send") {
            return <SendSection/>
        }
    }
    return (
        <div>
            {wallet.publicKey ?
                Show()
            : (
                <div>
                    <div className="flex items-center justify-center h-80">
                        <Card className="bg-black/30 backdrop-blur-sm border-gray-800 max-w-sm w-full">
                            <CardContent className="p-4 text-center">
                            <h3 className="text-sm font-medium mb-2 text-white">Connect Your Wallet</h3>
                            <p className="mb-2 text-gray-400 text-xs">
                                Please connect your Solana wallet to access the dashboard features.
                            </p>
                            <div className="wallet-adapter-button-container">
                                <WalletMultiButton/>
                            </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}