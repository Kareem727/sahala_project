import stylesss from './Section2.module.css'
import Rectangel from '../img/Group 147.png'
import Rectange2 from '../img/Group 148.png'
import Rectange3 from '../img/Group 149.png'
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Section_2 = () =>{
    useEffect(() =>{
Aos.init({duration: 1000});
    },[]);
    return(
<bdo dir='rtl'>
        <div className={stylesss.container}  id="adv">

        <div className={stylesss.sss}>
        <img data-aos='fade-down' src={Rectange3}></img>
        <p data-aos='fade-left'>جدولة مواعيد الطلبات</p>
         
        <p data-aos='fade-right'>بالطبع بإمكانك إختيار موعد الطلب الذي تريده و تحديد الموقع</p>
        </div>
        <div className={stylesss.sss}>

        <img data-aos='fade-down' src={Rectangel}></img>

        <p data-aos='fade-left'>تحكم في السلة</p>
        <p data-aos='fade-right'>تصفح جميع المنتجات و قم بإضافتها للسلة</p>
        </div>
        <div className={stylesss.sss}>
        <img data-aos='fade-down' src={Rectange2}></img>
        <p data-aos='fade-left'>رؤية الإشعارات اليومية</p>
        <p data-aos='fade-right'>رؤية الإشعارات اليومية ومنها المحادثات, التحديثات بخصوص الطلب</p>
        </div>

        </div>
        </bdo>

    );
}

export default Section_2;