import React from 'react';
import { motion } from "framer-motion";
import { personalData } from '../../data/personal';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Skills.css';

// Skill logo mapping - using official logos from CDN
const skillLogos = {
  // Languages
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  
  // Frameworks
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  
  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  
  // Cloud
  "AWS Lambda": "https://cdn.simpleicons.org/awslambda/FF9900",
  "EC2": "https://cdn.simpleicons.org/amazonec2/FF9900",
  "DynamoDB": "https://cdn.simpleicons.org/amazondynamodb/4053D6",
  
  // CI/CD & DevOps
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions/2088FF",
  
  // Testing
  "Pytest": "https://cdn.simpleicons.org/pytest/0A9EDC",
  "Unittest": "https://cdn.simpleicons.org/python/3776AB",
  
  // Machine Learning (using generic ML/data science icons)
  "Logistic Regression": "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "Linear Regression": "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "Random Forest": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Decision Tree": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "KNN": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  
  // LLM & GenAI
  "RAG": "https://cdn.simpleicons.org/openai/412991",
  "HuggingFace": "https://cdn.simpleicons.org/huggingface/FFD21E",
};

const getSkillLogo = (skillName) => {
  return skillLogos[skillName] || null;
};

const SkillBadge = ({ skill }) => {
  const [imageError, setImageError] = React.useState(false);
  const logoUrl = getSkillLogo(skill);

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="skill-badge"
    >
      {logoUrl && !imageError ? (
        <img 
          src={logoUrl} 
          alt={skill} 
          className="skill-logo"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="skill-fallback">💼</span>
      )}
      <span className="skill-name">{skill}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <SectionTitle title="" subtitle="Technologies I used" />
        <div className="skills-carousel-wrapper">
          {personalData.skills.map((section, idx) => (
            <React.Fragment key={idx}>
              <div className="skill-section">
                <motion.h2 
                  className="skill-category-title"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.category}
                </motion.h2>
                <div className="skill-carousel-container">
                  <div className="skill-carousel-wrapper-inner">
                    <motion.div
                      className="skill-carousel"
                      animate={{ 
                        x: ["-20%", "20%"]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      }}
                    >
                      {section.items.map((skill, index) => (
                        <SkillBadge 
                          key={`${section.category}-${index}`}
                          skill={skill}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
              {idx < personalData.skills.length - 1 && (
                <div className="skill-section-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
