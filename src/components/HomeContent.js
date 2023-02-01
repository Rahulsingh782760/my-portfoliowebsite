
import bg_img from "../Image_Container/intro-bg.jpg";
import '../components/HomeContent.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { NavLink } from "react-router-dom";
import audio from "../Image_Container/song/click_button audio.mp3";


const HomeContent = () => {

    const [text] = useTypewriter({
        words: ['Javascript', 'Reactjs', 'Nodejs', 'MERN'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 150,
        delaySpeed: 1500
    });


    const play = () => {
        new Audio(audio).play()
        console.log("laptop ====>")
    }


    return (
        <div className="bg_content">
            <div className="intro_img">
                <img className="image" src={bg_img} alt="bg_img" />
            </div>

            <div style={{ color: "white" }} className="content">
                <p className="hom-title">HI, I'M A FREELANCER</p>
                <span>
                    <h1>React<br />
                        <span style={{ color: "#CE2029", textShadow: "1px -1px 3px white"}}>{text}</span><Cursor cursorColor='white' /> Developer.
                    </h1>

                </span>

                <div className="link_tag">



                    <NavLink to="/project" className="btn_pro" onClick={play}>Project</NavLink>
                    <NavLink to="/contact" className="btn_contact" onClick={play}>Contact</NavLink>


                </div>

            </div>



        </div>

    );
}

export default HomeContent;







