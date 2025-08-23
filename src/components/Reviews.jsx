import React from 'react'
import ReviewBox from '../components/common/ReviewBox' 
import photo from "../assets/circle-photo-768x577.jpg"
import photo2 from "../assets/png-transparent-binary-option-options-strategies-investment-currency-converter-male-student-face-investment-option.png"
export default function Reviews() {
  return (
    <div>
        <h1 className='text-center  mt-10 text-4xl mt-30 md:mt-40'> <b>Reviews</b> </h1>
            <div className='flex flex-col lg:flex-row md:mt-30 lg:justify-center gap-15'>
                <p className='text-center text-3xl md:mt-0 lg:pt-20 mt-20 lg:mt-0   md:ml-0 '>What Our <span className='text-orange-400'>Latest clients</span> say about us:</p>
                <div className='flex flex-row ml-10 md: md:justify-center'>
                    <ReviewBox photo={photo} name="Manal" stars="★★★★★" Cmt="2 years w ana 5dama m3ahom A7ssn Service"/>
                    <ReviewBox photo={photo2} name="Mouad" stars="★★★★★" Cmt="3ndhom a7ssn support sara7a"/>
                </div>
            </div>
    </div>
  )
}
