import React from 'react';
import CV from "../../assets/Vitor-Latorraca.pdf";
import "./about.css";

const ACTIVE_SKILLS = [
  'React',
  'Node.js',
  'MongoDB',
  'Express',
  'TypeScript',
  'JavaScript',
  'HTML / CSS',
  'Git',
];

const LEARNING_SKILLS = ['Docker', 'AWS', 'Next.js', 'GraphQL'];

const SkillCard = ({ name, locked = false }) => (
  <div className={`about__skill-card ${locked ? 'about__skill-card--locked' : ''}`}>
    <span className="about__skill-icon" aria-hidden="true">
      {locked ? (
        <i className="uil uil-lock"></i>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L17 9 L22 12 L17 15 L12 22 L7 15 L2 12 L7 9 Z" fill="currentColor"/>
        </svg>
      )}
    </span>
    <span className="about__skill-name">{locked ? 'Learning…' : name}</span>
  </div>
);

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <header className="about__header">
          <h2 className="section__title">About Me</h2>
          <p className="about__subtitle">
            I'm <strong>Vitor Latorraca</strong>, Full Stack Developer / Web Engineer
          </p>
          <p className="about__description">
            Computer Programming graduate with a passion for building modern web
            applications. I specialize in the JavaScript ecosystem — React on the
            frontend and Node.js / Express on the backend — and I love turning
            complex requirements into clean, scalable, user-friendly products.
            Always learning, always shipping.
          </p>
          <a download="" href={CV} className="button button--flex about__cv">
            Download my CV
            <i className="uil uil-import about__cv-icon"></i>
          </a>
        </header>

        <div className="about__skills">
          <h3 className="about__skills-title">Skills</h3>
          <div className="about__skills-grid">
            {ACTIVE_SKILLS.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
            {LEARNING_SKILLS.map((skill, i) => (
              <SkillCard key={`locked-${i}`} name={skill} locked />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
