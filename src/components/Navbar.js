import React,{useState} from "react";
import '../components/NavbarStyle.css'
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import audio from "../Image_Container/song/click_button audio.mp3";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
     
    const colorHandler = () =>{
         if(window.scrollY >= 1){
            setColor(true)
         }else{
            setColor(false)
         }
    }

    window.addEventListener("scroll", colorHandler);

    const clickHandler = () => {
        setClick(!click)
    }

    const play = () => {
        new Audio(audio).play()
        console.log("laptop ====>")
    }

    return (
        <div className={color ? "header header-bg" : "header"}>
            <NavLink id="hover_effect" to="/">
               <h1 onClick={play}>PortFolio</h1>
            </NavLink>

            
            <ul className={click ? "nav_menu active" : "nav_menu"} onClick={play}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>

                <li>
                    <NavLink to="/project">Project</NavLink>
                </li>

            </ul>


            <div className="home_icon" onClick={clickHandler}>

                {
                    click ? (<FaTimes size={20} style={{ color: "#fff" }} />) :
                        (<FaBars size={20} style={{ color: "#fff" }} />)
                }

            </div>


        </div>

    );
}

export default Navbar;





