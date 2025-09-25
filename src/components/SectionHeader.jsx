import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Btn from "./Btn";

const SectionHeader = ({
  highlightColor = "#db4444",
  monthText = "This Month",
  sectionTitle = "Best Selling Products",
  onPrev,
  onNext,
  showArrows = false,  
  showBtn = false,      
  btnLabel = "Click Me" 
}) => {
  return (
    <div>
      <div className="container mx-auto px-4 my-10">

        <div className="flex items-center gap-3 mb-4 mt-[100px]">
          <div
            className="w-[20px] h-[40px]"
            style={{ backgroundColor: highlightColor }}
          ></div>
          <h1
            className="text-[16px] font-poppins font-[600]"
            style={{ color: highlightColor }}
          >
            {monthText}
          </h1>
        </div>

        {/* Title + Controls */}
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-[36px] font-inter font-[600] text-[#000000] leading-[48px]">
            {sectionTitle}
          </h2>

          {showArrows && (
            <div className="flex gap-3">
              <button
                onClick={onPrev}
                className="bg-[#F5F5F5] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <MdArrowBackIos className="text-black text-lg" />
              </button>
              <button
                onClick={onNext}
                className="bg-[#F5F5F5] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <MdArrowForwardIos className="text-black text-lg" />
              </button>
            </div>
          )}

          {showBtn && <Btn label={btnLabel} width="180px" height="45px" />}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
