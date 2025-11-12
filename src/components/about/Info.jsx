import React, { useState, useEffect, useRef } from 'react'

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedProjects, setCountedProjects] = useState(0);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && countedProjects < 20) {
      const timer = setTimeout(() => {
        setCountedProjects((prev) => {
          if (prev < 20) {
            return prev + 1;
          }
          return 20;
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, countedProjects]);

  return (
    <div className="about__info grid" ref={infoRef}>
        <div className="about__box" data-interactive="true">
            <div className="about__icon-wrapper">
                <i className="bx bx-award about__icon"></i>
            </div>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">No experience at the moment</span>
            <div className="about__hover-effect"></div>
        </div>

        <div className="about__box" data-interactive="true">
            <div className="about__icon-wrapper">
                <i className="bx bx-briefcase-alt about__icon"></i>
            </div>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">{isVisible ? `${countedProjects}+` : '0+'} projects</span>
            <div className="about__hover-effect"></div>
        </div>

        <div className="about__box" data-interactive="true">
            <div className="about__icon-wrapper">
                <i className="bx bx-support about__icon"></i>
            </div>

            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
            <div className="about__hover-effect"></div>
        </div>
    </div>
  )
}

export default Info