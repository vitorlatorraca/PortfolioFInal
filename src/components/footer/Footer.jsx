import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__left">
          <h1 className="footer__title">Latorraca</h1>
          <ul className="footer__list">
            <li>
              <a href="#home" className="footer__link">Home</a>
            </li>
            <li>
              <a href="#about" className="footer__link">About</a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>
          <span className="footer__copy">
            © {year} — Vitor Latorraca. All rights reserved.
          </span>
        </div>

        <div className="footer__right">
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/vitor-latorraca-47430620a"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/vitorlatorraca"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://www.instagram.com/vitorlatorraca"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <a
            href="mailto:vitorlatorraca5@gmail.com"
            className="footer__email"
          >
            vitorlatorraca5@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
