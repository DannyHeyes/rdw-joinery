import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import { footerWrapper } from './footer.module.scss';




const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return ( 

        <footer>
        <div className={footerWrapper}>
           <div>
               <h5>
                   Explore
               </h5>
               <ul>
                   <li>
                       <Link to="/">
                           Home
                       </Link>
                   </li>
                   <li>
                       <Link to="/gallery">
                           Gallery
                       </Link>
                   </li>
                   <li>
                       <Link to="/contact">
                           Contact
                       </Link>
                   </li>
               </ul>
           </div>

           <div>
               <p>
                   Copyright RDW Joinery 2021. All Rights Reserved
               </p>
               <p>
                   A website by <a href="https://dannyheyes.com" target="_blank" rel="noreferrer">Danny Heyes</a>
               </p>
           </div> 

           <div>
                <IconContext.Provider value={{ size: '24px', style: { margin: "3px"} }} >
                    <a href="mailto:info@rdwjoinery.com">
                        <GrMail/>
                    </a>
                    
                    <a href="https://www.facebook.com/rdwjoineryservice" target="_blank" rel="noreferrer">
                        <FaFacebookSquare/>
                    </a> 

                    <a href="tel:+447789683418">
                        <FaWhatsappSquare/>
                    </a>
                </IconContext.Provider>
           </div>
           </div>
        </footer>
     );
}
 
export default Footer;