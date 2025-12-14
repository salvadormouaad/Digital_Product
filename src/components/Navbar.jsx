import React, { useState } from 'react';
import Logo from '../assets/utarologo2.png';
import '../App.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex flex-col md:flex-row items-center justify-center p-2 sticky top-0 z-30">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between lg:mt-5 w-full md:w-auto">
          <a href='/' >
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-10 md:ml-2 max-sm:ml-1 max-sm:h-12 max-sm:mt-1 w-auto md:mr-95" 
            />
          </a>
          <div className="flex md:hidden flex-col mr-3 mt-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10">
            <a href='#contact' className="px-5 py-1 bg-[#FBB041] text-black rounded-sm hover:bg-black hover:text-white transition duration-300 font-medium">
              Contact
            </a>
          </div>
          {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href='#Contact' target='blank' className="px-5 py-1 bg-[#FBB041] text-black rounded-sm hover:bg-black hover:text-white transition duration-300 font-medium">
              Contact
            </a>
          </div> */}
          {/* Mobile Menu Button (hidden on desktop) */}
          {/* <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 max-sm:w-12 max-sm:h-12 w-6" fill="none" viewBox="0 0 24 24" stroke="#FBB041">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>

        
        <div className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          l
          md:flex 
          flex-col 
          md:flex-row 
          items-center 
          text-center
          space-y-3 
          md:space-y-0 
          md:ml-10
          md:space-x-4
          w-full 
          max-md:h-90
          md:w-auto 
          max-md: justify-center 
          md:mt-5
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
          {/* <Link to="/" className="text-white md:text-white cursor-pointer font-medium transition duration-300">Home
          </Link>
          <a href='#Services' className="text-white md:text-white cursor-pointer font-medium transition duration-300">
            Reviews
          </a>
          <a href='#Contact' className="text-white md:text-white cursor-pointer font-medium transition duration-300">
            Contact
          </a> */}
          
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href='#contact'  className="px-5 py-1 bg-[#FBB041] text-black rounded-sm hover:bg-black hover:text-white transition duration-300 font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}