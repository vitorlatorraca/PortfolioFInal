import React, { useState } from 'react';
import KintonImage from '../../assets/kinton-manager.png';
import FutwitterImage from '../../assets/futwitter.png';
import VideoModal from './VideoModal';
import './projects.css';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedProjectVideos, setSelectedProjectVideos] = useState([]);

  const kintonVideos = [
    {
      title: 'Kinton Manager - Demo',
      url: '/videos/kinton-manager-demo.mp4',
      type: 'local',
      description: 'Complete demonstration of the Kinton Manager loyalty system.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Kinton Manager',
      description:
        'Full-stack loyalty application for Kinton Ramen with customer tracking, rewards, and analytics.',
      technologies: ['React', 'Node.js', 'Prisma', 'MongoDB', 'Express', 'TypeScript'],
      githubUrl: 'https://github.com/vitorlatorraca/KintonManager',
      demoUrl: 'https://kinton-manager.vercel.app/',
      image: KintonImage,
      videos: kintonVideos,
      categories: ['full-stack'],
    },
    {
      id: 2,
      title: 'Futwitter',
      description:
        'Modern Twitter-inspired social platform with real-time updates, auth, posts, likes and comments.',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/vitorlatorraca/futwitter',
      demoUrl: 'https://github.com/vitorlatorraca/futwitter',
      image: FutwitterImage,
      categories: ['full-stack'],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section className="projects section" id="portfolio">
      <div className="projects__container container">
        <header className="projects__header">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">
            Solutions developed with passion and dedication
          </span>
        </header>

        <div className="projects__layout">
          <aside className="projects__sidebar" aria-label="Project categories">
            <ul className="projects__filter-list">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`projects__filter-btn ${
                      activeCategory === cat.id ? 'projects__filter-btn--active' : ''
                    }`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="projects__main">
            {filteredProjects.length === 0 ? (
              <div className="projects__empty">
                <i className="uil uil-folder-open projects__empty-icon"></i>
                <p>No projects in this category yet — stay tuned!</p>
              </div>
            ) : (
              <div className="projects__grid">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="project-tile">
                    <div className="project-tile__image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-tile__image"
                      />
                      <div className="project-tile__overlay">
                        <h3 className="project-tile__title">{project.title}</h3>
                        <p className="project-tile__description">
                          {project.description}
                        </p>
                        <div className="project-tile__tech">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="project-tile__tech-item">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="project-tile__actions">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-tile__action"
                            aria-label="View on GitHub"
                          >
                            <i className="uil uil-github-alt"></i>
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-tile__action"
                            aria-label="Live demo"
                          >
                            <i className="uil uil-external-link-alt"></i>
                          </a>
                          {project.videos && project.videos.length > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedProjectVideos(project.videos);
                                setIsVideoModalOpen(true);
                              }}
                              className="project-tile__action"
                              aria-label="Watch videos"
                            >
                              <i className="uil uil-play-circle"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="project-tile__caption">
                      <h3 className="project-tile__caption-title">{project.title}</h3>
                      <span className="project-tile__caption-tag">
                        {project.categories[0].replace('-', ' ')}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="projects__pagination" aria-hidden="true">
              <span className="projects__page-dot"></span>
              <span className="projects__page-dot projects__page-dot--active"></span>
              <span className="projects__page-dot"></span>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        videos={selectedProjectVideos}
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setSelectedProjectVideos([]);
        }}
      />
    </section>
  );
};

export default Projects;
