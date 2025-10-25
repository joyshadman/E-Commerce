import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cartslider from "../components/cartslider";
import { FaStar, FaTruck, FaUndoAlt, FaRegHeart } from "react-icons/fa";

import ps5front from "../assets/product/ps5-1.png";
import ps5 from "../assets/product/ps5-2.png";
import ps5sit from "../assets/product/ps5-3.png";
import ps5tilted from "../assets/product/ps5-4.png";
import ps5banner from "../assets/product/ps5banner.png";

const Cart = () => {
  const [quantity, setQuantity] = useState(2);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        <h1 className="mt-[80px] mb-[80px]">
          Account / Gaming / Havic HV G-92 Gamepad
        </h1>

        <div className="flex justify-between">
          {/* Left Thumbnails */}
          <div className="w-[188px] h-[615px]">
            {[ps5front, ps5, ps5sit, ps5tilted].map((img, i) => (
              <div
                key={i}
                className="h-[138px] w-[170px] bg-[#F5F5F5] mb-4 cursor-pointer"
              >
                <img src={img} alt={`ps5-${i}`} className="mx-auto pt-4" />
              </div>
            ))}
          </div>

          {/* Center Main Image */}
          <div className="w-[500px] h-[600px] bg-[#F5F5F5] relative">
            <img
              src={ps5banner}
              alt="ps5 banner"
              className="absolute top-40 left-14 h-[300px] w-[400px]"
            />
          </div>

          {/* Right Details */}
          <div className="w-[400px]">
            <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>

            {/* Stars */}
            <div className="flex gap-0.5 items-center mt-3">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-[#FFAD33] text-[18px]" />
              ))}
              <FaStar className="text-[#000000] text-[18px]" />
              <span className="text-sm text-gray-500 ml-2">
                (150 Reviews)
                <span className="text-[#00FF66] ml-3">In Stock</span>
              </span>
            </div>

            <h1 className="text-[30px] mt-4">$192.00</h1>
            <p className="text-[14px] text-gray-700 w-[303px] mt-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <div className="w-[303px] bg-black h-[1px] mt-6"></div>

            {/* Colors */}
            <div className="flex gap-4 mt-4 items-center">
              <h1 className="text-[20px] font-[400]">Colors:</h1>
              <div className="bg-[#A0BCE0] h-5 w-5 rounded-full hover:border-2 border-black cursor-pointer"></div>
              <div className="bg-[#E07575] h-5 w-5 rounded-full hover:border-2 border-black cursor-pointer"></div>
            </div>

            {/* Sizes */}
            <div className="flex gap-3 mt-4 items-center">
              <h1 className="text-[20px] font-[400]">Size:</h1>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className="border border-black h-7 w-7 flex justify-center items-center rounded-sm hover:bg-[#E07575] hover:text-white cursor-pointer"
                >
                  {size}
                </div>
              ))}
            </div>

            {/* Buy Now Section */}
            <div className="w-full mt-6 space-y-4">
              {/* Quantity + Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex border rounded-md overflow-hidden">
                  <button
                    onClick={decrease}
                    className="px-3 py-2 border-r hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={increase}
                    className="px-3 py-2 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600">
                  Buy Now
                </button>

                <button className="p-2 border rounded-md hover:bg-gray-100">
                  <FaRegHeart size={18} />
                </button>
              </div>

              {/* Delivery Info */}
              <div className="border rounded-md divide-y">
                <div className="flex items-start gap-3 p-3">
                  <FaTruck className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-600">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3">
                  <FaUndoAlt className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Return Delivery</p>
                    <p className="text-xs text-gray-600">
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline cursor-pointer">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Cartslider />
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
