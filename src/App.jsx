import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Link, Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Whyjava from './components/Whyjava';
import Syllabus from './components/Syllabus';
import Testimonials from './components/Testimonials';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Courses/>
      <Whyjava/>
      <Syllabus/>
      <Testimonials/>
     

     




    </BrowserRouter>
  )
}

export default App;
