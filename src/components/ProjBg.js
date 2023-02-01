import React, { useContext } from "react";
import '../components/ProjBgStyle.css';
import { heading, text } from "../routers/About.js";
import { headingPro, textPro } from "../routers/Project.js";
import { headingContact,  textContact } from "../routers/Contact.js";




const ProjBg = () => {

    const head = useContext(heading);
    const txt = useContext(text);
    
    const headPro = useContext(headingPro);
    const txtPro = useContext(textPro);

    const headContact = useContext(headingContact);
    const txtContact = useContext(textContact);
    return (
        <div className="pro_img">
            <div className="heading">
                <h1>{head}</h1>
                <p>{txt}</p>
                <h1>{headPro}</h1>
                <p>{txtPro}</p>
                <h1>{headContact}</h1>
                <p>{txtContact}</p>
               
            </div>
        </div>
    );
}

export default ProjBg;

