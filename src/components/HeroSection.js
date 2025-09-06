import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        if (window.scrollY > heroHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Connecting Talent with 
            <span className="highlight"> Opportunity</span>
          </h1>
          <p className="hero-description">
            Best Infosystems Ltd. is a leading staffing and recruiting company based in Delhi, 
            specializing in IT, ITES, Banking, SCM, and Telecom sectors. We help businesses 
            find the right talent to drive success and growth.
          </p>
          <div className={`hero-buttons ${isFixed ? 'buttons-fixed' : ''}`}>
            <button className="btn-primary" onClick={() => window.location.href='/contact'}>Get Started</button>
            <button className="btn-secondary" onClick={() => window.location.href='/about'}>Learn More</button>
          </div>
        </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <img src={require('../assets/main1.jpeg')} alt="Main" className="hero-image" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
