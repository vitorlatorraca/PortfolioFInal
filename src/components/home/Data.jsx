import React from 'react';
import vitorImg from '../../assets/vitor-suit.png';

const Data = () => {
  return (
    <div className="home__hero">
      <div className="home__data">
        <span className="home__greeting">{'// hello, world'}</span>

        <h1 className="home__title">
          <span className="home__title-line">vitor</span>
          <span className="home__title-line home__title-line--accent">latorraca.</span>
        </h1>

        <p className="home__role">
          full-stack developer / web engineer
        </p>

        <p className="home__description">
          Computer Programming graduate. I build web applications with{' '}
          <span className="home__highlight">React</span>,{' '}
          <span className="home__highlight">Node.js</span>, and{' '}
          <span className="home__highlight">MongoDB</span>. I care about clean
          code, scalable systems, and shipping things that work.
        </p>

        <div className="home__cta-row">
          <a href="#portfolio" className="button">
            see projects <span className="home__cta-arrow">→</span>
          </a>
          <a href="#about" className="home__inline-link">
            learn more about me
          </a>
        </div>
      </div>

      <div className="home__visual">
        <div className="home__avatar-wrapper">
          <img src={vitorImg} alt="Vitor Latorraca" className="home__avatar" />
        </div>
        <div className="home__location">
          <span className="home__location-bullet">●</span>
          <span>toronto / canada</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
