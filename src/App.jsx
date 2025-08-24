// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import './App.css'
import PrivacyPolicy from './pages/Privacy.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx'
import End from './components/common/End.jsx'
import Reviews from './components/Reviews.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import './App.css';
import Bg from './assets/thibault-penin-vfesedi9cum-unsplash 1.png'
function App() {
  return (
    // <Home/>
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/Terms' element={<Terms/>}/>
        <Route path='/Privacy' element={<PrivacyPolicy/>}/>
         
    </Routes>
    

  );
}

export default App;