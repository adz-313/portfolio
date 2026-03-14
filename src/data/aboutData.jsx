import React from 'react';

export const aboutData = {
  title: "About Me",
  leadText: (
    <>
      I am a Software Engineer with <span className="highlight-text">more than 3 years of experience</span> crafting robust backend systems and elegant software solutions.
    </>
  ),
  paragraphs: [
    (
      <>
        My expertise lies in building scalable, high-performance backends using <strong>Java and Spring Boot</strong>.
        I have a strong foundation in designing and implementing <strong>microservices architectures</strong> that can
        handle complex business requirements and high traffic loads efficiently.
      </>
    ),
    (
      <>
        Beyond general software engineering, I have a deep-rooted interest in <strong>finance systems and stock markets</strong>.
        I love the challenge of building systems that require low latency, high throughput, and absolute reliability—qualities
        essential in financial technology.
      </>
    )
  ],
  quickFacts: [
    {
      text: "Backend Specialist",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
      )
    },
    {
      text: "Microservices",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
      )
    },
    {
      text: "Fintech Enthusiast",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      )
    }
  ],
  stats: [
    { number: "3+", label: "Years of\nExperience" },
    { number: "10+", label: "Projects\nCompleted" },
    { number: "5+", label: "Microservices\nDeployed" }
  ]
};
