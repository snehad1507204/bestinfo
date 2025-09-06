import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import ServicesMenu from "./ServicesMenu";
import './Navbar.css'; // Add your styles here

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); // 1 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="top-bar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="topbar-left">
        <img src={require('../assets/logo.png')} alt="Logo" className="topbar-logo" />
      </div>
      <div className="topbar-right">
        <div className="social-icons">
          <a href="/"><i className="fab fa-facebook-f" /></a>
          <a href="/"><i className="fab fa-twitter" /></a>
          <a href="/"><i className="fab fa-linkedin-in" /></a>
          <a href="/"><i className="fab fa-instagram" /></a>
        </div>
        <div className="contact-info">
          <span>📧 feedback@bestinfosystems.com</span>
          <span>📞 +1 475-242-5790</span>
        </div>
      </div>
    </motion.div>
  );
};

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Services', path: '#', component: <ServicesMenu /> }, 
    { name: 'Industries', path: '#' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'Career Opportunities', path: '#' },
    { name: 'Contact us', path: '/Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={require('../assets/logo.png')} alt="Logo" className="mobile-logo" />
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className={`menu-item ${item.name === 'Services' ? 'services' : ''} ${location.pathname === item.path ? 'active' : ''}`}
            onMouseEnter={() => setOpenMenu(idx)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              {item.name === 'Services' && <FaChevronDown style={{ marginLeft: '5px' }} />}
            </Link>

            {/* 👇 Agar component mila to render hoga */}
            {item.component && openMenu === idx && (
              <div
                className="mega-menu"
                onMouseEnter={() => setOpenMenu(idx)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.component}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <header>
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Navbar;
