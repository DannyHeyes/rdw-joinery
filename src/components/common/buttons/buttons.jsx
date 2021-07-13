import React from 'react';

import { ctaBtn, submitBtn } from './buttons.module.scss';

const CtaButton = (props) => {
    return ( 
        <button className={ctaBtn}>
            {props.children}
        </button>
     );
}
 
export default CtaButton;

export const SubmitButton = (props) => {
    return (
        <button type="submit" className={submitBtn}>
            {props.children}
        </button>
    )
}