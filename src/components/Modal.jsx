import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ModalDesc from "./ModalDesc";
import Address from "./Address";
import AddressVerfiyed from "./AddressVerfiyed";
import ModalMiddleSection from "./ModalMiddleSection";

function Modal({ onClose }) {

    const [isDeviceClicked, setIsDeviceClicked] = useState(true);
    const [isVerificationClicked, setIsVerificationClicked] = useState(false);
    const [isReceiveClicked, setIsReceiveClicked] = useState(false);

    function handleVerificationClick() {
        setIsVerificationClicked(true);
        setIsReceiveClicked(false);
    }

    function handleDeviceClick() {
        setIsVerificationClicked(false);
        setIsReceiveClicked(false);
    }

    function handleReceiveClick() {
        setIsReceiveClicked(true);
        setIsVerificationClicked(false);
    }

    return (
        <div className="modal-overlay-styles">
            <div className="modal">

                <div className="modal-top">
                    <p className="modal-receive">Receive</p>
                    <RxCross2 className="modal-close" onClick={onClose} />
                </div>

                <ModalMiddleSection
                    handleDeviceClick={handleDeviceClick} handleVerificationClick={handleVerificationClick}
                    handleReceiveClick={handleReceiveClick} isDeviceClicked={isDeviceClicked}
                    isVerificationClicked={isVerificationClicked} isReceiveClicked={isReceiveClicked}
                />

                <div className="model-bottom" style={{ marginTop: isVerificationClicked && "3rem" }}>
                    {isReceiveClicked && <p className="instruction-text">Coin Address</p>}
                    {isVerificationClicked ? <Address isClicked={isVerificationClicked} />
                        : isReceiveClicked && <Address receiveClicked={isReceiveClicked} />
                    }

                    <p className="instruction-text">
                        {isVerificationClicked ? "Verify address on device"
                            : isReceiveClicked ? "" : "Follow the instruction on device"}
                    </p>

                    {isReceiveClicked ?
                        <AddressVerfiyed /> : isVerificationClicked ?
                            <ModalDesc description="Please match the address to be shown in X1 Wallet" />
                            :
                            <>
                                <ModalDesc description="Select the Wallet on Device" />
                                <ModalDesc description="Select the Coin on Device" />
                                <ModalDesc description="Tap 1 card of any 4 cards" />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;