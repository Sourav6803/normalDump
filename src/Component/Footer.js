import React from 'react'
import "./header.css";
import img1 from "../img/icons8-email-100.png";
import img2 from "../img/icons8-phone-100.png"
import img3 from "../img/icons8-message-32.png"
import img4 from "../img/icons8-address-96.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="cont " >
            <div className="contact-info">
                <div className="contact">
                    <img src={img1} alt="Email Icon" />
                    <div className="contact-details">
                        <h2>E-MAILS:</h2>
                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                    </div>
                </div>
                <div className="contact">
                    <img src={img2} alt="Phone Icon" />
                    <div className="contact-details">
                        <h2>PHONE:</h2>
                        <p><a>+1 1234567890 / +1 1234567890</a></p>
                    </div>
                </div>
                <div className="contact">
                    <img src={img3} alt="Support Icon" />
                    <div className="contact-details">
                        <h2>SUPPORT:</h2>
                        <p>Mon-Sat, 8AM-8PM</p>
                    </div>
                </div>
                <div className="contact">
                    <img src={img4} alt="Address Icon" />
                    <div className="contact-details">
                        <h2>ADDRESS:</h2>
                        <p>123 Main Street, City, State, ZIP Code</p>
                    </div>
                </div>
            </div>

            <div className="company-name">
                <h1 id="dd">DUMPING DATA</h1>
                <h4 id="ugo">Unlocking Global Opportunities</h4>
                <ul className="list2" id="list2">
                    <li><Link to="/home">Home</Link></li>
                    <li className="ab"><Link to='/about'>About</Link></li>
                    <li><Link to='blog'>Blogs</Link></li>
                    <li><Link to='services' onclick="toggleSection('services')">Services</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="company-text ">
                <p className='d-flex  justify-content-center'>An established organization,Dumping Data is expanding quickly with</p>
                <p>its sights set on becoming a global player in the Data industry.</p>
            </div>
            <div className="follow-us">
                <div className="social-media">
                    <a href="#" className="facebook"></a>
                    <a href="#" className="instagram"></a>
                    <a href="#" className="youtube"></a>
                </div>
            </div>
            <div className="copy">
                <p>Copyright © Dumping Data ®</p>
            </div>
        </div>

    )
}

export default Footer
