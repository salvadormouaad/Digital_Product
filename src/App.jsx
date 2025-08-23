// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
    <Home/>

  );
}

export default App;