export const projectsData = {
  title: "Featured Projects",
  projects: [
    {
      id: 1,
      name: "Flash Sale System",
      description: "Designed and built a high-concurrency flash sale system simulating large-scale e-commerce events with limited inventory and 10K+ simultaneous users. Implemented a token-based purchase flow with Kafka request queueing to prevent overselling, and used Redis distributed locking for atomic stock deduction across services. Built on a Java, Spring Boot, MySQL, and Kafka microservices stack with Redis caching to handle traffic spikes, containerized with Docker and architected for horizontal scalability and fault tolerance.",
      technologies: ["Java", "Spring Boot", "Redis", "Kafka", "MySQL", "Docker"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      name: "Meetwise",
      description: " Built an AI-powered meeting companion that transcribes audio/video files and extracts action items. Implemented audio transcription and speaker diarization to attribute dialogue. Working on ability to use self-hosted LLMs and browser extension for seamless integration.",
      technologies: ["OpenAI Whisper", "Pyannote.audio", "LangChain", "ReactJs", "SpringBoot", "Docker"],
      githubLink: "https://github.com/adz-313/meetwise-client",
      demoLink: "#"
    },
    {
      id: 3,
      name: "Make-A-Difference",
      description: "A decentralized fundraising application built on the Ethereum blockchain that allows users to freely raise funds for needs. Developed and tested smart contracts and integrated them into a back end. Designed a microservice-based architecure and contributed to a front end client and integrated with the microservice and the blockchain back-end, optimizing efficiency through the reduction of API calls. Showcased the idea and capabilities and advanced to the final round out of more than 50 projects at the PICT Impetus and Concepts event.",
      technologies: ["Ethereum", "Solidity", "NodeJs", "ReactJs", "Django"],
      githubLink: "https://github.com/adz-313/Make-A-Difference",
      demoLink: "https://make-a-difference.netlify.app/"
    },
    {
      id: 4,
      name: "Ratify",
      description: "A product review and rating blog website. Improved the blogging experience by integrating Google OAuth for easy authentication and support for Markdown. Additionally, implemented graphs to enhance rating visualization and comments feature for improved user interaction.",
      technologies: ["MongoDB", "NodeJs", "ReactJs", "Express", "GraphJs"],
      githubLink: "https://github.com/adz-313/Ratify",
      demoLink: "https://ratify.netlify.app/"
    }
  ]
};
