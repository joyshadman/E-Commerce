import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from '../assets/Logo.svg';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["Bangla", "Arabic", "French", "Spanish", "German", "Italian", "Turkish"];

  return (
    <div id="navbar">

      <div className="bg-black w-full h-[48px] flex items-center text-[14px] text-[#fafafa]">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="w-[120px]" />
          <div className="flex items-center mx-auto">
            <h1 className="font-[400] text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h1>
            <a href="#" className="font-[600] ml-4 hover:underline transform transition-all duration-300 ease-in-out">
              ShopNow
            </a>
          </div>
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="flex items-center cursor-pointer font-[400] px-3 py-2 text-sm text-white bg-black hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              English
              <MdKeyboardArrowDown
                className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>
            {isOpen && (
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
      <div className="border-b border-gray-400 mt-5">
      <div className="container flex justify-between items-center py-4 px-4 ">

        <img src={logo} alt="logo" className="cursor-pointer w-[120px] " />

        <ul className="flex gap-8 text-[14px] font-[450] cursor-pointer">
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Home</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Contact</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">About</li>
          <li className="hover:underline transition-all duration-300 ease-in-out mt-[2px]">Sign up</li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              className="w-[224px] h-[34px] bg-[#F5F5F5] text-black pl-3 pr-10 text-[12px] rounded transition-all duration-300 ease-in-out hover:scale-105"
              placeholder="What are you looking for?"
            />
            <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px] text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105" />
          </div>
          <FaRegHeart className="text-[22px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105" />
          <IoCartOutline className="text-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105" />
        </div>
      </div>
    </div>
    </div>

  );
};

export default Navbar;

