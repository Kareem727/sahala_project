import stylesss from './Section4.module.css'
import img1 from '../img/Image2.png'
import rectangle from '../img/Rectangle 9.png'
const Section_4 = () =>{

    return(
        <bdo dir='rtl'>
            
        <div className={stylesss.container}>
        <div className={stylesss.background}>
                <img src={rectangle}></img>
                <img src={img1}></img>

            </div>

            <div className={stylesss.par}>
                <h1>احصل على إشعار التطبيق ذي الأولوية القصوى</h1>
            <p>أفضل ميزة تجعلك أفضل ، مع أحدث التقنيات لتلبية احتياجاتك. بالطبع ، مع ميزات مثل الإشعارات على التفاوضات, حصولك على إشعارات المحادثات, عند وصول طلب</p>
            </div>
            

            </div>
            </bdo>
    );
}

export default Section_4;