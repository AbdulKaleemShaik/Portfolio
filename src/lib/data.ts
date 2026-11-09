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
    "Full-Stack Software Engineer with 1.8 years of experience building scalable backend systems and REST APIs using Java (Spring Boot), Node.js and React. Experienced with MySQL, MongoDB, Redis caching, JWT-based security, microservices and Docker-based CI/CD. Promoted from intern in 6 months and received the Shining Star Award twice.",
};

export const stats = [
  { label: "Years Experience", value: "1.8" },
  { label: "Features Shipped", value: "10+" },
  { label: "Shining Star Awards", value: "2×" },
  { label: "LeetCode Problems", value: "795+" },
];

export const skills = {
  Languages: ["Java (Oracle Certified)", "JavaScript (Node.js)", "SQL"],
  Backend: ["Spring Boot", "Spring Security", "Node.js", "Express.js", "REST APIs", "Microservices", "JWT"],
  Frontend: ["React.js", "HTML5", "CSS3"],
  Databases: ["MySQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Git", "Linux"],
  Core: ["Data Structures & Algorithms", "OOP", "SOLID Principles"],
};

export const projects = [
  {
    id: 7,
    title: "NotifyFlow: Multi-Tenant Notification Engine",
    description:
      "Multi-channel notification platform delivering in-app (WebSocket), email and webhook notifications per tenant, with async BullMQ queues, a hand-written Redis sliding-window rate limiter and a real-time analytics pipeline.",
    techStack: ["Node.js", "Express", "BullMQ", "Redis", "MongoDB", "WebSockets", "Prometheus", "Docker"],
    highlights: [
      "4-service architecture (API, BullMQ worker, WebSocket server, dashboard) that decouples ingestion from delivery",
      "Protocol Buffers over Redis Pub/Sub, letting WebSocket servers scale horizontally with no shared state",
      "3 delivery channels (in-app, email, signed webhooks) with retries, a dead-letter queue and idempotency",
      "Per-tenant Redis sliding-window rate limiter, JWT rotation, Prometheus metrics and Swagger docs",
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
      "Strict tenantId data isolation and RBAC across 5 roles",
      "Stripe payments with idempotent webhooks; rate-limited auth and Helmet headers",
      "Redis cache-aside caching for services and slots, invalidated on every booking or schedule change",
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
      "Row locks + optimistic locking stop overselling under concurrent checkouts; fixed a MySQL deadlock",
      "Layered Spring Boot REST API with Spring Security JWT auth, role-based access and account lockout",
      "Centralized error handling with @RestControllerAdvice, returning HTTP 409 on lock conflicts",
      "Flyway schema migrations, Docker and automated builds in CI",
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
        tech: "Node.js · Express · MongoDB · MySQL · Redis · React.js · AWS",
        period: "Jan 2025 – Oct 2026",
        achievements: [
          "Owned 10+ features end-to-end for a B2B SaaS platform: MongoDB schema design, REST APIs in Node.js/Express and React UI, shipped in Agile sprints with product and QA teams.",
          "Optimized 8+ high-traffic MongoDB aggregation pipelines by redesigning them with compound indexes and projections, eliminating full-collection scans (verified via explain()).",
          "Introduced Redis caching for sessions and 15+ high-frequency read APIs, cutting repeated MongoDB round-trips and letting the team defer a planned database upgrade.",
          "Designed JWT auth with refresh-token rotation, Redis-backed token blacklisting and granular RBAC, closing privilege-escalation gaps across 3 production apps.",
          "Built an AWS Lambda job to auto-purge stale MongoDB records, fixing unbounded data growth; removed N+1 query patterns on 10+ MySQL and MongoDB endpoints with composite indexes.",
          "Developed 4 third-party API integrations to sync data reliably between external platforms and the product; debugged production issues, reviewed pull requests and supported releases.",
          "Started as an intern, promoted to full-time in 6 months, and received the Shining Star Award twice.",
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
  { name: "Shining Star Award", detail: "Received twice at Appitsimple" },
];
