/**
 * ====================================================================
 * Hari Khatri Portfolio - Centralized Projects Data
 * ====================================================================
 * To add a new project, simply append an object to the `PROJECTS_DATA` array.
 * Fields:
 * - id: unique string identifier
 * - title: project name
 * - subtitle: short tagline
 * - category: 'featured' | 'web' | 'game' | 'system'
 * - badge: visual label (e.g., 'Live Web App', 'CLI Tool')
 * - status: 'live' | 'repo' | 'code'
 * - icon: Lucide icon identifier
 * - isLive: boolean indicating if live demo is deployed
 * - liveUrl: full URL to live deployment (or null)
 * - githubUrl: full URL to GitHub repository (or null)
 * - description: detailed explanation of the project
 * - highlights: key technical features
 * - techStack: list of technologies used
 * - previewVisual: CSS theme class for the card hero banner
 */

const PROJECTS_DATA = [
    {
        id: "silicon-dynasty",
        title: "Silicon Dynasty",
        subtitle: "The Evolution of Computing (1952–2035)",
        category: "web",
        badge: "Live Web App",
        status: "live",
        icon: "cpu",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/Silicon-Dynasty/",
        githubUrl: "https://github.com/HariAcharyaKhatri/Silicon-Dynasty",
        description: "A comprehensive PC manufacturing, semiconductor engineering, and technology empire simulation spanning from early vacuum tube mainframes in 1952 to quantum supercomputing in 2035. Features market economies, research trees, and factory architecture.",
        highlights: [
            "Real-time economy & technology tree simulation",
            "Built with React 19, TypeScript, and Vite",
            "Tailwind CSS responsive design with interactive particle celebration"
        ],
        techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Canvas Confetti", "Lucide Icons"],
        previewTheme: "preview-silicon"
    },
    {
        id: "caligo",
        title: "CALIGO",
        subtitle: "Rise in the Vertical City — Browser MMORPG",
        category: "game",
        badge: "Live Browser Game",
        status: "live",
        icon: "crosshair",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/Caligo/",
        githubUrl: "https://github.com/HariAcharyaKhatri/Caligo",
        description: "A text-driven, dark cyberpunk browser MMORPG inspired by Torn City. Runs entirely in the client with persistent LocalStorage state, audio design, dynamic crimes, inventory markets, combat loops, and atmospheric UI micro-animations.",
        highlights: [
            "Seamless in-browser execution with zero backend dependency",
            "Local storage persistence for items, energy, and progression",
            "Interactive audio engine using Web Audio API and custom sound cues"
        ],
        techStack: ["JavaScript (ES6+)", "HTML5 Canvas", "Cyberpunk UI", "Web Audio API", "LocalStorage"],
        previewTheme: "preview-caligo"
    },
    {
        id: "morph",
        title: "Morph",
        subtitle: "AI Website Cloner & Next.js Scaffolder",
        category: "web",
        badge: "Open-Source CLI",
        status: "repo",
        icon: "terminal",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri/Morph",
        description: "A powerful developer CLI and AI workflow that deconstructs any live website into clean, production-ready Next.js + Tailwind CSS code. Extracts design tokens, downloads assets, detects animations, crawls page routes, and runs full QA audits.",
        highlights: [
            "Dual workflow: CLI tool (`npx morph clone`) + AI agent pipeline",
            "Automatic design token extraction and Tailwind theme generation",
            "Generates clean React components and Next.js App Router structures"
        ],
        techStack: ["TypeScript", "Next.js", "Node.js", "Tailwind CSS", "CLI Tooling", "AI Pipeline"],
        previewTheme: "preview-morph"
    },
    {
        id: "luminary-ide",
        title: "Luminary IDE",
        subtitle: "Custom Desktop Code Editor & Compiler Hub",
        category: "system",
        badge: "Desktop Software",
        status: "code",
        icon: "code-2",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri",
        description: "A lightweight, custom-built desktop Integrated Development Environment developed in Java. Engineered with multi-tab file management, syntax highlighting routines, process stream redirection for compiling/running code, and an integrated terminal output window.",
        highlights: [
            "Native Java desktop GUI using Swing and custom rendering",
            "Process stream pipes for instant code compilation and execution",
            "Tabbed workspace architecture with stateful document models"
        ],
        techStack: ["Java", "Swing / AWT", "Process Streams", "Syntax Parsing", "Desktop Architecture"],
        previewTheme: "preview-ide"
    },
    {
        id: "ancient-chaturanga",
        title: "Ancient Chaturanga",
        subtitle: "Algorithmic Indian Classical Chess Simulation",
        category: "game",
        badge: "C++ Engine",
        status: "code",
        icon: "swords",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri",
        description: "A comprehensive chess engine rooted in the historical origins of Chaturanga. Developed from scratch in C++ to execute custom piece movement vectors, board matrix evaluation, checkmate detection algorithms, and strict turn-based rule validation.",
        highlights: [
            "Built without external game engines to master algorithmic problem-solving",
            "Matrix-based board representations with bitwise & coordinate validation",
            "Deterministic game state trees and rule constraint checks"
        ],
        techStack: ["C++", "Game State Architecture", "Algorithms", "Discrete Mathematics"],
        previewTheme: "preview-chess"
    },
    {
        id: "tiger-gambit",
        title: "Tiger Gambit",
        subtitle: "Tactical 2D Strategy & Logic Simulation",
        category: "game",
        badge: "Strategy Logic",
        status: "code",
        icon: "shield",
        isLive: false,
        liveUrl: "https://hariacharyakhatri.github.io/TIGER-GAMBIT/",
        githubUrl: "https://github.com/HariAcharyaKhatri",
        description: "A 2D strategy game centered around tactical asymmetric combat mechanics. Focuses on advanced mathematical rulesets, turn-by-turn state machines, resource trading calculations, and dynamic feedback systems.",
        highlights: [
            "Turn-based state machine enforcing asymmetric game rules",
            "Dynamic decision trees for responsive NPC tactics",
            "Modular architecture designed for balance testing and rapid iteration"
        ],
        techStack: ["Game Architecture", "State Machines", "Logic Systems", "Simulation"],
        previewTheme: "preview-tiger"
    },
    {
        id: "student-records",
        title: "Student Record Management System",
        subtitle: "Low-Level Persistent File Engine in C",
        category: "system",
        badge: "Core C Software",
        status: "code",
        icon: "file-text",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri",
        description: "A robust console application built in pure C implementing direct binary file streams (`fread`, `fwrite`, `fseek`) to create a fast, structured database engine for student academic records, search filters, and record modification.",
        highlights: [
            "Direct binary file manipulation ensuring atomic records",
            "Linear and indexed search algorithms with input sanitation",
            "Strict memory management and modular function decomposition"
        ],
        techStack: ["C", "Binary File I/O", "Data Structures", "Memory Management", "CRUD"],
        previewTheme: "preview-records"
    },
    {
        id: "library-rdbms",
        title: "Relational Library Schema & DBMS",
        subtitle: "Normalized 3NF Relational Database Architecture",
        category: "system",
        badge: "Database System",
        status: "code",
        icon: "database",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri",
        description: "A normalized relational database schema designed for high-integrity library operations. Includes multi-table joins, foreign key constraints, inventory tracking triggers, issue-return audit logs, and query optimization.",
        highlights: [
            "Structured in Third Normal Form (3NF) to eliminate redundancy",
            "Complex transactional SQL queries, indexing, and join optimization",
            "Strict integrity constraints for issue dates, penalties, and returns"
        ],
        techStack: ["SQL", "Relational DBMS", "3NF Normalization", "Query Optimization"],
        previewTheme: "preview-db"
    }
];

// Export for module environments or assign globally for browser script inclusion
if (typeof module !== "undefined" && module.exports) {
    module.exports = { PROJECTS_DATA };
}
