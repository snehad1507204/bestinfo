import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: 'Technology visionary with 15+ years of experience in software development and business strategy.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '👩‍💻',
      description: 'Expert in cloud architecture and scalable systems with a passion for innovation.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '👨‍💻',
      description: 'Full-stack developer specializing in React, Node.js, and modern web technologies.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Emily Davis',
      role: 'UX/UI Designer',
      image: '👩‍🎨',
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      social: ['💼', '🐦', '🔗']
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to deliver exceptional technology solutions' },
    { year: '2019', event: 'First Major Client', description: 'Secured our first enterprise client and delivered successful projects' },
    { year: '2020', event: 'Team Expansion', description: 'Grew our team to 10+ skilled professionals across various domains' },
    { year: '2021', event: 'Cloud Partnership', description: 'Became certified partners with major cloud providers' },
    { year: '2022', event: 'AI Division Launch', description: 'Established dedicated AI and machine learning division' },
    { year: '2023', event: '50+ Projects', description: 'Successfully delivered over 50 projects to satisfied clients' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About BestInfo Systems</h1>
          <p className="hero-subtitle">
            Transforming businesses through innovative technology solutions since 2018
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                BestInfo Systems was founded in 2018 with a simple mission: to help businesses 
                leverage technology to achieve their goals. What started as a small team of 
                passionate developers has grown into a comprehensive technology solutions provider.
              </p>
              <p>
                Today, we work with businesses of all sizes, from startups to enterprises, 
                helping them navigate the complex world of technology and digital transformation. 
                Our team of experts brings together diverse skills in software development, 
                cloud computing, AI, and cybersecurity.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Team Members</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="tech-illustration-large">
                <div className="floating-icon">🚀</div>
                <div className="floating-icon">💡</div>
                <div className="floating-icon">🌐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge technology solutions that drive growth, 
                innovation, and digital transformation. We believe in making technology accessible 
                and beneficial for all.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner for businesses worldwide, known for our 
                innovation, reliability, and commitment to client success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to delivering excellence
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  {member.image}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                <div className="team-social">
                  {member.social.map((icon, i) => (
                    <span key={i} className="social-icon">{icon}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
