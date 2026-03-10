import React from 'react';
import './AboutSection.css';
import { aboutData } from '../data/aboutData';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">{aboutData.title}</h2>
        
        <div className="about-content">
          <div className="about-text glass-card animate-fade-in">
            <p className="lead-text">
              {aboutData.leadText}
            </p>
            
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="quick-facts">
              {aboutData.quickFacts.map((fact, index) => (
                <div key={index} className="fact-item">
                  <div className="fact-icon">
                    {fact.icon}
                  </div>
                  <div className="fact-text">{fact.text}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-stats animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                <div className="stat-number highlight">{stat.number}</div>
                <div className="stat-label">
                  {stat.label.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br/>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
