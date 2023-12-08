import React from "react";
import TypeWritter from "typewriter-effect";

const HeroSection = () => {
    return (
        <main className="py-16 mt-16 md:flex md:shirink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span1 md:col-span-8 place-self-center justify-self-start">
                    <h1 className="fold-extrabold">
                        <span className="text-white text-8xl">
                            {/* Add your content here */}
                        </span>
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
