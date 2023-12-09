import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroSection = () => {
    return (
        <main className="py-22 mt-22 md:flex md:shrink-0" id="main"> 
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 max-w-[1920px] transform scale-150"
                style={{
                    filter: "brightness(10%)",
                    backgroundSize: "cover",
                    backgroundAttachment: "center",
                    position: "absolute"
                }}
            >
                <source src="/Hero-BG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-12 md:col-span-8 place-self-center">
                    <h1 className="font-extrabold mb-8">
                        <span className="text-white text-8xl">
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Zephrous
                            </span>
                        </span>
                        <span className="text-5xl mt-6 block">I&apos;m a
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span style="color: #4F46E5">Web Developer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #9E7BFF">Software Engineer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #FFB800">Graphic Designer</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #00C853">Chess Player</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #FF4081">CTF Player</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #243c5a">Student</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString('<span style="color: #00BFA5">AI Enthusiast</span>')
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-10 text-base sm:text-lg md:text-xl mb-2 font-semibold">
                            Also known as &quot;Zeph&quot;, you can call me Daniel.
                        </p>
                        <p className="text-sky-100 text-base sm:text-lg md:text-xl mb-6 font-semibold">
                            Scroll down below to find out more about me.
                        </p>
                        <Link
                            href="https://drive.google.com/file/d/1KLTQOu91ZDNuBv3he3hEzrNRc2L96Ro3/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-10 inline-block py-4 rounded-full border-4 border-blue-500 hover:bg-blue-500 text-lg font-bold text-2xl" // Updated font size to text-xl
                        >
                            View Resume
                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-12 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[600px] h-[600px] relative z-0">
                        <Image
                            src="/Hero-Section.png"
                            alt="hero section"
                            className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});

