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
    "Spring Boot",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Microservices",
    "JWT",
  ],
  Frontend: ["React.js", "HTML5", "CSS3", "Next.js"],
  Databases: ["MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  Core: ["Data Structures & Algorithms", "OOP", "SOLID Principles", "System Design"],
};

export const projects = [
  {
    id: 7,
    title: "NotifyFlow: Multi-Tenant Notification Engine",
    description:
      "Multi-channel notification platform delivering in-app (WebSocket), email and webhook notifications per tenant, with async BullMQ queues, a hand-written Redis sliding-window rate limiter and a real-time analytics pipeline.",
    techStack: ["Node.js", "Express", "BullMQ", "Redis", "MongoDB", "WebSockets", "Docker", "Jenkins"],
    highlights: [
      "Idempotent BullMQ workers with retries and dead-letter handling, preventing duplicate notifications",
      "Redis sorted-set sliding-window rate limiter configurable per tenant",
      "HMAC-signed outbound webhooks and Protocol Buffers on internal queues and Pub/Sub",
      "Horizontally scaled stateless workers, graceful shutdown and Jenkins CI/CD",
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
      "Production-ready multi-tenant booking engine with strict tenantId isolation, hierarchical RBAC across 5 roles, Stripe PaymentIntents with webhook sync, and a coupon engine supporting percentage/fixed discounts.",
    techStack: ["Node.js", "Express", "React", "MongoDB", "Redis", "Docker", "Stripe"],
    highlights: [
      "Single-DB shared-schema architecture with atomic waitlist allocation to prevent race conditions",
      "Stripe PaymentIntents + webhook sync ensuring zero payment inconsistency",
      "Coupon engine: percentage/fixed discounts, min-spend thresholds, time-bounded validity",
      "Dockerized full stack for consistent local and production environments",
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
      "Full-stack marketplace eliminating middlemen by connecting farmers directly to consumers for real-time produce trading. Built with Spring Boot microservices, Spring Security JWT-RBAC, and deployed on AWS EC2.",
    techStack: ["Spring Boot", "React", "MySQL", "Docker", "Jenkins", "AWS"],
    highlights: [
      "RESTful microservices with Spring Security + JWT RBAC across buyer/seller/admin roles",
      "Jenkins CI/CD pipeline automating builds, tests, and deployment to AWS EC2",
      "S3 for scalable asset and media storage; Docker containerization",
      "MySQL with composite indexing cutting API response times by 30%",
    ],
    github: "https://github.com/AbdulKaleemShaik/AgriConnect",
    live: null,
    featured: true,
    year: "2024",
    category: ["Java", "Spring Boot", "AWS", "Docker"],
  },
  {
    id: 3,
    title: "AI Planning Agent",
    description:
      "TypeScript-based AI planning agent with structured reasoning capabilities. Leverages LLM orchestration for multi-step task planning and execution with tool-use patterns.",
    techStack: ["TypeScript", "Node.js", "AI/LLM"],
    highlights: [
      "Multi-step autonomous reasoning with tool-use and action planning",
      "Structured prompt engineering for reliable LLM outputs",
      "TypeScript-first architecture with strong type safety",
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
      "Comprehensive e-learning platform built with the MERN stack featuring course management, student enrollment, progress tracking, and instructor dashboards.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Role-based access: student, instructor, and admin views",
      "Real-time course progress tracking with MongoDB aggregations",
      "JWT authentication with protected routes and session management",
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
      "Fast, lightweight pastebin service with syntax highlighting and TTL-based paste expiration. Full-stack Node.js app deployed on Vercel with live demo.",
    techStack: ["Node.js", "Express", "React", "MongoDB"],
    highlights: [
      "TTL-based auto-expiry for pastes using MongoDB TTL indexes",
      "Syntax highlighting for 20+ programming languages",
      "Live demo deployed on Vercel",
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
      "RESTful Spring Boot API for railway ticket reservation with seat allocation, route management, booking history, and JWT-secured endpoints.",
    techStack: ["Java", "Spring Boot", "MySQL", "JWT"],
    highlights: [
      "Seat allocation with concurrent booking prevention using DB-level locking",
      "Route and schedule management with flexible search filters",
      "JWT-secured endpoints with role-based access (passenger/admin)",
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
