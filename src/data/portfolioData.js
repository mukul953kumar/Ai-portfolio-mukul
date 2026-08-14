// Central Knowledge Base for Mukul's Interactive AI Portfolio

export const MUKUL_DATA = {
  personal: {
    name: "Mukul Kumar",
    role: "Full Stack Developer & B.Tech IT Student",
    headline: "Building high-impact React & MERN stack web applications with strong architecture, clean code, and user-centric design.",
    tagline: "Don't browse my portfolio. Talk to it.",
    bio: "I am a B.Tech Information Technology student passionate about full-stack web engineering. Instead of relying on tutorial clones, I build real-world MERN stack products (React, Node.js, Express.js, MongoDB) that solve actual student and user problems.",
    location: "India",
    email: "mukulkumar.dev@gmail.com",
    github: "https://github.com/mukul-kumar",
    linkedin: "https://linkedin.com/in/mukul-kumar",
    availability: "Open for Internship & Full-Time Software Developer Roles",
    education: {
      degree: "B.Tech in Information Technology",
      period: "2023 - 2027",
      status: "Currently in 3rd Year"
    }
  },

  recruiterSummary: {
    targetRoles: [
      "Frontend Developer",
      "React Developer",
      "MERN Stack Developer",
      "Full Stack Developer (Junior/Intern)"
    ],
    strengths: [
      "MERN Stack Specialization: Deep understanding of React component hierarchy, state management, REST APIs, and MongoDB document modeling.",
      "Product-first mindset: Focuses on building real solutions like TeamZen, Campus Split, and Resume Generator rather than basic tutorial clones.",
      "Honest skill transparency: Clear boundary between core expertise (React/MERN) and technologies being learned (Next.js/TypeScript).",
      "Clean Code & Performance: Writes modular, maintainable JavaScript/React code with dynamic UI visualizations."
    ],
    quickPitch: "Mukul is a product-driven Full Stack Developer specializing in the MERN ecosystem (React, Node.js, Express, MongoDB). He has proven experience building end-to-end applications (like TeamZen, Campus Split, Resume Generator, and Streak Aura), handling database design, REST APIs, and responsive glassmorphic interfaces."
  },

  developerDNA: {
    categories: [
      {
        name: "Primary Expertise",
        level: "Primary",
        color: "from-cyan-500 to-blue-500",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
        description: "Technologies Mukul uses daily to build production-grade MERN web applications with high confidence.",
        skills: [
          { name: "React.js", rating: 92, note: "Hooks, Context, Custom Hooks, State Management" },
          { name: "JavaScript (ES6+)", rating: 90, note: "Async/Await, Closures, DOM, Prototypes, Array methods" },
          { name: "HTML5 / Modern CSS", rating: 95, note: "Flexbox, Grid, CSS Variables, Responsive Design" },
          { name: "Tailwind CSS", rating: 92, note: "Utility-first design, dark mode, animation utilities" },
          { name: "Node.js & Express", rating: 85, note: "REST API design, Middleware, Auth, Error Handling" },
          { name: "MongoDB & Mongoose", rating: 85, note: "Document Modeling, Schema Validation, Aggregation" },
          { name: "Git & GitHub", rating: 88, note: "Version control, branching, PR workflows, open source" }
        ]
      },
      {
        name: "Working Knowledge",
        level: "Working Knowledge",
        color: "from-emerald-500 to-teal-500",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        description: "Technologies Mukul has successfully integrated into full-stack MERN projects.",
        skills: [
          { name: "Redux Toolkit", rating: 78, note: "Global state slices, Async thunks, RTK Query" },
          { name: "WebSockets (Socket.io)", rating: 75, note: "Real-time bidirectional chat & notification events" },
          { name: "RESTful API Architecture", rating: 88, note: "HTTP verbs, status codes, JSON payload standards" },
          { name: "JWT Authentication", rating: 85, note: "Token authorization, HttpOnly cookie security" },
          { name: "PDF Generator APIs", rating: 80, note: "Dynamic client/server HTML-to-PDF compilation" }
        ]
      },
      {
        name: "Active Learning",
        level: "Learning",
        color: "from-amber-500 to-orange-500",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        description: "Technologies currently being mastered through hands-on projects and documentation.",
        skills: [
          { name: "Next.js (App Router)", rating: 65, note: "Server components, SSR/SSG patterns, API routes" },
          { name: "TypeScript", rating: 62, note: "Type safety, interfaces, generic constraints" },
          { name: "Docker Basics", rating: 55, note: "Containerization of Node & React apps" },
          { name: "Redis Caching", rating: 58, note: "In-memory caching for session management & query speed" }
        ]
      },
      {
        name: "Exploring & Future Focus",
        level: "Exploring",
        color: "from-purple-500 to-indigo-500",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        description: "Concepts and tools Mukul is researching for long-term career growth.",
        skills: [
          { name: "System Design Fundamentals", rating: 50, note: "Load balancing, microservices vs monolith, DB scaling" },
          { name: "AI Engineering & LLM APIs", rating: 60, note: "Gemini API integration, RAG architectures, prompt design" },
          { name: "CI/CD Pipelines", rating: 52, note: "GitHub Actions automated build & deployment workflows" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "teamzen",
      title: "TeamZen",
      subtitle: "Teammate Finding Platform for Engineering Students",
      tagline: "Connecting B.Tech students with complementary skills for hackathons & major projects.",
      category: "Full Stack (MERN)",
      badge: "Flagship Project",
      featured: true,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
      liveDemo: "https://teamzen-demo.vercel.app",
      github: "https://github.com/mukul-kumar/teamzen",
      stats: {
        stars: 42,
        forks: 14,
        commits: 180,
        users: "250+ B.Tech Students"
      },
      problem: "Engineering and B.Tech students frequently struggle to find reliable project partners or hackathon teammates with matching skills. Traditional group chats are chaotic, leading to unbalanced teams and abandoned projects.",
      solution: "TeamZen provides a structured portal where students post project requirements, filter candidates by technical skill tags (e.g. React, Node, Machine Learning), evaluate applicant profiles, and form teams with real-time invitation tracking.",
      architecture: [
        { layer: "Frontend UI", tech: "React 18 + Vite + Tailwind CSS", detail: "Responsive SPA with dynamic filter chips, real-time modal notifications, and stateful application tracking." },
        { layer: "API Backend", tech: "Node.js + Express.js REST API", detail: "JWT authenticated endpoints for user authentication, project posting, application status updates, and search logic." },
        { layer: "Database Layer", tech: "MongoDB + Mongoose ORM", detail: "Flexible document collections storing Users, Skill Tags, Projects, Team Membership, and Invitations with indexing." },
        { layer: "Real-time Messaging", tech: "Socket.io WebSockets", detail: "Instant notifications when a project owner accepts or declines a student's team request." }
      ],
      keyFeatures: [
        "Skill-Based Candidate Filter: Filter students by React, Node, Python, Java, etc.",
        "Project Proposal Dashboard: Post hackathon ideas with specific role slots needed.",
        "Application Management Workflow: Accept, reject, or message applicants directly.",
        "Interactive User Profiles: Show verified skills, GitHub links, and past team reviews.",
        "Real-Time Activity Feed: Instant socket updates on team acceptance."
      ],
      challenges: [
        {
          title: "Complex Multi-Skill Filter Aggregation",
          issue: "Filtering students who possessed ALL required skills for a hackathon team produced slow queries.",
          resolution: "Implemented indexed MongoDB array aggregation pipelines on skill tags, boosting candidate filter response times by 80%."
        },
        {
          title: "State Sync across Real-Time Notifications",
          issue: "When a team request was accepted, UI components in separate tabs were out of sync.",
          resolution: "Implemented a global Socket.io event listener coupled with React Context to trigger instant state sync across all active UI components."
        }
      ],
      learnings: [
        "Mastered MongoDB document schema design, indexing, and array querying.",
        "Deepened knowledge of HTTP-only cookie JWT security and authorization middleware in Express.",
        "Understood the value of component abstraction when building complex multi-step forms."
      ],
      aiPrompts: [
        "How does team matching work in TeamZen?",
        "How does authentication work in TeamZen?",
        "What was the hardest challenge while building TeamZen?",
        "What was Mukul's exact role in TeamZen?"
      ]
    },
    {
      id: "campus-split",
      title: "Campus Split",
      subtitle: "Campus & Hostel Expense Splitting Web App",
      tagline: "Effortless bill splitting and balance tracking for college roommates and friends.",
      category: "Full Stack (MERN)",
      badge: "MERN Stack",
      featured: true,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://campus-split.vercel.app",
      github: "https://github.com/mukul-kumar/campus-split",
      stats: {
        stars: 31,
        forks: 9,
        commits: 120,
        users: "Hostel Students"
      },
      problem: "Hostel roommates and college friends struggle to keep track of shared expenses (food, rent, groceries, trips), leading to awkward arguments and forgotten debts.",
      solution: "Campus Split automates group expense tracking, calculates minimum transaction balances, and provides instant settlement summaries for college groups.",
      architecture: [
        { layer: "Presentation", tech: "React + Tailwind CSS", detail: "Clean dark UI with group balance cards, pie chart breakdowns, and expense logs." },
        { layer: "API Backend", tech: "Node.js + Express REST API", detail: "Endpoints for creating groups, adding split expenses, and calculating optimal debt settlement." },
        { layer: "Database", tech: "MongoDB Atlas", detail: "Document models storing Users, Groups, Expenses, and Settlement Logs." }
      ],
      keyFeatures: [
        "Equal & Unequal Expense Splitting (Percentage, Fixed Amounts, Shares).",
        "Minimum Transaction Settlement Algorithm (simplifies 10 group debts into 2 payments).",
        "Category Breakdown Charts (Food, Rent, Travel, Parties).",
        "Export Expense History to PDF/CSV for room records."
      ],
      challenges: [
        {
          title: "Debt Simplification Algorithm",
          issue: "In a group of 6 friends, multiple cross-debts created confusing repayment chains.",
          resolution: "Wrote a net balance calculation algorithm in Node.js that cancels out reciprocal debts to find the minimal cash transfer path."
        }
      ],
      learnings: [
        "Algorithmic balance calculation and data transformation in JavaScript.",
        "MongoDB sub-document embedding for expense items inside group collections."
      ],
      aiPrompts: [
        "How does Campus Split simplify group debts?",
        "What tech stack is used in Campus Split?",
        "Why did Mukul build Campus Split?"
      ]
    },
    {
      id: "resume-generator",
      title: "Resume Generator",
      subtitle: "Dynamic AI-Assisted Resume Builder & PDF Exporter",
      tagline: "Build professional ATS-friendly developer resumes with instant preview and PDF download.",
      category: "Full Stack (MERN)",
      badge: "MERN & PDF",
      featured: true,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://resume-generator-mukul.vercel.app",
      github: "https://github.com/mukul-kumar/resume-generator",
      stats: {
        stars: 29,
        forks: 7,
        commits: 105,
        users: "Developer Tool"
      },
      problem: "Formatting developer resumes in Word or generic templates is tedious, often failing ATS parser scans or breaking layout alignment.",
      solution: "A step-by-step React builder that compiles structured user inputs into clean ATS-formatted resumes with live side-by-side preview and one-click PDF generation.",
      architecture: [
        { layer: "UI & Form Builder", tech: "React + Tailwind CSS", detail: "Multi-step form stepper with live side-by-side document preview." },
        { layer: "Backend Compiler", tech: "Node.js + Express + Puppeteer", detail: "Server-side HTML-to-PDF rendering service generating crisp PDF downloads." },
        { layer: "Database", tech: "MongoDB Atlas", detail: "Stores user resume templates, section drafts, and saved profiles." }
      ],
      keyFeatures: [
        "Live Side-by-Side Resume Preview while typing.",
        "Multiple ATS-Friendly Layout Templates (Classic, Modern, Tech Minimal).",
        "One-Click Server-Side PDF Download with exact pixel pagination.",
        "Save & Load Resume Drafts with encrypted user authentication."
      ],
      challenges: [
        {
          title: "Ensuring Clean Page Breaks in PDF Export",
          issue: "Long project descriptions broke awkwardly across page boundaries during PDF generation.",
          resolution: "CSS `@media print` rules and page-break-inside avoid utility classes were applied to section containers."
        }
      ],
      learnings: [
        "Server-side PDF compilation using Node.js and headless browser rendering.",
        "Complex form state management in React with custom validation hooks."
      ],
      aiPrompts: [
        "How does the Resume Generator export PDFs?",
        "What features does the Resume Generator offer?",
        "What database does the Resume Generator use?"
      ]
    },
    {
      id: "streak-aura",
      title: "Streak Aura",
      subtitle: "Daily Habit & Coding Activity Streak Tracker",
      tagline: "Gamified activity streak tracker with GitHub-style contribution heatmaps.",
      category: "Full Stack (MERN)",
      badge: "MERN & Gamified",
      featured: true,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://streak-aura.vercel.app",
      github: "https://github.com/mukul-kumar/streak-aura",
      stats: {
        stars: 24,
        forks: 6,
        commits: 95,
        users: "Habit Tracker"
      },
      problem: "Maintaining daily coding practice, DSA problem solving, or study habits requires consistent visual feedback and accountability.",
      solution: "Streak Aura visualizes daily habits using GitHub-style contribution heatmaps, automated streak counters, and motivational milestone badges.",
      architecture: [
        { layer: "Frontend UI", tech: "React + Canvas/SVG Heatmaps", detail: "Interactive grid heatmaps rendering daily habit completion intensity." },
        { layer: "API Backend", tech: "Node.js + Express REST API", detail: "Handles daily check-in logs, streak calculations, and streak freeze protections." },
        { layer: "Database", tech: "MongoDB Atlas", detail: "Collections storing User Habits, Daily Log Dates, and Milestone Achievements." }
      ],
      keyFeatures: [
        "GitHub-Style Annual & Monthly Activity Contribution Grid.",
        "Automatic Streak Counter (Current Streak vs Best Streak).",
        "Gamified Milestone Badges (7-Day Fire, 30-Day Legend, 100-Day Master).",
        "Daily Reminder Notifications & Streak Freeze Safety Shield."
      ],
      challenges: [
        {
          title: "Accurate Timezone Date Calculation",
          issue: "Users checking in around midnight experienced reset streaks due to UTC server offset differences.",
          resolution: "Normalized daily log dates to ISO YYYY-MM-DD strings based on the client browser's local timezone offset."
        }
      ],
      learnings: [
        "Date manipulation and timezone normalization in JavaScript.",
        "Building interactive SVG/Canvas contribution heatmaps in React."
      ],
      aiPrompts: [
        "How does Streak Aura calculate streaks?",
        "What is the main feature of Streak Aura?",
        "How does Streak Aura handle timezones?"
      ]
    }
  ],

  howIThink: [
    {
      step: "01",
      title: "Problem & Requirements Analysis",
      subtitle: "Start with the 'Why'",
      description: "Before writing any code, I analyze the real user pain point. I define clear problem boundaries and expected outcome specifications.",
      icon: "HelpCircle"
    },
    {
      step: "02",
      title: "User Flow & UX Sketching",
      subtitle: "Design the Interaction",
      description: "Map out intuitive user journeys. Ensure every button, modal, and state transition makes sense before starting implementation.",
      icon: "Layout"
    },
    {
      step: "03",
      title: "Data Modeling & Architecture",
      subtitle: "Structure the Data First",
      description: "Define MongoDB document schemas, REST API routes, component tree hierarchy, and state scope.",
      icon: "Database"
    },
    {
      step: "04",
      title: "Build Functional MVP",
      subtitle: "Iterative Engineering",
      description: "Code core functional features first with clean, modular React components and tested Node.js/Express API routes.",
      icon: "Code"
    },
    {
      step: "05",
      title: "Testing & Edge Case Handling",
      subtitle: "Break It Before Users Do",
      description: "Validate form inputs, error boundaries, empty states, network latency delays, and edge cases to ensure resilience.",
      icon: "ShieldAlert"
    },
    {
      step: "06",
      title: "Optimization & Refactoring",
      subtitle: "Make It Fast & Modular",
      description: "Refactor repetitive code, optimize MongoDB indices and aggregation pipelines, reduce React re-renders, and format clean code.",
      icon: "Zap"
    },
    {
      step: "07",
      title: "Deployment & Monitoring",
      subtitle: "Ship to Production",
      description: "Deploy client apps on Vercel, backend servers on cloud providers, set up environment keys, and verify live performance.",
      icon: "Rocket"
    }
  ],

  journey: [
    {
      year: "2024",
      milestone: "Foundations & Web Basics",
      title: "Started Web Development Journey",
      description: "Dived into Computer Science fundamentals, HTML5, CSS3, ES6 JavaScript, and Git version control. Built interactive DOM projects and landing pages.",
      tags: ["HTML5", "CSS3", "JavaScript ES6", "Git"],
      keyAchievement: "Mastered JavaScript asynchronous programming, closures, array methods, and clean CSS flex/grid layouts."
    },
    {
      year: "2025",
      milestone: "React & MERN Ecosystem",
      title: "Mastered Component-Based Architecture & Node APIs",
      description: "Transitioned from plain JS to React. Built SPA projects with state hooks, React Router, Tailwind CSS, Express backend APIs, and MongoDB database integrations.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      keyAchievement: "Architected and launched Campus Split & Resume Generator using the MERN stack."
    },
    {
      year: "2026",
      milestone: "Flagship MERN Projects & AI Applications",
      title: "Built TeamZen & AI Portfolio",
      description: "Built TeamZen (Teammate finding portal for B.Tech students), Streak Aura, and this Interactive Developer AI Portfolio. Focused on MERN engineering, API architecture, and state management.",
      tags: ["TeamZen", "Campus Split", "Resume Generator", "Streak Aura", "AI Portfolio"],
      keyAchievement: "Built real-time WebSocket messaging, MongoDB aggregation filters, dynamic PDF compilation, and structured AI response engines."
    },
    {
      year: "2026+",
      milestone: "Career Focus & Next Level",
      title: "Targeting Full Stack & Frontend Engineer Roles",
      description: "Diving deeper into Next.js App Router, TypeScript, Advanced Data Structures & Algorithms, and scalable backend system design.",
      tags: ["Next.js", "TypeScript", "System Design", "Advanced DSA"],
      keyAchievement: "Ready to contribute immediately to engineering teams as a Full Stack / Frontend Developer."
    }
  ],

  proofMatrix: [
    {
      claim: "Proficient in Building End-to-End MERN Stack Applications",
      evidence: "Built TeamZen, Campus Split, Resume Generator & Streak Aura — complete with user auth, MongoDB document models, state management, and deployed live demos.",
      metrics: "180+ Commits | 4 Full Stack MERN Repos | Live Demos Available",
      githubUrl: "https://github.com/mukul-kumar/teamzen",
      demoUrl: "https://teamzen-demo.vercel.app"
    },
    {
      claim: "Solid Database Design (MongoDB Document Modeling)",
      evidence: "Designed MongoDB document collections with schema validation, indexing, and aggregation pipelines for TeamZen & Campus Split.",
      metrics: "Document Schema Validation | Indexed Skill Filters | Optimized Aggregations",
      githubUrl: "https://github.com/mukul-kumar/teamzen",
      demoUrl: "https://teamzen-demo.vercel.app"
    },
    {
      claim: "Strong Problem Solving & Data Structures (DSA)",
      evidence: "Active problem solver focusing on Array manipulation, String algorithms, Debt simplification algorithms, and Streak calculation logic.",
      metrics: "250+ Problems Solved | Campus Split & Streak Aura Built",
      githubUrl: "https://github.com/mukul-kumar/campus-split",
      demoUrl: "https://campus-split.vercel.app"
    },
    {
      claim: "Honest & Transparent Communication",
      evidence: "Accurately reports core expertise (React/MERN) vs technologies currently being learned (Next.js/TypeScript).",
      metrics: "No Fake 100% Skill Bars | Clear Learning Roadmap",
      githubUrl: "https://github.com/mukul-kumar",
      demoUrl: "#developer-dna"
    }
  ],

  liveDashboard: {
    currentlyBuilding: "Interactive AI Portfolio & TeamZen v2",
    currentlyLearning: "Next.js 15 App Router & TypeScript Interfaces",
    currentlyPracticing: "Graphs & Dynamic Programming on LeetCode",
    statusIndicators: [
      { label: "Building", percentage: 90, color: "bg-cyan-500", note: "TeamZen & AI Assistant" },
      { label: "Learning", percentage: 75, color: "bg-blue-500", note: "Next.js & TypeScript" },
      { label: "DSA Practice", percentage: 70, color: "bg-emerald-500", note: "Trees & DP Patterns" }
    ],
    exploringTopics: [
      "Advanced React Patterns (Server Components)",
      "Backend Microservices & Message Queues",
      "Tailwind v4 & Canvas Shader Visuals",
      "LLM Context Window Optimization"
    ]
  },

  githubStats: {
    username: "mukul-kumar",
    publicRepos: 18,
    totalStars: 95,
    contributionsThisYear: 420,
    topLanguages: [
      { name: "JavaScript", percent: 48, color: "#f7df1e" },
      { name: "React / JSX", percent: 32, color: "#61dafb" },
      { name: "HTML / CSS", percent: 12, color: "#e34c26" },
      { name: "MongoDB / Node", percent: 8, color: "#47a248" }
    ]
  },

  faqDatabase: [
    {
      keywords: ["who", "about", "mukul", "background", "biography"],
      question: "Who is Mukul?",
      answer: "Mukul Kumar is a Full Stack Web Developer and B.Tech Information Technology student. He specializes in building practical, high-performance MERN web applications using React.js, Node.js, Express, and MongoDB. He is known for building TeamZen (teammate finder), Campus Split (expense manager), Resume Generator, and Streak Aura.",
      cardType: "profile"
    },
    {
      keywords: ["project", "projects", "work", "portfolio", "built", "teamzen", "best project", "campus split", "resume generator", "streak aura"],
      question: "What projects has Mukul built?",
      answer: "Mukul has built 4 key MERN stack projects:\n1. **TeamZen** (Teammate finder for B.Tech students using React, Node, Express, MongoDB, Socket.io)\n2. **Campus Split** (Expense & bill splitting web app for college roommates)\n3. **Resume Generator** (Dynamic ATS-friendly resume builder with PDF export)\n4. **Streak Aura** (Daily habit & activity streak tracker with GitHub-style heatmaps).",
      cardType: "project_list"
    },
    {
      keywords: ["why hire", "hire", "why", "recruit", "reasons", "candidate", "strengths"],
      question: "Why should you hire Mukul?",
      answer: "1. **Product-First MERN Engineering**: He builds real products that solve actual problems (e.g. TeamZen for 250+ students, Campus Split for hostel roommates).\n2. **Solid MERN Stack Foundation**: Proficient in React, Node.js, REST APIs, and MongoDB document modeling.\n3. **Honest Skill Transparency**: Clear distinction between primary MERN skills and active learning goals.\n4. **Fast & Eager Learner**: Adapts quickly to production environments and team standards.",
      cardType: "hire"
    },
    {
      keywords: ["tech", "stack", "skills", "technologies", "know", "react", "node", "mongodb", "javascript"],
      question: "What technologies does Mukul know?",
      answer: "Mukul's primary tech stack is the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** alongside ES6+ JavaScript, HTML5, CSS3, and Tailwind CSS. He also has working knowledge of Redux Toolkit, WebSockets (Socket.io), and RESTful API Architecture.",
      cardType: "skills"
    },
    {
      keywords: ["teamzen", "role", "teamzen role", "what was his role"],
      question: "What was Mukul's role in TeamZen?",
      answer: "Mukul was the **Sole Lead Full Stack Developer** for TeamZen. He single-handedly designed the MongoDB document schema, wrote the Node.js REST API endpoints, integrated real-time Socket.io notifications, and built the responsive React user interface.",
      cardType: "project_teamzen"
    },
    {
      keywords: ["next.js", "nextjs", "next", "ssr"],
      question: "Does Mukul know Next.js?",
      answer: "Next.js is currently in Mukul's **Active Learning** roadmap (rating ~65%). His strongest daily expertise is with **React.js** and the **MERN stack (MongoDB, Express, React, Node)**. He is actively learning Next.js App Router and server components to expand his full-stack toolkit.",
      cardType: "honest_answer"
    },
    {
      keywords: ["internship", "experience", "work experience", "job"],
      question: "Does Mukul have internship experience?",
      answer: "Mukul is currently pursuing his B.Tech in IT (3rd Year) and has focused heavily on hands-on full-stack MERN project development. He is **actively looking for a Frontend or Full Stack Developer Internship / Junior Role** where he can apply his React & MERN stack skills to production projects.",
      cardType: "experience"
    },
    {
      keywords: ["resume", "cv", "download resume", "give me his resume"],
      question: "Can I get Mukul's resume?",
      answer: "Yes! Mukul's resume summarizes his B.Tech education, tech stack (React, Node, Express, MongoDB), key MERN projects (TeamZen, Campus Split, Resume Generator, Streak Aura), and contact details.",
      cardType: "resume"
    },
    {
      keywords: ["contact", "email", "reach", "hire him", "touch", "linkedin", "github"],
      question: "How can I contact Mukul?",
      answer: "You can contact Mukul via email at **mukulkumar.dev@gmail.com**, connect on LinkedIn at **linkedin.com/in/mukul-kumar**, or inspect his code on GitHub at **github.com/mukul-kumar**.",
      cardType: "contact"
    },
    {
      keywords: ["developer", "kind", "type of developer", "what kind"],
      question: "What kind of developer is Mukul?",
      answer: "Mukul is a **pragmatic, product-focused MERN Stack Developer**. He prioritizes functional design, clean code architecture, database integrity, and continuous learning over flashy but incomplete prototypes.",
      cardType: "dna"
    },
    {
      keywords: ["dsa", "leetcode", "problem solving", "algorithm"],
      question: "How is Mukul's DSA and problem-solving capability?",
      answer: "Mukul actively practices Data Structures & Algorithms (250+ problems solved on LeetCode/GeeksforGeeks). He has implemented algorithmic debt simplification in **Campus Split** and streak calculations in **Streak Aura**.",
      cardType: "proof"
    }
  ]
};
