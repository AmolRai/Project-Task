import React from "react";
import { SiBitcoinsv, SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import Crypto from "./Crypto";

function CryptoCoinsTable() {
    return (
        <div className="crypto-coins">
            <Crypto coin=<SiBitcoinsv /> name="Bitcoin" />
            <Crypto coin=<FaEthereum /> name="Ethereum" />
            <Crypto coin=<SiBinance /> name="Binance" />
            <Crypto coin=<SiBitcoinsv /> name="Bitcoin" />
            <Crypto coin=<FaEthereum /> name="Ethereum" />
        </div>
    )
}

export default CryptoCoinsTable
