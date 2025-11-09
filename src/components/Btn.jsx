import React from "react";

const Btn = ({ 
  label = "Click Me", 
  width = "234px", 
  height = "50px",
  display = "block",       
  margin = "0 auto",       
  marginTop = "60px",
  marginBottom = "140px",
  bgColor = "#db4444",
  textColor = "#fafafa",
  borderColor = "#db4444",  
  borderWidth = "2px",      
  borderStyle = "solid",    
}) => {
  return (
    <button
      className="rounded-sm hover:brightness-110 hover:scale-110 
                 transition-transform ease-linear duration-300 
                 cursor-pointer shadow-md hover:shadow-lg"
      style={{ 
        width, 
        height, 
        display, 
        margin, 
        marginTop, 
        marginBottom, 
        backgroundColor: bgColor,
        color: textColor,
        borderColor,
        borderWidth,
        borderStyle,
      }}
    >
      <span 
        className="text-[16px] font-poppins font-[500] leading-[24px] tracking-normal"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </button>
  );
};

export default Btn;
