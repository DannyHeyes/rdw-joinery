import React from 'react';

import { contactWrapper, form, formGroup, socialContact } from './contact.module.scss';
import { SubmitButton } from './../../common/buttons/buttons';

import {  FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';


const Contact = () => {
    return ( 
        <div className={contactWrapper}>

        <section>
            <h1>
                Get in touch to arrange your quote 
            </h1>
        </section>

        <section>
            <h2>
                Start your project today
            </h2>
            <form action="#" className={form}>
            <p>
                Please provide as much information in the message box as possible so we have a better idea of how we can help you moving forward. 
            </p>
                <div className={formGroup}>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input name="name" type="text" />
                </div>
                <div className={formGroup}>
                    <label htmlFor="email">
                        Email address
                    </label>
                    <input name="email" type="email" />
                </div>
                <div className={formGroup}>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea name="message" cols="30" rows="10"></textarea>
                </div>
                <SubmitButton>
                    Submit
                </SubmitButton>
            </form>

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
                        <GrMail/> <a href="mailto:rdwjoinery@gmail.com"> Send us an email</a>
                    </IconContext.Provider>
                </li>
                    <li>
                        <IconContext.Provider value={{ size: "24px" }}>
                            <FaFacebookSquare /> <a href="https://www.facebook.com/rdwjoineryservice"> Find us on Facebook</a>  
                        </IconContext.Provider> 
                    </li>
                    <li>
                        <IconContext.Provider value={{ size: "24px" }}>
                            <FaWhatsappSquare/> <a href="/"> Message us on Whatsapp</a>
                        </IconContext.Provider> 
                    </li>
                </ul>
                
                    
                
            </div>
        </section>

        </div>
     );
}
 
export default Contact;
