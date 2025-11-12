import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Latorraca</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="skills" className="footer__link">Skills</a>
                </li>
            </ul>
                <div className="footer__social">
                <a href="https://www.instagram.com/vitorlatorraca"
        className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/vitor-latorraca-47430620a"
        className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/vitorlatorraca"
        className="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="uil uil-github-alt "></i>
        </a>
        </div>
        <span className="footer__copy"> All rigths reserved</span>
        </div>
       
    </footer>
  )
}

export default Footer