import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <AboutUs />
    </div>
  );
};

export default Home;
