
import Button from '../UI/Button';
import stylesss from './Section5.module.css'
import img from '../img/Group 151.png'
const Section_5 = () =>{
return(

    <div className={stylesss.container}>
        <img src={img}></img>
    
    <div className={stylesss['hero-btns']}>
    <p>قم بتنزيل التطبيق الآن والفوائد المتنوعة<br/> التي 
ستحصل عليها على الفور</p>
    <Button className={stylesss.btns}
    buttonStyle='btn--outline'
    buttonSize='btn--large'>عن التطبيق</Button>
     
    <Button
    buttonStyle='btn--primary'
    buttonSize='btn--large'>تنزيل الأن</Button>
   </div>

    </div>
);
}

export default Section_5;