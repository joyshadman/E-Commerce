import React, { useRef } from "react";
import CustomButton from "./CustomButton";
import Card from "./Card.jsx";
import Slider from "react-slick";
import hoodieImg from "../assets/product/hoodie.png";
import cabinetImg from "../assets/product/cabinet.png";
import bagImg from "../assets/product/bag.png";
import coolerImg from "../assets/product/cooler.png";


const products = [
    {
        name: "The North Coat",
        price: 260,
        oldPrice: 360,
        discount: 28,
        rating: 5,
        reviews: 65,
        image: hoodieImg,
    },
    {
        name: "Gucci Duffle Bag",
        price: 960,
        oldPrice: 1160,
        discount: 17,
        rating: 4.5,
        reviews: 65,
        image: bagImg,
    },
    {
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldPrice: 170,
        discount: 5.88,
        rating: 4.5,
        reviews: 65,
        image: coolerImg,
    },
    {
        name: "Small BookSelf",
        price: 360,
        rating: 5,
        reviews: 65,
        info: "Price: $360",
        image: cabinetImg,
    },
        {
        name: "Gucci Duffle Bag",
        price: 960,
        oldPrice: 1160,
        discount: 17,
        rating: 4.5,
        reviews: 65,
        image: bagImg,
    },
    {
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldPrice: 170,
        discount: 5.88,
        rating: 4.5,
        reviews: 65,
        image: coolerImg,
    },
    {
        name: "Small BookSelf",
        price: 360,
        rating: 5,
        reviews: 65,
        info: "Price: $360",
        image: cabinetImg,
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

const Month = () => {
    const sliderRef = useRef(null);

    return (
        <div>
            <div className="container mx-auto px-4 my-10">
                <div className="h-[1px] w-full bg-black mt-20"></div>

                <div className="flex items-center gap-3 mb-4 mt-[100px]">
                    <div className="w-[20px] h-[40px] bg-[#db4444]"></div>
                    <h1 className="text-[16px] font-poppins font-[600] text-[#db4444]">
                        This Month
                    </h1>
                </div>

                <div className="flex justify-between items-center mb-14">
                    <h2 className="text-[36px] font-inter font-[600] text-[#000000] leading-[48px]">
                        Best Selling Products
                    </h2>

                    <CustomButton
                        text="View All"
                        width="w-[159px]"
                        height="h-[56px]"
                        textSize="text-[16px]"
                    />
                </div>

                <div className="py-6">
                    <Slider ref={sliderRef} {...settings}>
                        {products.map((product) => (
                            <div key={product.id} className="px-2">
                                <Card product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Month;
