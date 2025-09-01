import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and responsive websites built with modern technologies.",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      icon: "☁️"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      icon: "🤖"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates exceptional digital experiences.",
      icon: "🎨"
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development workflows and automated deployment pipelines.",
      icon: "⚙️"
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
