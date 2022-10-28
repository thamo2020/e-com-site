import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';



import './Footer.css';

const Footer = () => (
  <div className="app__footer " >
   

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p >9 W 53rd St, Colombo, Sri Lanka</p>
        <p >+47 22-344-123</p>
        <p >+47 22-555-123</p>
      </div>

      <div className="app__footer-links_logo">
       
        <p >&quot;The best way to find your dream products. Amazing things will happen when you listen to your heart.&quot;</p>
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Delivery Hours</h1>
        <p >Monday-Friday:</p>
        <p >08:00 am - 5:00 pm</p>
        <p >Saturday-Sunday:</p>
        <p >07:00 am - 12:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p >2022 E-Com. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
