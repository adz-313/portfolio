export const projectsData = {
  title: "Featured Projects",
  projects: [
    {
      id: 1,
      name: "High-Frequency Trading Engine",
      description: "A low-latency trading engine built using Java and Spring Boot. Processes market data feeds and executes trades with sub-millisecond precision. Includes a risk-management module to monitor exposure in real-time.",
      technologies: ["Java", "Spring Boot", "Kafka", "WebSockets", "Redis"],
      githubLink: "https://github.com",
      demoLink: "#" // Optional
    },
    {
      id: 2,
      name: "Distributed API Gateway",
      description: "Custom lightweight API Gateway supporting dynamic routing, rate limiting, and JWT authentication. Designed to sit in front of a microservices cluster to handle cross-cutting concerns efficiently.",
      technologies: ["Java", "Spring WebFlux", "Redis", "JWT", "Docker", "SSE"],
      githubLink: "https://github.com",
      demoLink: "#"
    },
    {
      id: 3,
      name: "Real-time Portfolio Tracker",
      description: "A comprehensive dashboard for tracking stock and cryptographic assets. Utilizes reactive programming to stream live price updates and compute portfolio metrics on the fly.",
      technologies: ["React", "Spring Boot", "R2DBC", "PostgreSQL", "SSE"],
      githubLink: "https://github.com",
      demoLink: "https://example.com"
    },
    {
      id: 4,
      name: "Cloud-Native E-commerce Microservices",
      description: "A scalable e-commerce backend built with Java and Spring Cloud. Includes service discovery, API routing, and event-driven architecture utilizing Apache Kafka for asynchronous order processing.",
      technologies: ["Java", "Spring Cloud", "Kafka", "PostgreSQL", "Kubernetes"],
      githubLink: "https://github.com",
      demoLink: "#"
    }
  ]
};
