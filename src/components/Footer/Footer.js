import stylesss from './Footer.module.css'
import logo from '../img/logo/logo.jpeg';
const Footer = () =>{
    return(
        <bdo dir='rtl'>
            
<div className={stylesss.container}>

    <div className={stylesss.innerConteiner}>
    <div className={stylesss.container3}>
    <div className={stylesss.gridss}>
    <a href="#about"><img src={logo}></img></a>
    <p>قم بتصفح مختلف الأقسام و المنتجات و قم بتواصل مع مختلف مزودي الخدمات للتفاوض على الأسعار و لشراء المنتج</p>
    </div>
    </div>


<div className={stylesss.container2}>
    <div className={stylesss.ddddd}>
 <div className={stylesss.gridss}>
    <p>خرائط المواقع</p>  
    <a href="#about"><li className={stylesss.mgtLi}>الرئيسية</li></a>
    <a href="#adv"><li>المزايا</li></a>
</div>
<div className={stylesss.gridss}>
        <p>المزايا</p>
        <li className={stylesss.mgtLi}>مختلف المتاجر</li>
        <li>تواصل المزودين</li>
        <li>الحصول على إشعار</li>
</div>
</div>
 <div className={stylesss.gridss}> 
    <p className={stylesss.Tabenaa}>تابعنا</p>
    <div className={stylesss.icons}>
    <div className={stylesss.icons2}><i className='fa fa-linkedin'></i>   </div>   
    <div className={stylesss.icons2}><i className="fa fa-twitter"></i></div>
    <div><i className="fa fa-facebook-f"></i></div>
    </div>
</div>
</div>
</div>
    </div>



         </bdo>
    );
}

export default Footer;