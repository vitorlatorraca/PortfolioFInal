import React, { useState } from 'react';
import KintonImage from '../../assets/kinton-manager.png';
import FutwitterImage from '../../assets/futwitter.png';
import VideoModal from './VideoModal';
import './projects.css';

const CATEGORIES = [
  { id: 'all', label: 'all' },
  { id: 'full-stack', label: 'full-stack' },
  { id: 'frontend', label: 'frontend' },
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
      year: '2024',
      title: 'Kinton Manager',
      description:
        'Full-stack loyalty application for Kinton Ramen with customer tracking, rewards and analytics.',
      technologies: ['React', 'Node.js', 'Prisma', 'MongoDB', 'Express', 'TypeScript'],
      githubUrl: 'https://github.com/vitorlatorraca/KintonManager',
      demoUrl: 'https://kinton-manager.vercel.app/',
      image: KintonImage,
      videos: kintonVideos,
      categories: ['full-stack'],
    },
    {
      id: 2,
      year: '2024',
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
          <span className="section__number">03 / projects</span>
          <h2 className="section__title">selected work.</h2>
        </header>

        <div className="projects__filter" role="tablist" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`projects__filter-btn ${
                activeCategory === cat.id ? 'projects__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="projects__empty">
            <span>{'// no projects in this category yet — stay tuned.'}</span>
          </div>
        ) : (
          <ol className="projects__list">
            {filteredProjects.map((project, idx) => (
              <li key={project.id} className="project-row">
                <div className="project-row__index">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="project-row__main">
                  <div className="project-row__head">
                    <h3 className="project-row__title">{project.title}</h3>
                    <span className="project-row__year">{project.year}</span>
                  </div>
                  <p className="project-row__desc">{project.description}</p>
                  <ul className="project-row__tech">
                    {project.technologies.map((t) => (
                      <li key={t} className="project-row__tech-item">{t}</li>
                    ))}
                  </ul>
                  <div className="project-row__links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row__link"
                    >
                      <i className="uil uil-github-alt"></i> github ↗
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-row__link"
                    >
                      <i className="uil uil-external-link-alt"></i> live demo ↗
                    </a>
                    {project.videos && project.videos.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProjectVideos(project.videos);
                          setIsVideoModalOpen(true);
                        }}
                        className="project-row__link project-row__link--btn"
                      >
                        <i className="uil uil-play-circle"></i> watch videos
                      </button>
                    )}
                  </div>
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-row__preview"
                  aria-label={`Preview ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-row__image"
                  />
                </a>
              </li>
            ))}
          </ol>
        )}
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
