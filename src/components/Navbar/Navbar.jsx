import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Portfolio
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#skills" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <Link to="/blog" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <a href="#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

