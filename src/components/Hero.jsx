import React from "react";
import "../css/Hero.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/banner.png";
import { FaChevronRight } from "react-icons/fa";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  width: "892px",
};

// Slide images
const slideImages = [
  { url: img1 },
  { url: img1 },
  { url: img1 },
  { url: img1 },
];

// Custom indicator
const indicator = (index) => (
  <div className="indicator-dot" key={index}></div>
);

const Hero = () => {
  return (
    <div className="container mx-auto py-4 px-4 flex gap-6 md:flex-row flex-col">
      {/* Categories */}
      <div className="w-[236px] flex flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer border-r ">

        <div className="py-2 flex justify-between items-center">
          Women’s Fashion
          <FaChevronRight className="text-[17px] mr-8" />
        </div>
        <div className="py-2 flex justify-between items-center">
          Men’s Fashion
          <FaChevronRight className="text-[17px] mr-8" />
        </div>
        <div className="py-2">Electronics</div>
        <div className="py-2">Home & Lifestyle</div>
        <div className="py-2">Medicine</div>
        <div className="py-2">Sports & Outdoor</div>
        <div className="py-2">Baby’s & Toys</div>
        <div className="py-2">Groceries</div>
        <div className="py-2">Health & Beauty</div>
      </div>

      {/* Banner slider */}
      <div className="w-3/4 slide-container relative md:w-3/4 ">
        <Slide
          autoplay={true}
          duration={3000}
          transitionDuration={500}
          indicators={indicator}
        >
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
