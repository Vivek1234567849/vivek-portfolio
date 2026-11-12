/**
 * Portfolio Data for M. Vivek
 * Full-Stack Developer
 */

export const personalInfo = {
  name: "M. Vivek",
  role: "Full-Stack Developer",
  location: "Karachi, Pakistan",
  phone: "0316 279 9763",
  phoneRaw: "03162799763",
  email: "medeveloperking@gmail.com",
  github: "https://github.com/Vivek12345678949",
  githubUsername: "Vivek12345678949",
  avatar: "/src/assets/images/avatar_developer_vivek_1794162790912.jpg",
  bio: "Motivated Full-Stack Web Developer currently pursuing Software Engineering at Aptech. Skilled in building modern, responsive web applications using HTML5, CSS3, Bootstrap, JavaScript, React.js, Laravel, ASP.NET Core MVC, C#, SQL Server, and MySQL.",
  aboutQuote: "I'm a passionate Full-Stack Developer currently pursuing Software Engineering at Aptech. I enjoy building responsive web applications, solving real-world problems, and continuously improving my development skills.",
  corePillars: [
    {
      title: "Full-Stack Development",
      desc: "End-to-end web engineering connecting performant client interfaces with robust server architectures.",
      icon: "Layers"
    },
    {
      title: "Frontend Engineering",
      desc: "Crafting pixel-perfect, highly responsive, interactive web interfaces with modern CSS and JavaScript.",
      icon: "Layout"
    },
    {
      title: "Backend Systems",
      desc: "Building scalable MVC architectures, secure RESTful APIs, and database-driven server pipelines.",
      icon: "Server"
    },
    {
      title: "Database Management",
      desc: "Schema modeling, relational indexing, and query optimization across SQL Server and MySQL.",
      icon: "Database"
    }
  ]
};

export const heroTypewriterPhrases = [
  "Building Modern Web Experiences",
  "Frontend & Backend Developer",
  "Turning Ideas Into Reality"
];

export const projects = [
  {
    id: "pet-care-website",
    title: "Pet Care Website",
    category: "Frontend Development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/src/assets/images/project_pet_care_1794162788125.jpg",
    description: "Designed a fully responsive pet care website with homepage, booking, gallery, and contact page. Optimized for desktop, tablet, and mobile devices.",
    details: [
      "Intuitive veterinary & grooming appointment booking form with instant validation",
      "Interactive pet wellness gallery featuring adoption profiles and care guides",
      "Fully responsive layout crafted with custom CSS and Bootstrap grid utilities",
      "Cross-browser tested ensuring crisp visuals across all screen resolutions"
    ],
    github: "https://github.com/Vivek12345678949"
  },
  {
    id: "olympic-sports-website",
    title: "Olympic Sports Website",
    category: "Frontend Development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/src/assets/images/project_olympic_sports_1794162789477.jpg",
    description: "Developed a responsive Olympic-themed website featuring athlete profiles, sports categories, medal tables, and event schedules.",
    details: [
      "Dynamic medal tally leaderboard with filterable nation standings",
      "In-depth athlete spotlight cards with disciplines, records, and bios",
      "Categorized event schedule timetable with venue details and timeline views",
      "Futuristic dark-themed sports UI with high-contrast accessibility"
    ],
    github: "https://github.com/Vivek12345678949"
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "Full-Stack Development",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server"],
    image: "/src/assets/images/project_ecommerce_store_1794162790018.jpg",
    description: "Developed an online shopping platform with product catalog, search and filtering, shopping cart, checkout, authentication, role-based access, and admin panel.",
    details: [
      "Robust ASP.NET Core MVC architecture with repository pattern and Entity Framework",
      "Role-based access control (RBAC) separating customer portals and administrative back-offices",
      "Dynamic catalog with multi-facet category filters, search querying, and inventory badges",
      "Stateful cart session management and secure order checkout pipeline in SQL Server"
    ],
    github: "https://github.com/Vivek12345678949"
  }
];

export const skillCategories = [
  {
    category: "Backend",
    description: "Server-side runtimes, frameworks, and typed languages",
    skills: [
      { name: "PHP", icon: "Code", level: "Experienced" },
      { name: "Laravel", icon: "Cpu", level: "Framework" },
      { name: "ASP.NET Core 8/10", icon: "Boxes", level: "Enterprise" },
      { name: "C#", icon: "FileCode", level: "Core Language" }
    ]
  },
  {
    category: "Frontend",
    description: "Client rendering, modern styling, and component architectures",
    skills: [
      { name: "HTML5", icon: "Globe", level: "Semantic Markup" },
      { name: "CSS3", icon: "Palette", level: "Styling & Motion" },
      { name: "Bootstrap", icon: "Grid", level: "Responsive Layouts" },
      { name: "JavaScript", icon: "Zap", level: "ES6+ Core" },
      { name: "React.js", icon: "Atom", level: "SPA & Hooks" },
      { name: "Razor Views", icon: "CodeXml", level: "MVC Templating" }
    ]
  },
  {
    category: "Database",
    description: "Relational modeling, querying, and object-relational mapping",
    skills: [
      { name: "SQL Server", icon: "Database", level: "RDBMS" },
      { name: "MySQL", icon: "HardDrive", level: "RDBMS" },
      { name: "Entity Framework Core 8", icon: "TableProperties", level: "ORM Engine" }
    ]
  },
  {
    category: "Development Tools",
    description: "Version control, IDE environments, and productivity suites",
    skills: [
      { name: "Git", icon: "GitBranch", level: "Version Control" },
      { name: "GitHub", icon: "Github", level: "Collaboration" },
      { name: "Visual Studio 2022", icon: "Monitor", level: "Full IDE" },
      { name: "VS Code", icon: "Terminal", level: "Code Editor" }
    ]
  },
  {
    category: "Architecture",
    description: "Software engineering design patterns and data flow standards",
    skills: [
      { name: "MVC Pattern", icon: "Layers", level: "Pattern" },
      { name: "REST API Design", icon: "Network", level: "Protocols" },
      { name: "ORM", icon: "FileSpreadsheet", level: "Data Mapping" },
      { name: "Database Migrations", icon: "RefreshCw", level: "Schema Sync" }
    ]
  }
];

export const educationList = [
  {
    institution: "Aptech Garden Campus, Karachi",
    credential: "Diploma in IT Software Engineering",
    status: "3 Semesters Completed · 4th Semester in Progress",
    duration: "Ongoing",
    description: "Intensive hands-on professional software engineering curriculum covering full-stack web architectures, enterprise application development, and software lifecycle principles.",
    modules: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JSON",
      "React.js",
      "PHP",
      "Laravel",
      "WordPress",
      "ASP.NET Core 8/10",
      "C#"
    ]
  },
  {
    institution: "Sindh Board Karachi",
    credential: "Matriculation (Commerce)",
    status: "In Progress",
    duration: "Current",
    description: "Academic curriculum in Commerce under the Board of Secondary Education Karachi, building strong mathematical and business logic foundations.",
    modules: [
      "Commerce",
      "Accounting",
      "Business Mathematics",
      "Economics"
    ]
  }
];

export const services = [
  {
    title: "Frontend Development",
    description: "Designing and developing fast, accessible, and responsive user interfaces using HTML5, CSS3, modern JavaScript, and React.js.",
    icon: "Layout",
    deliverables: ["Responsive UI/UX", "Interactive Web Apps", "Performance Optimization", "Cross-Device Compatibility"]
  },
  {
    title: "Backend Development",
    description: "Building robust backend servers and web applications with Laravel, PHP, and ASP.NET Core MVC with clean architectural separation.",
    icon: "Server",
    deliverables: ["MVC Application Logic", "RESTful API Development", "Authentication & RBAC", "Server-Side Validation"]
  },
  {
    title: "Full-Stack Web Development",
    description: "Delivering complete end-to-end web solutions connecting custom frontend interfaces seamlessly with secure backend engines.",
    icon: "Cpu",
    deliverables: ["Full Application Lifecycle", "API & Frontend Glue", "State Management", "Deployment Readiness"]
  },
  {
    title: "Database Integration",
    description: "Designing relational schemas, setting up migrations, and integrating SQL Server and MySQL with Entity Framework Core.",
    icon: "Database",
    deliverables: ["Relational Schema Modeling", "ORM Integration (EF Core)", "Query Optimization", "Data Integrity & Security"]
  },
  {
    title: "Responsive Web Design",
    description: "Crafting fluid layouts tailored for smartphones, tablets, laptops, and ultra-wide desktop monitors with zero visual clipping.",
    icon: "Smartphone",
    deliverables: ["Mobile-First Principles", "Fluid CSS & Bootstrap Grids", "Touch-Friendly Affordances", "Adaptive Layouts"]
  }
];

export const promotionalServiceData = {
  posterImage: "/assets/aistudio/unnamed_86a0f438.webp",
  slogan: "Your Idea + My Code = Your Website",
  tagline: "Modern Websites for a Better Tomorrow",
  badge: "Build Fast · Build Smart",
  formula: "Frontend + Backend = Complete Website",
  fullStackComparison: {
    frontend: {
      title: "Frontend",
      role: "What users see & interact with",
      technologies: ["HTML", "CSS", "JS", "React"],
      features: [
        "Modern, Responsive Design",
        "Clean & Attractive UI/UX",
        "Smooth User Experience",
        "Cross-Browser Compatible",
        "Fast & Optimized Performance"
      ]
    },
    backend: {
      title: "Backend",
      role: "The engine behind the website",
      technologies: ["Node.js", "MongoDB", "Express", "REST API", "SQL Server"],
      features: [
        "RESTful APIs & Server Logic",
        "Database Management",
        "Authentication & Security",
        "Business Logic & Performance",
        "Scalable & Reliable"
      ]
    }
  },
  packages: [
    {
      id: "frontend-only",
      name: "Frontend Only",
      subtitle: "UI/UX + Responsive Design",
      price: "Rs. 5,000",
      priceNote: "For small & simple websites",
      popular: false,
      icon: "Monitor",
      color: "cyan",
      deliverables: [
        "Modern, Responsive Design",
        "Clean & Attractive UI/UX",
        "Smooth User Experience",
        "Cross-Browser Compatible",
        "Fast & Optimized Performance",
        "Semantic HTML5, CSS3, JavaScript / React"
      ]
    },
    {
      id: "backend-only",
      name: "Backend Only",
      subtitle: "APIs + Database + Authentication",
      price: "Rs. 1,000 – 15,000",
      priceNote: "Depends on features & complexity",
      popular: false,
      icon: "Server",
      color: "purple",
      deliverables: [
        "RESTful APIs & Server Logic",
        "Database Modeling & Management",
        "Authentication & Security Protocols",
        "Business Logic & High Performance",
        "Scalable Architecture & Clean Code",
        "Express / Node.js / ASP.NET / Laravel"
      ]
    },
    {
      id: "full-website",
      name: "Full Website",
      subtitle: "Frontend + Backend + Database",
      price: "Rs. 6,000 – 25,000+",
      priceNote: "Price depends on website requirements",
      popular: true,
      icon: "Cpu",
      color: "gradient",
      deliverables: [
        "Complete Frontend UI + Backend Engine",
        "Integrated Relational/Document Database",
        "User Authentication, RBAC & Admin Panel",
        "End-to-End API Routing & State Management",
        "Cross-Device Testing & Speed Optimization",
        "Full Project Handover & Deployment Support"
      ]
    }
  ],
  whyChooseMe: [
    {
      title: "Complete Control",
      desc: "Both frontend & backend engineered under one roof for unified architecture.",
      icon: "ShieldCheck"
    },
    {
      title: "Faster Development",
      desc: "Save time with full-stack expertise and eliminate cross-team bottlenecks.",
      icon: "Zap"
    },
    {
      title: "Better Debugging",
      desc: "Easier to diagnose and eliminate bugs across the entire stack in real time.",
      icon: "Bug"
    },
    {
      title: "Seamless Integration",
      desc: "Smooth, zero-friction connection between UI state and server APIs.",
      icon: "Link2"
    },
    {
      title: "Proven Value",
      desc: "High quality, production-grade solutions designed for long-term scalability.",
      icon: "Rocket"
    }
  ]
};

