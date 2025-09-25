import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const Card = ({ product }) => {
  return (
    <div className="p-4 rounded-lg relative  bg-white">
      <div className="relative group w-full h-[220px] bg-[#F5F5F5] mb-2 overflow-hidden flex items-center justify-center">
        {product.discount && (
          <div className="absolute top-3 left-4 bg-red-500 text-white px-2 py-1 text-xs rounded">
            -{product.discount}%
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-[172px] h-[152px] object-contain transition-transform duration-300 group-hover:scale-105"
        />

    
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ease-linear ">
          <h1 className="text-[14px] font-poppins text-white font-medium text-center p-2">
            Add To Cart
          </h1>
        </div>


        <div className="absolute top-3 right-4 flex flex-col gap-2">
          <div className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer">
            <FaRegHeart className="text-gray-500" />
          </div>
          <div className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer">
            <AiOutlineEye className="text-gray-500" />
          </div>
        </div>
      </div>


      <h3 className="text-[15px] font-poppins font-[500] text-[#000000] leading-[20px] truncate">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 my-1 mb-2">
        <span className="text-[#db4444] text-[16px] font-semibold">
          ${product.price}
        </span>
        {product.oldPrice && (
          <span className="text-gray-500 text-[14px] line-through">
            ${product.oldPrice}
          </span>
        )}
      </div>


      <div className="flex items-center gap-1 text-[12px]">
        
          <FaStar className="text-[12px] text-[#FFAD33]"/>
          <FaStar className="text-[12px] text-[#FFAD33]"/>
          <FaStar className="text-[12px] text-[#FFAD33]"/>
          <FaStar className="text-[12px] text-[#FFAD33]"/>
          <FaStar className="text-[12px] text-[#FFAD33] "/>

        <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
      </div>
    </div>
  );
};

export default Card;
