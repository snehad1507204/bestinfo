import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'info@bestinfosystems.com',
      link: 'mailto:info@bestinfosystems.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Address',
      info: '123 Tech Street, Innovation City, IC 12345',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="hero-subtitle">
            Ready to transform your business? Let's discuss your project and how we can help.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="info-description">
              Feel free to reach out to us through any of the following channels. 
              We're always happy to help!
            </p>

            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h3>{item.title}</h3>
                    {item.link !== '#' ? (
                      <a href={item.link} className="info-link">
                        {item.info}
                      </a>
                    ) : (
                      <p>{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📸</a>
                <a href="#" className="social-icon">🔗</a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Interactive Map Location</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity, but most web projects take 4-8 weeks, while mobile apps can take 8-16 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer ongoing support?</h3>
              <p>Yes, we provide comprehensive maintenance and support packages to ensure your project continues to perform optimally.</p>
            </div>
            <div className="faq-item">
              <h3>What technologies do you work with?</h3>
              <p>We work with modern technologies including React, Node.js, Python, AWS, Azure, and various AI/ML frameworks.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with existing teams?</h3>
              <p>Absolutely! We often collaborate with in-house teams to augment their capabilities and bring specialized expertise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
