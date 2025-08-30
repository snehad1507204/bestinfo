import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Wasty Besty" className="logo-img" />
          <span className="logo-text">BestInfo</span>
        </Link>


        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu Toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/Services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/BLogs" onClick={closeMenu}>Blogs</NavLink></li>
            <li><NavLink to="/About" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/Contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}