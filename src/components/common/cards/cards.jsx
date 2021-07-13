import React from 'react';

import { servicesCard, imageCards } from './cards.module.scss';

const ServicesCard = (props) => {
    return ( 
        <div className={servicesCard}>
            {props.children}
        </div>
     );
}
 
export default ServicesCard;

export const ImageCard = (props) => {
    return ( 
        <div className={imageCards}>
            {props.children}
        </div>

     );
}
