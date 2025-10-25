import React, { useState, useEffect } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Apiproducts from "./Apiproducts";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); 

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const parsed =
          Array.isArray(data) && typeof data[0] === "string"
            ? data
            : data.map((item) => item.name || item.slug || "Unknown");
        setCategories(parsed);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-6 px-4">

      <div className="w-full lg:w-[236px] flex-shrink-0 md:mt-[80px] mt-0 mb-40">
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
 
            <div
              onClick={() => setSelectedCategory("")}
              className={`py-1 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full inline-block capitalize ${
                selectedCategory === "" ? "font-bold text-black" : "text-black"
              }`}
            >
              All Products
            </div>

            {categories.length > 0 ? (
              categories.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    relative py-1 cursor-pointer capitalize text-black transition-all duration-300
                    ${
                      selectedCategory === cat
                        ? "font-bold after:w-full"
                        : "hover:after:w-full"
                    }
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300
                  `}
                >
                  {typeof cat === "string" ? cat.replace(/-/g, " ") : JSON.stringify(cat)}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Loading categories...</p>
            )}
          </div>

          <h1 className="text-[20px] font-poppins font-[700] text-[#262626] leading-[0px] mt-[40px]">
            Shop by Color
          </h1>
          <ul className="mt-10 cursor-pointer">
            <li className="flex">
              <div className="rounded-full bg-black w-3 h-3 mt-2 mr-2"></div>
              Black
            </li>
            <li className="flex mt-2">
              <div className="rounded-full bg-red-600 w-3 h-3 mt-2 mr-2"></div>
              Red
            </li>
            <li className="flex mt-2">
              <div className="rounded-full bg-green-500 w-3 h-3 mt-2 mr-2"></div>
              Green
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 w-full mt-[80px] mb-40">
        <Apiproducts category={selectedCategory} />
        <Pagination itemsPerPage={4} />
      </div>
    </div>
  );
};

export default ShopPage;
