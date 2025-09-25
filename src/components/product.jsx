import React, { useRef, useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import Card from "./Card.jsx";


import dogFoodImg from "../assets/product/pacjet.png";
import cameraImg from "../assets/product/dslr.png";
import laptopImg from "../assets/product/laptop.png";
import curologyImg from "../assets/product/skincare.png";
import Btn from "./Btn.jsx";

const products = [
  {
    name: "Breed Dry Dog Food",
    price: 100,
    oldPrice: 100,
    rating: 4.5,
    reviews: 95,
    image: dogFoodImg,
  },
  {
    name: "CANON EOS DSLR Camera",
    price: 860,
    oldPrice: 860,
    rating: 4.5,
    reviews: 85,
    image: cameraImg,
  },
  {
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    oldPrice: 1029,
    rating: 4.5,
    reviews: 325,
    image: laptopImg,
  },
  {
    name: "Curology Product Set",
    price: 50,
    oldPrice: 50,
    rating: 4.5,
    reviews: 85,
    image: curologyImg,
  },
  {
    name: "CANON EOS DSLR Camera",
    price: 860,
    oldPrice: 860,
    rating: 4.5,
    reviews: 85,
    image: cameraImg,
  },
];

const Product = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const baseSettings = {
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
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };


  const settings1 = {
    ...baseSettings,
    autoplay: true,
    autoplaySpeed: 2500,
    asNavFor: slider2,
  };

  const settings2 = {
    ...baseSettings,
    autoplay: false, 
    asNavFor: slider1,
  };


  const handlePrev = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev();
    if (sliderRef2.current) sliderRef2.current.slickPrev();
  };

  const handleNext = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext();
    if (sliderRef2.current) sliderRef2.current.slickNext();
  };


  useEffect(() => {
    if (sliderRef1.current && slider1 !== sliderRef1.current) {
      setSlider1(sliderRef1.current);
    }
    if (sliderRef2.current && slider2 !== sliderRef2.current) {
      setSlider2(sliderRef2.current);
    }
  }, [slider1, slider2]);

  return (
    <div>
      <SectionHeader
        sectionTitle="Explore Our Products"
        showArrows
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="container mx-auto px-4 mb-10">
        <Slider ref={sliderRef1} {...settings1}>
          {products.map((product, idx) => (
            <div key={idx} className="px-2">
              <Card product={product} />
            </div>
          ))}
        </Slider>

        <Slider ref={sliderRef2} {...settings2}>
          {products.map((product, idx) => (
            <div key={idx} className="px-2">
              <Card product={product} />
            </div>
          ))}
        </Slider>
        <Btn label="View All Products" width="234px" height="50px" margin="0 auto" display="block" marginTop="50px"  />
      </div>
    </div>
  );
};

export default Product;
