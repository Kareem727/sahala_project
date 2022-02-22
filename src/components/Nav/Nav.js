import React from "react";
import styless from "./Nav.module.css";
import logo from '../img/Logo.jpg';
const NavBar = () => {
  return (
      <>
    <div className={styless.nav}>

    <div className={styless['nav-container']}>

    <button className={styless['nav-button']}>تنزيل الأن</button>
      
     <div className={styless.navCon}>
        <ul className={styless['nav-links']}>
        <li className={styless.lili}>من نحن</li>

          <li className={styless.lili}>المزايا</li>

          <li className={styless.lili}>الرئيسية</li>

          
        </ul>
        </div>
      <div className={styless.logoo}>
      <img src={logo} alt={'logo'}/>
      </div>
    </div>
    </div>
    
        </>
  );
};

export default NavBar;
