import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

function ModalDesc(props) {
    return (
        <div className="modal-desc">
            <div>
                <BsArrowRight />
                <p>{props.description}</p>
            </div>
            <AiOutlineCheck />
        </div>
    )
}

export default ModalDesc;
