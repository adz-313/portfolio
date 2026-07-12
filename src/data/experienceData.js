export const experiencesData = {
  title: "Experience",
  experiences: [
    {
      id: 1,
      role: "Lead Software Engineer",
      company: "Persistent Systems Ltd.",
      period: "Apr 2026 - Present",
      description: [
        "Developed REST APIs for features with over 100k active users by implementing controller and service methods to support UI and business logic, following SOLID principles for maintainable and scalable code",
        "Migrated production Elasticsearch infrastructure from version 7 to 9 with minimal production downtime by provisioning and configuring a new cluster, enabling query-level authentication, performing data migration from the legacy system, and updating search queries to ensure compatibility and reliability",
        "Increased search performance and decreased memory consumption by about 22 percent (32 GB to 25 GB) in the Elasticsearch cluster by rewriting and optimizing queries and tuning shard allocation, resulting in faster query execution and more efficient utilization of system resources",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Gradle",
        "Oracle SQL",
        "Apache ActiveMQ",
        "BitBucket",
        "Jira",
        "Confluence",
      ],
    },
    {
      id: 2,
      role: "Senior Software Engineer",
      company: "Persistent Systems Ltd.",
      period: "Aug 2024 - Apr 2026",
      description: [
        "Upgraded performance of read-heavy backend services, reducing response times from 90s to under 5s, by redesigning database access layers using optimized SQL joins, Hibernate mappings and DTO patterns.",
        "Mitigated security vulnerabilities by 55 percent (112 to 50) by identifying and resolving critical XSS and CSRF issues, strengthening the security and reliability of core backend services.",
        "Maintained 100 percent application uptime by managing CI/CD pipelines with Jenkins and artifact management with Apache Archiva, enabling consistent builds and deployments to WildFly servers.",
      ],
      technologies: ["Java", "Spring Boot", "Elasticsearch", "Hibernate"],
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "Persistent Systems Ltd.",
      period: " Aug 2022 - Aug 2024",
      description: [
        "Reduced manual data processing time by 70% by designing and implementing a Java Spring-based backend service that handled asynchronous attachment uploads and automated client email delivery, improving reliability and system throughput",
        "Optimized operational efficiency by 30% by building a data aggregation module that consolidated application data and displayed key application analytics, eliminating manual SQL-based analysis",
        "Improved development productivity upto 20% by integrating GitHub Copilot into daily development work- flows, speeding implementation of features and bug fixes while maintaining code quality and consistency.",
      ],
      technologies: ["Java", "Spring Boot", "Gradle", "Oracle SQL"],
    },
  ],
};
