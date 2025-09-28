import React from "react";

const Production = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row ">
          <div className="mt-[80px] mb-40">
            <h1 className="text-[14px] font-poppins font-[400] text-[#272727] leading-[21px] mb-[50px]">
              home / shop
            </h1>
            <div>
              <h1 className="text-[20px] font-poppins font-[700] text-[#262626] leading-[0px] ">
                Shop by Category
              </h1>

              <div className="w-full mt-10 md:w-[236px] flex-col space-y-2 font-poppins text-[16px] font-normal leading-6 cursor-pointer md:h-[420px] lg:block lg:pr-4 hidden sm:hidden">
                <div
                  className="py-1 relative cursor-pointer text-black hover:text-black
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                    after:w-0 after:bg-black after:transition-all after:duration-300 
                    after:ease-in-out hover:after:w-full inline-block"
                  id="categories"
                >
                  Women's Fashion
                </div>

                <div
                  className="py-1 relative cursor-pointer text-black hover:text-black
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                    after:w-0 after:bg-black after:transition-all after:duration-300 
                    after:ease-in-out hover:after:w-full inline-block"
                  id="categories"
                >
                  Men's Fashion
                </div>

                <div className="flex flex-col gap-2 duration">
                  <div
                    id="electronics"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-20 inline-block"
                  >
                    Electronics
                  </div>

                  <div
                    id="home-lifestyle"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-30 inline-block"
                  >
                    Home & Lifestyle
                  </div>

                  <div
                    id="medicine"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-16 inline-block"
                  >
                    Medicine
                  </div>

                  <div
                    id="sports-outdoor"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-32 inline-block"
                  >
                    Sports & Outdoor
                  </div>

                  <div
                    id="babys-toys"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-24 inline-block"
                  >
                    Baby's & Toys
                  </div>

                  <div
                    id="groceries"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-16 inline-block"
                  >
                    Groceries
                  </div>

                  <div
                    id="health-beauty"
                    className="py-1 relative cursor-pointer text-black hover:text-black
                      after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                      after:w-0 after:bg-black after:transition-all after:duration-300 
                      after:ease-in-out hover:after:w-29 inline-block"
                  >
                    Health & Beauty
                  </div>
                  <div className="">
                  <h1 className="text-[20px] font-poppins font-[700] text-[#262626] leading-[0px] mt-[40px] ">Shop by Color</h1>
                    <ul className="mt-10">
                        <li>color 1</li>
                        <li className="mt-3">color 2</li>
                        <li className="mt-3">color 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Production;
