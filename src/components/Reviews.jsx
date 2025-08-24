import React from 'react'
import ReviewBox from '../components/common/ReviewBox' 
import photo from "../assets/Anonyme.png"
export default function Reviews() {
  return (
    <div>
        <h1 className='text-center  mt-10 text-4xl mt-30 md:mt-40'> <b>Reviews</b> </h1>
            <div className='flex flex-col lg:flex-row md:mt-30 lg:justify-center gap-15'>
                <p className='text-center text-3xl md:mt-0 lg:pt-20 mt-20 lg:mt-0   md:ml-0 '>What Our <span className='text-orange-400'>Latest clients</span> say about us:</p>
                <div className='flex flex-row ml-10 md:justify-center'>
                  <div className='max-md:ml-5 max-md:w-47 lg:w-50'>
        
                    <ReviewBox photo={photo} name="Manal" stars="★★★★★" Cmt="2 Annees w ana 5dama m3ahom Merci pour le service , Recommande"/>
                    </div>
                    <div className='max-md:ml-10 lg:ml-10'>
                    <ReviewBox photo={photo} name="Mouad" stars="★★★★★" Cmt="Bon Qualite et service"/>
                    </div>
                </div>
            </div>
    </div>
  )
}
