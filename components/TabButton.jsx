import React from "react";

//1c
const TabButton = ({ active, selectTab, children }) => {
const buttonClass = active 
    ? "text-gray-100 border-b border-purple-500" 
    : "text-gray-400";
    return(
        <button onClick={selectTab}>
            <p className={`mr-5 font-semibold hover:text-gray-100 ${buttonClass}`}>{children}</p>
        </button>
    );
};
export default TabButton;