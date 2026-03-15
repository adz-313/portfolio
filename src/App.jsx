import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import AchievementsSection from './components/Achievements/Achievements';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        {/* <AchievementsSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
