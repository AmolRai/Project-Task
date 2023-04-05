import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src="https://cdn-icons-png.flaticon.com/128/8305/8305062.png" />
                    <p>cySync</p>
                </div>
                <div className="navbar-right">
                    <img src="https://cdn-icons-png.flaticon.com/128/5107/5107781.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/109/109724.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" />
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default Navbar;