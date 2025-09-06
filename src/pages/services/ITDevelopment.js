import React from "react";
import "./ITDevelopment.css";
import itdevelopment from "../../assets/it-development.mp4"; // apna IT wala video add kijiye

const ITDevelopment = () => {
  return (
    <div className="it-container">
      {/* Top Section */}
      <div className="it-hero">
        <h1>Hiring Demands in IT Development & Digital Transformation</h1>
        <p>
          Welcome to Bestinfo Systems, your trusted partner in IT recruitment. 
          With over a decade of experience, we connect top IT professionals 
          with leading organizations across the globe, helping them stay ahead 
          in the fast-evolving technology landscape.
        </p>
      </div>

      {/* Image Section */}
      <div className="it-image">
        <img
          src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
          alt="IT professionals"
        />
      </div>

      {/* Specialized Section */}
      <div className="specialized-section">
        <h2>IT Development Staffing Solutions You Can Trust</h2>
        <p>
          BestInfo provides highly skilled IT experts for projects ranging from 
          enterprise applications to next-gen technologies, ensuring agility and innovation.
        </p>

        <div className="specialized-layout">
          {/* Left */}
          <div className="specialized-item left">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
              alt="Software Development"
            />
            <div className="text">
              <h3>Software & Web Development</h3>
              <p>Full-stack, backend, frontend, and cloud-native solutions.</p>
            </div>
          </div>

          {/* Middle */}
          <div className="specialized-item middle">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
              alt="AI and Data"
            />
            <div className="text">
              <h3>AI, Data & Analytics</h3>
              <p>Big Data, Machine Learning, and real-time decision-making.</p>
            </div>
          </div>

          {/* Right */}
          <div className="specialized-item right">
            <div className="text">
              <h3>Cybersecurity & Cloud</h3>
              <p>Protecting enterprises with secure and scalable solutions.</p>
            </div>
            <img
              src="https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg"
              alt="Cybersecurity"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-box">
          <h2>15+ Years</h2>
          <p>IT Staffing Experience</p>
        </div>
        <div className="stat-box">
          <h2>12M+</h2>
          <p>Pre-screened IT Candidates</p>
        </div>
        <div className="stat-box">
          <h2>70%</h2>
          <p>Clients from Fortune 500</p>
        </div>
      </div>

      {/* Agile Workforce Section */}
      <div className="agile-section">
        <h2>
          <span className="highlight">Agile Workforce</span><br />
          Strategies for IT Development
        </h2>
        <p>
          BestInfo delivers flexible IT workforce solutions designed for rapid growth and innovation:
        </p>

        <ul className="agile-list">
          <li>
            <strong>On-Demand Developers</strong> – Scale up quickly with skilled engineers.
          </li>
          <li>
            <strong>Pre-Vetted Experts</strong> – Access a strong talent pool across domains.
          </li>
          <li>
            <strong>Project-Based Hiring</strong> – Flexible models for short and long-term needs.
          </li>
        </ul>

        <div className="expert-btn-container">
          <button className="expert-btn">Talk to an IT Expert</button>
        </div>
      </div>

      {/* Background Video Section */}
      <div className="expert-video">
        <video
          className="it-development"
          src={itdevelopment}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Hire Section */}
      <div className="hero-section">
        <div className="hero-left">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
            alt="Handshake"
          />
        </div>
        <div className="hero-right">
          <h1>
            Hire Top IT <br />
            <span className="highlight">Development Talent</span>
          </h1>
          <p>
            BestInfo delivers high-impact IT professionals with the speed, precision,
            and expertise needed to drive digital transformation. From startups to enterprises, 
            we help businesses scale and innovate faster.
          </p>
          <button className="expert-btn">Start Hiring Today</button>
        </div>
      </div>
    </div>
  );
};

export default ITDevelopment;
