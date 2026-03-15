import React from 'react';
import './HeroSection.css';
import { heroData } from '../../data/heroData';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">

        <div className="hero-main-text animate-fade-in">
          <h1 className="hero-title">
            {heroData.title[0]}<br />
            {heroData.title[1]}<br />
            <span className="highlight-text-outline">{heroData.title[2]}</span>
          </h1>
        </div>

        <div className="hero-info-grid animate-fade-in" style={{ animationDelay: '0.2s' }}>

          <div className="info-box intro-box">
            <div className="intro-header">

              <div className="profile-image-container">
                <img
                  src={heroData.profileImage}
                  alt={heroData.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'inline-flex';
                  }}
                />
                <span className="profile-initials">{heroData.initials}</span>
              </div>

              <div>
                <h2 className="intro-name">{heroData.name}</h2>
                <p className="intro-role">{heroData.role}</p>
              </div>
            </div>
            <p className="intro-desc">
              {heroData.description}
            </p>
          </div>

          <div className="info-box action-box">
            <div className="hero-cta-buttons">
              <a href={heroData.links.projects} className="btn btn-primary btn-sm btn-block">View Projects</a>
              <a href={heroData.links.resume} className="btn btn-secondary btn-sm btn-block" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>

            <div className="hero-minimal-socials">
              <a href={heroData.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <span className="separator"></span>
              <a href={heroData.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="hero-grid-bg"></div>
      </div>
    </section>
  );
};

export default HeroSection;
