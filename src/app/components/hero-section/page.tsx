import React from "react";
import Header from "../header/page";

const Hero = () => {
    return (
        <div className="bg-[#04142B] bg-[url(/blur.svg)] bg-cover bg-center min-h-screen">
            <Header />

            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-4 mt-10 sm:mt-16 md:mt-16 justify-center items-center px-4 sm:px-6 md:px-10 text-center">
                <p className="text-[#7191FF] text-sm sm:text-base md:text-lg font-bold">
                    Leverage on Automation
                </p>
                <h1 className="text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] font-semibold leading-tight text-white">
                    AI Models for <br className="hidden sm:block" /> Business Solutions
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
                    Leverage the power of AI to automate, analyze, and optimize your workflows. Our
                    specialized models are designed to fit different business needs.
                </p>
                <div>
                    <button className="text-[16px] sm:text-[18px] cursor-pointer font-semibold py-3 px-6 sm:py-4 sm:px-8 bg-white text-[#05152C] rounded-lg sm:rounded-xl transition duration-300 hover:bg-gray-200">
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;