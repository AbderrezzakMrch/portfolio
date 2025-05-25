import React from "react";
import './Home.css'
import home_pic from '../../assets/home_pic.png';

function Home() {
    return(
        <div  className="container">
            <div className="home-info">
                <h1>Frontend Web Developer! </h1>
                <p>Hi, I'm Abdou. A Passionate Frond-end Web Developer based in Algeria</p>
                <span>linkedin</span>
                <span>github</span>
            </div>
            <div className="home-pic">
                <img src={home_pic} alt="My-pic" />
            </div>
        </div>
    );
}



export default Home;