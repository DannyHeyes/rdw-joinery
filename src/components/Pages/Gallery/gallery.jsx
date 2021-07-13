import React from 'react';

import { ImageCard } from '../../common/cards/cards';
import imageOne from '../../../images/img-1.jpg';
import imageTwo from '../../../images/img-2.jpg';
import imageThree from '../../../images/img-3.jpg';
import imageFour from '../../../images/img-4.jpg';

import { wrapper } from './gallery.module.scss';


const images = [ imageOne, imageTwo, imageThree, imageFour];

const Gallery = () => {
    return ( 
        <section className={wrapper}>
            {images.map((image) => (
                <ImageCard>
                    <img src={image} alt="" />
                </ImageCard>
            ))}
        </section>
     );
}
 
export default Gallery;