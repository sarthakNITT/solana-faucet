"use client"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

export default function Home () {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
    return (
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-blue-950/20"></div>
                  <div className="relative z-10">
                    <Header/>
                    <div className="flex">
                      <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />
                      <main className="flex-1 p-3 md:p-4 ml-56">
                        <Dashboard activeSection={activeSection} />
                      </main>
                    </div>
                  </div>
                </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
    );
}