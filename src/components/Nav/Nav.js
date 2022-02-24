import React from "react";
import styless from "./Nav.module.css";
import logo from '../img/logo/2.jpeg';
import { useState } from "react";
const NavBar = () => {
  const [click , setclick] = useState();  // initial value setclick
  const [button , setButton] = useState(true);

  const eventclickHandler =() => setclick(!click); //update from setclick to click
  const closeMenu =() => setclick(false);
 
  const showButton =() => {
      if(window.innerWidth <= 930){
          setButton(false);
      }else{
          setButton(true);
      }
  };
window.addEventListener('resize' , showButton);

  return (
      <bdo dir="rtl">
    <nav className={styless.nav}>

    <div className={styless['nav-container']}>
    <div className={styless.logoo}>
      <img src={logo} alt={'logo'}/>
      </div>
      
     <div className={styless.navCon}>
        <ul className={styless['nav-links']}>
        <li className={styless.lili}>الرئيسية</li>
          <li className={styless.lili}>المزايا</li> 
        </ul>
        </div>
        {/* <div className='menu-icon' onClick={eventclickHandler}>
                    <i className={click ? 'fas fa-times' :'fas fa-bars'} /> 
                </div>
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
        {button && <button className={styless['nav-button']}>تنزيل الأن</button>}

      
    </div>
    </nav>
    
        </bdo>
  );
};

export default NavBar;
