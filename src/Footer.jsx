import { textAlign } from "@mui/system";
import React from "react";
import "./Footer.css";

import { FaFacebookSquare } from "react-icons/fa";
<script
  src="https://kit.fontawesome.com/1e68919d5d.js"
  crossorigin="anonymous"
></script>;
const Footer = () => {
  return (
    <div className="main-footer ">
      <div className="container">
        <div className="row">
          <div className="col2">
            <h4>Contact</h4>
            <h3 className="list-unstyled">
              <div>
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
              <a href="https://www.instagram.com/proxyrobert/" target="_target">
                Instagram
              </a>

              <div>Email: </div>
            </h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Proxy Photography | All right
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
