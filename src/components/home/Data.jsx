import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
        <div className="home__badge">
            Full Stack Developer | Available for Opportunities
        </div>
        
        <h1 className="home__title">
            <span className="home__title-main">Vitor</span>
            <span className="home__title-gradient"> Latorraca</span>
        </h1>
        
        <p className="home__description">
            Passionate Full Stack Developer with a Computer Programming diploma. 
            Specialized in <span className="home__highlight">React</span>, <span className="home__highlight">Node.js</span>, and <span className="home__highlight">MongoDB</span>, 
            I craft clean, efficient, and scalable solutions that bring ideas to life. 
            Always eager to learn and tackle new challenges!
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
  );
};

export default Data