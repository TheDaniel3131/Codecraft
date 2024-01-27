import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "LinkedOut & About",
        description: "This is a project.",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/APU-Blockchain-Cryptocurrency-Club/LinkedOutAndAbout"

    },
    {
        id: 2,
        title: "ClubDAO",
        description: "This is a project.",
        image: "/projects/clubdao.png",
        gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
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
