import React from 'react'
import apple from '../../assets/download 11.png'
import spotify from '../../assets/logo-1-1536x461 8.png'
import netlfix from '../../assets/Netflix_2015_logo.svg 5.png'
export default function 
() {
  return (
    <div className='flex  justify-around mt-11  text-white px-2 md:py-2 bg-[#242626]  h-10 py-2 md:mt-22 lg:mt-13 md:h-10'>
          <img src={ apple } className='  mr-3  ' alt="" />
          <img src={ spotify } className='mr-3 ' alt="" />
          <img src={ netlfix } className='mr-3' alt="" />
          <img src={ apple } className=' max-md:hidden ' alt="" />
          <img src={ spotify } className=' max-md:hidden    ' alt="" />
          <img src={ netlfix } className=' max-md:hidden' alt="" />
          
    </div>
  )
}
