import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Health Care Pharma',
      description: 'Specialized staffing solutions for healthcare and pharmaceutical industries, ensuring compliance and expertise.',
      features: ['Medical Recruitment', 'Pharma Specialists', 'Regulatory Compliance Staffing']
    },
    {
      icon: '💻',
      title: 'IT Development',
      description: 'Providing top-tier developers and engineers for software development and technology projects.',
      features: ['Software Developers', 'Full-Stack Engineers', 'DevOps Specialists']
    },
    {
      icon: '🔍',
      title: 'IT Recruitment',
      description: 'Comprehensive recruitment services tailored for IT roles across all levels and technologies.',
      features: ['Tech Talent Search', 'Skill Assessment', 'Placement Services']
    },
    {
      icon: '📚',
      title: 'IT Training',
      description: 'Professional training programs to upskill IT professionals and teams.',
      features: ['Certification Programs', 'Skill Development', 'Corporate Training']
    },
    {
      icon: '👔',
      title: 'Staffing-Non IT',
      description: 'Versatile staffing solutions for non-IT roles in various industries and sectors.',
      features: ['Administrative Roles', 'Operations Staffing', 'General Recruitment']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [slidePercent, setSlidePercent] = useState(33.333);
  const [maxIndex, setMaxIndex] = useState(2);
  const [gridWidth, setGridWidth] = useState('166.666%');
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobile(true);
        setVisibleCards(1);
        setSlidePercent(20); // For mobile slider if needed
        setMaxIndex(services.length - 1);
        setGridWidth('500%');
      } else {
        setIsMobile(false);
        let visCards = 3; // Default to 3 cards
        if (width < 1024) {
          visCards = 2; // Tablet: 2 cards
        }
        setVisibleCards(visCards);
        setSlidePercent(20); // Shift by full set
        setMaxIndex(services.length - visCards);
        setGridWidth(`${(services.length / visCards) * 100}%`);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setLeftDisabled(currentIndex === 0);
    setRightDisabled(currentIndex === maxIndex);
  }, [currentIndex, maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive staffing and recruiting solutions tailored to your business needs
          </p>
        </div>

        {isMobile ? (
          <div className="services-mobile-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card service-card-${index}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title css-color-title">{service.title}</h3>
                <p className="service-description css-color-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="slider-container">
            <button className="slider-arrow left-arrow" onClick={prevSlide} disabled={leftDisabled} aria-label="Previous Slide">&#10094;</button>

            <div className="slider-window">
              <div
                className="services-grid"
                style={{ width: gridWidth, transform: `translateX(-${currentIndex * slidePercent}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className={`service-card service-card-${index}`} style={{ flexBasis: `${100 / visibleCards}%` }}>
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title css-color-title">{service.title}</h3>
                    <p className="service-description css-color-description">{service.description}</p>
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

            <button className="slider-arrow right-arrow" onClick={nextSlide} disabled={rightDisabled} aria-label="Next Slide">&#10095;</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
