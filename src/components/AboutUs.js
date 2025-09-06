import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import aboutImage from '../assets/about-sec.png';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      className="about-us-section"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{}}
    >
      <div className="container">
        <motion.div className="about-content" variants={containerVariants}>
          <motion.div className="about-text" variants={itemVariants}>
            <h2>About Best Infosystems Ltd.</h2>
            <p>
              Best Infosystems Ltd. is a premier staffing and recruiting company based in Delhi, 
              dedicated to connecting top talent with leading organizations. With over 26 years 
              of experience, we specialize in IT, ITES, Banking, SCM, and Telecom sectors, providing 
              customized recruitment solutions to meet the dynamic needs of our clients.
            </p>
            <div className="about-stats">
              <motion.div className="stat" variants={itemVariants}>
                <h3>145,000+</h3>
                <p>Followers on LinkedIn</p>
              </motion.div>
              <motion.div className="stat" variants={itemVariants}>
                <h3>1000+</h3>
                <p>Successful Placements</p>
              </motion.div>
              <motion.div className="stat" variants={itemVariants}>
                <h3>25+</h3>
                <p>Years of Experience</p>
              </motion.div>
            </div>
            <button className="btn-primary" onClick={() => window.location.href='/about'}>
              Learn More About Us
            </button>
          </motion.div>
          <motion.div className="about-image" variants={itemVariants}>
            <img src={aboutImage} alt="About Us" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
