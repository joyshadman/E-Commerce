import React from "react";

const Btn = ({ 
  label = "Click Me", 
  width = "234px", 
  height = "50px",
  display = "block",       
  margin = "0 auto",       
  marginTop = "60px",

}) => {
  return (
    <button
      className="bg-[#db4444] rounded-sm hover:scale-110 transition-transform cursor-pointer mb-[140px] ease-linear duration-300 " 
      style={{ width, height, display, margin, marginTop }}
    >
      <span className="text-[16px] font-poppins text-[#fafafa] font-[400] leading-[24px] tracking-normal">
        {label}
      </span>
    </button>
  );
};

export default Btn;
