import React from "react";
import CustomSlider from "../hooks/custom.slider.jsx";

import img1 from "../assets/banner.png";
import img2 from "../assets/banner.png";
import img3 from "../assets/banner.png";

const Hero = () => {
  const images = [img1, img2, img3];

  return (
    <div className="container mx-auto py-4 px-4 flex gap-6">
      {/* 🔹 Categories */}
      <div className="w-1/4 flex flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer">
        <details className="border-b border-gray-400">
          <summary className="py-2">Woman’s Fashion</summary>
          <ul className="pl-4">
            <li>Top</li>
            <li>Dress</li>
            <li>Pants</li>
          </ul>
        </details>

        <details className="border-b border-gray-400">
          <summary className="py-2">Men’s Fashion</summary>
          <ul className="pl-4">
            <li>Shirt</li>
            <li>Pants</li>
            <li>Shoes</li>
          </ul>
        </details>

        {/* Other categories */}
        <div className="border-b border-gray-400 py-2">Electronics</div>
        <div className="border-b border-gray-400 py-2">Home & Lifestyle</div>
        <div className="border-b border-gray-400 py-2">Medicine</div>
        <div className="border-b border-gray-400 py-2">Sports & Outdoor</div>
        <div className="border-b border-gray-400 py-2">Baby’s & Toys</div>
        <div className="border-b border-gray-400 py-2">Groceries</div>
        <div className="border-b border-gray-400 py-2">Health & Beauty</div>
      </div>

      {/* 🔹 Slider */}
      <div className="w-3/4 mt-5">
        <CustomSlider>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[344px] object-cover rounded"
            />
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default Hero;
