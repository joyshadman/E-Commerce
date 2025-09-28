import React, { useState, useEffect } from "react";
import { countDownDateAndTime } from "countdown-date-time";
import { FaShoppingCart } from "react-icons/fa"; 

const conduct_date = "2026-09-25 21:33:59";

const Banner = () => {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const countDown = countDownDateAndTime(conduct_date) || {};
      setCount({
        days: countDown.days || 0,
        hours: countDown.hours || 0,
        minutes: countDown.minutes || 0,
        seconds: countDown.seconds || 0,
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full h-[400px] sm:h-[500px] bg-[url('./assets/product/banner.png')] bg-cover bg-center bg-no-repeat mt-[100px] sm:mt-[140px] rounded-lg overflow-hidden">

      
        <div className="absolute top-[50%] left-[10%] sm:left-[60px] -translate-y-1/2 w-[90%] sm:w-[500px] text-left">
          
          <h1 className="text-[14px] sm:text-[16px] font-poppins font-semibold text-[#00ff66] leading-[18px] sm:leading-[20px]">
            Categories
          </h1>

          <h2 className="text-[28px] sm:text-[48px] font-inter font-bold text-[#fafafa] leading-[38px] sm:leading-[60px] tracking-wide mt-3 sm:mt-6">
            Enhance Your Music Experience
          </h2>

       
          <div className="flex gap-3 sm:gap-6 items-center mt-6 sm:mt-10">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-full bg-white shadow-lg"
              >
                <span className="text-[16px] sm:text-[18px] font-poppins font-bold text-black">
                  {count[label.toLowerCase()]}
                </span>
                <span className="text-[10px] sm:text-[12px] font-poppins text-gray-700">
                  {label}
                </span>
              </div>
            ))}
          </div>

          
          <button className="flex items-center justify-center gap-2 bg-[#00ff66] w-full sm:w-[234px] h-[45px] sm:h-[50px] rounded-md hover:scale-110 transition-transform cursor-pointer ease-linear duration-300 text-white font-medium mt-6 sm:mt-10">
            <FaShoppingCart size={18} />
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
