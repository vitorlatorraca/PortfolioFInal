import React from 'react';
import KintonImage from '../../assets/image1.png';
import './kintonManager.css';

const KintonManager = () => {
  return (
    <section className="kinton section" id="portfolio">
      <div className="kinton__container container">
        <div className="kinton__header">
          <span className="kinton__badge">Featured Project</span>
          <h2 className="section__title">Kinton Manager</h2>
          <p className="kinton__subtitle">
            A full-stack loyalty application developed for Kinton Ramen, 
            revolutionizing customer engagement through innovative technology.
          </p>
        </div>

        <div className="kinton__content grid">
          <div className="kinton__image-wrapper">
            <div className="kinton__image-container">
              <img 
                src={KintonImage} 
                alt="Kinton Manager Application" 
                className="kinton__image"
              />
              <div className="kinton__image-overlay"></div>
            </div>
          </div>

          <div className="kinton__details">
            <div className="kinton__description">
              <h3 className="kinton__details-title">About the Project</h3>
              <p className="kinton__text">
                Kinton Manager is a comprehensive loyalty program management system 
                built with modern web technologies. This application allows Kinton Ramen 
                to track customer visits, manage rewards, and enhance customer retention 
                through an intuitive and user-friendly interface.
              </p>
              <p className="kinton__text">
                The system features real-time data synchronization, secure authentication, 
                and a responsive design that works seamlessly across all devices.
              </p>
            </div>

            <div className="kinton__tech">
              <h3 className="kinton__details-title">Technologies Used</h3>
              <div className="kinton__tech-list">
                <span className="kinton__tech-item">React</span>
                <span className="kinton__tech-item">Node.js</span>
                <span className="kinton__tech-item">Prisma</span>
                <span className="kinton__tech-item">MongoDB</span>
                <span className="kinton__tech-item">Express</span>
                <span className="kinton__tech-item">TypeScript</span>
              </div>
            </div>

            <div className="kinton__links">
              <a 
                href="https://github.com/vitorlatorraca/KintonManager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button button--flex kinton__button"
              >
                <i className="uil uil-github-alt"></i>
                View on GitHub
              </a>
              <a 
                href="https://github.com/vitorlatorraca/KintonManager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button button--flex kinton__button kinton__button--secondary"
              >
                <i className="uil uil-external-link-alt"></i>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KintonManager;

