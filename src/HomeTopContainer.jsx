import React from "react";
import { BsTrash3, BsSearch, BsCheckCircle } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { RxSwitch } from "react-icons/rx";

function HomeTopContainer(props) {
    return (
        <div className="coin-top">

            <div className="coin-top-left">
                <h1>Wallet 1</h1>
            </div>

            <div className="coin-top-right">
                <div className="top">
                    <BsCheckCircle />
                    <p>Synchronized</p>
                    <div className="button-line"></div>
                    <RxSwitch />
                </div>

                <div className="bottom">
                    <div className="coin-input-container">
                        <input id="input" placeholder="Search Your Coin." />
                        <div id="input-img">
                            <BsSearch />
                        </div>
                    </div>
                    <div className="coin-button-group">
                        <button className="add-coin" onClick={props.buttonClick}>
                            <HiPlus />
                            ADD COIN
                        </button>
                        <div className="button-line"></div>
                        <button>
                            <BsTrash3 /> DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTopContainer
