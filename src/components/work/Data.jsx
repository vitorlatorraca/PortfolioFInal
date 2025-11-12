import React from 'react';
import Work1 from "../../assets/kinton-manager.png";
import Work3 from "../../assets/image3.png";
import vitorflix from "../../assets/vitorflix.png";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'Kinton Manager',
        category: 'web',
        demoUrl: 'https://kinton-manager.vercel.app/',
        bio: 'A full-stack loyalty app developed for Kinton Ramen, built with React, Node.js, Prisma, and MongoDB.',
    },
    {
        id: 2,
        image: Work3,
        title: 'Coffee Delivery',
        category: 'web',
        demoUrl: 'https://github.com/vitorlatorraca/coffeDelivery',
        bio: 'An e-commerce platform for coffee, prioritizing Brazilian customers!',
    },
    {
        id: 3,
        image: vitorflix,
        title: 'Vitor Flix',
        category: 'web',
        demoUrl: 'https://github.com/vitorlatorraca/udemy-react-movieflix',
        bio: 'A project that I made during my React course on Udemy!',
    }
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
];

const Project = ({ project }) => (
    <div>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.category}</p>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
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
