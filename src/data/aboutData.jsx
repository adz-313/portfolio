import React from 'react';

export const aboutData = {
  title: "About Me",
  leadText: (
    <>
      I am a FullStack Software Engineer with <span className="highlight-text">more than 3 years of experience</span> turning coffee and sleep deprivation into robust backend systems and elegant UI solutions.
    </>
  ),
  paragraphs: [
    (
      <>
        I'm a backend engineer with a passion for building systems that are fast, reliable, and — most importantly — don't wake anyone up at 3am.
        I work primarily in Java and Spring, which means I've developed a healthy respect for clean architecture and an unhealthy familiarity with cryptic stack traces.
        When I'm not optimizing queries that someone else wrote in 2011, I'm writing unit tests for code that "definitely doesn't need unit tests." Spoiler: it always needs unit tests.
      </>
    ),
    (
      <>
        In my free time, I also explore new technologies like GenAI, working my way up to the pinnacle of modern programming — otherwise known as Vibe Coding.
        Beyond software engineering, I also have a knack for thriller movies and books, singing, badminton,and volunteering. If you like any of these activities, hit me up!
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
      text: "GenAI Enthusiast",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
      )
    }
  ],
  stats: [
    { number: "3+", label: "Years of\nExperience" },
    { number: "7+", label: "Projects\nCompleted" },
    { number: "5+", label: "Microservices\nDeployed" }
  ]
};
