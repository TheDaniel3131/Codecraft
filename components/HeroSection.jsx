import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Zephrous
                            </span>
                        </span>
                        <span className="text-5xl">
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
                                    .start();
                                }}
                            ></TypeWritter>
                        </span>
                        <p className="text-sky-100 mt-4 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me!</p>
                        <Link 
                            href="https://drive.google.com/file/d/1KLTQOu91ZDNuBv3he3hEzrNRc2L96Ro3/view?usp=sharing" target="_blank" 
                            rel="noopener noreferrer"
                            className="px-10 inline-block py-4 rounded-full border-4 border-pink-500 hover:bg-pink-500">
                                View Resume
                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[400px] h-[400px] relative z-0">
                        <img
                            src="/Hero-Section.png"
                            alt="Hero Section"
                            className="transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        >
                        </img>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
