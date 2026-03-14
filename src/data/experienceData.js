export const experiencesData = {
  title: "Experience",
  experiences: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Persistent Systems Ltd.",
      period: "2024 - Present",
      description: ["Developed and maintained core backend APIs for a platform serving 100K+ users, building RESTful services in Java and Spring with clean controller-service architecture. Upgraded performance of read-heavy backend services by 80 percent using optimized SQL joins, Hibernate mappings and DTO patterns. Upgraded ElasticSearch to latest version and improved performance by optimizing queries and tuning shard allocation."],
      technologies: ["Java", "Spring Boot", "Elasticsearch", "Hibernate"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Persistent Systems Ltd.",
      period: "2022 - 2024",
      description: ["Developed a module to handle end-to-end attachment uploads and client email sending, eliminating manual database queries and reducing processing time by 70%.", "Created a new module to consolidate user activity and display data in tables and charts within the admin tool, removing the need for query based analysis saving time taken by 30%."],
      technologies: ["Spring MVC", "Gradle", "Oracle SQL", "Apache ActiveMQ", "BitBucket", "Jira", "Confluence"]
    }
  ]
};
