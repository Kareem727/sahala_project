import stylesss from './Section1.module.css'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/Phone.png'
import img5 from '../img/mobile_background.png'
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
   

const Section_1 = () =>{
    useEffect(() =>{
        Aos.init({duration: 400
        });
            },[]);
    return(
        
        <bdo dir='rtl'>
            <div className={stylesss.container2}>

            <div className={stylesss['paragraph-side1']}>
       

       <div className={stylesss.par}>
       <p>
            تمتع بشراء أفضل المنتجات 
             من خلال تطبيقنا
        </p>

       <p>
       سهاله " السوق..يجيك" هي فلسفة جديدة في عالم التسوق الإلكتروني. التطبيق يحتوى مجموعة من الخدمات الفريدة التي يقدمها للعميل أو المشتري للوصول إلى المنتج المطلوب بكل سهولة و أفضل سعر بالإضافة إلي ميزة التفاوض مع التاجر على سعر المنتج و كذلك ميزة طلب أي منتج و إنتظار منافسات التجار لتوفير الطلب بأفضل سعر. التطبيق جعل التسوق الإلكتروني ممتعاً من حيث التواصل مع التاجر مباشرة و تتبع حالة الطلبات.

       
             </p>
             <button>تنزيل الان</button>

       </div>
        

        </div>

{/* ============================================================ */}


<div  className={stylesss['background-side2']}>
        <div className={stylesss.par2}>
        <div className={stylesss.b1}>
        <img  src={img5}/>
        </div>


        <div data-aos='fade-up' className={stylesss.b3}>
        <img src={img4}/>
        </div>

        <div data-aos='fade-down' className={stylesss.b4}>
        <img src={img1}/>
        </div>

        <div data-aos='fade-left' className={stylesss.b5}>
        <img src={img2}/>
        </div>

        <div data-aos='fade-right' className={stylesss.b6}>
        <img src={img3}/>
        </div>
        </div>
        
        </div>

      
        

    </div>
        </bdo>
        
    );
}

export default Section_1;