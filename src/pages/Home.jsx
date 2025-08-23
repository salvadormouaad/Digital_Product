import React from 'react'
import '../App.css'
import Hero from '../components/HeroSection.jsx'
import Navbar from '../components/Navbar.jsx'
import End from '../components/common/End.jsx'
import Services from '../components/Services.jsx'
import Reviews from '../components/Reviews.jsx'
import Bg from '../assets/thibault-penin-vfesedi9cum-unsplash 1.png'
import FAQ from "../components/FAQ.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
export default function Home() {
  return (
    <>
    <div className='bg-cover bg-center max-md:h-118 h-150 md:h-150' style={{ backgroundImage: `url(${Bg})` }}>
      <Navbar/>
      <Hero/>
      <End/>
    </div>
    <div id='services' className='mt-25 md:mt-60'>
        <Services/>
    </div>  

      <Reviews/>
      <FAQ/>
      <div id='contact'>
        <Contact/>
      </div>
      
      <Footer/>
    </>
  )
}
