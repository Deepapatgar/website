import React from "react";

import baladi from "../images/logo.png"
import phone from "../images/phone.png"
import inbox from "../images/inbox.png"
import location from "../images/location.png"
import int from "../images/link.png"
import facebook from "../images/facebook.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"

function FooterSection() {
  return (

    <div className="Footer">
      <div className="baladi-logo">
        <img src={baladi} alt="baladi" width={109} height={84} />
      </div>
      <div className="links">Quick Links
        <ul className="home">
          <li>Home</li>
          <li>About</li>
          <li>Properties</li>
          <li>Contact Us</li>
        </ul>

      </div>
      <div className="links">Reach Us
        <div className="contacts-image">
          <img src={phone} alt="phone" width={13.47} height={13.47} />
          <div className="contacts">+918496894702  | +918792694702</div>
        </div>
        <div className="contacts-image">
          <img src={inbox} alt="inbox" width={13.47} height={13.47} />
          <div className="contacts">sunilraj@baladibuilders.com</div>
        </div>
        <div className="contacts-image">
          <img src={location} alt="location" width={13.47} height={13.47} />
          <div className="contacts">No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore-560079</div>
        </div>
      </div>

      <div className="social-media-icons">
      <div className="icons">
              <img src={int} alt="in" width={40.4} height={40.4}/>
            </div>
            <div className="icons">
              <img src={facebook} alt="facebook" width={38} height={38}/>
            </div>
            <div className="icons">
              <img src={twitter} alt="twitter" width={43} height={43}/>
            </div>
            <div className="icons">
              <img src={insta} alt="insta" width={59} height={50}/>
            </div>
      </div>
      <div className="copy-right-content">Copyright 2020-2022 · Baladi Properties.®· All Rights Reserved</div>
     

      </div>



  );
}

export default FooterSection;