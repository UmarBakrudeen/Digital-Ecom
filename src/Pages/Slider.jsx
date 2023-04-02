import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
    {
        id: "1",
        image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1678287473_756X325_Mobilesummerreadykitchen.jpg",
        title: "Readymade Kitchen"
    },
    {
        id: "1",
        image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679643224_Bedsheet_756x325_Mobile.jpg",
        title: "Readymade Kitchen"
    },
    {
        id: "1",
        image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679495691_Homepage_Banner_Mob.jpg",
        title: "Readymade Kitchen"
    },
    {
        id: "1",
        image: "https://www.maxblush.com/content/images/site/sliders/slider2.jpg",
        title: "Readymade Kitchen"
    },
    {
        id: "1",
        image: "https://www.maxblush.com/content/images/site/sliders/slider3.jpg",
        title: "Readymade Kitchen"
    },
    {
        id: "1",
        image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1679671017_01_Redmi_Smartphones_V2.jpg",
        title: "Readymade Kitchen"
    }
]

const Slider1 = () => {
    return (

        <div className="home-Wrapper">
            <div className="container-xxl">
                < Slider autoplay={3000} >
                    {
                        content.map((item, index) => (
                            <div
                                key={index}
                                className="slider__image"
                            >
                                <img src={item.image} alt="" />

                            </div>
                        ))
                    }
                </Slider >
            </div>

        </div>
    )
}
export default Slider1;