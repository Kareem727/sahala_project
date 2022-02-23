import stylesss from './Section1.module.css'
import styless from '../Nav/Nav.module.css'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/Phone.png'
import img5 from '../img/Rectangle 3.png'
import img6 from '../img/Hero Image.png'
const Section_1 = () =>{
    return(
        
        <div className={stylesss.container2}>

    <div className={stylesss['background-side2']}>
             
            <div className={stylesss.b1}>
            <img src={img6}/>
            </div>

            <div className={stylesss.b2}>
            <img src={img5}/>
            </div>

            <div className={stylesss.b3}>
            <img src={img4}/>
            </div>

            <div className={stylesss.b4}>
            <img src={img1}/>
            </div>

            <div className={stylesss.b5}>
            <img src={img2}/>
            </div>

            <div className={stylesss.b6}>
            <img src={img3}/>
            </div>

            </div>

{/* ============================================================ */}
          
            <div dir='rtl' className={stylesss['paragraph-side1']}>
           

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

        </div>
        
    );
}

export default Section_1;