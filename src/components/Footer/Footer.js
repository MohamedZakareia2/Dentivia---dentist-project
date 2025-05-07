import "./Footer.css";
import React from "react";


const Footer = ({refs}) => {
    return (
        <div ref={refs.contactRef} className="wrapper-footer">
            <div className="pre-footer">
                <div className="g-footer">
                    <i className="f-icon fa-solid fa-phone"></i>
                    <div className="c-g-content">
                        <h3>Call Today</h3>
                        <span>1800-123-4567</span>
                    </div>
                </div>
                <div className="g-footer">
                    <i className="f-icon fa-solid fa-envelope"></i>
                    <div className="c-g-content">
                        <h3>Email Us</h3>
                        <span>info@site.com</span>
                    </div>
                </div>
                <div className="g-footer">
                    <i className="f-icon fa-solid fa-location-dot"></i>
                    <div className="c-g-content">
                        <h3>5678 Salah Salem</h3>
                        <span>D Alene, ID 12345</span>
                    </div>
                </div>
            </div>
            <div className="c-content-footer">
                <div className="c-Footer">
                <div className="l-c-Footer">
                    <div className="logo-f">
                        <span className="l">Dent</span>
                        <span className="i">i</span>
                        <span className="l">via</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                    
                    <div className="f-co-services">
                        <div className="f-co">
                            <h4>Company</h4>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>services</li>
                                <li>contact Us</li>
                            </ul>
                        </div>
                        <div className="f-co">
                            <h4>Services</h4>
                            <ul>
                                <li>Dental Care</li>
                                <li>Oral Surgery</li>
                                <li>Oral Hygienist</li>
                                <li>Teeth Cleaning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="r-c-Footer">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389525166!2d31.2357116!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e4cfbd4bd9b%3A0x12e9233a1f3a1861!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 title="Cairo Location Map"
                 referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                </div>
                
                <div className="f-rights">
                <p>© 2024 Copyright Dentivia by Mohamed Zakareia. All Rights Reserved.</p>
                <div className="icons">
                <a href="#" className="icon fb"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="icon tw"><i className="fab fa-twitter"></i></a>
                <a href="#" className="icon ig"><i className="fab fa-instagram"></i></a>
                <a href="#" className="icon li"><i className="fab fa-linkedin-in"></i></a>
        </div>
            </div>
            </div>
            
        </div>
    )
}

export default Footer;