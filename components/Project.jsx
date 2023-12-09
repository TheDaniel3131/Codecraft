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
        gitUrl: "https://github.com/cheongyeechian/portfolio"
    },
    {
        id: 4,
        title: "Megamask",
        description: "This is a project for ETH Online.",
        image: "/projects/megamask.png",
        gitUrl: "https://github.com/megamask"
    }, {
        id: 5,
        title: "zkJom",
        description: "This is a project fro ETHKL.",
        image: "/projects/zkJom.png",
        gitUrl: "https://github.com/trlau/zkJ0M"
    }, {
        id: 6,
        title: "Attest Me",
        description: "This is a project for ETH Global Superhack.",
        image: "/projects/attestme.png",
        gitUrl: "https://github.com/0xBenjamintan/attestMe"
    },

];
const Project = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-bold mb-8 ml-20 text-white">My Projects (In Progress)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-16 gap-y-2 md:gap-8 h-full justify-end project-container max-w-fit mx-auto">
                {projectData.map((project) => {
                    return (
                        <div key={project.id} className="mb-8">
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
