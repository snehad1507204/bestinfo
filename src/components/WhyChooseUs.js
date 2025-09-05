import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '🚀',
    title: 'Proven Delivery Excellence',
    description:
      'With years of experience in offshore software development and global outsourcing, we consistently deliver projects on time, within budget, and beyond expectations.'
  },
  {
    icon: '💡',
    title: 'Deep Domain Expertise',
    description:
      'Our team brings specialized knowledge across IT, engineering, healthcare, and more — ensuring solutions are tailored to your industry’s unique needs.'
  },
  {
    icon: '🌐',
    title: 'Global Reach, Local Touch',
    description:
      'We combine worldwide talent access with personalized client engagement, ensuring cultural alignment and seamless collaboration.'
  },
  {
    icon: '⚙️',
    title: 'Full-Stack Capabilities',
    description:
      'From application services to IT infrastructure, we provide end-to-end solutions that power your digital transformation.'
  },
  {
    icon: '🤝',
    title: 'Trusted Partnerships',
    description:
      'We work with leading technology platforms and industry leaders to bring you the best tools, strategies, and innovations.'
  },
  {
    icon: '📊',
    title: 'Value-Driven Approach',
    description:
      'Our cost-effective global delivery model ensures you get maximum ROI without compromising on quality or innovation.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Us</h2>
          <p className="why-choose-subtitle">
            Empowering your business with expertise, innovation, and trust.
          </p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-choose-card">
              <div className="why-choose-icon">{reason.icon}</div>
              <h3 className="why-choose-card-title">{reason.title}</h3>
              <p className="why-choose-card-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
