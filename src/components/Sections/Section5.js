
import Button from '../UI/Button';
import stylesss from './Section5.module.css'
import img from '../img/Group 151.png'
    import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Section_5 = () =>{
    useEffect(() =>{
Aos.init({duration: 2000});
    },[]);
return(

    <div className={stylesss.container}>
        <img src={img}></img>
    
    <div className={stylesss['hero-btns']}>
    <p data-aos="zoom-out">قم بتنزيل التطبيق الآن والفوائد المتنوعة<br/> التي 
ستحصل عليها على الفور</p>

<a href="#about"><Button  className={stylesss.btns}
    buttonStyle='btn--outline'
    buttonSize='btn--large'>عن التطبيق</Button></a>
     
   <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.ix.ibrahim7.diarrhea" target='_blank'><Button  data-aos='zoom-out'
    buttonStyle='btn--primary'
    buttonSize='btn--large'>تنزيل الأن</Button></a>
   </div>

    </div>
);
}

export default Section_5;