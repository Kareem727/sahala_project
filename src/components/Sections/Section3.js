import stylesss from './Section3.module.css'
import img1 from '../img/Image.png'
import rectangle from '../img/Rectangle 99.png'
import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
     import Aos from 'aos'
    import 'aos/dist/aos.css'
    const Section_3 = () =>{
        useEffect(() =>{
    Aos.init({duration: 1000});
        },[]);
    return(
         <bdo dir='rtl'>
 
        <div className={stylesss.container}>
            
            <div data-aos="flip-up" className={stylesss.background}>
                <img src={rectangle}></img>
                <img src={img1}></img>

            </div>
            <div data-aos="zoom-out" className={stylesss.par}>
                <p>أضف منتجاتك المفضلة الى السلة و قم بالشراء الأن</p>
            <p>باشر في الإطلاع على تفاصيل مختلف المنتجات و قم بشراء و إضافة أفضل المنتجات الى السلة, 
بإضافة الى إضافة مكان التوصيل.</p>
            </div>
            </div>
             </bdo>
    );
}

export default Section_3;