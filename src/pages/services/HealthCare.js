import React from "react";
import "./HealthCare.css";
import healthCare from "../../assets/healthcare.mp4";

const HealthCare = () => {
  return (
    <div className="healthcare-container">
      {/* Top Section */}
      <div className="healthcare-hero">
        <h1>Hiring Demands in Healthcare, Pharma, and Biotechnology</h1>
        <p>
          Welcome to Bestinfo Systems, where our passion for healthcare meets our commitment to exceptional staffing solutions. With over 10 years in the industry, we specialize in connecting top-tier healthcare professionals with organizations across the world.
        </p>
      </div>

      {/* Image Section */}
      <div className="healthcare-image">
        <img
          src="https://www.fathym.com/img/iothealthcare.png"
          alt="Healthcare professionals"
        />
      </div>

      {/* Specialized Section */}
      <div className="specialized-section">
        <h2>Healthcare Staffing Solutions You Can Trust</h2>
        <p>
          BestInfo connects healthcare organizations with top talent, providing precise and reliable staffing solutions to meet the evolving needs of the industry
        </p>

        <div className="specialized-layout">

          {/* Left */}
          <div className="specialized-item left">
            <img
              src="https://images.pexels.com/photos/4033304/pexels-photo-4033304.jpeg"
              alt="Healthcare IT"
            />
            <div className="text">
              <h3>Healthcare IT & Digital Transformation</h3>
              <p>AI, cloud computing, and cybersecurity.</p>
            </div>
          </div>

          {/* Middle */}
          <div className="specialized-item middle">
            <img
              src="https://images.pexels.com/photos/9574399/pexels-photo-9574399.jpeg"
              alt="Life Sciences"
            />
            <div className="text">
              <h3>Life Sciences & Biopharma</h3>
              <p>Virtual trials, R&D, and regulatory compliance.</p>
            </div>
          </div>

          {/* Right */}
          <div className="specialized-item right">
            <div className="text">
              <h3>Healthcare Product Development</h3>
              <p>Training, research, and medical technology.</p>
            </div>
            <img
              src="https://images.pexels.com/photos/8657300/pexels-photo-8657300.jpeg"
              alt="Healthcare Product Development"
            />
          </div>

        </div>
      </div>


      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>29+ Years</h2>
          <p>Industry Experience</p>
        </div>
        <div className="stat-box">
          <h2>14M</h2>
          <p>Pre-screened Candidates</p>
        </div>
        <div className="stat-box">
          <h2>60%</h2>
          <p>of clients are Fortune 500</p>
        </div>
      </div>

      {/* Agile Workforce Section */}
      <div className="agile-section">
        <h2>
          <span className="highlight">Agile Workforce</span><br />
          Strategies for Healthcare & Life Sciences
        </h2>
        <p>
          Collabera delivers flexible workforce solutions that adapt to shifting industry needs:
        </p>

        <ul className="agile-list">
          <li>
            <strong>Strategic Talent Deployment</strong> – Rapidly scale teams based on market shifts.
          </li>
          <li>
            <strong>Pre-Vetted Experts</strong> – Access a pool of specialized professionals.
          </li>
          <li>
            <strong>Regulatory Compliance Alignment</strong> – Ensure adherence to healthcare standards.
          </li>
        </ul>

        {/* Talk to Expert Button */}
        <div className="expert-btn-container">
          <button className="expert-btn">Talk to an Expert</button>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="expert-video">
        <video
          className="healthcare"
          src={healthCare}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* NEW: Hire Top Healthcare Section */}
      <div className="hero-section">
        <div className="hero-left">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Handshake"
          />
        </div>
        <div className="hero-right">
          <h1>
            Hire Top Healthcare <br />
            <span className="highlight">& Life Sciences Talent</span>
          </h1>
          <p>
            Collabera delivers high-impact talent with the speed, precision,
            and expertise needed to drive transformation—whether in finance,
            healthcare, technology, energy, or beyond. Our adaptable workforce
            solutions help businesses stay ahead in evolving markets.
          </p>
          <button className="expert-btn">Start Hiring Today</button>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
