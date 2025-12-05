import React from 'react';
import { personalData } from '../../data/personal';
import Button from '../../components/Button/Button';
import profileImage from '../../assets/images/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personalData.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalData.title}</h2>
            <p className="hero-description">{personalData.bio}</p>
            <div className="hero-buttons">
              <Button href="#contact" variant="primary">
                Get In Touch
              </Button>
              <Button href="#projects" variant="secondary">
                View My Work
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt={personalData.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

