"use client";
import React, { useState } from "react";
import Image from "next/image";
import Market from "../../../../public/market.png";
import Finance from "../../../../public/finance.png";
import Analytics from "../../../../public/analytics.png";
import Content from "../../../../public/content.png";
import Customer from "../../../../public/customer.png";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { name: "Market Prediction", content: (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-500">Market Prediction</h2>
        <p className="text-gray-900 font-semibold text-xl md:text-3xl leading-tight">
          Use AI insights for smarter business decisions and stay competitive.
        </p>
        <div>
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-6 flex justify-center">
        <Image src={Market} alt="Market Prediction" width={400} height={300} className="object-contain" />
      </div>
    </div>
  )},
  { name: "Finance", content: (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-500">Finance</h2>
        <p className="text-gray-900 font-semibold text-xl md:text-3xl leading-tight">
          Our AI models analyze financial data for confident investments.
        </p>
        <div>
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-6 flex justify-center">
        <Image src={Finance} alt="Finance" width={400} height={300} className="object-contain" />
      </div>
    </div>
  )},
  { name: "Analytics", content: (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-500">Data Analytics</h2>
        <p className="text-gray-900 font-semibold text-xl md:text-3xl leading-tight">
          Transform data into insights with AI analytics that enhance decisions.
        </p>
        <div>
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-6 flex justify-center">
        <Image src={Analytics} alt="Analytics" width={400} height={300} className="object-contain" />
      </div>
    </div>
  )},
  { name: "Content Generation", content: (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-500">Content Generation</h2>
        <p className="text-gray-900 font-semibold text-xl md:text-3xl leading-tight">
          Create quality content easily with AI that knows your brand and audience.
        </p>
        <div>
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-6 flex justify-center">
        <Image src={Content} alt="Content Generation" width={400} height={300} className="object-contain" />
      </div>
    </div>
  )},
  { name: "Customer Support", content: (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-500">Customer Support</h2>
        <p className="text-gray-900 font-semibold text-xl md:text-3xl leading-tight">
          Use AI chatbots for instant, personalized customer support.
        </p>
        <div>
          <button className="bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-6 flex justify-center">
        <Image src={Customer} alt="Customer Support" width={400} height={300} className="object-contain" />
      </div>
    </div>
  )},
];  

const AiModels = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="px-4 md:px-16 lg:px-24 my-10">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#22263F] text-2xl md:text-4xl font-semibold leading-tight">
          AI Models tailored for your <br className="hidden md:block" /> business needs
        </p>
        <p className="text-[#828282] text-lg md:text-xl font-medium leading-relaxed mt-4">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our <br className="hidden md:block" />
          specialized models are designed to fit different business needs.
        </p>
      </div>

      <div className="flex justify-center mt-8 overflow-auto">
        <div className="border border-gray-300 rounded-lg py-2 px-4 flex flex-wrap justify-center items-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`font-semibold text-sm md:text-base p-2 rounded-lg transition-all duration-300
                ${activeTab === tab.name ? "bg-blue-800 text-white shadow-lg" : "text-gray-700 hover:bg-gray-200"}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
        <AnimatePresence mode="wait">
          {tabs.map((tab) =>
            activeTab === tab.name ? (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg"
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AiModels;