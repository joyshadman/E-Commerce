import React, { useRef } from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Import local images
import phoneSvg from "../assets/product/cellphone.svg";
import computerImg from "../assets/product/pc.svg";
import watchImg from "../assets/product/smartwatch.png";
import cameraImg from "../assets/product/camera.png";
import headphoneImg from "../assets/product/headphone.png";
import gamingImg from "../assets/product/pad.png";

const categories = [
  { name: "Phones", image: phoneSvg },
  { name: "Computers", image: computerImg },
  { name: "SmartWatch", image: watchImg },
  { name: "Camera", image: cameraImg },
  { name: "HeadPhones", image: headphoneImg },
  { name: "Gaming", image: gamingImg },
  { name: "Phones", image: phoneSvg },
];

const Categories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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

  return (
    <section className="container mx-auto px-4 my-10  ">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4 ">
        <div className="w-[20px] h-[40px] bg-[#db4444]"></div>
        <h1 className="text-[16px] font-poppins font-[600] text-[#db4444]">
          Categories
        </h1>
      </div>

      <div className="flex justify-between items-center mb-14">
        <h2 className="text-[36px] font-inter font-[600] text-[#000000] leading-[48px] ">
          Browse By Category
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#F5F5F5] h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
          >
            <MdArrowBackIos className="text-black text-lg" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#F5F5F5] h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
          >
            <MdArrowForwardIos className="text-black text-lg" />
          </button>
        </div>
      </div>

      {/* Categories Slider */}
      <Slider ref={sliderRef} {...settings}>
        {categories.map((cat, idx) => (
          <div key={idx} className="px-2">
            <div className="border rounded-md h-[150px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#db4444] ease-linear duration-300 hover:text-white transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-[50px] h-[50px] object-contain"
              />
              <h3 className="text-[16px] font-poppins font-[500]">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Categories;
