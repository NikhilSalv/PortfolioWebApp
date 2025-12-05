import React from 'react';
import { personalData } from '../../data/personal';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{personalData.name}</h3>
            <p>{personalData.title}</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={personalData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

