import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io"

function ModalMiddleSection(props) {
    return (
        <div className="modal-middle">
            <div className="modal-list">
                <div className="receive-list">
                    <span onClick={props.handleDeviceClick} className="modal-border">
                        {(props.isVerificationClicked || props.isReceiveClicked)
                            ? <IoMdCheckmarkCircle className="checkmark" />
                            : <span className="modal-inner"></span>}
                    </span>
                    <p className="modal-device">Device</p>
                </div>

                <div className="modal-line-container">
                    <div className="modal-line-1"></div>
                </div>

                <div className="receive-list">
                    <span onClick={props.handleVerificationClick} className={props.isVerificationClicked ? "modal-border"
                        : props.isReceiveClicked ? "modal-border" : "circle modal-border"}>
                        {(props.isReceiveClicked) ? <IoMdCheckmarkCircle className="checkmark" />
                            : props.isVerificationClicked ? <span className="modal-inner">2</span> : 2}
                    </span>
                    <p>Verification</p>
                </div>

                <div className="modal-line-container">
                    <div className="modal-line-2"></div>
                </div>

                <div className="receive-list">
                    <span onClick={props.handleReceiveClick} className={props.isReceiveClicked ? "modal-border" : "circle modal-border"}>
                        {props.isReceiveClicked ? <span className="modal-inner">3</span> : 3}
                    </span>
                    <p>Receive</p>
                </div>

            </div>
        </div>
    )
}

export default ModalMiddleSection
