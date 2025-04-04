import React from "react";
import "/Footer.css";
import facebookLogo from "../assets/facebook.png";
import twitterLogo from "../assets/twitter.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Todos los derechos reservados.</p>
      <div className="social-logos">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
