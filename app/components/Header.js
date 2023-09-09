"use client"
import React from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function Header() {
  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
     // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
    <div className="flex justify-between bg-black text-purple-600 px-3 lg:px-10 lg:ntext-3xl py-10">

      <p className='pt-3' style={{ fontSize: '24px', fontWeight: 'bold' }}>NFT Market</p>
      <ConnectButton label='Sign Up'/>
    
    
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Header