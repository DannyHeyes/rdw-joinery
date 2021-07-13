import React from 'react';
import { NavLink } from 'react-router-dom';

import { navHeader, navLinks } from './navbar.module.scss';

import Logo from '../../../images/logo.png'

const Navbar = () => {
    return ( 
        <nav>
            <div className={navHeader}>
                <img src={Logo} alt="RDW Joinery Logo" />
                <a href="tel:+447789683418">
                    whatsapp: +447789683418
                </a>
            </div>

            <div className={navLinks}>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;