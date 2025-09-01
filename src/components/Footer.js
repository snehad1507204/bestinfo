import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">BestInfo</span>
              <span className="logo-subtext">Systems</span>
            </div>
            <p className="footer-description">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge software development, AI solutions, and 
              digital transformation services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">🔗</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/BLogs">Blogs</a></li>
              <li><a href="/About">About Us</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">AI Solutions</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Cyber Security</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Tech Street, Innovation City</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@bestinfosystems.com">info@bestinfosystems.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest tech insights and updates</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 BestInfo Systems LLC. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
