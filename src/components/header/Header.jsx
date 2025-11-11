import React, { useState } from "react";
import "./header.css";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    /* TOGGLE MENU*/
    const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Latorraca</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link" onClick={() => showMenu(false)}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={() => showMenu(false)}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)} aria-label="Close menu"></i>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeToggle />
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)} aria-label="Toggle menu">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header