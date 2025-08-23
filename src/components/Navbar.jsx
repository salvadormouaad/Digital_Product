import React, { useState } from 'react';
import Logo from '../assets/Utaro No Bg.png';
import '../App.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex flex-col md:flex-row items-center justify-center p-2 sticky top-0 z-30">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href='/' >
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-20 w-auto md:mr-95" 
            />
          </a>
          {/* Mobile Menu Button (hidden on desktop) */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links - Toggleable on mobile */}
        <div className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col 
          md:flex-row 
          items-center 
          text-center
          space-y-3 
          md:space-y-0 
          md:ml-30 
          md:space-x-8 
          w-full 
          max-md:h-90
          md:w-auto 
          mt-5
          max-md: justify-center 
          md:mt-0
          bg-black/90 backdrop-blur-sm
          md:bg-transparent
          shadow-lg md:shadow-none
          md:rounded-none
          absolute md:relative
          top-20 md:top-0
          left-0 md:left-auto
          right-0 md:right-auto
          mx-0 md:mx-0
          p-4 md:p-0
          z-40
        `}>
          <a href='#' className="text-white md:text-white cursor-pointer font-medium transition duration-300">Home
          </a>
          <a href='#Services' className="text-white md:text-white cursor-pointer font-medium transition duration-300">
            Services
          </a>
          <a href='#Contact' className="text-white md:text-white cursor-pointer font-medium transition duration-300">
            Contact
          </a>
          
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href='https://wa.me/212620394795' target='blank' className="px-4 py-2 bg-[#FBB041] text-black rounded-full hover:bg-black hover:text-white transition duration-300 font-medium">
              Shop Now
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}