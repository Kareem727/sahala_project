import stylesss from './Footer.module.css'
import logo from '../img/Logo.png'
const Footer = () =>{
    return(
        <bdo dir='rtl'>
            
<div className={stylesss.container}>
    <div className={stylesss.container3}>
<div className={stylesss.gridss}>
    <img src={logo}></img>
    <p>قم بتصفح مختلف الأقسام و المنتجات و قم بتواصل مع مختلف مزودي الخدمات للتفاوض على الأسعار و لشراء المنتج</p>
</div>
</div>
<div className={stylesss.container2}>
<div className={stylesss.gridss}>
    <h1>خرائط المواقع</h1>
      
        <li>الرئيسية</li>
        <li>المزايا</li>
    
</div>
<div className={stylesss.gridss}>
    <h1>المزايا</h1>
     
        <li>مختلف المتاجر</li>
        <li>تواصل المزودين</li>
        <li>الحصول على إشعار</li>
    
</div>   
<div className={stylesss.gridss2}>
    <h1 className={stylesss.marb}>تابعنا</h1>
     
    <div className={stylesss.icons}>
    <i className='fa fa-linkedin'></i>      
    <i className="fa fa-twitter"></i>
    <i className="fa fa-facebook-f"></i>
    </div>

    
</div>
</div>
</div>
        </bdo>
    );
}

export default Footer;