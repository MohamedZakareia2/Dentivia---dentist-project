import "./Navs.css";
import { useState } from "react";
import React from "react";

const Navs = ( {refs}) => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        setIsOpen(false);
      };



    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="logo" >
                    <span className="l">Dent</span>
                    <span className="i">i</span>
                    <span className="l">via</span>
                </div>
                
                {/* Burger Menu Icon - Visible on mobile */}
                <div 
                    className={`burger ${isOpen ? "open" : ""}`} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                
                {/* Navigation Links */}
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li onClick={() => scrollTo(refs.homeRef)}>Home</li>
                <li onClick={() => scrollTo(refs.aboutRef)}>About Us</li>
                <li onClick={() => scrollTo(refs.servicesRef)}>Services</li>
                <li onClick={() => scrollTo(refs.pricingRef)}>Pricing</li>
                <li onClick={() => scrollTo(refs.contactRef)}>Contact Us</li>
                </ul>

                
                {/* Contact Information */}
                <div className="contacts">
                    <span className="contact-item">
                        <i className="fas fa-phone contact-icon"></i>
                        <span className="contact-text">+01 234 567</span>
                    </span>
                    <span className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <span className="contact-text">care@gmail.com</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navs;