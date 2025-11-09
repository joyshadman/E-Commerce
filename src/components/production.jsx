import React, { useState, useEffect } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Apiproducts from "./Apiproducts";
import Pagination from "./Pagination";
import Breadcrumb from "./Breadcrumb";

const ShopPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(8); 

  useEffect(() => {
    const fetchValidCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=1000");
        const data = await res.json();
        const allProducts = data.products || [];

        const validCategories = [...new Set(allProducts.map((p) => p.category))];

        setCategories(validCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchValidCategories();
  }, []);

  return (
    <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-6 px-4">

      <div className="w-full lg:w-[236px] flex-shrink-0 md:mt-[80px] mt-0 mb-40">
          <Breadcrumb category={selectedCategory} />

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

            {loadingCategories ? (
              <p className="text-gray-500 text-sm">Loading categories...</p>
            ) : categories.length > 0 ? (
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
                  {cat.replace(/-/g, " ")}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No categories found.</p>
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

      <div className="flex-1 w-full mt-[80px] mb-40 relative">
        <div className="absolute right-10 top-0 flex items-center gap-2">
          <h1 className="text-[16px] font-inter font-[400] text-[#000000] leading-[48px]">
            Show:
          </h1>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-400 rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-black"
          >
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>

        <Apiproducts category={selectedCategory} itemsPerPage={itemsPerPage} />
        <Pagination itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default ShopPage;
