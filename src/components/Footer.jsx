import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" aria-label="heart">
        🧡
      </span>{" "}
      by
      <a href="https://www.linkedin.com/in/jhan-genderson-rodriguez-castillo-52119a223/"
      rel="noopener noreferrer"
      target="_blank"
      className="logo" >
        <span className="logo-img">&lt;&gt; </span>
          {" "}
          <span>
            Jhan Rodriguez
          </span>
        
      </a>
    </div>
    <div className="footer__location">
      PE ,
      <span>
        Lima 
      </span>
      , 2022
    </div>
  </footer>
);

export default Footer;
