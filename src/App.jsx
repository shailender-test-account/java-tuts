import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Link, Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Whyjava from './components/Whyjava';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonials/>
      <Footer/>
     




    </BrowserRouter>
  )
}

export default App;
