import React from "react";
import "../styles/Footer.css";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
<script
  src="https://kit.fontawesome.com/1e68919d5d.js"
  crossorigin="anonymous"
></script>;
const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="contact">
            <h4>Contact</h4>
            <div className="facebook">
              <a
                href="https://www.facebook.com/robert.proxy"
                target="_target"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/robert.proxy"
                target="_target"
              >
                <FaFacebookSquare />
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/proxyrobert/" target="_target">
                Instagram
              </a>
              <a href="https://www.instagram.com/proxyrobert/" target="_target">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
          <div className="email">Email: </div>
          <p>
            &copy;{new Date().getFullYear()} Proxy Photography | All rights
            reserved
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;
