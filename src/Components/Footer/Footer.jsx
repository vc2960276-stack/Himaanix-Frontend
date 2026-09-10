import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          style={{ width: "140px" }}
          src={footer_logo}
          alt="HIMAANIX"
        />
        <p>HIMAANIX</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Legal Links */}
      <div className="footer-legal-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/refund-policy">Refund Policy</Link>
        <Link to="/terms-and-conditions">
          Terms & Conditions
        </Link>
      </div>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>

        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>

        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2026 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;