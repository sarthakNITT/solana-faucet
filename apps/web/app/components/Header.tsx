"use client"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect, useState } from "react"

export default function Header () {
    const wallet = useWallet()
    const { connection } = useConnection()
    const [balance, setBalance] = useState<number>(0)

    useEffect(()=>{
        if(wallet.publicKey){
            connection.getBalance(wallet.publicKey).then((e)=>{
                setBalance(e / LAMPORTS_PER_SOL);
            });
        }
    },[wallet.publicKey, connection])

    return (
        <header className="h-12 bg-black/40 backdrop-blur-md border-b border-gray-800/50 flex items-center justify-between">
            <div className="px-6 flex items-center space-x-3">
                <h1 className="font-mono text-xl font-medium text-white">
                    SOLMate Dashboard
                </h1>
            </div>
            
            <div className="px-6 flex items-center space-x-4">
                {wallet.publicKey && (
                <div className="bg-black/30 backdrop-blur-sm rounded px-2 py-1 border border-gray-800">
                    <span className="text-xs text-gray-400 mr-2">Balance:</span>
                    <span className="text-xs font-medium text-blue-400">
                    {balance.toFixed(4)} SOL
                    </span>
                </div>
                )}
                {wallet.publicKey ?(
                    <div>
                        <WalletDisconnectButton/>
                    </div>
                ):(
                    <div className="wallet-adapter-button-container">
                        <WalletMultiButton/>
                    </div>
                )}
            </div>
        </header>
    )
}