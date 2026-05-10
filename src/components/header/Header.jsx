import React, { useState } from "react";
import "./header.css";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    <span className="nav__logo-mark">[</span>vitor<span className="nav__logo-mark">]</span>
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link" onClick={() => showMenu(false)}>
                                <span className="nav__link-num">01</span> home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={() => showMenu(false)}>
                                <span className="nav__link-num">02</span> about
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={() => showMenu(false)}>
                                <span className="nav__link-num">03</span> projects
                            </a>
                        </li>

                        <li className="nav__item nav__item--cta">
                            <a href="#contact" className="nav__cta" onClick={() => showMenu(false)}>
                                contact <span className="nav__cta-arrow">↗</span>
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)} aria-label="Close menu"></i>
                </div>

                <div className="nav__actions">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="nav__toggle"
                        onClick={() => showMenu(!Toggle)}
                        aria-label="Toggle menu"
                    >
                        <i className="uil uil-apps"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
