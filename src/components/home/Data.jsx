import React from 'react';
import vitorImg from '../../assets/vitor-suit.png';

const Data = () => {
  return (
    <div className="home__hero">
      <div className="home__data">
        <span className="home__greeting">Hi, my name is</span>

        <h1 className="home__title">
          <span className="home__title-main">Vitor</span>
          <span className="home__title-gradient">Latorraca</span>
        </h1>

        <span className="home__role-pill">
          Full Stack Developer / Web Engineer
        </span>

        <p className="home__description">
          Computer Programming graduate building scalable web applications with
          <span className="home__highlight">React</span>,
          <span className="home__highlight">Node.js</span>, and
          <span className="home__highlight">MongoDB</span>.
          Passionate about clean code, solving complex problems, and shipping
          digital experiences that make a difference.
        </p>

        <a href="#about" className="home__learn-more">
          Learn More <span className="home__learn-more-link">About Me</span>
        </a>
      </div>

      <div className="home__visual">
        <div className="home__avatar-wrapper">
          <img src={vitorImg} alt="Vitor Latorraca" className="home__avatar" />
        </div>
        <div className="home__location">
          <i className="uil uil-map-marker home__location-icon"></i>
          <span className="home__location-text">Toronto, Canada</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
