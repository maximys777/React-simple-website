import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developers from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Developers/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default App;
