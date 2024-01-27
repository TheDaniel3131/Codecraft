import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Barking Lot - Pet Adoption Website",
        description: "Barking Lot is a pet adoption website that aims to connect potential pet owners with their perfect companions. The project is written in web programming languages. Our platform provides a user-friendly interface to browse and search for available pets, learn about their characteristics and needs, and easily apply for adoption. Join us in finding loving homes for these adorable animals!",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/TheDaniel3131/BarkingLot"

    },
    {
        id: 2,
        title: "LearningKids - An Online Learning Platform",
        description: "My Personal Portfolio Website",
        image: "/projects/clubdao.png",
        gitUrl: "https://github.com/TheDaniel3131/LearningKids"
    },
    {
        id: 3,
        title: "FundChat",
        description: "This is a project for APUBCC Sparkathon & Solana Hyperdrive.",
        image: "/projects/FundChat.png",
        gitUrl: "https://github.com/cheongyeechian/fundchat"
    },
    {
        id: 4,
        title: "Megamask",
        description: "This is a project for ETH Online.",
        image: "/projects/megamask.png",
        gitUrl: "https://github.com/megamask"
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
