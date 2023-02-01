import React from 'react';
import '../components/FooterStyle.css';
import horse from '../Image_Container/horseanimation.gif';

import { FaHome, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaTwitter, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='left_footer'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: '2rem' }} />

                        <div>
                            <p>K-191, Jaitpur</p>
                            <p>New Delhi.</p>

                        </div>
                    </div>




                    <div className='phone'>
                        <h4>
                            <FaPhoneAlt size={20} style={{ color: "white", marginRight: '2rem' }} />
                            123-000-1212
                        </h4>
                    </div>

                    <div className='email'>
                        <h4>
                            <FaEnvelope size={20} style={{ color: "white", marginRight: '2rem' }} />
                            info@gmail.com
                        </h4>
                    </div>

                </div>


                <div className='right_footer'>
                    <h3 style={{ color: "white", marginBottom: "1rem" }}>About the IT company</h3>
                    <p>This is a MicroSoft company.
                        Rahul Singh CEO & Founder of this company.
                        I enjoy disscusion new project
                        and complicated design challenge.
                    </p>

                    <div className='social_media'>
                        <FaFacebookSquare size={30} style={{ color: "white", marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: "white", marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: '1rem' }} />
                        <FaWhatsappSquare size={30} style={{ color: "white", marginRight: '1rem' }} />
                    </div>



                </div>



            </div>

            <figure className="animation">
                <img src={horse} alt="horse" />
            </figure>

        </div>
    );
}

export default Footer