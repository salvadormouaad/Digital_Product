// Card.js
import React from 'react';
import bg from '../../assets/spotify.jpg'

export default function ({Type, Duration, Quality, Price,className}) {
  return (
    <div className={`flex justify-center items-center md:w-50 p-0 w-full ${className || ''}`}>
      <div className="group w-full max-w-xs md:max-w-[200px] h-48 md:h-40 overflow-hidden relative 
                     after:duration-500 before:duration-500 duration-500 
                     hover:after:duration-500 hover:after:translate-x-12 
                     hover:before:translate-y-6 hover:before:-translate-x-16 
                     hover:duration-500 
                     after:absolute after:w-12 after:h-12 after:bg-green-600 after:rounded-full 
                     after:blur-lg after:bottom-12 after:right-8 
                     before:absolute before:w-10 before:h-10 before:bg-green-500 before:rounded-full 
                     before:blur-lg before:top-6 before:right-8 
                     md:hover:rotate-3 flex justify-center items-center origin-bottom-right  
                     rounded-2xl outline  bg-cover bg-center md:mx-0 mx-4" 
           style={{ backgroundImage: `url(${bg})` }}>
        <div className="z-10 flex flex-col items-center gap-1 p-2 text-center">
          <span className="text-white text-xl md:text-lg font-bold pt-1">{Type}</span>
          <span className="text-gray-300 text-base md:text-sm">{Quality}</span>
          <span className="text-white text-xl">{Duration}</span>
          <span className="text-white text-xl md:text-lg font-bold mt-1">{Price}</span>
          <a href='https://wa.me/212620394795?text=Salam%20svp%20le%20prix%20dial%20spotify%20w%20les%20offres
' target="_blank" className="mt-0 px-4 py-1 md:px-3 md:py-1 bg-green-600 hover:bg-green-700 
                            text-white font-semibold rounded-md transition-colors duration-200 
                            text-sm md:text-xs">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}