import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "IT Staffing",
      description: "Providing skilled IT professionals for contract, permanent, and contract-to-hire positions across various technologies.",
      icon: "👥",
      path: "/Services/ITStaffing"
    },
    {
      title: "ITES Recruitment",
      description: "Specialized recruitment for Information Technology Enabled Services including BPO, KPO, and customer support roles.",
      icon: "🔍",
      path: "/Services/ITESRecruitment"
    },
    {
      title: "Banking & Finance Staffing",
      description: "Expert recruitment for banking, financial services, and FinTech companies with compliance and regulatory expertise.",
      icon: "🏦",
      path: "/Services/BankingFinanceStaffing"
    },
    {
      title: "SCM & Logistics Recruitment",
      description: "Supply Chain Management and logistics professionals for procurement, warehousing, and distribution roles.",
      icon: "📦",
      path: "/Services/SCMLogisticsRecruitment"
    },
    {
      title: "Telecom Staffing Solutions",
      description: "Telecommunications specialists for network operations, customer service, and technical support positions.",
      icon: "📡",
      path: "/Services/TelecomStaffingSolutions"
    },
    {
      title: "Executive Search",
      description: "Senior-level recruitment and executive search services for leadership and management positions.",
      icon: "👔",
      path: "/Services/ExecutiveSearch"
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
            <Link key={index} to={service.path} className="service-link">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
