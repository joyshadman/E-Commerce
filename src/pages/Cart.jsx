import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cartslider from '../components/cartslider'
import { FaStar } from "react-icons/fa";

import ps5front from "../assets/product/ps5-1.png"
import ps5 from "../assets/product/ps5-2.png"
import ps5sit from "../assets/product/ps5-3.png"
import ps5tilted from "../assets/product/ps5-4.png"

import ps5banner from "../assets/product/ps5banner.png"


const Cart = () => {
  return (
    <div> 
        <Navbar/>
        <div className="container mx-auto">
          <h1 className='mt-[80px] mb-[80px]'>Account / Gaming / Havic HV G-92 Gamepad </h1>
          <div className="flex grid-cols-3 justify-between">
        
          <div className="w-[188px] h-[615px]">
            <div className="h-[138px] w-[170px] bg-[#F5F5F5] mb-4 cursor-pointer">
              <img src={ps5front} alt="ps5 front" className='mx-auto pt-4' />
            </div>
            <div className="h-[138px] w-[170px] bg-[#F5F5F5] mb-4 cursor-pointer">
              <img src={ps5} alt="ps5" className='mx-auto pt-4' />
            </div>
            <div className="h-[138px] w-[170px] bg-[#F5F5F5] mb-4 cursor-pointer">
              <img src={ps5sit} alt="ps5 sitting" className='mx-auto pt-4' />
            </div>
            <div className="h-[138px] w-[170px] bg-[#F5F5F5] cursor-pointer">
              <img src={ps5tilted} alt="ps5 tilted" className='mx-auto pt-4' />
            </div>
          </div>
          <div className="w-[500px] h-[600px] bg-[#F5F5F5] relative">
            <img src={ps5banner} alt="ps5 front" className='absolute top-40 left-14 h-[300px] w-[400px]' />
          </div>
          <div className="w-[400px] ">
            <h1 className="text-2xl font-inter font-bold text-black leading-[24px] tracking-[3%]">Havic HV G-92 Gamepad</h1>
            <div className="flex gap-0.5">
            <FaStar className="text-[18px] text-[#FFAD33] mt-4" />
            <FaStar className="text-[18px] text-[#FFAD33] mt-4" />
            <FaStar className="text-[18px] text-[#FFAD33] mt-4" /> 
            <FaStar className="text-[18px] text-[#FFAD33] mt-4" />
            <FaStar className="text-[18px] text-[#000000] mt-4" /> 

            <span className="text-sm text-gray-500 ml-2 mt-4">(150 Reviews)</span>
            <div className="h-0.5 w-0.5 bg-gray-500"></div>
            </div>
          </div>
        </div>
        <Cartslider/>
        </div>       
        <Footer/>
    </div>
  )
}

export default Cart