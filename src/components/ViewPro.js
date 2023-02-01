import React from "react";
import '../components/ViewProStyle.css';
import { NavLink } from "react-router-dom";
import audio from "../Image_Container/song/click_button audio.mp3";


const ViewPro = () => {
    const play = () =>{
        new Audio(audio).play()
    }
    return (
        <div className="main_pro">
            <div className="card_container">

                <div className="card">
                    <h3>Basic</h3>
                    <span className="bar"></span>
                    <p className="para">$100</p>
                    <p>3 Days</p>
                    <p>3 page</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact" onClick={play}>PURCHASE NOW</NavLink>
                </div>

                <div className="card">
                    <h3>Premium</h3>
                    <span className="bar"></span>
                    <p className="para">$200</p>
                    <p>3 Days</p>
                    <p>5 page</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact" onClick={play}>PURCHASE NOW</NavLink>
                </div>

                <div className="card">
                    <h3>Business</h3>
                    <span className="bar"></span>
                    <p className="para">$300</p>
                    <p>5 Days</p>
                    <p>8 page</p>
                    <p>Featured</p>
                    <p>Responsive Design</p>
                    <NavLink to="/contact"  onClick={play}>PURCHASE NOW</NavLink>
                </div>


            </div>
        </div>
    );
}

export default ViewPro;