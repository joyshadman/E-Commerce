import React from "react";
import delivery from "../assets/delivery.png";
import customer from "../assets/customer.png";
import protection from "../assets/protection.png";


const features = [
  {
    img: [delivery ], 
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    img: [customer],
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    img: [protection],
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-23 py-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-[250px]"
        >
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
          <h3 className="mt-4 text-[18px] font-poppins font-[650] leading-[28px] text-[#000000]">
            {feature.title}
          </h3>
          <p className="mt-1 text-[14px] font-poppins font-[400] text-[#000000] leading-[21px] tracking-[0] text-center">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
