import React from "react";
import { BsThreeDots } from "react-icons/bs";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-portfolio">
                <img className="background-color transform" src="https://cdn-icons-png.flaticon.com/128/9331/9331979.png" />
                <p>Portfolio</p>
            </div>

            <div className="sidebar-line"></div>

            <div className="sidebar-wallets">
                <div className="top">
                    <img className="background-color" src="https://cdn-icons-png.flaticon.com/128/879/879762.png" />
                    <p className="orange">Wallets</p>
                </div>
                <div className="left">
                    <div className="set">
                        <p className="wallet-1">Wallet 1</p>
                        <BsThreeDots />
                    </div>
                    <div className="set">
                        <p className="wallet-2">Wallet 2</p>
                        <BsThreeDots />
                    </div>
                    <div className="set">
                        <p className="wallet-2">Wallet 3</p>
                        <BsThreeDots />
                    </div>
                </div>
            </div>

            <div className="sidebar-line"></div>

            <div className="top">
                <img className="background-color" src="https://cdn-icons-png.flaticon.com/128/152/152360.png" />
                <p>Last Transaction</p>
            </div>

            <div className="sidebar-line"></div>

            <div className="top">
                <img className="background-color" src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" />
                <p>Tutorials</p>
            </div>

            <div className="sidebar-line"></div>

            <div className="top">
                <img className="background-color" src="https://cdn-icons-png.flaticon.com/128/2139/2139625.png" />
                <p>Setting</p>
            </div>

            <button className="beneficiary">Make Beneficiary</button>
            <div className="support-sidebar"><p>Support</p></div>
        </div>
    )
}

export default Sidebar;