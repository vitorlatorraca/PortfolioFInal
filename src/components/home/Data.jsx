import React from 'react';
import vitorImg from '../../assets/vitor-suit.png';

const StarDoodle = ({ size = 22, color = "#FF6B6B", className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z" fill={color}/>
  </svg>
);

const ArrowDoodle = ({ size = 28, color = "#764ba2", className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 18 C 8 8, 16 6, 26 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M22 10 L26 14 L22 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const DotsDoodle = ({ color = "#FF8A65", className = "" }) => (
  <svg className={className} width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="6" cy="7" r="3" fill={color}/>
    <circle cx="20" cy="7" r="3" fill={color} opacity="0.7"/>
    <circle cx="34" cy="7" r="3" fill={color} opacity="0.4"/>
  </svg>
);

const Data = () => {
  return (
    <div className="home__hero">
      <div className="home__avatar-wrapper">
        <img src={vitorImg} alt="Vitor Latorraca" className="home__avatar" />
      </div>

      <div className="home__data">
        <div className="home__badge">
            Full Stack Developer · Available for Opportunities
        </div>

        <h1 className="home__title">
            <span className="home__title-doodle home__title-doodle--left">
              <StarDoodle size={26} color="#FF6B6B" />
            </span>
            <span className="home__title-main">Vitor</span>
            <span className="home__title-gradient">
              Latorraca
              <span className="home__title-doodle home__title-doodle--right">
                <ArrowDoodle size={36} color="#764ba2" />
              </span>
            </span>
        </h1>

        <div className="home__title-dots">
          <DotsDoodle color="#FF8A65" />
        </div>

        <p className="home__description">
            Full Stack Developer turning coffee into code ☕ → 💻.
            Building scalable web applications with <span className="home__highlight">React</span>, <span className="home__highlight">Node.js</span>, and <span className="home__highlight">MongoDB</span>.
            Passionate about clean code, solving complex problems, and creating digital experiences that make a difference.
            Always learning, always coding, always shipping! 🚀
        </p>

        <div className="home__cta-buttons">
            <a href="#portfolio" className="button button--flex button--primary">
                <i className="uil uil-scenery"></i>
                View Projects
            </a>
            <a href="#contact" className="button button--flex button--secondary">
                <i className="uil uil-message"></i>
                Get in Touch
            </a>
            <a
                href="https://github.com/vitorlatorraca"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--flex button--tertiary"
            >
                <i className="uil uil-github-alt"></i>
                GitHub
            </a>
        </div>
      </div>
    </div>
  );
};

export default Data;
