import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLE = ['btn--primary' , 'btn--outline'] // defalt new
const SIZE = ['btn--medium' , 'btn--large'] // defalt new

const Button = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) 
    ? buttonStyle : STYLE[0]; //if not chosen it will be primary

    const checkButtonSize = STYLE.includes(buttonSize) 
    ? buttonSize : SIZE[0]; //if not chosen will be medium
   return(
       <a className='btn-mobile'>
        <button data-aos="zoom-out-down" className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
         {children}

        </button>
       </a>
   )
};

export default Button;
