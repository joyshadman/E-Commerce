import React from "react";

const CustomButton = ({
  text = "Button",
  width = "w-[234px]",
  height = "h-[50px]",
  textSize = "text-[16px]",
  onClick,
}) => {
  return (
    <button
      className={`${width} ${height} bg-[#db4444] rounded-sm hover:scale-110 transition-transform cursor-pointer ease-linear duration-300`}
      onClick={onClick}
    >
      <h1 className={`${textSize} font-poppins font-[400] leading-[24px] tracking-normal text-[#fafafa]`}>
        {text}
      </h1>
    </button>
  );
};

export default CustomButton;
