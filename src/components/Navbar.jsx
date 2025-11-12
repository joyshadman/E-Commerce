import { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const languages = ["Bangla", "Arabic", "French", "Spanish", "German", "Italian", "Turkish"];

  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(storedCart.length);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <>
      {/* 🔹 Top Black Bar */}
      <div className="bg-black w-full text-[#fafafa] text-[14px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-2 md:gap-0">
          <div className="hidden md:block" />

          <div className="flex flex-col sm:flex-row items-center text-center md:space-x-4">
            <h1 className="font-[400] text-[12px] sm:text-[14px] leading-snug">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h1>
            <Link
              to="/productpage"
              className="font-[600] mt-1 sm:mt-0 hover:underline transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

          <div className="relative inline-block text-left mt-2 md:mt-0">
            <button
              type="button"
              className="flex items-center cursor-pointer font-[400] px-3 py-1 text-sm text-white bg-black hover:bg-gray-800 focus:outline-none rounded transition-all duration-300"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              English
              <MdKeyboardArrowDown
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isLangOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* 🌍 Language Dropdown */}
            {isLangOpen && (
              <div
                className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-fadeIn"
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <div className="py-1">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="border-b border-gray-400 mt-5">
        <div className="container flex justify-between items-center py-4 px-4 md:px-0">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer w-[100px] sm:w-[130px] md:w-[130px] lg:w-[140px] p-4 sm:p-2 md:p-2 lg:p-0 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-8 text-[15px] font-[450]">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/productpage" },
              { name: "Contact", path: "/Contact" },
              { name: "About", path: "/About" },
              { name: "Sign Up", path: "/Signup" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className="relative inline-block text-black transition-all duration-300 group-hover:scale-105
                    after:absolute after:left-1/2 after:bottom-0 after:h-[2px]
                    after:w-0 after:bg-black after:transition-all after:duration-300
                    group-hover:after:left-0 group-hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                className="w-[224px] h-[34px] bg-[#F5F5F5] text-black pl-3 pr-10 text-[12px] rounded transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px] text-black cursor-pointer hover:scale-110 transition-all duration-300" />
            </div>

            <FaRegHeart className="text-[22px] cursor-pointer hover:scale-110 transition-all duration-300" />

            <Link to="/addtocart" className="relative">
              <IoCartOutline className="text-[25px] cursor-pointer hover:scale-110 transition-all duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-3xl cursor-pointer transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* 🔹 Mobile Dropdown Menu */}
        <div
          className={`sm:hidden bg-white w-full px-4 py-4 border-t border-gray-200 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-black font-[450]">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/productpage" },
              { name: "Contact", path: "/Contact" },
              { name: "About", path: "/About" },
              { name: "Sign Up", path: "/Signup" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full transition-all duration-200 hover:translate-x-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <div className="relative">
              <input
                type="text"
                className="w-full h-[34px] bg-[#F5F5F5] text-black pl-3 pr-10 text-[12px] rounded focus:outline-none"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px] text-black" />
            </div>

            <div className="flex gap-4 mt-2">
              <FaRegHeart className="text-[22px]" />
              <Link to="/addtocart" onClick={() => setIsMobileMenuOpen(false)}>
                <IoCartOutline className="text-[25px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
