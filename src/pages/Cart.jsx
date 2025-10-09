import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cartslider from '../components/cartslider'

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
        </div>
        </div>
        <Cartslider/>
        <Footer/>       
    </div>
  )
}

export default Cart