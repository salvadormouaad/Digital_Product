import React from 'react'
import '../App.css'
// import Hero from '../components/HeroSection.jsx'
import Navbar from '../components/Navbar.jsx'
// import End from '../components/common/End.jsx'
// import Services from '../components/Services.jsx'
import Reviews from '../components/Reviews.jsx'
import Bg from '../assets/thibault-penin-vfesedi9cum-unsplash 1.png'
import FAQ from "../components/FAQ.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
import Products from '../components/Products.jsx'
import Title from '../components/common/Title.jsx'
export default function Home() {
  return (
    <>
    <div className='bg-cover bg-center max-md:h-auto lg:h-auto md:h-auto md:h-150 bg-[#161616]' >
      <Navbar/>
      <Title/>
      <Products/>
    </div>
    

      <Reviews/>
      {/* <div className='bg-[#161616]'> */}
      <FAQ/>
      {/* </div> */}
      <div id='contact'>
        <Contact/>
      </div>
      
      <Footer/>
    </>
  )
}
