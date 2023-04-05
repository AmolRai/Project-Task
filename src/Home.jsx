import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Coins from "./Coins";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-container">
                <Sidebar />
                <Coins />
            </div>
        </div>
    )
}

export default Home;