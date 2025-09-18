import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaRegHeart } from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdClose, MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/banner.png";
import "../css/Hero.css";


const CustomDots = ({ children }) => (
  <div className="custom-pagination">
    {React.Children.map(children, (dot, index) => (
      <span
        key={index}
        className={`indicator-dot ${dot.props.className?.includes("slick-active") ? "active" : ""
          }`}
        onClick={dot.props.onClick}
      />
    ))}
  </div>
);

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    appendDots: (dots) => <CustomDots>{dots}</CustomDots>,
    customPaging: () => <div className="indicator-dot" />,
    arrows: false,
  };

  return (
    <div className="slider-container w-full max-w-[900px] h-[544px] cursor-grab relative">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5 , 6].map((_, i) => (
          <div key={i} className="h-[400px]">
            <img
              src={img1}
              alt={`banner-${i}`}
              className="h-[200px] sm:h-[400px] w-full bg-center bg-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}


const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto py-4 px-4 flex gap-6 md:flex-row flex-col">
      {/* Categories Sidebar */}
      <div className="w-full md:w-[236px] flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer md:border-r md:h-[420px] lg:block lg:pr-4 hidden sm:hidden">
        <div className="py-2 flex justify-between items-center" id="categories">
          Women's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
        </div>
        <div className="py-2 flex justify-between items-center" id="categories">
          Men's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
        </div>
        <div className="py-2" id="categories">Electronics</div>
        <div className="py-2" id="categories">Home & Lifestyle</div>
        <div className="py-2" id="categories">Medicine</div>
        <div className="py-2" id="categories">Sports & Outdoor</div>
        <div className="py-2" id="categories">Baby's & Toys</div>
        <div className="py-2" id="categories">Groceries</div>
        <div className="py-2" id="categories">Health & Beauty</div>
      </div>


      <div className="lg:hidden mb-4 flex justify-between items-center px-2">
        <button
          className="text-3xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>


      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full px-4 py-4 border-t border-gray-200">
          <div className="w-full md:w-[236px] flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer">
            <div className="py-2 flex justify-between items-center" id="categories">
              Women's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
            </div>
            <div className="py-2 flex justify-between items-center" id="categories">
              Men's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
            </div>
            <div className="py-2" id="categories">Electronics</div>
            <div className="py-2" id="categories">Home & Lifestyle</div>
            <div className="py-2" id="categories">Medicine</div>
            <div className="py-2" id="categories">Sports & Outdoor</div>
            <div className="py-2" id="categories">Baby's & Toys</div>
            <div className="py-2" id="categories">Groceries</div>
            <div className="py-2" id="categories">Health & Beauty</div>
          </div>
        </div>
      )}
      <MySlider />
    </div>
  );
};

export default Hero;
