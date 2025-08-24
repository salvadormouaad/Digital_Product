import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import '../App.css';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center md:items-start px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Stars - Special 768px adjustment */}
      <div className='flex justify-center md:justify-start space-x-2 mb-4 md:mb-6 md:w-60 w-full md:ml-[10%] lg:ml-[15%]'>
        <IoStarSharp color='#FBB041' className="w-4 h-4 md:w-5 md:h-5" />
        <IoStarSharp color='white' className="w-4 h-4 md:w-5 md:h-5" />
        <IoStarSharp color='white' className="w-4 h-4 md:w-5 md:h-5" />
        <IoStarSharp color='white' className="w-4 h-4 md:w-5 md:h-5" />
        <IoStarSharp color='white' className="w-4 h-4 md:w-5 md:h-5" />
      </div>

      {/* Text Content - 768px-specific tweaks */}
      <div className='text-center md:text-left w-full md:ml-[10%] lg:ml-[15%] max-w-md md:max-w-lg lg:max-w-2xl'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold font-[Montserrat] mb-3 md:mb-4'>
          Too Cheap
        </h1>
        
        <div className='space-y-1 md:space-y-2 mb-6 md:mb-8'>
          <p className='text-base md:text-lg lg:text-xl text-white font-[Montserrat]'>
            Enjoy Your Premium Digital Products,
          </p>
          <p className='text-base md:text-lg lg:text-xl text-white font-[Montserrat]'>
            The Best Quality and The Cheapest Price
          </p>
        </div>
      </div>

      {/* Button - 768px optimization */}
      <div className='flex justify-center md:justify-start md:w-60 w-full md:ml-[10%] lg:ml-[15%]'>
        <a href='#Services' target='blank' className="px-6 py-2 md:px-8 md:py-3 bg-[#FBB041]  text-black rounded-full hover:bg-black hover:text-white transition duration-300 font-medium text-base md:text-lg">
          Shop Now
        </a>
      </div>
    </div>
  );
}