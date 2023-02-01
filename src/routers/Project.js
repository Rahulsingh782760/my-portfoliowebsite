import React, { createContext } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ProjBg from "../components/ProjBg.js";
import ViewPro from "../components/ViewPro.js";
import Work from "../components/Work.js";


export const headingPro = createContext();
export const textPro = createContext();

const Project = () => {
    return (
        <div>
            <Navbar />
            <headingPro.Provider value={"PROJECTS."}>
                <textPro.Provider value={"Some of my most recent works"}>

                    <ProjBg />

                </textPro.Provider>
            </headingPro.Provider>
            <Work />
            <ViewPro />
            <Footer />
        </div>
    );
}

export default Project;