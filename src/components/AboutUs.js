import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About BestInfo Systems</h2>
            <p>
              BestInfo Systems is a leading technology solutions provider dedicated to 
              delivering innovative software development, IT consulting, and digital 
              transformation services. With years of experience and a team of skilled 
              professionals, we help businesses leverage technology to achieve their 
              goals and stay ahead in the competitive market.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Expert Developers</p>
              </div>
            </div>
            <button className="btn-primary">Learn More About Us</button>
          </div>
          <div className="about-image">
            <div className="tech-illustration">
              <div className="tech-icon">💻</div>
              <div className="tech-icon">🌐</div>
              <div className="tech-icon">📱</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
