import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb';

// Images 
import img1 from '../assets/african.png'



const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-20 mb-20">
          <Breadcrumb/>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-semibold mb-10">Our Story</h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in
              Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has
              10.5k sellers and 33k monthly product sales, serving 45.5k customers daily.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mt-3">
              Exclusive offers a diverse selection of products, giving every buyer and seller a reliable platform for
              online growth and trade in categories ranging from consumer goods to electronics.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={img1}
              alt="Our Story"
              className="rounded-lg object-cover h-[609px] w-[705px] shadow-md"
            />
          </div>
        </div>

        {/* 🔹 Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg py-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">10.5k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2">Sellers active on our site</p>
          </div>

          <div className="flex flex-col items-center bg-[#DB4444] text-white rounded-lg py-6 hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold">33k</h3>
            <p className="text-sm mt-1 text-center px-2">Monthly Product Sales</p>
          </div>

          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg py-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">45.5k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2">Customers active on our site</p>
          </div>

          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg py-6 hover:shadow-md transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">25k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2">Annual gross sales on our site</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Team Member"
              className="rounded-md shadow-md w-[250px] h-[250px] object-cover"
            />
            <h4 className="text-lg font-semibold mt-4">Tom Cruise</h4>
            <p className="text-sm text-gray-500">Founder & Chairman</p>
            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaTwitter className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaLinkedinIn className="hover:text-[#DB4444] cursor-pointer transition-all" />
            </div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Team Member"
              className="rounded-md shadow-md w-[250px] h-[250px] object-cover"
            />
            <h4 className="text-lg font-semibold mt-4">Emma Watson</h4>
            <p className="text-sm text-gray-500">Managing Director</p>
            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaTwitter className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaLinkedinIn className="hover:text-[#DB4444] cursor-pointer transition-all" />
            </div>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Team Member"
              className="rounded-md shadow-md w-[250px] h-[250px] object-cover"
            />
            <h4 className="text-lg font-semibold mt-4">Will Smith</h4>
            <p className="text-sm text-gray-500">Product Designer</p>
            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaTwitter className="hover:text-[#DB4444] cursor-pointer transition-all" />
              <FaLinkedinIn className="hover:text-[#DB4444] cursor-pointer transition-all" />
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="Delivery" className="mb-3" />
            <h5 className="font-semibold text-sm">FREE AND FAST DELIVERY</h5>
            <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="Customer Service" className="mb-3" />
            <h5 className="font-semibold text-sm">24/7 CUSTOMER SERVICE</h5>
            <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="Money Back" className="mb-3" />
            <h5 className="font-semibold text-sm">MONEY BACK GUARANTEE</h5>
            <p className="text-gray-500 text-sm">We return money within 30 days</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About