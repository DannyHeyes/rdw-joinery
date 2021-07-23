import React from 'react';

import { contactWrapper, contentSection, socialContact } from './contact.module.scss';

import { ScrollToTopOnMount } from '../../../App';

import {  FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';
import ContactForm from '../../common/forms/contactForm';


const Contact = () => {
    return ( 
        <div className={contactWrapper}>
        <ScrollToTopOnMount/>

        <section>
            <h1>
                Get in touch to arrange your quote 
            </h1>
        </section>

        <section className={contentSection}>
            <div>
                <h2>
                    Start your project today
                </h2>
                
                <ContactForm/>
            </div>

            <div className={socialContact}>
            <h2>
                Other ways to contact us
            </h2>
                <p>
                   You can also arrange a quote with us by sending us a message on Facebook, whatsapp, or by dropping us an email.
                </p>
                <ul>
                <li>
                    <IconContext.Provider value={{ size: "24px" }}>
                        <GrMail/> <a href="mailto:info@rdwjoinery.com"> Send us an email</a>
                    </IconContext.Provider>
                </li>
                    <li>
                        <IconContext.Provider value={{ size: "24px" }}>
                            <FaFacebookSquare /> <a href="https://www.facebook.com/rdwjoineryservice" target="_blank" rel="noreferrer"> Find us on Facebook</a>  
                        </IconContext.Provider> 
                    </li>
                    <li>
                        <IconContext.Provider value={{ size: "24px" }}>
                            <FaWhatsappSquare/> <a href="tel:+447789683418"> Message us on Whatsapp</a>
                        </IconContext.Provider> 
                    </li>
                </ul>
                
                    
                
            </div>
        </section>

        </div>
     );
}
 
export default Contact;
