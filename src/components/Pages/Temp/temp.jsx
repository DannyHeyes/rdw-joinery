import React from 'react';

import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import Logo from '../../../images/logo.png'

import { tempWrapper } from './temp.module.scss';

function TemporaryLanding() {
    return (
        <div className={tempWrapper}>
            <img src={Logo} alt="RDW Logo" />
            <h1>
                Welcome to RDW Joinery
            </h1>
            <h2>
                Our main site is under construction right now but we are still taking new projects! 
            </h2>
            <p>
                Get in touch with us to arrange a quote here:
            </p>
            <ul>

                <li>
                    <IconContext.Provider value={{ size: "1.5em", style: { marginRight: "5px"} }}>
                        <FaFacebookSquare />
                    </IconContext.Provider>

                    <a href="https://www.facebook.com/rdwjoineryservice/" target="_blank" rel="noreferrer"> 
                        Find us on Facebook.
                    </a>
                </li>
                <li>
                    <IconContext.Provider value={{ size: "1.5em", style: { marginRight: "5px"} }}>
                        <FaWhatsappSquare/>
                    </IconContext.Provider>

                    <a href="tel:+447789683418">
                        Message us on Whatsapp. 
                    </a>
                </li>
                <li>
                    <IconContext.Provider value={{ size: "1.5em", style: { marginRight: "5px"} }}>
                        <GrMail/>
                    </IconContext.Provider>
                    
                    <a href="mailto:info@rdwjoinery.com">
                         Send us an email.
                    </a>
                </li>
   
            </ul>
        </div>
    );
}

export default TemporaryLanding;