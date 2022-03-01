import React from "react";
import "./Nav.css";
import logo from '../img/logo/logo.jpeg';
import { useState , forwardRef} from "react";
 
const NavBar = forwardRef(({ onBackClick }, ref) => {
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
       <a href="#about"><li onClick={closeMenu} className={'nav-item : lili'}>الرئيسية</li></a> 
      <a   href="#adv"> <li onClick={closeMenu} className={'nav-item : lili'}> المزايا </li> </a>
      <a href="https://play.google.com/store/apps/details?id=com.ix.ibrahim7.diarrhea" target="_blank"> <li onClick={closeMenu} className={'nav-links-sign : lili'}>تنزيل الان</li></a>
         </ul>
        </div>
        <div className='menu-icon' onClick={eventclickHandler}>
                    <i className={click ? 'fa fa-times' :'fa fa-bars'} /> 
                </div>
   

{button && <a href="https://play.google.com/store/apps/details?id=com.ix.ibrahim7.diarrhea" target="_blank"><button className={'nav-button'}>تنزيل الأن</button></a>}

    </div>
    </nav>
    
        </bdo>
  );
});

export default NavBar;
