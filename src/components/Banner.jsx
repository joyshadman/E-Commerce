import React, { useState, useEffect } from "react";
import { countDownDateAndTime } from "countdown-date-time";




const conduct_date = "2025-09-25 21:33:59";

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
      <div className="w-full h-[500px] sm:h-[400px] md:h-[500px] bg-[url('./assets/product/banner.png')] bg-cover bg-center bg-no-repeat mt-[140px] relative">

        <div className="absolute top-[60px] left-[60px] transform -translate-x-1/2 sm:left-[60px] sm:translate-x-0 w-[90%] sm:w-[500px] ">
          <h1 className="text-[14px] sm:text-[16px] font-poppins font-semibold text-[#00ff66] leading-[18px] sm:leading-[20px] tracking-[0]">
            Categories
          </h1>

          <h1 className="text-[32px] sm:text-[48px] font-inter font-semibold text-[#fafafa] leading-[40px] sm:leading-[60px] tracking-[2px] sm:tracking-[4px] mt-4 sm:mt-8">
            Enhance Your Music Experience
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 items-center mt-6 sm:mt-10">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div key={label} className="flex flex-col items-center justify-center h-[60px] sm:h-[70px] w-[60px] sm:w-[70px] rounded-full bg-white shadow-md">
                <span className="text-[14px] sm:text-[16px] font-poppins font-bold text-black leading-[18px] sm:leading-[20px]">
                  {count[label.toLowerCase()]}
                </span>
                <span className="text-[10px] sm:text-[11px] font-poppins font-normal text-black leading-[16px] sm:leading-[18px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-[#00ff66] w-full sm:w-[234px] h-[45px] sm:h-[50px] rounded-sm hover:scale-110 transition-transform cursor-pointer ease-linear duration-300 text-white mt-6 sm:mt-10">
            Buy Now!
          </button>
        </div>
      </div>
    </div>

  );
};

export default Banner;
