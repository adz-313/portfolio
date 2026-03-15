import './ContactSection.css';
import { socialLinks } from '../../data/socialLinks';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section flex-center text-style-contact">
      <div className="container contact-container-typo">
        <h2 className="typo-heading animate-fade-in">
          SAY <span className="typo-highlight">HELLO</span>
        </h2>

        <a href={`mailto:${socialLinks.email}`} className="typo-email animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {socialLinks.email}
        </a>

        <div className="typo-links animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="typo-link">
            LinkedIn
            <span className="typo-arrow">↗</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="typo-link">
            GitHub
            <span className="typo-arrow">↗</span>
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="typo-link">
            Instagram
            <span className="typo-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
