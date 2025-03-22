"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../../../../public/Logo.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4 md:px-20">
            {/* Logo */}
            <Image src={Logo} alt="logo" />
            
            {/* Desktop Navigation - Hidden on md and smaller screens */}
            <nav className="hidden lg:flex lg:ml-36 gap-6 items-center">
                <a href="#" className="text-base font-medium text-white custom-link">Models</a>
                <a href="#" className="text-base font-medium text-white custom-link">Pricing</a>
                <a href="#" className="text-base font-medium text-white custom-link">About Us</a>
                <a href="#" className="text-base font-medium text-white custom-link">Contact Us</a>
                <a href="#" className="text-base font-medium text-white custom-link">Custom Models</a>
            </nav>
            
            {/* Buttons - Hidden on md and smaller screens */}
            <div className="hidden lg:flex gap-2">
                <button className="text-sm cursor-pointer font-medium border py-1.5 px-5 rounded text-white">Login</button>
                <button className="text-sm cursor-pointer font-medium border border-white py-1.5 px-4 bg-white text-black rounded">Get Started Now</button>
            </div>
            
            {/* Mobile Menu Button - Now visible on md and smaller screens */}
            <button 
                className="lg:hidden text-white focus:outline-none" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu - Also appears on md screens */}
            <div 
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center gap-6`}
            >
                <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
                    <X size={32} />
                </button>
                <a href="#" className="text-lg font-medium text-white custom-link" onClick={() => setIsOpen(false)}>Models</a>
                <a href="#" className="text-lg font-medium text-white custom-link" onClick={() => setIsOpen(false)}>Pricing</a>
                <a href="#" className="text-lg font-medium text-white custom-link" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="#" className="text-lg font-medium text-white custom-link" onClick={() => setIsOpen(false)}>Contact Us</a>
                <a href="#" className="text-lg font-medium text-white custom-link" onClick={() => setIsOpen(false)}>Custom Models</a>
                <button className="text-sm cursor-pointer font-medium border py-1.5 px-5 rounded text-white mt-4" onClick={() => setIsOpen(false)}>Login</button>
                <button className="text-sm cursor-pointer font-medium border border-white py-1.5 px-4 bg-white text-black rounded" onClick={() => setIsOpen(false)}>Get Started Now</button>
            </div>
        </header>
    );
};

export default Header;