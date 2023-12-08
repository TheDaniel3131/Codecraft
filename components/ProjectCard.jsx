import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
//write project card first then only go Projects write the data inside []
// put parameters inside the function
const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
    return(
        <div>
            {/* <Image src={imgUrl} height={208} width={1000} className="md:h-72 hover:opacity-30 object-contain bg-no-repeat bg-center rounded-t-xl"/> */}
            <div
            className="h-52 rounded-t-xl relative group center center bg-no-repeat"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>

                <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            
            <div className="text-white">
                <h5 className="font-semibold text-xl mb-2">{title}</h5>
                <p className="text-">{description}</p>
            </div>

        </div>
    );    
};

export default ProjectCard;

