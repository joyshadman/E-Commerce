import React, { useRef } from 'react';
import Slider from "react-slick";
import Card from './Card.jsx';

import gamepadImg from "../assets/product/gamepad.png";
import keyboardImg from "../assets/product/keyboard.png";
import monitorImg from "../assets/product/monitor.png";
import chairImg from "../assets/product/chair.png";


const products = [
    {
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldPrice: 160,
        discount: 40,
        rating: 4,
        reviews: 88,
        image: gamepadImg,
    },
    {
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        discount: 35,
        rating: 4.5,
        reviews: 75,
        image: keyboardImg,
    },
    {
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image: monitorImg,
    },
    {
        name: "S-Series Comfort Chair",
        price: 375,
        oldPrice: 400,
        discount: 25,
        rating: 4.5,
        reviews: 99,
        image: chairImg,
    },
    {
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        discount: 30,
        rating: 5,
        reviews: 99,
        image: monitorImg,
    },
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    cssEase: "ease-in-out",
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 15,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
};

const Cartslider = () => {
    const sliderRef = useRef(null);

    return (
        <div>
            <div className="py-6">
                <Slider ref={sliderRef} {...settings}>
                    {products.map((product, idx) => (
                        <div key={idx} className="px-2">
                            <Card product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}


export default Cartslider