import React, { createContext } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import AboutContent from '../components/AboutContent.js';
import ProjBg from "../components/ProjBg.js";


export const heading = createContext();
export const text = createContext();

const About = () => {
    return (
        <div>
            <Navbar />
            <heading.Provider value={"ABOUT"}>
                <text.Provider value={"I am a friendly Full-Stack Developer."}>

                    <ProjBg />

                </text.Provider>
            </heading.Provider>
            <AboutContent />
            <Footer />
        </div>
    );
}

export default About;