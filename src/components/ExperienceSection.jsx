import React from 'react';
import './ExperienceSection.css';
import { experiencesData } from '../data/experienceData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">{experiencesData.title}</h2>
        
        <div className="timeline">
          {experiencesData.experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item animate-fade-in`} 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="period highlight-text">{exp.period}</span>
                </div>
                <h4 className="company"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {exp.company}</h4>
                <p className="description">{exp.description}</p>
                
                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
