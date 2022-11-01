
import React from "react"

import baladi from "../images/logo.png"
import int from "../images/link.png"
import facebook from "../images/facebook.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"
import phone from "../images/phone.png"
import inbox from "../images/inbox.png"
import location from "../images/location.png"

function Footer() {
    return (
       
        <div className="footer">
        <div className="footer-section-1">
          <div className="logo">
            <img src={baladi} alt="baladi"/>
          </div>
          <div className="social-media">
            <div className="in-icon">
              <img src={int} alt="in" width={37.77} height={37.18}/>
            </div>
            <div className="facebook-icon">
              <img src={facebook} alt="facebook" width={37.77} height={37.18}/>
            </div>
            <div className="twitter-icon">
              <img src={twitter} alt="twitter" width={37.77} height={37.18}/>
            </div>
            <div className="instagram-icon">
              <img src={insta} alt="insta" width={50.77} height={45}/>
            </div>
          </div>
        </div>
        <div className="footer-section-2">
          <div className="quik-links">Quick Links
            <ul className="home">
                <li>Home</li>
                <li>About</li>
                <li>Properties</li>
                <li>Contact Us</li>
            </ul>
                
          </div>
        </div>
 
        <div className="footer-section-3">
          <div className="reach-us">Reach Us</div>
          
            <div className="phone-icon">
              <img src={phone} alt="phone" width={13.47} height={13.47}/>
                </div>
                   <div className="number">+918496894702  | +918792694702</div>
                  <div className="inbox-icon">
              <img src={inbox} alt="inbox" width={13.47} height={13.47}/>
                </div>
                <div className="mail">sunilraj@baladibuilders.com</div>
                <div className="location-icon">
              <img src={location} alt="location" width={13.47} height={13.47}/>
                </div>
                <div className="location">No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore-560079</div>
        </div>
      
      </div>
      
   
       
    );
  }
  
  export default Footer;