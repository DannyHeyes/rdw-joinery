import React from 'react';

import { ImageCard } from '../../common/cards/cards';


import { wrapper } from './gallery.module.scss';
import { ScrollToTopOnMount } from './../../../App';


const images = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    },
    {
        id: 9
    }
];

const Gallery = () => {
    return ( 
        <section className={wrapper}>
        <ScrollToTopOnMount/>
            {images.map((image) => (
                <ImageCard key={image.id}>
                    <img src={require(`../../../images/gallery/img-${image.id}.jpg`).default} alt="" />
                </ImageCard>
            ))}
        </section>
     );
}
 
export default Gallery;