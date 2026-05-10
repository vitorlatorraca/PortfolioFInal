import React from 'react';
import CV from "../../assets/Vitor-Latorraca.pdf";
import "./about.css";

const ACTIVE_SKILLS = [
  'react',
  'node.js',
  'mongodb',
  'express',
  'typescript',
  'javascript',
  'html / css',
  'git',
];

const LEARNING_SKILLS = ['docker', 'aws', 'next.js', 'graphql'];

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <header className="about__header">
          <span className="section__number">02 / about</span>
          <h2 className="section__title">about me.</h2>
        </header>

        <div className="about__body">
          <div className="about__text">
            <p className="about__lead">
              I'm <strong>Vitor Latorraca</strong> — a Computer Programming
              graduate based in Toronto. I build modern web applications across
              the JavaScript stack and care about clean, scalable code.
            </p>
            <p className="about__paragraph">
              I work primarily with React on the frontend and Node.js / Express
              on the backend, with a soft spot for TypeScript and well-designed
              APIs. My focus is on turning complex requirements into clear,
              maintainable software that ships and lasts.
            </p>

            <a download="" href={CV} className="button about__cv">
              download cv <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">{'// stack'}</h3>
            <ul className="about__skills-list">
              {ACTIVE_SKILLS.map((skill) => (
                <li key={skill} className="about__skill">
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="about__skills-title about__skills-title--learning">{'// learning'}</h3>
            <ul className="about__skills-list">
              {LEARNING_SKILLS.map((skill) => (
                <li key={skill} className="about__skill about__skill--learning">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
