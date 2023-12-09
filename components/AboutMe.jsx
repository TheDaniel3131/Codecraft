import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

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
                <li>NextJS</li>
                <li>Tailwind CSS</li>
                <li>R Programming</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>BAT x APU CTF 2023</li>
            <li>Battle of Hackers (BOH) 2023</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-8 lg:px-16 xl:px-32 py-16 items-center">
                <div>
                    <Image
                        src="/AboutMe.png"
                        alt="About Me"
                        width={450}
                        height={450}
                        style={{ borderRadius: "25px" }}
                        className="rounded-lg md:max-w-3/4 lg:max-w-1/2 xl:max-w-1/2"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg text-justify">My name is Daniel Poh Ting Fong and I am a passionate Software Engineering student at APU. Throughout my academic journey, I have been dedicated to mastering various technologies and frameworks, including React, Next.js, HTML, CSS, and Tailwind CSS. With my expertise in frontend development, I specialize in creating visually appealing and user-friendly interfaces that enhance the overall user experience.
                    In addition to my frontend skills, I have also delved into the exciting realm of blockchain development. I have gained proficiency in Solidity, enabling me to build smart contracts for decentralized applications.
                    As an enthusiastic problem solver, I actively participate in tournaments and competitions, primarily as a Front End Developer. However, I am not limited to frontend tasks and often take on additional responsibilities, showcasing my versatility and commitment to delivering comprehensive solutions.</p>
                    <div className="flex flex-row mt-8">
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