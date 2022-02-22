import stylesss from './Section3.module.css'
import img1 from '../img/Image.png'
import rectangle from '../img/Rectangle 99.png'
const Section_3 = () =>{

    return(
        <bdo dir='rtl'>
        <div className={stylesss.container}>
            <div className={stylesss.par}>
                <h1>أضف منتجاتك المفضلة الى السلة و قم بالشراء الأن</h1>
            <p>باشر في الإطلاع على تفاصيل مختلف المنتجات و قم بشراء و إضافة أفضل المنتجات الى السلة, 
بإضافة الى إضافة مكان التوصيل</p>
            </div>
            <div className={stylesss.background}>
                <img src={rectangle}></img>
                <img src={img1}></img>

            </div>

            </div>
            </bdo>
    );
}

export default Section_3;