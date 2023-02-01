import React from "react";
import Navbar from "../components/Navbar.js";
import HomeContent from "../components/HomeContent.js";
import Footer from "../components/Footer.js";
import ProjectImg from "../components/ProjectImg.js";

const Home = () => {
     return(
        <div>
            <Navbar/>
            <HomeContent/>
            <ProjectImg/>
            <Footer/>
        </div>
     );
}

export default Home;