export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  metrics: string[];
  problem: string;
  objective: string;
  contribution: string[];
  frontendImplementation: string[];
  backendImplementation: string[];
  databaseDetails: string[];
  challenges: { challenge: string; solution: string }[];
  impact: string[];
  architectureSummary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  domain?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  type: 'certification' | 'diploma';
  badgeColor?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreOrDetail?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Purva Huddar",
    title: "Java Full Stack Developer | 3+ Years of Experience",
    currentRole: "Java Full Stack Developer",
    currentCompany: "Maharashtra Knowledge Corporation Ltd. (MKCL)",
    location: "Pune, Maharashtra, India",
    email: "purvaa.huddar17@gmail.com",
    phone: "+91-9158077405",
    github: "https://github.com/purvaahuddar17",
    linkedin: "https://www.linkedin.com/in/purvaa-huddar-fullstackdeveloper/",
    openToRoles: [
      "Java Full Stack Developer",
      "Tech Specialist",
      "Associate Project Manager",
      "Tech Business Analyst"
    ],
    workMode: "Open to Remote · Pan India",
    careerInterests: [
      "Java Full Stack Development",
      "Tech Specialist & Backend Engineering",
      "Associate Project Management (APM)",
      "Technical Business Analysis (Tech BA)",
      "Enterprise Application Architecture"
    ],
    summary:
      "Results-driven Java Full Stack Developer with 3+ years of hands-on experience designing, developing, and deploying scalable enterprise applications and mission-critical data platforms. Proven expertise in Java, Spring Boot, Vue.js, MySQL, MongoDB, and Redis, with deep specialization in microservices architecture, RESTful API development, batch processing, and distributed caching. Successfully architected an Admission Management System handling 2.5 million+ learner records annually across 500+ centres, demonstrating the ability to deliver high-impact, production-grade solutions at scale.",
    whyHireMe:
      "I don't just write code — I build systems that work at scale, survive production pressure, and genuinely make a difference. In my current role, I have helped process over 2.5 million learner admissions annually, optimised systems that thousands of government centres rely on every day, and resolved production incidents that kept critical education infrastructure running without interruption. I bring a rare combination of strong backend engineering depth, frontend fluency, and a product mindset that keeps end-user impact at the centre of every technical decision. I adapt quickly, take ownership end-to-end, and thrive in collaborative, fast-moving teams. If you are looking for a Full Stack Java Developer who delivers — not just writes code — I am ready to contribute from Day 1."
  },

  metrics: [
    {
      value: "2.5M+",
      label: "Annual Learner Admissions",
      subtext: "Handled through high-throughput enterprise platforms across Maharashtra"
    },
    {
      value: "5,000+",
      label: "Onboarding Centres",
      subtext: "Supported with real-time intake workflows, verification & synchronization"
    },
    {
      value: "100,000+",
      label: "Records per Upload Cycle",
      subtext: "Validated and ingested smoothly via custom batch processing engines"
    },
    {
      value: "~40%",
      label: "Response-Time Improvement",
      subtext: "Attributed to strategic Redis distributed caching & concurrency locking"
    },
    {
      value: "~50%",
      label: "Release Effort Reduction",
      subtext: "Through standardized CI/CD deployment pipelines using Jenkins & Docker"
    },
    {
      value: "99%+",
      label: "Reported System Uptime",
      subtext: "Maintained for mission-critical education and admission platforms"
    }
  ],

  skillCategories: [
    {
      name: "Backend Development",
      description: "Robust, scalable server-side systems and RESTful APIs built on the JVM",
      skills: [
        { name: "Java (Core & Advanced)" },
        { name: "Spring Boot" },
        { name: "Spring MVC" },
        { name: "Spring Data JPA" },
        { name: "Spring Security" },
        { name: "Hibernate / JPA" },
        { name: "RESTful Web Services" },
        { name: "Microservices Architecture" },
        { name: "Batch Processing" }
      ]
    },
    {
      name: "Frontend Development",
      description: "Modern, responsive, and role-based user interfaces with smooth UX",
      skills: [
        { name: "Vue.js (Vue 2 & Vue 3)" },
        { name: "React" },
        { name: "JavaScript (ES6+)" },
        { name: "PrimeVue" },
        { name: "Bootstrap 5" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Responsive UI Design" }
      ]
    },
    {
      name: "Database & Caching",
      description: "High-concurrency data persistence, query optimization, and distributed memory stores",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Query Optimization" },
        { name: "Database Indexing" },
        { name: "Database Design" },
        { name: "Data Migration" },
        { name: "Distributed Locking" }
      ]
    },
    {
      name: "DevOps & Cloud",
      description: "Automated delivery pipelines, containerization, and cloud infrastructure",
      skills: [
        { name: "Git" },
        { name: "Maven" },
        { name: "Jenkins" },
        { name: "Docker" },
        { name: "CI/CD Pipelines" },
        { name: "Release Automation" },
        { name: "AWS Cloud Fundamentals" },
        { name: "CDN Integration" }
      ]
    },
    {
      name: "Architecture & Design",
      description: "Design principles that produce resilient, extensible enterprise codebases",
      skills: [
        { name: "Object-Oriented Programming (OOP)" },
        { name: "SOLID Principles" },
        { name: "Design Patterns" },
        { name: "Dependency Injection" },
        { name: "API Integration" },
        { name: "JSON Processing" }
      ]
    },
    {
      name: "Testing, Monitoring & Support",
      description: "Ensuring zero-downtime reliability and rapid incident triage in production",
      skills: [
        { name: "Postman" },
        { name: "Log Analysis" },
        { name: "Root Cause Analysis (RCA)" },
        { name: "Production Support" },
        { name: "Incident Resolution" },
        { name: "Deployment Management" },
        { name: "Code Review" },
        { name: "Agile / Scrum" }
      ]
    }
  ],

  experiences: [
    {
      id: "mkcl-fullstack",
      role: "Java Full Stack Developer",
      company: "Maharashtra Knowledge Corporation Ltd. (MKCL)",
      location: "Pune, MH, India",
      period: "Feb 2023 – Present",
      domain: "EdTech | Enterprise Platforms | Government Projects",
      summary:
        "Engineered and maintained enterprise-grade applications across Admission Management, Examination, Identity Verification, and Support Management platforms using Java, Spring Boot, Vue.js, MySQL, MongoDB, and Redis — collectively serving millions of learners across Maharashtra.",
      highlights: [
        "Architected a high-throughput Bulk Admission Management System supporting 500+ onboarding centres, processing 100,000+ records per cycle and scaling to 2.5 million+ admissions annually during peak enrollment.",
        "Designed and developed modular RESTful APIs and backend microservices for end-to-end admission processing, learner verification, and examination workflows — reducing manual processing time by an estimated 60%.",
        "Built a robust Excel-based bulk upload and validation engine with intelligent chunked batch processing and transactional rollback, guaranteeing data integrity for 5,000+ centres.",
        "Implemented Redis distributed caching and distributed locking mechanisms to eliminate duplicate record processing, manage concurrent admissions, and improve API response times by ~40%.",
        "Engineered a secure, auditable learner data migration framework facilitating bulk record transfer across 20+ regional centres, achieving 100% data consistency and strict audit compliance.",
        "Optimised complex MySQL queries and designed strategic composite indexes, eliminating slow queries and drastically speeding up operational and management reports.",
        "Built dynamic, role-based dashboards for Administrators, District Officers, and End Users with configurable access controls (RBAC) and real-time monitoring in Vue.js and PrimeVue.",
        "Standardised CI/CD deployment pipelines using Maven, Jenkins, and Docker — reducing manual deployment release effort by ~50% and enabling zero-downtime production updates.",
        "Performed rigorous Root Cause Analysis (RCA) and production incident resolution for mission-critical platforms, maintaining 99%+ system uptime."
      ],
      technologies: ["Java", "Spring Boot", "Vue.js", "PrimeVue", "MySQL", "Redis", "MongoDB", "Docker", "Jenkins", "Maven"]
    },
    {
      id: "mkcl-intern",
      role: "Full Stack Developer Intern",
      company: "Maharashtra Knowledge Corporation Ltd. (MKCL)",
      location: "Pune, MH, India",
      period: "2022 – 2023",
      domain: "EdTech & Learning Management Systems",
      summary:
        "Contributed to core development workflows for MKCL's ERA LMS platform. Implemented ticketing systems, responsive UI components, and RESTful endpoints.",
      highlights: [
        "Collaborated with senior engineers and UI designers to build the Help & Support Ticketing System for the MKCL ERA LMS.",
        "Constructed RESTful API endpoints in Java and Spring Boot for ticket creation, status transitions, and priority assignment.",
        "Created responsive front-end landing pages, interactive forms, and analytical dashboards using HTML5, CSS3, JavaScript, and Bootstrap."
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL"]
    },
    {
      id: "hardware-electronics",
      role: "Hardware & Electronics Engineer",
      company: "Various Engineering Organizations (Arya Electronics, Elexifab, Smart Tech, Lectrotek)",
      location: "Pune, MH, India",
      period: "2013 – 2021",
      domain: "IoT Product Development | PCB Design | Embedded Systems | Client Projects",
      summary:
        "Spearheaded end-to-end IoT product development, single/multi-layer PCB design, Zigbee smart meter gateway configuration, and industrial hardware testing across 20+ client projects, managing cross-functional engineering teams.",
      highlights: [
        "Designed single-sided and double-sided PCB layouts and generated Gerber files according to IPC standards using ORCAD Capture and Allegro Layout.",
        "Configured and associated Zigbee smart energy meters, DCUs, and field gateways; handled live meter data collection and diagnostic troubleshooting.",
        "Tested, calibrated, and debugged industrial temperature indicators, controllers, and power supply cards according to industrial standards.",
        "Managed engineering teams, production deadlines, continuous quality improvement, and post-delivery client technical support."
      ],
      technologies: ["IoT Gateways", "Zigbee Protocols", "PCB Gerber Design", "Allegro / OrCAD", "Hardware Diagnostics", "Calibration"]
    }
  ],

  projects: [
    {
      id: "bulk-admission-system",
      title: "Bulk Admission Excel Upload System",
      tagline: "High-throughput data ingestion engine processing 100,000+ records per batch cycle with distributed locking",
      technologies: ["Java", "Spring Boot", "MySQL", "Vue.js", "Redis", "Spring Batch", "Apache POI"],
      metrics: [
        "100,000+ records processed per upload cycle",
        "5,000+ onboarding centres actively supported",
        "2.5M+ annual learner admissions smoothly handled",
        "~40% latency reduction via Redis caching",
        "0 duplicate records via distributed locking"
      ],
      problem:
        "During state-wide admission peak windows, thousands of authorized training centres uploaded learner datasets simultaneously via massive Excel spreadsheets. The legacy workflow struggled with heavy memory consumption, frequent timeouts, duplicate registrations caused by concurrent retries, and opaque error tracking that frustrated centre coordinators.",
      objective:
        "Build a fault-tolerant, high-throughput batch ingestion pipeline capable of parsing, validating, deduplicating, and persisting over 100,000 learner records in a single cycle with zero race conditions, actionable row-by-row error reporting, and fast response times.",
      contribution: [
        "Architected an asynchronous streaming batch ingestion pipeline that reads Excel streams in chunks, preventing JVM OutOfMemory errors.",
        "Implemented Redis distributed locks (using unique center-session hashes) to guarantee idempotency and prevent duplicate records when coordinators re-clicked upload.",
        "Engineered multi-stage validation routines: syntax checks, demographic deduplication against existing databases, and eligibility verification.",
        "Structured transactional batch persistence with chunk-level commits and automatic error capture into dedicated reject tables.",
        "Built responsive Vue.js status screens with real-time progress bars, failed-row download templates, and correction re-upload capabilities."
      ],
      frontendImplementation: [
        "Drag-and-drop file upload interface built with Vue.js and PrimeVue with client-side file format and size validation.",
        "WebSocket/polling-driven progress indicators showing validated count, successful ingestions, and errors.",
        "Dynamic error table displaying precise row numbers, column headers, and validation failure reasons with one-click export of error spreadsheets."
      ],
      backendImplementation: [
        "Spring Boot microservice utilizing streaming SAX-based Excel parser to process massive files with minimal heap footprint.",
        "Thread pool orchestration for concurrent chunk validation paired with transactional Spring Data JPA batch inserts (`rewriteBatchedStatements=true`).",
        "Redis Distributed Locking (`SET key value NX PX`) to enforce atomic admission processing per training centre."
      ],
      databaseDetails: [
        "Carefully designed MySQL staging tables with composite indexes on `(centre_id, academic_year, learner_uid)`.",
        "Redis cache layer storing active course quotas and validation master data to eliminate thousands of repetitive SQL queries.",
        "Partitioned audit logs recording upload author, timestamp, IP, checksum, and summary statistics."
      ],
      challenges: [
        {
          challenge: "JVM OutOfMemoryError on 100K+ row Excel files using standard DOM parsers.",
          solution: "Switched from DOM-based workbook loading to streaming event-driven parsers, reducing peak memory footprint from gigabytes to under 60 MB."
        },
        {
          challenge: "Concurrent submissions from multi-window coordinators creating duplicate admission entries.",
          solution: "Integrated Redis distributed locking with time-to-live keys tied to file checksums and centre IDs, instantly rejecting concurrent duplicate requests."
        },
        {
          challenge: "Slow validation when cross-referencing candidate IDs against millions of past records.",
          solution: "Cached active student keys in Redis and replaced row-by-row SELECTs with batch IN-clause queries and strategic database indexes."
        }
      ],
      impact: [
        "Scaled successfully to process over 2.5 million annual admissions across Maharashtra state programs.",
        "Reduced admission cycle ingestion time by over 60%, providing instantaneous row-level error feedback.",
        "Maintained 100% data integrity with zero duplicate enrollments recorded throughout peak enrollment windows."
      ],
      architectureSummary: "Vue.js Upload UI -> Spring Boot Batch API -> Redis Distributed Lock -> Streaming Parser -> Chunk Validator -> MySQL Batch Ingestion"
    },
    {
      id: "dynamic-document-cropper",
      title: "Dynamic Document Cropper & Secure Upload System",
      tagline: "Standardized image manipulation, aspect-ratio enforcement, and secure storage across 2.5M+ learner profiles",
      technologies: ["Vue.js 3", "Java", "Spring Boot", "HTML5 Canvas", "REST APIs", "Spring Security"],
      metrics: [
        "Adopted across 2.5M+ learner identity profiles",
        "100% compliance with government photo & signature specs",
        "Sub-second client-side cropping and instant preview",
        "Over 70% reduction in document rejection rates"
      ],
      problem:
        "Learners and training coordinators frequently uploaded unformatted, poorly oriented, oversized, or blurred photos and identity certificates. This caused high rejection rates during examination hall ticket generation and identity verification, requiring heavy manual intervention by support staff.",
      objective:
        "Create an intuitive, high-performance client-side cropping tool with strict aspect-ratio locking (passport photo, signature, identity proofs), client-side compression, and a secure backend ingestion pipeline with MIME-type verification and virus scanning.",
      contribution: [
        "Developed custom Vue.js cropping modals supporting touch gestures, zooming, 90-degree rotation, and aspect-ratio locks (3.5x4.5 cm for photos, 2:1 for signatures).",
        "Leveraged HTML5 Canvas to execute client-side dimension normalization and JPEG compression before transmission, saving considerable network bandwidth.",
        "Engineered Spring Boot REST controllers with multipart streaming, magic-byte MIME validation, and file sanitization to prevent malicious payload uploads.",
        "Integrated secure storage naming conventions with SHA-256 hashes linked to learner profile entities with role-based access checks."
      ],
      frontendImplementation: [
        "Reactive Vue.js component with custom canvas overlays and interactive crop handles.",
        "Instant live preview showing how the cropped photo will appear on the final examination hall ticket and certificate.",
        "Client-side image quality checks: minimum pixel dimensions, aspect ratio tolerance, and compressed byte size."
      ],
      backendImplementation: [
        "Spring Boot multipart upload endpoint with strict file size and MIME-type header checks.",
        "Apache Tika / byte-level inspection to verify file headers against claimed extensions (preventing disguised executables).",
        "Asynchronous generation of thumbnails and watermarked previews for administrative verification screens."
      ],
      databaseDetails: [
        "MySQL learner document mapping table with foreign keys, document category enums, verification status flags, and SHA-256 file hashes.",
        "MongoDB metadata storage for full document lifecycle history (upload timestamp, verifying officer, revision history)."
      ],
      challenges: [
        {
          challenge: "Varying client devices (low-end mobile phones, tablets, old desktop browsers) struggling with canvas operations.",
          solution: "Implemented lightweight offscreen canvas rendering with fallback polyfills, ensuring snappy manipulation even on budget mobile hardware."
        },
        {
          challenge: "Security vulnerability risks from users renaming file extensions (e.g. uploading .exe as .jpg).",
          solution: "Enforced byte-level magic number inspection on the Spring Boot backend before persisting any file to storage."
        }
      ],
      impact: [
        "Seamlessly adopted across all 2.5M+ learner profiles across Maharashtra state education platforms.",
        "Drastically reduced document rejections during examination hall ticket generation by over 70%.",
        "Optimized cloud storage and bandwidth costs through uniform client-side compression."
      ],
      architectureSummary: "Vue Canvas Cropper -> Dimension & MIME Inspection -> Spring Boot Secure Ingest -> Magic Byte Validation -> Secure Storage & MySQL Mapping"
    },
    {
      id: "support-ticketing-system",
      title: "Help & Support Ticketing Platform (MKCL ERA LMS)",
      tagline: "Enterprise issue tracking and automated escalation system for learners, instructors, and center coordinators",
      technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "Bootstrap 5", "REST APIs"],
      metrics: [
        "Directly served MKCL ERA LMS users statewide",
        "Automated routing across 3 escalation tiers",
        "Role-based dashboards for support coordinators",
        "Significantly improved issue turnaround time"
      ],
      problem:
        "Learners and training coordinators across hundreds of centres lacked a centralized, traceable channel to report software defects, admission discrepancies, and LMS playback issues, leading to unresolved grievances and delayed ticket resolutions.",
      objective:
        "Develop an end-to-end ticketing portal with role-based access controls, automatic priority routing, status audit trails, and intuitive interfaces for learners and support agents.",
      contribution: [
        "Designed and implemented RESTful APIs in Spring Boot for ticket creation, status progression (Open, In-Progress, Resolved, Closed), and category tagging.",
        "Built dynamic client interfaces using HTML5, CSS3, JavaScript, and Bootstrap 5 with responsive modal dialogs and comment threads.",
        "Engineered relational database schemas in MySQL with proper foreign-key constraints, status history logs, and indexing on ticket status and centre IDs."
      ],
      frontendImplementation: [
        "Responsive submission forms with file attachment support and validation.",
        "Agent dashboard with status filtering (Pending, High Priority, Escalated) and quick response templates."
      ],
      backendImplementation: [
        "Spring Boot REST services with DTO validation and Spring Security role-based authorization.",
        "Service layer implementing state-machine transitions preventing illegal status modifications."
      ],
      databaseDetails: [
        "Normalized MySQL tables for tickets, categories, attachments, and resolution comments with audit timestamps."
      ],
      challenges: [
        {
          challenge: "Managing ticket escalation without missing SLA deadlines.",
          solution: "Created scheduled background cron tasks to flag tickets approaching SLA thresholds and alert senior coordinators."
        }
      ],
      impact: [
        "Provided transparent grievance tracking for learners across MKCL ERA LMS programs.",
        "Centralized support communications and eliminated email backlogs."
      ],
      architectureSummary: "Responsive Web Client -> REST API Endpoints -> Spring Boot Service Layer -> MySQL Relational Storage"
    }
  ],

  certifications: [
    {
      title: "Oracle Certified Professional – MySQL 8.0 Database Developer",
      issuer: "Oracle Corporation",
      type: "certification" as const,
      badgeColor: "from-amber-500 to-orange-600"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      type: "certification" as const,
      badgeColor: "from-orange-500 to-amber-600"
    },
    {
      title: "Spring Framework Fundamentals",
      issuer: "Coursera",
      type: "certification" as const,
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      title: "Diploma in Embedded System & Design",
      issuer: "ICIT, University of Pune (2013)",
      type: "diploma" as const,
      badgeColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "Diploma in PCB Design",
      issuer: "Livewire, Pune (2018)",
      type: "diploma" as const,
      badgeColor: "from-cyan-500 to-blue-600"
    }
  ],

  education: [
    {
      degree: "Diploma in New & Exponential Technologies (DNExT)",
      institution: "Maharashtra Knowledge Corporation Ltd. (MKCL)",
      location: "Pune, Maharashtra, India",
      period: "2022",
      scoreOrDetail: "Advanced postgraduate enterprise software program focusing on full-stack Java, cloud, and modern architectures."
    },
    {
      degree: "Bachelor of Engineering (B.E.) – Electronics & Telecommunication Engineering",
      institution: "Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology, Baramati",
      location: "Pune University, Maharashtra, India",
      period: "2008 – 2013",
      scoreOrDetail: "Comprehensive 4-year engineering degree covering digital systems, microprocessors, software foundations, and telecommunications."
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Science Stream",
      institution: "Maharashtra State Board (HSC Board, Pune)",
      location: "Baramati, Pune",
      period: "2006 – 2008",
      scoreOrDetail: "Physics, Chemistry, Mathematics, and Computer Science."
    }
  ],

  representativeArchitecture: [
    {
      id: "client-tier",
      name: "1. Client & Presentation Tier",
      tech: "Vue.js (2 & 3), PrimeVue, HTML5 Canvas, Axios",
      role: "Delivers responsive, reactive user interfaces with client-side form validation, streaming progress feedback, and dynamic image cropping. Communicates via RESTful JSON endpoints.",
      highlights: [
        "Client-side photo cropping and aspect ratio enforcement via HTML5 Canvas",
        "Role-Based Access Control (RBAC) UI views for Admins, District Officers, and Centre Coordinators",
        "Asynchronous polling / real-time feedback for long-running batch uploads"
      ]
    },
    {
      id: "gateway-tier",
      name: "2. Security & API Gateway Layer",
      tech: "Spring Security, JWT Token Filter, Reverse Proxy / CDN",
      role: "Authenticates incoming requests, verifies role permissions, enforces CORS headers, rate-limits endpoints, and offloads static assets via CDN.",
      highlights: [
        "Stateless token-based authentication with fine-grained role authorization",
        "Request sanitization and payload size limits to guard against DoS vectors",
        "CDN edge caching for static assets and documentation artifacts"
      ]
    },
    {
      id: "service-tier",
      name: "3. Spring Boot Application & Microservices Tier",
      tech: "Java 17+, Spring Boot, Spring MVC, Spring Data JPA, Spring Batch",
      role: "Encapsulates enterprise business rules, multi-stage data validation, bulk batch chunking, and transaction coordination.",
      highlights: [
        "Streaming SAX Excel parser processing 100K+ rows with low memory overhead",
        "Controller-Service-Repository modular architecture following SOLID principles",
        "Chunk-oriented batch processing with automated retries and isolated failure tables"
      ]
    },
    {
      id: "cache-tier",
      name: "4. Distributed Caching & Coordination Tier",
      tech: "Redis, Redisson Distributed Lock",
      role: "Provides sub-millisecond data retrieval for frequently accessed lookups and enforces distributed locking across concurrent center uploads.",
      highlights: [
        "Distributed Locking (`SET lock_key NX PX`) preventing duplicate record uploads",
        "Cache-aside pattern for active admission centers, course catalogs, and quota counters",
        "~40% overall reduction in API response times under high concurrency"
      ]
    },
    {
      id: "data-tier",
      name: "5. Data Persistence & Storage Tier",
      tech: "MySQL 8.0, MongoDB, Encrypted Storage",
      role: "Guarantees ACID transactions for financial and admission records while providing flexible storage for audit trails and unstructured documents.",
      highlights: [
        "MySQL strategic composite indexes and query tuning eliminating table scans",
        "Data migration framework synchronizing records across 20+ regional centres with 100% consistency",
        "MongoDB for high-volume audit logs, error diagnostics, and learner document histories"
      ]
    },
    {
      id: "devops-tier",
      name: "6. CI/CD & Deployment Pipeline",
      tech: "Git, Maven, Jenkins, Docker, Linux",
      role: "Automates building, unit testing, containerization, and zero-downtime release deployments across QA, UAT, and Production.",
      highlights: [
        "Automated Jenkins build pipelines triggered on repository commits",
        "Containerized Docker workloads ensuring identical runtime environments",
        "~50% reduction in manual deployment release effort"
      ]
    }
  ]
};
