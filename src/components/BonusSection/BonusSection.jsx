import React from 'react';
import './BonusSection.css';

const BonusSection = () => {
  return (
    <section id="bonus" className="section bonus-section">
      <div className="container">
        <h2 className="section-title">Bonus</h2>

        <div className="bonus-intro animate-fade-in">
          <p>Since you made it this far, here is a little treat.</p>
        </div>

        <div className="bonus-content-card glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bonus-flex-container">
            <div className="bonus-text">
              <h3>my understanding of modern infrastructure</h3>
            </div>
            <div className="bonus-image">
              <img src="/comic.png" alt="Modern Infrastructure Comic" />
            </div>
          </div>

          <div className="bonus-attribution">
            <p>Original comic from <a href="https://xkcd.com/2347/" target="_blank" rel="noopener noreferrer">xkcd.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
