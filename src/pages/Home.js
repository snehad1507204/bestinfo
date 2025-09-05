import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Partnerships from '../components/Partnerships';
import WhyChooseUs from '../components/WhyChooseUs';

import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Partnerships />
      
      
    </div>
  );
};

export default Home;
