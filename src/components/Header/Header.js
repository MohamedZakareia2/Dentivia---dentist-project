import Consultation from "./Consultation";
import Experience from "./Experience";
import "./Header.css";
import React from "react";


const Header = ({refs}) => {
    return(
        <div ref={refs.homeRef} className="header-wrapper">
            <div className="container-bg">
                <div className="container-H">
                    <div className="right-bg"></div>
                    <Experience/>
                                      
                    <div className="left-H">

                        <h1>This is Your Year to <br/>Smile</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className="app">Make An Appointment</button>
                        <Consultation/>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default Header ;