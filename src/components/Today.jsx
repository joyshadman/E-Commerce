import React, { useEffect, useState, useRef } from "react";
import { countDownDateAndTime } from "countdown-date-time";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Card from "./Card.jsx";

const Today = () => {
  const conduct_date = "2026-09-25 21:33:59";
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  // -----------------------------
  // Fetch Dummy API Products
  // -----------------------------
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=5");
        const data = await res.json();

        // Convert products to your Card component format
        const formatted = data.products.map((item) => ({
          name: item.title,
          price: item.price,
          oldPrice: item.price + 50, // fake old price
          discount: item.discountPercentage || 20,
          rating: item.rating,
          reviews: item.stock, // dummy value
          image: item.thumbnail,
        }));

        setProducts(formatted);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    getData();
  }, []);



  // -----------------------------
  // Countdown Timer
  // -----------------------------
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


  // -----------------------------
  // Slider Settings
  // -----------------------------
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    speed: 600,
    cssEase: "ease-in-out",
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 15,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };


  return (
    <section id="today" className="container mx-auto px-4">
      <div className="flex items-center gap-3 mt-20">
        <div className="w-[20px] h-[40px] bg-[#db4444]"></div>
        <h1 className="text-[16px] font-poppins font-[600] text-[#db4444] my-8">
          Today
        </h1>
      </div>

      {/* Flash Sales Header */}
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-[36px] font-inter font-[600] text-[#000000] leading-[48px] mr-6">
          Flash Sales
        </h1>

        {/* Timer */}
        <div className="flex gap-4 items-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <React.Fragment key={label}>
              <div className="text-center">
                <span className="text-[12px] font-poppins text-black block">
                  {label}
                </span>
                <span className="text-[28px] font-bold text-black">
                  {count[label.toLowerCase()]}
                </span>
              </div>
              {index < 3 && (
                <span className="text-2xl font-bold text-[#db4444]">:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Slider Buttons */}
        <div className="flex gap-3 ml-auto p-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#F5F5F5] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          >
            <MdArrowBackIos className="text-black text-lg" />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#F5F5F5] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          >
            <MdArrowForwardIos className="text-black text-lg" />
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <div className="py-6">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, idx) => (
            <div key={idx} className="px-2">
              <Card product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="bg-[#db4444] rounded-sm w-[234px] h-[50px] hover:scale-110 transition-transform cursor-pointer mb-[140px] ease-linear duration-300">
          <h1 className="text-[16px] font-poppins text-[#fafafa] font-[400] leading-[24px]">
            View All Products
          </h1>
        </button>
      </div>
    </section>
  );
};

export default Today;
