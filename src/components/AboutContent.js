import React from "react";
import { NavLink } from "react-router-dom";
import '../components/AboutContentStyle.css';
import react1 from '../Image_Container/react1.jpg';
import react2 from '../Image_Container/react2.webp';
import audio from '../Image_Container/song/click_button audio.mp3';



const AboutContent = () => {

    const play = () => {
        new Audio(audio).play()
    }

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    I am react Font-End
                    developer. I create Responsive
                    secure Website for my clients.
                </p>
                <NavLink to="/contact">
                    <button className="button" onClick={play}>Contact</button>
                </NavLink>

            </div>

            <div className="right">
                <div className="img_container">
                    <div className="img_stack  top">
                        <img src={react1} alt="ture" className="img" />
                    </div>

                    <div className="img_stack bottom">
                        <img src={react2} alt="ture" className="img" />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default AboutContent;