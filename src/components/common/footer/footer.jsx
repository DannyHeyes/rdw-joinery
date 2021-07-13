import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';

import './footer.module.scss';
import { IconContext } from 'react-icons';
import { MdEmail } from 'react-icons/md';

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
                <IconContext.Provider value={{ size: '18px', style: { margin: "3px"} }} >
                    <MdEmail/>
                    <FaFacebookSquare/>
                    <FaWhatsappSquare/>
                </IconContext.Provider>
           </div>
        </footer>
     );
}
 
export default Footer;