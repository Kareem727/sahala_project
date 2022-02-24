import stylesss from './Section2.module.css'
import Rectangel from '../img/Group 147.png'
import Rectange2 from '../img/Group 148.png'
import Rectange3 from '../img/Group 149.png'
const Section_2 = () =>{
    return(
<bdo dir='rtl'>
        <div className={stylesss.container}>

        <div className={stylesss.sss}>
        <img src={Rectange3}></img>
        <p>جدولة مواعيد الطلبات</p>
         
        <p>بالطبع بإمكانك إختيار موعد الطلب الذي تريده و تحديد الموقع</p>
        </div>
        <div className={stylesss.sss}>

        <img src={Rectangel}></img>

        <p>تحكم في السلة</p>
        <p>تصفح جميع المنتجات و قم بإضافتها للسلة</p>
        </div>
        <div className={stylesss.sss}>
        <img src={Rectange2}></img>
        <p>رؤية الإشعارات اليومية</p>
        <p>رؤية الإشعارات اليومية ومنها المحادثات, التحديثات بخصوص الطلب</p>
        </div>

        </div>
        </bdo>

    );
}

export default Section_2;