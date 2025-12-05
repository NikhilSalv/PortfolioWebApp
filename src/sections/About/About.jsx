import React from 'react';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <div className="about-content">
          <div className="about-text">
            <p>{personalData.bio}</p>
            <div className="about-info">
              <div className="info-item">
                <strong>Email:</strong> {personalData.email}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {personalData.location}
              </div>
              <div className="info-item">
                <strong>Phone:</strong> {personalData.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

