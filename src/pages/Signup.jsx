import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Btn from '../components/Btn'


// images

import signupImg from '../assets/signban.png'
import Google from '../assets/google.png'

const Signup = () => {
  return (
    <div>
      <Navbar />

      <div className="container  ">
        <div className="flex flex-col mt-20 mb-60 md:flex-row  items-center justify-between px-6 md:px-0 ">
          <img src={signupImg} alt="bannerimg" className='h-[781px] w-[805px]' />
          <div className="">
            <h1 className="text-[36px] font-inter font-[500] text-[#000000] leading-[25px] tracking-[2px]">Create an account</h1>
            <p className="mt-5 text-[16px] font-poppins font-normal text-black leading-[24px] tracking-[0px]">Enter your details below</p>

            <form className="mt-8 flex flex-col gap-6 w-full max-w-[400px]">
              <input
                type="text"
                placeholder="Name"
                className="p-1 opacity-70 border-b-1 "
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="p-1 opacity-70 border-b-1 "

              />
              <input
                type="password"
                placeholder="Password"
                className="p-1 opacity-70  border-b-1 "

              />
              <Btn label='Create Account' width="334px" marginBottom = "0px"/>
              <button
                className="bg-[#ffffff] border w-[334px] h-[50px] rounded-sm hover:scale-110 transition-transform cursor-pointer  ease-linear duration-300 "
              >
                <span className="text-[16px] font-poppins text-[#000000] font-[400] leading-[24px] tracking-normal mar flex items-center justify-center gap-2">
                  <img src={Google} alt="Google" />  Sign up with Google
                </span>
              </button>
              <div className="flex gap-2 items-center justify-center">  
              <h1 className="text-[16px] font-poppins font-[400] text-[#000000] leading-[24px] tracking-[0px]">Already have account?</h1>
              <h1 className="cursor-pointer text-[16px] underline font-poppins font-[400] text-[#000000] leading-[24px] tracking-[0px]">Log in</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup