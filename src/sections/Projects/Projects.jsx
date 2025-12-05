import React from 'react';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import project1Image from '../../assets/images/project1.jpg';
import project2Image from '../../assets/images/project2.jpg';
import './Projects.css';

// Map project IDs to imported images
const projectImages = {
  1: project1Image,
  2: project2Image,
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <SectionTitle title="Projects" subtitle="Some of my recent work" />
        <div className="projects-grid">
          {personalData.projects.map((project) => {
            const projectImage = projectImages[project.id];
            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {projectImage ? (
                    <img 
                      src={projectImage} 
                      alt={project.title} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999'
                    }}>
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <Button href={project.github} variant="secondary" target="_blank">
                    GitHub
                  </Button>
                  <Button href={project.live} variant="primary" target="_blank">
                    Live Demo
                  </Button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

