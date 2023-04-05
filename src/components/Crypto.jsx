import React from "react";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

function Crypto(props) {
    return (
        <div className="crypto">
            <div className="bitcoin-crypto">
                {props.coin}
                <p>{props.name}</p>
            </div>
            <p>BTC 0.00256</p>
            <p>$ 0.5268</p>
            <p>$ 1.2586</p>

            <div className="send send-blue">
                <BsArrowDownLeft />
                <p>RECEIVE</p>
            </div>
            <div className="send send-orange">
                <BsArrowUpRight />
                <p>SEND</p>
            </div>
        </div>
    )
}

export default Crypto;