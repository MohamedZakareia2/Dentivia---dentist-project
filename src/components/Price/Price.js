import "./Price.css";
import tpricepic from "../../Assets/t-price-pic.jpg";
import extractprice from "../../Assets/extract-price-pic.jpg";
import impalent from "../../Assets/impalent-price.jpg";
import React from "react";


const Price = ({refs}) => {
    return(
        <div ref={refs.pricingRef} className="c-Price">
            <div className="header-price">
                <h1>Our Pricing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
            <div className="price-content">
                <div className="sides-price">
                    <div className="pic-price">
                        <img alt="" src={tpricepic}></img>
                        <h1>$ 39</h1>
                    </div>
                    
                    <h2>Teeth Whtening</h2>
                    <span>Diagnostic Services</span>
                    <p>Professional Consultation</p>
                    <span>Tooth Implants</span>
                    <p>Teeth Whitening</p>
                    <span>Surgical Extraction</span>
                    <button>Get Started</button>
                </div>
                <div className="middle-price">
                <div className="pic-price">
                        <img alt="" src={extractprice}></img>
                        <h1>$ 39</h1>
                    </div>
                    <h2>Extractions</h2>
                    <span>Diagnostic Services</span>
                    <p>Professional Consultation</p>
                    <span>Tooth Implants</span>
                    <p>Teeth Whitening</p>
                    <span>Surgical Extraction</span>
                    <p>Professional Consultation</p>
                    <button>Get Started</button>
                </div>
                <div className="sides-price">
                <div className="pic-price">
                        <img alt="" src={impalent}></img>
                        <h1>$ 39</h1>
                    </div>
                    <h2>Teeth Whtening</h2>
                    <span>Diagnostic Services</span>
                    <p>Professional Consultation</p>
                    <span>Tooth Implants</span>
                    <p>Teeth Whitening</p>
                    <span>Surgical Extraction</span>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Price ;