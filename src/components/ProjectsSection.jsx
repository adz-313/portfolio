import React, { useState } from 'react';
import './ProjectsSection.css';
import { projectsData } from '../data/projectsData';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">{projectsData.title}</h2>
        
        <div className="projects-carousel">
          {projectsData.projects.map((project, index) => (
            <div  
              key={project.id} 
              className="project-card glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">
                {truncateText(project.description, 120)}
                {project.description.length > 120 && (
                  <button className="read-more-btn" onClick={() => openModal(project)}>
                    Read more
                  </button>
                )}
              </p>
              
              <ul className="project-tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={closeModal}>
          <div className="project-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="modal-title">{selectedProject.name}</h3>
            <div className="modal-content">
              <p className="modal-description">{selectedProject.description}</p>
            </div>
            
            <ul className="project-tech-list modal-tech-list">
              {selectedProject.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            
            <div className="modal-links">
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  View Code
                </a>
              )}
              {selectedProject.demoLink && selectedProject.demoLink !== "#" && (
                <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
