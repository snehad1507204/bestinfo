import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Mr. Rajesh Sachan',
      role: 'Founder & Chairman',
      image: '👨‍💼',
      description: 'Founder of Best Infosystems Ltd., with extensive experience in staffing and recruiting across IT and Telecom sectors.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Ms. Anjali Sharma',
      role: 'Managing Director',
      image: '👩‍💼',
      description: 'Leading the company with a focus on client relationships and business growth in staffing solutions.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Mr. Amit Verma',
      role: 'Head of Recruitment',
      image: '👨‍💼',
      description: 'Expert in talent acquisition and recruitment process outsourcing for IT and Telecom industries.',
      social: ['💼', '🐦', '🔗']
    },
    {
      name: 'Ms. Priya Singh',
      role: 'HR Manager',
      image: '👩‍💼',
      description: 'Responsible for internal HR operations and employee engagement.',
      social: ['💼', '🐦', '🔗']
    }
  ];

  const milestones = [
    { year: '1992', event: 'Company Founded', description: 'Established Best Infosystems Ltd. with a vision to provide top staffing solutions.' },
    { year: '2000', event: 'Expanded Services', description: 'Broadened recruitment services to include IT, Banking, and Telecom sectors.' },
    { year: '2010', event: 'National Presence', description: 'Established offices across major cities in India.' },
    { year: '2015', event: 'International Clients', description: 'Started serving clients globally with customized staffing solutions.' },
    { year: '2020', event: 'Digital Transformation', description: 'Integrated technology to enhance recruitment processes.' },
    { year: '2024', event: '145,000+ LinkedIn Followers', description: 'Achieved significant social media presence and brand recognition.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Best Infosystems Ltd.</h1>
          <p className="hero-subtitle">
            Leading staffing and recruiting company based in Delhi, connecting talent with opportunity since 1999.
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
                Best Infosystems Ltd. was founded in 1999 with a mission to provide exceptional staffing and recruiting services. 
                Over the years, we have grown into a trusted partner for businesses across IT, Banking, SCM, and Telecom sectors.
              </p>
              <p>
                Our commitment to quality and client satisfaction has helped us build long-lasting relationships and a strong reputation in the industry.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>145,000+</h3>
                  <p>LinkedIn Followers</p>
                </div>
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Successful Placements</p>
                </div>
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Dedicated Team Members</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="staff-illustration-large">
                <div className="floating-icon">🤝</div>
                <div className="floating-icon">🏢</div>
                <div className="floating-icon">📈</div>
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
                To connect the right talent with the right opportunities, empowering businesses to grow and succeed.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the most trusted staffing partner recognized for excellence, innovation, and client satisfaction.
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
