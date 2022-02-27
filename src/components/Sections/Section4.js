import stylesss from './Section4.module.css'
import img1 from '../img/Image2.png'
import rectangle from '../img/Rectangle 9.png'
    import React, {useEffect} from 'react'
    import Aos from 'aos'
    import 'aos/dist/aos.css'
    const Section_4 = () =>{
        useEffect(() =>{
    Aos.init({duration: 1000});
        },[]);
    return(
        <bdo dir='rtl'>
            
        <div className={stylesss.container}>
        <div data-aos="flip-down" className={stylesss.background}>
                <img src={rectangle}></img>
                <img src={img1}></img>

            </div>

            <div  data-aos="zoom-out" className={stylesss.par}>
                <p>احصل على إشعار التطبيق ذي الأولوية القصوى</p>
            <p>أفضل ميزة تجعلك أفضل ، مع أحدث التقنيات لتلبية احتياجاتك. بالطبع ، مع ميزات مثل الإشعارات على التفاوضات, حصولك على إشعارات المحادثات, عند وصول طلب.</p>
            </div>
            

            </div>
            </bdo>
    );
}

export default Section_4;