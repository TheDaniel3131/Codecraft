import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Barking Lot - A Pet Adoption Website",
        description: "Barking Lot is a pet adoption website that aims to connect potential pet owners with their perfect companions. The project is written in web programming languages. Our platform provides a user-friendly interface to browse and search for available pets, learn about their characteristics and needs, and easily apply for adoption. Join us in finding loving homes for these adorable animals!",
        image: "/projects/project1.png",
        gitUrl: "https://github.com/TheDaniel3131/BarkingLot"

    },
    {
        id: 2,
        title: "LearningKids - An Online Learning Platform",
        description: "LearningKids is an online learning platform designed to provide interactive and engaging educational content for children. With a wide range of subjects and topics, LearningKids aims to make learning fun and accessible for kids of all ages. Join us in creating a positive and enriching learning experience for young minds!",
        image: "/projects/project2.png",
        gitUrl: "https://github.com/TheDaniel3131/LearningKids"
    },
    {
        id: 3,
        title: "My Personal Portfolio Website",
        description: " This is my personal portfolio website. It is a website that showcases my skills and projects. It is also a website that I use to learn and practice my web development skills.",
        image: "/projects/project3.png",
        gitUrl: "https://github.com/TheDaniel3131/thedaniel3131.github.io"
    },
    {
        id: 4,
        title: "CLI Based Air Flight System - Python",
        description: "This is a CLI based air flight system project written in Python. It is developed for ETH Online and aims to provide a command-line interface for managing flight bookings, checking flight schedules, and other related functionalities.",
        image: "/projects/project4.jpg",
        gitUrl: "https://github.com/TheDaniel3131/AirFlightSystem"
    },
];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-12">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-x-8 gap-y-6 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
