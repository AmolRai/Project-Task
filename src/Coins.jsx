import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DropDownMenu from "./DropDownMenu";
import Modal from "./Modal";
import CryptoCoinsTable from "./CryptoCoinsTable";
import HomeTopContainer from "./HomeTopContainer";
import { RxDoubleArrowDown } from "react-icons/rx";

function Coins() {

    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div className="coins">
            <HomeTopContainer buttonClick={() => setIsOpen(!isOpen)} />

            <div className="coins-bottom">
                <div className="coins-bottom-left">
                    <p>Total Coins - 7</p>
                    <div className="coins-bottom-right">
                        <RxDoubleArrowDown />
                        <p>Amout High - Low</p>
                        <IoIosArrowDown onClick={handleClick} />
                    </div>
                </div>

                <div className="coins-line"></div>
                {show && <DropDownMenu />}

                <div className="crypto-tag">
                    <p>Coin</p>
                    <p>Holding</p>
                    <p>Value</p>
                    <p>Price</p>
                    <p>Receive</p>
                    <p>Send</p>
                </div>
                <CryptoCoinsTable />
            </div>

            {isOpen && <Modal onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export default Coins;
