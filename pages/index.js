import dynamic from "next/dynamic";
import React from "react";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import SocialMedias from "../components/SocialMedias";

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return(
    <div className="flex min-h-screen flex-col">
      <main>
      <NavBar/>
      <HeroSection/>
      <Achievements/>
      <AboutMe/>
      <Project/>
      <SocialMedias/>
      <Contact/>
      </main>
      <Footer/>

    </div>
  );
}