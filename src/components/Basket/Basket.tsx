import React, {FC} from "react";
import "./style.scss";
import Slider from "react-slick";


interface ISetting {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
}

const Basket = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
                <div>
                    <img
                        src={'https://www.hostinger.ru/rukovodstva/wp-content/uploads/sites/8/2018/12/kak-sdelat-dizajn-sajta.jpg'}/>
                </div>
            </Slider>
        </div>
    );

};

export default Basket;
