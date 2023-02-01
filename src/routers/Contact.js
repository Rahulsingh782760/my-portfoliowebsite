import React, { createContext } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ProjBg from "../components/ProjBg.js";
import Form from "../components/Form.js";

export const headingContact = createContext();
export const textContact = createContext();

const Contact = () => {
    return (
        <div>
            <Navbar />
            <headingContact.Provider value={"CONTACT."}>
                <textContact.Provider value={"Let's have a chat"}>

                    <ProjBg />

                </textContact.Provider>
            </headingContact.Provider>
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;