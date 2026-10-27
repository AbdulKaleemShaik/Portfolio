export const personalInfo = {
  name: "Abdul Kaleem Shaik",
  title: "Software Engineer",
  tagline: "Building high-performance backend systems that scale.",
  email: "abdulkaleem.dev@gmail.com",
  phone: "9676745715",
  github: "https://github.com/AbdulKaleemShaik",
  linkedin: "https://www.linkedin.com/in/skabdulkaleem/",
  leetcode: "https://leetcode.com/u/AbdulKaleemShaik/",
  avatarUrl: "https://avatars.githubusercontent.com/u/131956728?v=4",
  summary:
    "Software Engineer with 2 years of experience building scalable backend systems using Java, Spring Boot, and Node.js. Improved API latency by 25% and reduced database load by 40% using Redis caching in production systems serving 10K+ users. Skilled in architecting REST APIs, optimizing database performance, and deploying on AWS via Docker and CI/CD pipelines.",
};

export const stats = [
  { label: "LeetCode Problems", value: "795+" },
  { label: "Production Features", value: "8+" },
  { label: "API Latency Reduced", value: "25%" },
  { label: "DB Load Reduced", value: "40%" },
];

export const skills = {
  Backend: [
    "Java (Oracle Certified)",
    "BullMQ",
    "WebSockets",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Microservices",
    "JWT",
  ],
  Frontend: ["React.js", "HTML5", "CSS3", "Next.js"],
  Databases: ["MySQL", "MongoDB", "Redis", "Flyway"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Prometheus", "CI/CD"],
  Core: ["Data Structures & Algorithms", "OOP", "SOLID Principles", "System Design"],
};

export const projects = [
  {
    id: 7,
    title: "NotifyFlow: Multi-Tenant Notification Engine",
    description:
      "Multi-channel notification platform delivering in-app (WebSocket), email and webhook notifications per tenant, with async BullMQ queues, a hand-written Redis sliding-window rate limiter and a real-time analytics pipeline.",
    techStack: ["Node.js", "Express", "BullMQ", "Redis", "MongoDB", "WebSockets", "Prometheus", "Docker"],
    highlights: [
      "Idempotent BullMQ workers with retries and dead-letter handling, preventing duplicate notifications",
      "Redis sorted-set sliding-window rate limiter and JWT refresh-token rotation per tenant",
      "Prometheus metrics (latency histogram, queue depth), OpenAPI docs and 144 tests in GitHub Actions CI",
      "HMAC-signed webhooks, Protocol Buffers over Redis Pub/Sub, horizontally scaled stateless workers",
    ],
    github: "https://github.com/AbdulKaleemShaik/notifyflow",
    live: null,
    featured: true,
    year: "2026",
    category: ["Node.js", "MongoDB", "Redis", "Docker"],
  },
  {
    id: 1,
    title: "BookFlow: Multi-Tenant SaaS Booking Platform",
    description:
      "Multi-tenant booking platform with strict tenantId isolation, hierarchical 5-role RBAC, Stripe payments, a coupon engine, and Redis locking that makes simultaneous bookings safe.",
    techStack: ["Node.js", "Express", "React", "MongoDB", "Redis", "Stripe", "Docker", "Kubernetes"],
    highlights: [
      "Redis distributed lock (SET NX + Lua release) prevents double-booking under concurrent requests",
      "Idempotent Stripe webhooks with guarded status transitions; rate-limited auth and Helmet headers",
      "Strict tenantId isolation and 5-role RBAC, proven by 53 Jest + Supertest tests in CI",
      "Dockerized full stack with Kubernetes manifests, Terraform and Swagger API docs",
    ],
    github: "https://github.com/AbdulKaleemShaik/bookflow-saas-booking",
    live: null,
    featured: true,
    year: "2026",
    category: ["Node.js", "MongoDB", "Redis", "Docker"],
  },
  {
    id: 2,
    title: "Agri Connect: Farmer-to-Customer Sales Platform",
    description:
      "Farmer-to-consumer marketplace with catalogue, cart, checkout and order fulfilment. Spring Boot 3 REST API secured with Spring Security + JWT, MySQL with Flyway migrations, and a React frontend.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Flyway", "Docker", "React"],
    highlights: [
      "Row locks (SELECT FOR UPDATE, fixed order) + @Version stop overselling; CI on MySQL caught and fixed a deadlock",
      "JWT role-based security (customer, farmer, admin), account lockout and hashed OTP password reset",
      "Flyway migrations, Docker, Swagger UI and 70 tests in CI against H2 and real MySQL",
      "Layered Spring Boot REST API with DTO validation, global error handling and paginated search",
    ],
    github: "https://github.com/AbdulKaleemShaik/AgriConnect",
    live: null,
    featured: true,
    year: "2026",
    category: ["Java", "Spring Boot", "Docker"],
  },
  {
    id: 3,
    title: "PlanForce AI: Multi-Agent Strategic Planner",
    description:
      "Next.js app that chains three specialised LLM agents (Planner → Insight → Execution) to turn a problem statement into a structured, consultancy-style execution plan.",
    techStack: ["Next.js", "TypeScript", "Groq Llama 3.3", "Zustand"],
    highlights: [
      "Multi-agent orchestration: each agent builds on the previous agent's structured output",
      "Targeted AI editing of a single report section without regenerating the whole plan",
      "Version history plus export to PDF and DOCX",
    ],
    github: "https://github.com/AbdulKaleemShaik/planforce-ai",
    live: null,
    featured: true,
    year: "2026",
    category: ["Node.js", "TypeScript"],
  },
  {
    id: 4,
    title: "E-Learning Platform",
    description:
      "E-learning platform built with the MERN stack, with course management for instructors, a learning experience for students and admin tools.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Role-based access: student, instructor, and admin views",
      "Course creation and management for instructors",
      "Secure authentication and feedback features",
    ],
    github:
      "https://github.com/AbdulKaleemShaik/elearning-platform-mern",
    live: null,
    featured: false,
    year: "2024",
    category: ["Node.js", "MongoDB", "React"],
  },
  {
    id: 5,
    title: "Pastebin Lite",
    description:
      "Lightweight paste-sharing service: create a text paste, share a unique link, and have it expire automatically by time or by view count. Deployed serverless on Vercel.",
    techStack: ["Node.js", "Express", "React", "MongoDB", "Vercel"],
    highlights: [
      "Pastes expire on whichever comes first: time-to-live or maximum view count",
      "RESTful JSON API plus a simple HTML view for sharing",
      "Live demo deployed serverless on Vercel",
    ],
    github: "https://github.com/AbdulKaleemShaik/Pastebin-Lite",
    live: "https://pastebin-lite-mu.vercel.app",
    featured: false,
    year: "2026",
    category: ["Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Railway Ticket Booking API",
    description:
      "RESTful Spring Boot API for railway ticket booking: manage trains and stations, book tickets for a train and date, and look up booking details.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
    highlights: [
      "CRUD endpoints for trains and stations",
      "Ticket booking for a specific train and travel date",
      "Booking lookup and history endpoints",
    ],
    github: "https://github.com/AbdulKaleemShaik/RailwayTicketBookingSpringBootAPI",
    live: null,
    featured: false,
    year: "2024",
    category: ["Java", "Spring Boot"],
  },
];

export const experience = [
  {
    company: "Appitsimple",
    location: "Ahmedabad, India",
    roles: [
      {
        title: "Software Engineer",
        tech: "Node.js · MongoDB · Redis · React.js · JWT · AWS Lambda · Docker",
        period: "Jul 2025 – Present",
        achievements: [
          "Re-engineered MongoDB aggregation pipelines with compound indexing and query projection, reducing p95 latency by 25% across services handling 10K+ concurrent users.",
          "Integrated Redis as a distributed caching layer for session management and high-frequency reads, cutting DB load by 40% and improving throughput on critical endpoints.",
          "Designed a zero-trust auth system with JWT refresh-token rotation, Redis-backed blacklisting, and granular RBAC, eliminating session fixation vulnerabilities across 3 web apps.",
          "Architected an automated cleanup pipeline via AWS Lambda for periodic deletion of stale MongoDB records, reducing storage costs by 16% and improving query performance.",
        ],
      },
      {
        title: "Software Engineer Intern",
        tech: "MERN Stack · MySQL · REST APIs · SOLID",
        period: "Jan 2025 – Jul 2025",
        achievements: [
          "Shipped 8 production features end-to-end using the MERN stack, contributing to a 20% uplift in overall application performance benchmarks.",
          "Resolved N+1 query issues and added composite indexes on MySQL and MongoDB, reducing critical API response times by 30% (~800ms → ~560ms).",
          "Cut React bundle size by 35% and initial load time by 20% via lazy loading, React.memo, and Webpack chunk splitting.",
        ],
      },
    ],
  },
];

export const education = {
  university: "Parul University",
  location: "Vadodara, India",
  degree: "B.Tech in Computer Science",
  cgpa: "8.58/10",
  period: "2021 – 2025",
};

export const certifications = [
  { name: "Oracle Certified Foundations Associate", detail: "Java" },
  { name: "LeetCode", detail: "795+ problems (430 Medium, 85 Hard)" },
  { name: "Shining Star Award", detail: "Awarded twice at Appitsimple for exceptional performance" },
];
