import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import { FiPhone } from "react-icons/fi";
import Btn from '../components/Btn';



const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-20 mb-20">
          <Breadcrumb />
        </div>
        {/* contact */}
        <div className="flex gap-10 mb-40">
          {/* left side contact */}
          <div className="h-[457px] w-[340px] shadow-sm">
            <div className="p-8">
              <div className="flex">
                <div className="bg-[#db4444] w-[40px] h-[40px] rounded-full flex items-center justify-center mb-6">
                  <FiPhone size={20} className="mx-auto text-[white] " />
                </div>
                <h1 className="p-2 text-[16px] font-poppins font-[500] text-black leading-[24px] tracking-normal">Call To Us</h1>
              </div>
              <h1 className="mb-4 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-normal">We are available 24/7, 7 days a week.</h1>
              <h1 className="mb-8 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-normal">Phone: +8801611112222</h1>
              <div className="w-full border-b-1 border-black h-0.5"></div>

              <div className="flex mt-8">
                <div className="bg-[#db4444] w-[40px] h-[40px] rounded-full flex items-center justify-center mb-6">
                  <FiPhone size={20} className="mx-auto text-[white] " />
                </div>
                <h1 className="p-2 text-[16px] font-poppins font-[500] text-black leading-[24px] tracking-normal">Write To US</h1>
              </div>
              <h1 className="mb-4 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-normal">Fill out our form and we will contact you within 24 hours.</h1>
              <h1 className="mb-3 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-normal">Emails: customer@exclusive.com</h1>
              <h1 className="mb-4 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-normal">Emails: support@exclusive.com</h1>
            </div>
          </div>

          <div className="h-[457px] w-[800px] shadow-sm">
            <div className="flex justify-center items-center p-8 gap-6">
              <input type="text" className="w-[236px] h-[50px] px-3 rounded-sm bg-[#F5F5F5]" placeholder='Your Name' />
              <input type="email" className="w-[236px] h-[50px] px-3 rounded-sm bg-[#F5F5F5]" placeholder='Your Email *' />
              <input type="number" className="w-[236px] h-[50px] px-3 rounded-sm bg-[#F5F5F5]" placeholder='Your Phone *'/>
            </div>
            <div className="flex items-center justify-center">
            <textarea className="bg-[#F5F5F5] w-[737px] h-[250px] px-3 p-5 rounded-sm " placeholder="your message " />
            </div>
            <div className=" ml-125">
              <Btn label="Send Message" marginTop='20px' />
            </div>
          </div> 
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Contact;

