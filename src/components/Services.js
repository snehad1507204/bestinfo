import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '👥',
      title: 'IT Staffing',
      description: 'Providing skilled IT professionals to meet your project and business needs.',
      features: ['Contract Staffing', 'Permanent Staffing', 'Contract-to-Hire']
    },
    {
      icon: '🔍',
      title: 'Recruitment Process Outsourcing',
      description: 'Comprehensive recruitment solutions to streamline your hiring process.',
      features: ['Candidate Sourcing', 'Screening & Interviewing', 'Onboarding Support']
    },
    {
      icon: '🎯',
      title: 'Talent Acquisition',
      description: 'Strategic hiring to attract and retain top talent in IT, Banking, and Telecom sectors.',
      features: ['Executive Search', 'Campus Hiring', 'Diversity Hiring']
    },
    {
      icon: '🌐',
      title: 'Global Staffing',
      description: 'Connecting businesses with talent across multiple geographies and industries.',
      features: ['International Recruitment', 'Visa & Relocation Support', 'Compliance Management']
    },
    {
      icon: '📈',
      title: 'Consulting Services',
      description: 'Expert advice on workforce planning, HR strategy, and talent management.',
      features: ['Workforce Analytics', 'HR Policy Development', 'Training & Development']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive staffing and recruiting solutions tailored to your business needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
