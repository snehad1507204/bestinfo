import React, { useState } from 'react';
import './Contact.css';
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    budget: '',
    message: '',
    attachment: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        budget: '',
        message: '',
        attachment: null
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'info@bestinfosystems.co.in',
      link: 'mailto:info@bestinfosystems.co.in'
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: '📍',
      title: 'Address',
      info: 'Delhi, India',
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
            Ready to connect with the best talent? Reach out to us today.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <p className="form-description">Fill out the form below and we'll get back to you within 24 hours.</p>

            {submitSuccess && (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll respond to your inquiry shortly.</p>
              </div>
            )}

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
                    className={errors.name ? 'error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
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

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Inquiry Type *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="staffing">IT Staffing</option>
                    <option value="recruitment">Recruitment Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                    <option value="2l-10l">₹2,00,000 - ₹10,00,000</option>
                    <option value="10l-50l">₹10,00,000 - ₹50,00,000</option>
                    <option value="above-50l">Above ₹50,00,000</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and any specific skills you're looking for..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="attachment">Attachment (Optional)</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx,.txt"
                  className="file-input"
                />
                <small className="file-hint">Upload project requirements, job descriptions, or relevant documents (PDF, DOC, DOCX, TXT - Max 5MB)</small>
              </div>

              {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
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
              <h3 className='follow-us-text'>Follow Us</h3>
              {/* <p style={{ marginBottom: '20px', fontWeight: '600' }}>Follow Us</p> */}
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook" className="social-icon"><FaFacebook /></a>
                <a href="https://twitter.com" aria-label="Twitter" className="social-icon"><FaInstagram /></a>
                <a href="https://instagram.com" aria-label="Instagram" className="social-icon"><FaYoutube /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="map-container">
              <h3>Our Location</h3>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c4b000001%3A0x1234567890abcdef!2sLaxmi%20Nagar%20Vikas%20Marg%2C%20Delhi%20110092%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Best Info Systems Location"
                ></iframe>
              </div>
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
