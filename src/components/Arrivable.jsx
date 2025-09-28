import FeatureSection from "./FeatureSection";
import SectionHeader from "./SectionHeader";

const Arrivable = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="w-[229px] h-[116px] block mx-auto ">
                    <SectionHeader
                        monthText="Featured"
                        sectionTitle="New Arrival"
                    />
                </div>

          
                <div className="flex flex-col lg:flex-row gap-6 mb-[75px]">
                   
                    <div className="bg-black w-full lg:w-[570px] h-[600px] mt-14 rounded-sm">
                        <div className="bg-[url('./assets/product/ps5.png')] bg-cover bg-center bg-no-repeat w-full lg:w-[490px] h-[490px] mt-[100px] mx-auto relative">
                            <div className="absolute bottom-5 px-4">
                                <h1 className="text-2xl font-inter text-[#fafafa] font-semibold leading-6">
                                    PlayStation 5
                                </h1>
                                <p className="text-sm font-poppins text-[#fafafa] font-normal leading-[21px] mt-4 w-[242px]">
                                    Black and White version of the PS5 coming out on sale.
                                </p>
                                <button className="text-base font-poppins text-white font-medium leading-6 mt-4 relative inline-block hover:text-white
                                    after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
                                    after:w-0 after:bg-[#ffffff91] after:transition-all after:duration-300 
                                    after:ease-in-out hover:after:left-0 hover:after:w-full">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>

     
                    <div className="w-full lg:w-[570px] mt-14">
                        <div className="bg-black w-full h-[284px] rounded-sm">
                            <div className="bg-[url('./assets/product/women.png')] bg-cover bg-center bg-no-repeat w-full h-[284px] mx-auto relative">
                                <div className="absolute bottom-5 p-4">
                                    <h1 className="text-2xl font-inter text-[#fafafa] font-semibold leading-6">
                                        Women’s Collections
                                    </h1>
                                    <p className="text-sm font-poppins text-[#fafafa] font-normal leading-[21px] mt-4 w-[242px]">
                                        Featured woman collections that give you another vibe.
                                    </p>
                                    <button className="text-base font-poppins text-white font-medium leading-6 mt-4 relative inline-block hover:text-white
                                        after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
                                        after:w-0 after:bg-[#ffffff91] after:transition-all after:duration-300 
                                        after:ease-in-out hover:after:left-0 hover:after:w-full">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>

                       
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="bg-[url('./assets/product/speaker.png')] bg-cover bg-center bg-no-repeat w-full sm:w-[270px] h-[284px] mt-8 rounded-sm relative">
                                <div className="absolute bottom-0 p-4">
                                    <h1 className="text-2xl font-inter text-[#fafafa] font-semibold leading-6">
                                        Speakers
                                    </h1>
                                    <p className="text-sm font-poppins text-[#fafafa] font-normal leading-[21px] mt-2 w-[242px]">
                                        Amazon wireless speakers
                                    </p>
                                    <button className="text-base font-poppins text-white font-medium leading-6 mt-2 relative inline-block hover:text-white
                                        after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
                                        after:w-0 after:bg-[#ffffff91] after:transition-all after:duration-300 
                                        after:ease-in-out hover:after:left-0 hover:after:w-full">
                                        Shop Now
                                    </button>
                                </div>
                            </div>

                            <div className="bg-[url('./assets/product/perfume.png')] bg-cover bg-center bg-no-repeat w-full sm:w-[270px] h-[284px] mt-8 rounded-sm relative">
                                <div className="absolute bottom-0 p-4">
                                    <h1 className="text-2xl font-inter text-[#fafafa] font-semibold leading-6">
                                        Perfume
                                    </h1>
                                    <p className="text-sm font-poppins text-[#fafafa] font-normal leading-[21px] mt-2 w-[242px]">
                                        GUCCI INTENSE OUD EDP
                                    </p>
                                    <button className="text-base font-poppins text-white font-medium leading-6 mt-2 relative inline-block hover:text-white
                                        after:absolute after:left-1/2 after:bottom-0 after:h-[2px] 
                                        after:w-0 after:bg-[#ffffff91] after:transition-all after:duration-300 
                                        after:ease-in-out hover:after:left-0 hover:after:w-full">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FeatureSection />
            </div>
        </div>
    );
};

export default Arrivable;
