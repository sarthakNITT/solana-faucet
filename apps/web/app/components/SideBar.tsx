import { useWallet } from "@solana/wallet-adapter-react";
import { 
  Send, 
  FileText, 
  Gift,
  Wallet
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SideBar ({ activeSection, setActiveSection }: SidebarProps) {
    const wallet = useWallet();

    const menuItems = [
        { id: 'balance', label: 'Balance', icon: Wallet },
        { id: 'airdrop', label: 'Airdrop SOL', icon: Gift },
        { id: 'send', label: 'Send Tokens', icon: Send },
        { id: 'sign', label: 'Sign Message', icon: FileText },
    ];

    return (
        <div className="fixed left-0 top-12 h-[calc(100vh-3rem)] w-56 bg-black/40 backdrop-blur-lg border-r border-gray-800/50 p-3">
            <nav className="space-y-1">
                {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded text-xs font-normal transition-all duration-200 ${
                            isActive
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-300 hover:bg-gray-800/30 hover:text-white border border-transparent'
                        }`}
                    >
                    <Icon className="w-3 h-3" />
                    <span>{item.label}</span>
                    </button>
                );
                })}
            </nav>

            {wallet.publicKey && (
                <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded p-2 border border-gray-800/50">
                    <div className="text-xs text-gray-400 mb-1">Connected</div>
                    <div className="text-xs font-mono text-blue-400 truncate">
                    {wallet.publicKey.toString()}
                    </div>
                </div>
                </div>
            )}
        </div>
    )
}