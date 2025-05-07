import "./Services.css";
import whitepic from "../../Assets/white.jpg"
import React from "react";

const Services = ({refs}) => {
    return(
        <div ref={refs.servicesRef} className="c-Services">
            <div className="header-s">
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Etiam et purus a odio finibus
                 bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
            <div className="Services-list">
            <ul>
                <li><a>Teeth Whitening</a></li>
                <li><a>Teeth Orthodontic</a></li>
                <li><a>Oral Surgery</a></li>
                <li><a>Teeth Implants</a></li>
                <li><a>Teeth Check Up</a></li>
            </ul>
            <div className="serice-type">
                <div className="l-serice-type">
                    <div className="l-serice-type-bg"></div>
                    <img alt="" src={whitepic}></img>
                </div>
                <div className="r-serice-type">
                    <h2>Teeth Whitening</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.<br/><br/>

                        Make an Inquiry

                        t is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout</p>
                <button>Make an Inquiry</button>
                </div>
            </div>
            </div>
            
        </div>
    )
};

export default Services;