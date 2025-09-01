import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "IT Staffing",
      description: "Providing skilled IT professionals for contract, permanent, and contract-to-hire positions across various technologies.",
      icon: "👥"
    },
    {
      title: "ITES Recruitment",
      description: "Specialized recruitment for Information Technology Enabled Services including BPO, KPO, and customer support roles.",
      icon: "🔍"
    },
    {
      title: "Banking & Finance Staffing",
      description: "Expert recruitment for banking, financial services, and FinTech companies with compliance and regulatory expertise.",
      icon: "🏦"
    },
    {
      title: "SCM & Logistics Recruitment",
      description: "Supply Chain Management and logistics professionals for procurement, warehousing, and distribution roles.",
      icon: "📦"
    },
    {
      title: "Telecom Staffing Solutions",
      description: "Telecommunications specialists for network operations, customer service, and technical support positions.",
      icon: "📡"
    },
    {
      title: "Executive Search",
      description: "Senior-level recruitment and executive search services for leadership and management positions.",
      icon: "👔"
    }
  ];

  return (
    <section className="services-page">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We offer comprehensive technology solutions to help your business thrive in the digital age.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
