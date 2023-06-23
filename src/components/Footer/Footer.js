import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a className="github" href="https://github.com/hajar1997">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/hajar-ibrahimova-31151217a/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#home">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#about">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-inline-item">
            <a href="#service">Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="copyright">Hajar Ibra ©{currentDate}</p>
      </footer>
    </div>
  );
};

export default Footer;
