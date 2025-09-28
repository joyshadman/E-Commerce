import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-[#FAFAFA] w-full mt-20">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 ">
        
      
        <div>
          <h3 className="text-lg font-[600] mb-4 cursor-pointer ">Exclusive</h3>
          <p className="text-sm mb-2 font-[600] cursor-pointer ">Subscribe</p>
          <p className="text-xs text-[#FAFAFA] mb-4 mt-4">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-xs text-white px-2 py-2 flex-1 focus:outline-none"
            />
            <button className="bg-black text-white p-2 text-[30px] cursor-pointer">
              <img src="src\assets\arrow.svg" alt="arrow"  />
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg  font-[600] mb-4 cursor-pointer">Support</h3>
          <p className="text-xs text-[#FAFAFA] mb-4 cursor-pointer">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-xs text-[#FAFAFA] mt-4 cursor-pointer">exclusive@gmail.com</p>
          <p className="text-xs text-[#FAFAFA] mt-4 cursor-pointer">+88015-88888-9999</p>
        </div>

    
        <div>
          <h3 className="text-lg font-[600] mb-4 cursor-pointer">Account</h3>
          <ul className="space-y-4 text-xs text-[#FAFAFA]">
            <li className="cursor-pointer">My Account</li>
            <li className="cursor-pointer">Login / Register</li>
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg  font-[600] mb-4 cursor-pointer">Quick Link</h3>
          <ul className="space-y-4 text-xs text-[#FAFAFA]">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms Of Use</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

  
        <div className="cursor-pointer">
          <h3 className="text-lg  font-[600] mb-4 ">Download App</h3>
          <p className="text-xs text-[#FAFAFA] mb-3">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img src="src\assets\qrcode.png" alt="QR Code" className="w-20 h-20" />
            <div className="flex flex-col gap-2">
              <img
                src="src\assets\playstore.png"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="src\assets\applestore.png"
                alt="App Store"
                className="h-8 "
              />
            </div>
          </div>

         
          <div className="flex gap-8 text-[#FAFAFA] cursor-pointer ">
            <img src="src\assets\facebook.png" alt="Facebook" className="mt-4  hover:scale-110 transition-transform duration-300" />
            <img src="src\assets\twitter.png" alt="Twitter" className="mt-4 hover:scale-110 transition-transform duration-300" />
            <img src="src\assets\instagram.png" alt="Instagram" className="mt-4 hover:scale-110 transition-transform duration-300" />
            <img src="src\assets\linkedin.png" alt="LinkedIn" className="mt-4 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="border-tmt-10 py-4 text-center text-xs text-[#494949]">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
