import React from "react";
import "./Nav.css";
import logo from '../img/logo/logo.jpeg';
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click , setclick] = useState();  // initial value setclick
  const [button , setButton] = useState(true);

  const eventclickHandler =() => setclick(!click); //update from setclick to click
  const closeMenu =() => setclick(false);
 
  const showButton =() => {
      if(window.innerWidth <= 960){
          setButton(false);
      }else{
          setButton(true);
      }
  };
window.addEventListener('resize' , showButton);

  return (
      <bdo dir="rtl">
    <nav className={'nav'}>
<div className={'nav-container'}>


    <div className={'logoo'}>
      <img src={logo} alt={'logo'}/>
      </div>
      
     <div className={'navCon'}>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <Link to='/'><li onClick={closeMenu} className={'nav-item : lili'}>الرئيسية</li></Link> 
       <Link to='/about'> <li onClick={closeMenu} className={'nav-item : lili'}>المزايا</li></Link>
        <Link to='/do'>  <li onClick={closeMenu} className={'nav-links-sign : lili'}>تنزيل الان</li> </Link>

        </ul>
        </div>
        <div className='menu-icon' onClick={eventclickHandler}>
                    <i className={click ? 'fa fa-times' :'fa fa-bars'} /> 
                </div>
        {/* 
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMenu}>Service</Link>
                    </li>
                    <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMenu}>Product</Link>
                    </li>
                    <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-sign' onClick={closeMenu}>Signup</Link>
                    </li>
                </ul> */}

{button && <button className={'nav-button'}>تنزيل الأن</button>}

    </div>
    </nav>
    
        </bdo>
  );
};

export default NavBar;
