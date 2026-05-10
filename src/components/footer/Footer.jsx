import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          © {year} — vitor latorraca / built with react
        </span>

        <div className="footer__links">
          <a
            href="https://github.com/vitorlatorraca"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-latorraca-47430620a"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            linkedin ↗
          </a>
          <a
            href="mailto:vitorlatorraca5@gmail.com"
            className="footer__link"
          >
            email ↗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
