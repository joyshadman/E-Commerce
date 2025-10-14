import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Apiproducts from "./Apiproducts";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-6 px-4">
      
      <div className="w-full lg:w-[236px] flex-shrink-0 md:mt-[80px] mt=0 mb-40">

          <h1 className="text-[14px] font-poppins font-[400] text-[#272727] leading-[21px] mb-[50px] mt-3">
            home / shop
          </h1>
          
        <HiOutlineBars3
          className="md:hidden block text-3xl ml-3 cursor-pointer mb-20"
          onClick={() => setShowSidebar(!showSidebar)}
        />
     
        <div className={`${showSidebar ? "flex" : "hidden"} md:flex flex-col`}>

          <h1 className="text-[20px] font-poppins font-[700] text-[#262626] leading-[0px]">
            Shop by Category
          </h1>

          <div className="flex flex-col space-y-2 mt-10 font-poppins text-[16px] font-normal leading-6 cursor-pointer">
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-30 inline-block">
              Women's Fashion
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-25 inline-block">
              Men's Fashion
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-20 inline-block">
              Electronics
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-30 inline-block">
              Home & Lifestyle
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-16 inline-block">
              Medicine
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-32 inline-block">
              Sports & Outdoor
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-24 inline-block">
              Baby's & Toys
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-16 inline-block">
              Groceries
            </div>
            <div className="py-1 relative cursor-pointer text-black hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-29 inline-block">
              Health & Beauty
            </div>
          </div>

          <h1 className="text-[20px] font-poppins font-[700] text-[#262626] leading-[0px] mt-[40px]">
            Shop by Color
          </h1>
          <ul className="mt-10 cursor-pointer">
            <li className="flex"><div className="rounded-full bg-black w-3 h-3 mt-2 mr-2"></div>color 1</li>
            <li className="flex mt-2"><div className="rounded-full bg-red-600 w-3 h-3 mt-2 mr-2"></div> color 2</li>
            <li className="flex mt"><div className="rounded-full bg-green-500 w-3 h-3 mt-2 mr-2"></div>color 3</li>
          </ul>
        </div>
      </div>

 
      <div className="flex-1 w-full mt-[80px] mb-40">
        <Apiproducts />
        <Pagination itemsPerPage={4} />
      </div>
    </div>
  );
};

export default ShopPage;
