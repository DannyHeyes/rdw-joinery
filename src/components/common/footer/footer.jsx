import React from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { GrMail } from 'react-icons/gr';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import './footer.module.scss';

const Footer = () => {
    return ( 

        <footer>
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
                   CopyrightRDW Joinery 2021. All Rights Reserved
               </p>
               <p>
                   A website by <a href="https://dannyheyes.com">Danny Heyes</a>
               </p>
           </div> 

           <div>
                <IconContext.Provider value={{ size: '24px', style: { margin: "3px"} }} >
                    <GrMail/>
                    <a href="https://www.facebook.com/rdwjoineryservice">
                    <FaFacebookSquare/>
                    </a> 
                    <FaWhatsappSquare/>
                </IconContext.Provider>
           </div>
        </footer>
     );
}
 
export default Footer;