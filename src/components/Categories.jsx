import React, { useRef } from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const categories = [
  { name: "Phones" },
  { name: "Computers" },
  { name: "SmartWatch" },
  { name: "Camera" },
  { name: "HeadPhones" },
  { name: "Gaming" },
];

const Categories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="container mx-auto px-4 my-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[20px] h-[40px] bg-[#db4444]"></div>
        <h1 className="text-[16px] font-poppins font-[600] text-[#db4444]">
          Categories
        </h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[36px] font-inter font-[600] text-[#000000] leading-[48px]">
          Browse By Category
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#db4444] w-[40px] h-[40px] rounded-full flex items-center justify-center"
          >
            <MdArrowBackIos className="text-white text-lg" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#db4444] w-[40px] h-[40px] rounded-full flex items-center justify-center"
          >
            <MdArrowForwardIos className="text-white text-lg" />
          </button>
        </div>
      </div>

      {/* Categories Slider */}
      <Slider ref={sliderRef} {...settings}>
        {categories.map((cat, idx) => (
          <div key={idx} className="px-2">
            <div className="border rounded-md h-[130px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#db4444] hover:text-white transition">
              

              <div className="w-[40px] h-[40px]">

                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

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
