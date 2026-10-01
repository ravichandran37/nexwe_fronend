export const servicesList = [
  {
    id: "web-development",
    number: "01",
    slug: "web-development",
    path: "/services/web-development",
    title: "WEB DEVELOPMENT",
    shortTitle: "Web Development",
    tagline: "Modern websites and full-stack web applications",
    shortDescription: "High-velocity, scalable web applications engineered with modern JavaScript frameworks, robust backends, and responsive UI architecture.",
    overview: "We engineer resilient, modern web platforms tailored to business growth. From client-facing corporate sites to complex transactional web applications, our full-stack solutions combine pixel-perfect frontend engineering with robust, secure backend architectures.",
    features: [
      {
        title: "Business Websites",
        desc: "Lightning-fast, SEO-optimized digital storefronts and corporate websites built to convert visitors and strengthen your brand presence."
      },
      {
        title: "Full-Stack Applications",
        desc: "Scalable client-server systems with decoupled React frontends, Python/Django or Node.js backends, and normalized database models."
      },
      {
        title: "E-Commerce Platforms",
        desc: "Custom commerce experiences with interactive product catalogs, real-time cart systems, secure checkout flows, and automated inventory sync."
      },
      {
        title: "Custom Web Applications",
        desc: "Bespoke SaaS tools, administrative dashboards, booking engines, and internal portals designed to streamline business workflows."
      }
    ],
    techStack: ["React", "TypeScript", "Next.js", "Node.js", "Express", "Python", "Django", "MySQL", "PostgreSQL", "REST APIs"],
    deliverables: [
      "Responsive UI/UX for all screen viewports",
      "Type-safe RESTful API architecture",
      "Automated database migrations and indexing",
      "Performance optimization (Core Web Vitals 95+)"
    ]
  },
  {
    id: "app-development",
    number: "02",
    slug: "app-development",
    path: "/services/app-development",
    title: "APP DEVELOPMENT",
    shortTitle: "App Development",
    tagline: "Android, iOS and cross-platform mobile applications",
    shortDescription: "Cross-platform and native mobile apps engineered for fluid 60fps performance, intuitive navigation, and reliable offline capabilities.",
    overview: "We build intuitive, high-performance mobile applications that users love. Leveraging cross-platform frameworks and native capabilities, we deliver cost-effective, unified experiences across both iOS and Android platforms.",
    features: [
      {
        title: "Android Applications",
        desc: "Native-feel Android applications optimized for modern Material Design, diverse screen sizes, and battery efficiency."
      },
      {
        title: "iOS Applications",
        desc: "Sleek, fluid iOS experiences conforming strictly to Apple Human Interface Guidelines and App Store quality standards."
      },
      {
        title: "React Native Applications",
        desc: "Single codebase, dual-platform deployments with near-native performance, rapid update cycles, and shared business logic."
      },
      {
        title: "Cross-Platform Apps",
        desc: "Scalable mobile architectures with offline synchronization, local SQLite/secure storage, push notifications, and biometric authentication."
      }
    ],
    techStack: ["React Native", "TypeScript", "Expo", "iOS", "Android", "Redux Toolkit", "SQLite", "Firebase", "REST APIs"],
    deliverables: [
      "Universal iOS and Android compatibility",
      "Smooth 60fps gesture-driven animations",
      "Offline cache and background synchronization",
      "App Store & Google Play deployment readiness"
    ]
  },
  {
    id: "security",
    number: "03",
    slug: "security",
    path: "/services/security",
    title: "SECURITY SERVICES",
    shortTitle: "Security Services",
    tagline: "Application security, protection and security solutions",
    shortDescription: "Rigorous application security audits, secure API gateway architectures, and modern authorization safeguards.",
    overview: "Security is built into our engineering foundation from day one. We identify vulnerabilities, harden endpoints, implement defense-in-depth authorization patterns, and conduct thorough code reviews to safeguard your business assets.",
    features: [
      {
        title: "Web Application Security",
        desc: "Hardening against OWASP Top 10 vulnerabilities including SQL injection, Cross-Site Scripting (XSS), CSRF, and clickjacking."
      },
      {
        title: "API Security",
        desc: "Rate limiting, payload validation, token signature validation, CORS policy enforcement, and secure API gateway proxies."
      },
      {
        title: "Authentication & Authorization",
        desc: "Implementation of JWT token lifecycles with secure refresh tokens, Role-Based Access Control (RBAC), bcrypt hashing, and Multi-Factor Authentication (MFA)."
      },
      {
        title: "Security Audits",
        desc: "Comprehensive code reviews, dependency vulnerability scanning, configuration sanity checks, and realistic vulnerability remediation roadmaps."
      }
    ],
    techStack: ["OWASP Standards", "JWT", "OAuth 2.0", "bcrypt", "HTTPS/TLS", "CSP Headers", "Rate Limiting", "Penetration Testing"],
    deliverables: [
      "Vulnerability assessment and remediation report",
      "Cryptographic credential storage and token lifecycles",
      "HTTP security header configurations (HSTS, CSP, X-Frame)",
      "Strict data sanitization and parameterized queries"
    ]
  },
  {
    id: "process",
    number: "04",
    slug: "process",
    path: "/process",
    title: "OUR PROCESS",
    shortTitle: "Our Process",
    tagline: "How we plan, design, build and deliver projects",
    shortDescription: "Our systematic 5-phase software development lifecycle ensuring on-time delivery, transparent communication, and technical excellence.",
    overview: "Every successful software project stems from a structured, disciplined methodology. Our 5-stage lifecycle guides your project from strategic discovery through intuitive design, agile development, rigorous testing, and seamless production deployment.",
    features: [
      {
        title: "01. Discovery & Planning",
        desc: "Deep requirements gathering, feature scoping, technical stack selection, and milestone roadmapping."
      },
      {
        title: "02. UI/UX Design",
        desc: "Wireframing, design systems, interactive prototypes, and database schema modeling."
      },
      {
        title: "03. Agile Development",
        desc: "Sprint-based iterative coding, clean modular architecture, and frequent demo releases."
      },
      {
        title: "04. Testing & QA",
        desc: "Cross-browser testing, automated API validation, unit tests, and performance benchmarks."
      }
    ],
    techStack: ["Agile/Scrum", "Git Version Control", "CI/CD Pipelines", "Figma", "Automated Testing", "Milestone Tracking"],
    deliverables: [
      "Comprehensive architectural blueprint",
      "Figma design tokens and interactive prototypes",
      "Clean, documented, version-controlled source code",
      "Staging preview environments for client sign-off"
    ]
  }
];
