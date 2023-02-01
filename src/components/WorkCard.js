import React from "react";
// import { NavLink } from "react-router-dom";
import '../components/WorkCardStyle.css';
import audio from "../Image_Container/song/click_button audio.mp3";


const WorkCard = (props) => {

    const play = () => {
        new Audio(audio).play()
    }

    return (
        <div className="project_card">
            <img src={props.imgsrc} alt="img1" />
            <h2 className="project_title">{props.title}</h2>
            <div className="pro_details">
                <p>{props.text}</p>
                <div className="pro_btn">
                    {/* <NavLink  className="btn" onClick={play}>View</NavLink> */}
                    <a  href="https://unsplash.com/s/photos/website" className="btn" onClick={play}>View</a>
                </div>
            </div>
            
        </div>
    );
}

export default WorkCard;

