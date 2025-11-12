import React from 'react';
import KintonImage from '../../assets/image1.png';
import FutwitterImage from '../../assets/image3.png';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Kinton Manager',
      badge: 'Featured Project',
      description: 'A full-stack loyalty application developed for Kinton Ramen, revolutionizing customer engagement through innovative technology.',
      about: 'Kinton Manager is a comprehensive loyalty program management system built with modern web technologies. This application allows Kinton Ramen to track customer visits, manage rewards, and enhance customer retention through an intuitive and user-friendly interface.',
      technologies: ['React', 'Node.js', 'Prisma', 'MongoDB', 'Express', 'TypeScript'],
      githubUrl: 'https://github.com/vitorlatorraca/KintonManager',
      demoUrl: 'https://github.com/vitorlatorraca/KintonManager',
      image: KintonImage,
      featured: true
    },
    {
      id: 2,
      title: 'Futwitter',
      badge: 'Featured Project',
      description: 'A modern social media platform inspired by Twitter, built with cutting-edge technologies for real-time interactions and seamless user experience.',
      about: 'Futwitter is a full-stack social media application that replicates and enhances the Twitter experience. The platform features real-time updates, user authentication, post creation, likes, comments, and a modern, responsive interface designed for optimal user engagement.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/vitorlatorraca/futwitter',
      demoUrl: 'https://github.com/vitorlatorraca/futwitter',
      image: FutwitterImage,
      featured: true
    }
  ];

  return (
    <section className="projects section" id="portfolio">
      <div className="projects__container container">
        <div className="projects__header">
          <h2 className="section__title">My Projects</h2>
          <span className="section__subtitle">
            Solutions developed with passion and dedication
          </span>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
              <div className="project-card__header">
                <span className="project-card__badge">{project.badge}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.description}</p>
              </div>

              <div className="project-card__content">
                {project.image && (
                  <div className="project-card__image-wrapper">
                    <div className="project-card__image-container">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-card__image"
                      />
                      <div className="project-card__image-overlay"></div>
                    </div>
                  </div>
                )}

                <div className="project-card__details">
                  <div className="project-card__description">
                    <h4 className="project-card__details-title">About the Project</h4>
                    <p className="project-card__text">{project.about}</p>
                  </div>

                  <div className="project-card__tech">
                    <h4 className="project-card__details-title">Technologies Used</h4>
                    <div className="project-card__tech-list">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="project-card__tech-item">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card__links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button button--flex project-card__button"
                    >
                      <i className="uil uil-github-alt"></i>
                      View on GitHub
                    </a>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button button--flex project-card__button project-card__button--secondary"
                    >
                      <i className="uil uil-external-link-alt"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

