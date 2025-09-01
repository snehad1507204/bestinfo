import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Ideas into 
            <span className="highlight"> Digital Excellence</span>
          </h1>
          <p className="hero-description">
            We are a cutting-edge technology company specializing in innovative 
            software solutions, AI-driven applications, and digital transformation 
            services that propel businesses into the future.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="tech-animation">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="main-tech-icon">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
