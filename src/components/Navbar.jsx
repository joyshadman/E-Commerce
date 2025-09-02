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
    
      <div className="bg-black w-full h-[48px] flex justify-center items-center px-4 text-[14px] text-[#fafafa]">
        <div className="flex flex-col md:flex-row items-center ml-70 justify-between w-[870px] max-w-7xl">
          <div className="flex items-center text-center md:text-left">
            <h1 className="font-[400]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h1>
            <a href="#" className="font-[600] ml-4 hover:underline">
              ShopNow
            </a>
          </div>
          <div className="relative inline-block items-end text-left mt-2 md:mt-0">
            <button
              type="button"
              className="flex items-center cursor-pointer font-[400] px-3 py-2 text-sm text-white bg-black  border-gray-600 rounded-md hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              English
              <MdKeyboardArrowDown
                className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {languages.map((lang, index) => (
                    <a
                      href="#"
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
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
          <div className="container  ">
            <img src={logo} alt="logo" className="mt-[47px] cursor-pointer "/>
            <div className="">
              <ul className="flex gap-8 text-[14px] font-[450] mt-[-20px] cursor-pointer justify-center">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign up</li>
              </ul>
              <div className="justify-end flex mt-[-10px] ">
                <input type="text" className="flex mt-[-15px] w-[224px] h-[34px] bg-[#F5F5F5] text-black text-center text-[12px]" placeholder="What are you looking for? " />
                <CiSearch className="relative right-8 top-[-10px] text-[30px] text-black cursor-pointer"/>
                <div className="flex gap-4 ml-8 text-[20px] text-black">

                <FaRegHeart className=" cursor-pointer"/>
                <IoCartOutline className="text-[25px] cursor-pointer mt-[-2px]"/>
                </div>
              </div>
            </div>

          </div>


    </div>
  );
};


export default Navbar;
