import React from "react";
import styless from "./Nav.module.css";
import logo from '../img/Logo.jpg';
const NavBar = () => {
  return (
      <bdo dir="rtl">
    <div className={styless.nav}>

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

        <button className={styless['nav-button']}>تنزيل الأن</button>

      
    </div>
    </div>
    
        </bdo>
  );
};

export default NavBar;
