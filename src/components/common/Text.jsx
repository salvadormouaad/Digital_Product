// Parent component
import React from 'react'
import Card from './Card'
import Cardspo from './Cardspo'
import Cardapp from './Cardapp'
export default function () {
  return (
    <div id='Services' className='text-center md:text-4xl font-[Montserrat] md:font-large font-medium w-full'>
        <p className='text-center text-2xl md:ml-20 mb-4'>Too <span className='text-yellow-500'>CHEAP</span> For That Quality, Premium At Your <span className='text-yellow-500'>PRICE</span>!</p>

        <h3 className='md:hidden mt-10 my-6 text-2xl'> <b>Our Popular Services</b> </h3>
        <h3 className=' hidden md:block md:my-30 '> <b>Our Services</b> </h3>
       <div className='md:px-3 lg:pl-16 md:my-5  flex  flex-col md:flex-row justify-center items-center w-full gap-4 '> {/* Changed to gap-4 md:gap-0 */}
        
        <Card Type="Netflix" Duration="1 Month" Quality="Premium 4K" Price="55 DH"/>
        <Card Type="Netflix" Duration="3 Month" Quality="Premium 4K" Price="110 DH" className="hidden md:block"/>
        <Card Type="Netflix" Duration="6 Month" Quality="Premium 4K" Price="190 DH" className="hidden md:block"/>
        <Card Type="Netflix" Duration="12 Month" Quality="Premium 4K" Price="380 DH" className="hidden md:block"/>
      
      </div>


       <div className='md:px-3  lg:pl-16 md:my-5 my-4  flex flex-col md:flex-row justify-center items-center w-full gap-4 '> {/* Changed to gap-4 md:gap-0 */}
        <Cardspo Type="Spotify" Duration="1 Month" Quality="Premium " Price="30 DH"   />
        <Cardspo Type="Spotify" Duration="3 Month" Quality="Premium " Price="65 DH" className="hidden md:block"/>
        <Cardspo Type="Spotify" Duration="6 Month" Quality="Premium " Price="90 DH" className="hidden md:block"/>
        <Cardspo Type="Spotify" Duration="12 Month" Quality="Premium " Price="190 DH" className="hidden md:block"/>

      </div>


      <div className='md:px-3  lg:pl-16 md:my-5 flex flex-col md:flex-row justify-center items-center w-full gap-4 '>  {/* Changed to gap-4 md:gap-0 */}
        <Cardapp Type="Apple Music" Duration="1 Month" Quality="Premium " Price="30 DH"   />
        <Cardapp Type="Apple Music" Duration="3 Month" Quality="Premium " Price="60 DH" className="hidden md:block"/>
        <Cardapp Type="Apple Music" Duration="6 Month" Quality="Premium " Price="80 DH" className="hidden md:block"/>
        <Cardapp Type="Apple Music" Duration="12 Month" Quality="Premium " Price="160 DH" className="hidden md:block"/>

      </div>

      
      
    </div>
  )
}