import { Web3Button } from '@web3modal/react';
import React from 'react';
import './home.css';
import { useWeb3Modal } from "@web3modal/react";
import { Web3NetworkSwitch } from '@web3modal/react'

export function Home() {
    const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
    return (
        <div class="base">
            <div class="text">
                <h> Different Wallet Connection Methods </h>
            </div>
            <div class="walletConnect">
                {/* <Web3Button /> */}
                <w3m-core-button></w3m-core-button>
                {/* <Web3NetworkSwitch /> */}
                
            </div>
        </div>
    )
};