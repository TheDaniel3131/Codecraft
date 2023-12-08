import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return(
        <div className="min-h-screen mx-auto ">
            <Navbar />
            <main className=" pl-6 pr-6  md:pl-12 md:pr-12 lg:pr-12 lg:pl-12">{children}</main>
        </div>
    );
}

export default Layout;