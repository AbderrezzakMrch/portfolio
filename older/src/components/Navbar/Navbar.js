import React from "react";
import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="nav-ul">
                <li><a href="#" className="title">Abdou DEV</a></li>
                <li><a href="#" className="nav-btn">Home</a></li>
                <li><a href="#" className="nav-btn">About</a></li>
                <li><a href="#" className="nav-btn">Portfolio</a></li>
                <li><a href="#" className="lets-talk">Let's Talk</a></li>
            </ul>
        </nav>
    );
}


export default Navbar