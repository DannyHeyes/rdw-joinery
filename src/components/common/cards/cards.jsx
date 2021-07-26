import React from 'react';

import { servicesCard, imageCards, reviewCard } from './cards.module.scss';

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

export const ReviewCard = (props) => {
    return (
        <div className={reviewCard}>
            {props.children}
        </div>
    );
}
