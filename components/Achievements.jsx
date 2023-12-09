import React from "react";

const achievementsList = [
    {
        metric: "Projects",
        value: "10+",
    },
    {
        metric: "Years of Experience",
        value: "4",
    },
    {
        metric: "Certifications",
        value: "5",
    },
];

const Achievements = () => {
    return (
        <div className="xl:gap-4 sm:py-4 xl:px-16 mb-20 mt-52" id="achievements">
            <h1 className="text-center text-5xl font-bold mb-16" style={{ letterSpacing: "0.05em" }}>
                Achievements
            </h1>
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between text-center" style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-6 text-center items-center justify-between" // Add text-center class here
                        >
                            <h2 className="text-white text-4xl font-bold" style={{ letterSpacing: "0.1em" }}>
                                {achievement.value}
                            </h2>
                            <p className="text-[#ADB7BE] text-base" style={{ letterSpacing: "0.1em" }}>
                                {achievement.metric}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Achievements;