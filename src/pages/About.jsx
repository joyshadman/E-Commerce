import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Breadcrumb from '../components/Breadcrumb';

// Images 
import img1 from '../assets/african.png'
import sale from '../assets/sale.png'
import bag from '../assets/bag.png'
import house from '../assets/house.png'
import money from '../assets/money.png'
import tom from '../assets/tom.png'
import angela from '../assets/angela.png'
import smith from '../assets/smith.png'
import delivary from '../assets/delivery.png'
import defender from '../assets/defender.png'
import call from '../assets/call.png'




const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-20 mb-20">
          <Breadcrumb />
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

          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={img1}
              alt="Our Story"
              className="rounded-lg object-cover h-[609px] w-[705px] shadow-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 mt-40">

          {/* Card */}
          <div className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg w-[230px] h-[200px] py-6 transition-all duration-300 hover:bg-[#DB4444] hover:shadow-md hover:scale-105">
            <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#DB4444]">
                <img src={house} alt="" className="h-6 w-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-3 transition-all duration-300 group-hover:text-white">10.5k</h3>
            <p className="text-sm text-black mt-1 text-center px-2 transition-all duration-300 group-hover:text-white">Sellers active on our site</p>
          </div>

          <div className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg w-[230px] h-[200px] py-6 transition-all duration-300 hover:bg-[#DB4444] hover:shadow-md hover:scale-105">
            <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#DB4444]">
                <img src={money} alt="" className="h-6 w-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-3 transition-all duration-300 group-hover:text-white">33k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2 transition-all duration-300 group-hover:text-white">Monthly Product Sales</p>
          </div>

          <div className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg w-[230px] h-[200px] py-6 transition-all duration-300 hover:bg-[#DB4444] hover:shadow-md hover:scale-105">
            <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#DB4444]">
                <img src={bag} alt="" className="h-6 w-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-3 transition-all duration-300 group-hover:text-white">45.5k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2 transition-all duration-300 group-hover:text-white">Customers active on our site</p>
          </div>

          <div className="group flex flex-col items-center bg-white border border-gray-200 rounded-lg w-[230px] h-[200px] py-6 transition-all duration-300 hover:bg-[#DB4444] hover:shadow-md hover:scale-105">
            <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#DB4444]">
                <img src={sale} alt="" className="h-6 w-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-3 transition-all duration-300 group-hover:text-white">25k</h3>
            <p className="text-sm text-gray-500 mt-1 text-center px-2 transition-all duration-300 group-hover:text-white">Annual gross sales on our site</p>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 mt-40">

          <div className="flex flex-col items-center">
            <div className="bg-[#F5F5F5] rounded-md shadow-md w-[360px] h-[470px] flex items-center justify-center overflow-hidden">
              <img
                src={tom}
                alt="Team Member"
                className="w-[260px] h-[440px] object-cove mt-10"
              />
            </div>

            <h4 className="text-lg font-semibold mt-4">Tom Cruise</h4>
            <p className="text-sm text-gray-500">Founder & Chairman</p>

            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaTwitter className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaLinkedinIn className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#F5F5F5] rounded-md shadow-md w-[360px] h-[470px] flex items-center justify-center overflow-hidden">
              <img
                src={angela}
                alt="Team Member"
                className="w-[260px] h-[440px] object-cover mt-10"
              />
            </div>

            <h4 className="text-lg font-semibold mt-4">Emma Watson</h4>
            <p className="text-sm text-gray-500">Managing Director</p>

            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaTwitter className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaLinkedinIn className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#F5F5F5] rounded-md shadow-md w-[360px] h-[470px] flex items-center justify-center overflow-hidden">
              <img
                src={smith}
                alt="Team Member"
                className="w-[360px] h-[440px] object-cover mt-10"
              />
            </div>

            <h4 className="text-lg font-semibold mt-4">Will Smith</h4>
            <p className="text-sm text-gray-500">Product Designer</p>

            <div className="flex gap-3 mt-3 text-gray-600 text-lg">
              <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaTwitter className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
              <FaLinkedinIn className="cursor-pointer transition-all duration-300 hover:text-[#DB4444]" />
            </div>
          </div>

        </div>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-60 mb-50">

            {/* Delivery */}
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center mb-6">
                <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                  <img src={delivary} alt="Delivery" className="h-6 w-6" />
                </div>
              </div>
              <h5 className="font-[600] text-xl">FREE AND FAST DELIVERY</h5>
              <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
            </div>

            {/* Customer Service */}
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center mb-6">
                <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                  <img src={call} alt="Customer Service" className="h-6 w-6" />
                </div>
              </div>
              <h5 className="font-[600] text-xl">24/7 CUSTOMER SERVICE</h5>
              <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
            </div>

            {/* Money Back */}
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 bg-[#818181] rounded-full flex items-center justify-center mb-6">
                <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                  <img src={defender} alt="Money Back" className="h-6 w-6" />
                </div>
              </div>
              <h5 className="font-[600] text-xl">MONEY BACK GUARANTEE</h5>
              <p className="text-gray-500 text-sm">We return money within 30 days</p>
            </div>
          

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About