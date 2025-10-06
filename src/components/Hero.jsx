import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2"; // fixed import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/banner.png";
import "../css/Hero.css";
import { Link } from "react-router-dom"; // for Navbar links

const CustomDots = ({ children }) => (
  <div className="custom-pagination">
    {React.Children.map(children, (dot, index) => (
      <span
        key={index}
        className={`indicator-dot ${
          dot.props.className?.includes("slick-active") ? "active" : ""
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
    <div className="slider-container w-full max-w-[900px] h-[544px] cursor-grab relative mx-auto mt-5">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
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
    <div className="container mx-auto flex gap-6 md:flex-row flex-col">
      <div className="w-full mt-5 md:w-[236px] flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer md:border-r md:h-[420px] lg:block lg:pr-4 hidden sm:hidden">
        <div className="py-2 flex justify-between items-center relative cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full" id="categories">
          <Link to="/womens-fashion" className="flex justify-between w-full">
            Women's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
          </Link>
        </div>
        <div className="py-2 flex justify-between items-center relative cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full" id="categories">
          <Link to="/mens-fashion" className="flex justify-between w-full">
            Men's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 duration">
          <div id="electronics" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Electronics
          </div>
          <div id="home-lifestyle" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Home & Lifestyle
          </div>
          <div id="medicine" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Medicine
          </div>
          <div id="sports-outdoor" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Sports & Outdoor
          </div>
          <div id="babys-toys" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Baby's & Toys
          </div>
          <div id="groceries" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Groceries
          </div>
          <div id="health-beauty" className="relative py-2 cursor-pointer text-black hover:text-black
              after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:w-0 after:bg-black after:transition-all after:duration-300 
              after:ease-in-out hover:after:w-full">
            Health & Beauty
          </div>
        </div>
      </div>

 
      <div className="lg:hidden mb-4 flex justify-between items-center px-2">
        <button
          className="text-3xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose /> : <HiOutlineBars3 />}
        </button>
      </div>

   
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full px-4 py-4 border-t border-gray-200">
          <div className="w-full md:w-[236px] flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer">
            <Link to="/womens-fashion" className="py-2 flex justify-between items-center">
              Women's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
            </Link>
            <Link to="/mens-fashion" className="py-2 flex justify-between items-center">
              Men's Fashion <FaChevronRight className="text-[17px] md:mr-8" />
            </Link>
            <div className="py-2">Electronics</div>
            <div className="py-2">Home & Lifestyle</div>
            <div className="py-2">Medicine</div>
            <div className="py-2">Sports & Outdoor</div>
            <div className="py-2">Baby's & Toys</div>
            <div className="py-2">Groceries</div>
            <div className="py-2">Health & Beauty</div>
          </div>
        </div>
      )}


      <MySlider />
    </div>
  );
};

export default Hero;
