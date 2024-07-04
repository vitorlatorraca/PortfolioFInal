import React from 'react';
import Work1 from "../../assets/image1.png";
import Work2 from "../../assets/image2.jpg";
import Work3 from "../../assets/image3.png";
import Work4 from "../../assets/image4.jpg";
import Work5 from "../../assets/georgian.jpg";
import vitorflix from "../../assets/vitorflix.png"

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'FutGram',
        category: 'App',
        demoUrl: 'https://github.com/vitorlatorraca/futGram',
        bio: 'A social network with a database that enables users to create accounts, make posts, like other posts, and more utilities.'
    },
    {
        id: 2,
        image: Work3,
        title: 'Coffee Delivery',
        category: 'web',
        demoUrl: 'https://github.com/vitorlatorraca/coffeDelivery',
        bio: 'An e-commerce platform for coffee, prioritizing Brazilian customers!'
    },
    {
        id: 3,
        image: vitorflix,
        title: 'Vitor Flix',
        category: 'web',
        demoUrl: 'https://github.com/vitorlatorraca/udemy-react-movieflix',
        bio: 'A project that I made with my react course at udemy!'
    },
    {
        id: 4,
        image: Work5,
        title: 'Time Tracker',
        category: 'College',
        demoUrl: 'https://github.com/vitorlatorraca/TImeTracker',
        bio: 'A final group project for the Programming Fundamentals course. It simulates a time tracker.'
    },
    {
        id: 5,
        image: Work5,
        title: 'Soccer Quiz',
        category: 'College', 
        demoUrl: 'https://globo.com',
        bio: 'A football quiz.'
    },
    {
        id: 6,
        image: Work5,
        title: 'File Manager JAVA',
        category: 'College',
        demoUrl: 'https://github.com/vitorlatorraca/Major_Assingment_CSS',
        bio: 'A Java assignment that opened my eyes to some programming fundamentals.'
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'college',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
];

const Project = ({ project }) => (
    <div>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.category}</p>
        <a href={project.demoUrl}>Demo</a>
        <p>{project.bio}</p>
    </div>
);

const Projects = () => (
    <div>
        {projectsData.map(project => (
            <Project key={project.id} project={project} />
        ))}
    </div>
);

export default Projects;
