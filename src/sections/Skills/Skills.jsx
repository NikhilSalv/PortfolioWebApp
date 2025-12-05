import React from 'react';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />
        <div className="skills-grid">
          {personalData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

