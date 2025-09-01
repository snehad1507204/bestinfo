import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies like React, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance']
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Artificial Intelligence and Machine Learning solutions to automate processes and gain valuable insights.',
      features: ['Machine Learning', 'Data Analysis', 'Automation']
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for businesses of all sizes.',
      features: ['AWS & Azure', 'Scalable', 'Secure']
    },
    {
      icon: '🔒',
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and customer data.',
      features: ['Data Protection', 'Threat Detection', 'Compliance']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Visualization', 'Real-time Analytics', 'Custom Reports']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your business needs
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
};

export default Services;
