import { useState } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import logo from '../assets/Logo.svg';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const languages = ["Bangla", "Arabic", "French", "Spanish", "German", "Italian", "Turkish"];

return (
  <>

<div className="bg-black w-full h-auto md:h-[48px] flex items-center text-[14px] text-[#fafafa]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 md:py-0 gap-2 md:gap-0">
        

        <div className="w-auto hidden md:block" />


        <div className="flex flex-col sm:flex-row mt-4 items-center text-center md:space-x-4 lg:mt-0">
          <h1 className="font-[400] text-[12px] sm:text-[14px] leading-snug">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <a
            href="#"
            className="font-[600] mt-1 sm:mt-0 hover:underline transition-all duration-300"
          >
            ShopNow
          </a>
        </div>


        <div className="relative inline-block text-left mt-2 md:mt-0">
          <button
            type="button"
            className="flex items-center cursor-pointer font-[400] px-3 py-1 text-sm text-white bg-black hover:bg-gray-800 focus:outline-none rounded"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            English
            <MdKeyboardArrowDown
              className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                isLangOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                {languages.map((lang, index) => (
                  <a
                    href="#"
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {lang}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Main Navbar */}
    <div className="border-b border-gray-400 mt-5">
      <div className="container flex justify-between items-center py-4 px-4">
        <img src={logo} alt="logo" className="cursor-pointer w-[120px]" />

        <ul className="hidden sm:flex gap-8 text-[15px] font-[450] cursor-pointer">
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Home</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Contact</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">About</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Sign up</li>
        </ul>

        <div className="hidden sm:flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              className="w-[224px] h-[34px] bg-[#F5F5F5] text-black pl-3 pr-10 text-[12px] rounded transition-all duration-300 hover:scale-105"
              placeholder="What are you looking for?"
            />
            <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px] text-black cursor-pointer hover:scale-105 transition-all duration-300" />
          </div>
          <FaRegHeart className="text-[22px] cursor-pointer hover:scale-105 transition-all duration-300" />
          <IoCartOutline className="text-[25px] cursor-pointer hover:scale-105 transition-all duration-300" />
        </div>

        <button
          className="sm:hidden text-3xl cursor-pointer "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white w-full px-4 py-4 border-t border-gray-200">
          <ul className="flex flex-col gap-4 text-black font-[450] cursor-pointer">
            <li className="hover:underline transition-all duration-300">Home</li>
            <li className="hover:underline transition-all duration-300">Contact</li>
            <li className="hover:underline transition-all duration-300">About</li>
            <li className="hover:underline transition-all duration-300">Sign up</li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <div className="relative">
              <input
                type="text"
                className="w-full h-[34px] bg-[#F5F5F5] text-black pl-3 pr-10 text-[12px] rounded"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px] text-black" />
            </div>
            <div className="flex gap-4">
              <FaRegHeart className="text-[22px]" />
              <IoCartOutline className="text-[25px]" />
            </div>
          </div>
        </div>
      )}
    </div>
  </>
);
}
export default Navbar;
