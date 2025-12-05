import React from 'react';
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <SectionTitle title="Projects" subtitle="Some of my recent work" />
        <div className="projects-grid">
          {personalData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

