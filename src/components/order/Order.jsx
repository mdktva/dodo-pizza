import React from 'react'
import css from './Order.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfoOrder from '../infoOrder/InfoOrder';


const PrevBtn = (props) => {
    return <div onClick={props.onClick}>
        <img src="https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png" style={{ width: "20px" }} alt="" />
    </div>
}
const NextBtn = (props) => {
    return <div onClick={props.onClick}>
        <img src="https://pixsector.com/cache/d317f9c9/avefdb1ad8fbf8d8b72a2.png" style={{ width: "25px" }} alt="" />

    </div>
}

export default function Order() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevBtn />,
        nextArrow: <NextBtn />
    };


    return (
        <div className='container'>
            <Slider {...settings}>

                <InfoOrder />
                <InfoOrder />
                <InfoOrder />
                <InfoOrder />
                <InfoOrder />
                <InfoOrder />
                <InfoOrder />

            </Slider>

        </div>
    )
}
