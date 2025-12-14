import React from 'react'

export default function Title() {
  return (
    <>
    <div className='flex flex-col max-sm:mt-8 lg:w-full md:mt-15 lg:justify-center lg:mt-15 '>
        {/* <h1 className='flex justify-center w-full justify-center  text-white'>Premium <span>Digital</span> <br /> <span>Products</span> , Smart prices</h1> */}

        <div className='flex flex-col text-center lg:items-center'>

            <p className='text-white text-4xl max-sm:text-3xl font-bold font-[Montserrat]'>Premium <span className='text-[#FBB041]'>Digital</span></p>
            <p className='text-white text-4xl max-sm:text-3xl font-bold font-[Montserrat]'><span className='text-[#FBB041]'>Products</span>, Smart Prices</p>
            <p className='text-white lg:mt-5'>Get instant access to the digital services you love,</p>
            <p className='text-white'>fast, secure and budget-friendly</p>
        </div>
    </div>
    <h1 className='text-white max-sm:mt-10 md:ml-5 md:mt-10 lg:ml-40 lg:pl-30 text-3xl max-sm:ml-2.5 lg:mt-15 font-bold font-[Montserrat]'>Products:</h1>
    </>
  )
}
