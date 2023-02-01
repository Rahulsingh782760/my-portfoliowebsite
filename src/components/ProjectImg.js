import React from "react";
import './ProjectImgStyle.css';
import ManIntro from "../Image_Container/intro.png";
import html from "../Image_Container/html-logo.png";
import css from "../Image_Container/css-logo.png";
import js from "../Image_Container/js-logo.jpeg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import react from "../Image_Container/react-logo.jpg";

<style>
    @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Shrikhand&display=swap');
</style>

const slideImages = [html, css, js];

const ProjectImg = () => {

    return (
        <div className="box_container">
            <div className="img-container">
                <img src={ManIntro} alt={ManIntro} />
            </div>

            <div className="intro">
                <div className="intro_box">
                    <h2>Introduction shoping</h2>
                    <p className="line_para">I am a web developer. I learn a html5, css3,
                        Javascript. It skills for Font End Developer.
                        And Back End Developer skills different language.
                        Nodejs, php, jquary etc.
                    </p>
                    <div className="moving_img">
                        <div className="status">
                            <Slide style={{ loop: true }}>
                                {slideImages.map((slideImage, index) => (
                                    <div key={index}>
                                        <div>
                                            <img src={slideImage} alt="img_1" />
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                        <div className="text_container">
                            <div className="text">
                                <span id="head_line">Who Programming Language.</span>

                                <div class="wrapper">
                                    <ul class="dynamic-txts">
                                        <li><span>html5</span></li>
                                        <li><span>css3</span></li>
                                        <li><span>javascript3</span></li>
                                    </ul>
                                </div>

                                <article>Thriving Facebook community and top-ranked podcast,
                                    Amy inspires a grounded, really can do this for over 100,
                                    tangible and self-affirming sense of WoW! entrepreneurs
                                    Best- selling marketing courses  000 online. 
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectImg;