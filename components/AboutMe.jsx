import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Solidity</li>
                <li>Tailwind CSS</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>APU x BOH CTF 2023</li>
            <li>Battle Of Hackers CTF 2023</li>
            <li>Wargames.my CTF 2023</li>
            <li>BackdoorCTF 2023</li>
            <li>niteCTF 2023</li>
            <li>PotluckCTF 2023</li>
            <li>ASIS CTF Finals 2023</li>
            <li>IrisCTF 2024</li>
            <li>MapnaCTF 2024</li>
            <li>UofTCTF 2024</li>
            <li>Real World CTF 2024</li>
            <li>TetCTF 2024</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University of Technology & Innovation</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 mb-8 items-center">
               <div>
                    <Image
                        src="/AboutMe.png"
                        alt="About Me"
                        width={450}
                        height={450}
                        style={{ borderRadius: "25px" }}
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">Hey, I am Daniel, a software engineering student by day and a relentless self-learner by night. Crafting innovative solutions during the day, my nights are dedicated to pushing the boundaries of my development skills. Always up for a challenge, I thrive on continual growth and evolution.</p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;