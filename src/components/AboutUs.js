import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Best Infosystems Ltd.</h2>
            <p>
              Best Infosystems Ltd. is a premier staffing and recruiting company based in Delhi, 
              dedicated to connecting top talent with leading organizations. With over 30 years 
              of experience, we specialize in IT, ITES, Banking, SCM, and Telecom sectors, providing 
              customized recruitment solutions to meet the dynamic needs of our clients.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>145,000+</h3>
                <p>Followers on LinkedIn</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Successful Placements</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => window.location.href='/about'}>
              Learn More About Us
            </button>
          </div>
          <div className="about-image">
            <div className="tech-illustration">
              <div className="tech-icon">🤝</div>
              <div className="tech-icon">📈</div>
              <div className="tech-icon">🏢</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
