import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="https://twitter.com/Harshal__Rajput" className="footer__social-link">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/harshal-rajput-94755a228/" className="footer__social-link">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Harshal</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Harshal Rajput</span>
        </p>


      </div>
    </footer>
  );
};

export default Footer;
