import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";

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
                            Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Zephrous
                            </span>
                        </span>
                        <span className="text-6xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString('<span style="color: #FF77FF">Web Developer</span>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('<span style="color: #9E7BFF">Software Engineer</span>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                                }}
                            ></TypeWritter>
                        </span>
                    </h1>
                </motion.div>
            </div>
        </main>
    );
};

export default HeroSection;
