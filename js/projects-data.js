/**
 * ====================================================================
 * Hari Khatri Portfolio - Centralized Projects Data
 * ====================================================================
 * All repositories from https://github.com/HariAcharyaKhatri and verified live links.
 * 
 * Fields:
 * - id: unique string identifier
 * - title: project name
 * - subtitle: short tagline
 * - category: 'web' | 'game' | 'system'
 * - badge: visual label (e.g., 'Live Web App', 'Live Game', 'CLI Tool')
 * - status: 'live' | 'repo' | 'code'
 * - icon: Lucide icon identifier
 * - isLive: boolean indicating if live demo is deployed
 * - liveUrl: full URL to live deployment (or null)
 * - githubUrl: full URL to GitHub repository (or null)
 * - description: detailed explanation of the project
 * - highlights: key technical features
 * - techStack: list of technologies used
 * - previewTheme: CSS theme class for the card hero banner
 */

const PROJECTS_DATA = [
    {
        id: "branchverse",
        title: "BranchVerse",
        subtitle: "Interactive AI Storytelling & Visual Novel Platform",
        category: "web",
        badge: "Live Web App (Vercel)",
        status: "live",
        icon: "sparkles",
        isLive: true,
        liveUrl: "https://branch-verse.vercel.app",
        githubUrl: "https://github.com/HariAcharyaKhatri/BranchVerse",
        description: "A mobile-first interactive AI storytelling and visual novel platform where players create custom heroes, explore branching worlds, make high-stakes tactical choices, and experience evolving narratives with authoritative game rules. Built with dark anime aesthetic and responsive audio.",
        highlights: [
            "Dynamic branching narrative trees powered by AI state evaluation",
            "Mobile-first responsive visual novel UI with safe-area support",
            "Deployed live on Vercel with real-time character & scene rendering"
        ],
        techStack: ["TypeScript", "React", "Next.js", "AI Storytelling", "Tailwind CSS", "Vercel"],
        previewTheme: "preview-branchverse"
    },
    {
        id: "silicon-dynasty",
        title: "Silicon Dynasty",
        subtitle: "The Evolution of Computing (1952–2035)",
        category: "web",
        badge: "Live Web App (GH Pages)",
        status: "live",
        icon: "cpu",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/Silicon-Dynasty/",
        githubUrl: "https://github.com/HariAcharyaKhatri/Silicon-Dynasty",
        description: "A comprehensive PC manufacturing, semiconductor engineering, and technology empire simulation spanning from early vacuum tube mainframes in 1952 to quantum supercomputing in 2035. Features market economies, research trees, and factory architecture.",
        highlights: [
            "Real-time economy & technology tree simulation engine",
            "Built with React 19, TypeScript, and Vite 6",
            "Tailwind CSS responsive design with interactive particle celebrations"
        ],
        techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Canvas Confetti", "Lucide Icons"],
        previewTheme: "preview-silicon"
    },
    {
        id: "chess-review",
        title: "Chess Player Analytics & Review",
        subtitle: "In-Browser Stockfish WASM Evaluation & Game Analysis",
        category: "web",
        badge: "Live Web App (GH Pages)",
        status: "live",
        icon: "activity",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/Chess-Review/",
        githubUrl: "https://github.com/HariAcharyaKhatri/Chess-Review",
        description: "A modern chess game review and player analytics platform integrating the Stockfish WASM engine for in-browser evaluation, move classification (brilliant, best, blunder, inaccuracy), win-rate trend graphs, and tactical move accuracy reports.",
        highlights: [
            "Real-time Stockfish WASM engine execution in background Web Workers",
            "Move classification algorithms with accuracy scoring and centipawn analysis",
            "Interactive chessboard review UI built with React 18 & TypeScript 5"
        ],
        techStack: ["React 18", "TypeScript 5", "Vite 6", "Stockfish WASM", "Tailwind CSS", "Web Workers"],
        previewTheme: "preview-chessreview"
    },
    {
        id: "caligo",
        title: "CALIGO",
        subtitle: "Rise in the Vertical City — Cyber MMORPG",
        category: "game",
        badge: "Live Browser Game (GH Pages)",
        status: "live",
        icon: "crosshair",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/Caligo/",
        githubUrl: "https://github.com/HariAcharyaKhatri/Caligo",
        description: "A text-driven, dark cyberpunk browser MMORPG inspired by Torn City. Runs entirely in the client with persistent LocalStorage state, audio design, dynamic crimes, inventory markets, combat loops, and atmospheric UI micro-animations.",
        highlights: [
            "Seamless in-browser execution with zero backend dependency",
            "Local storage persistence for items, energy, progression, and crime stats",
            "Interactive audio engine using Web Audio API and custom sound cues"
        ],
        techStack: ["JavaScript (ES6+)", "HTML5 Canvas", "Cyberpunk UI", "Web Audio API", "LocalStorage"],
        previewTheme: "preview-caligo"
    },
    {
        id: "tiger-gambit",
        title: "Bagh-Chal: Tiger's Gambit",
        subtitle: "Authentic Himalayan Asymmetric Board Game & Tactical AI",
        category: "game",
        badge: "Live Strategy Game (GH Pages)",
        status: "live",
        icon: "shield",
        isLive: true,
        liveUrl: "https://hariacharyakhatri.github.io/TIGER-GAMBIT/",
        githubUrl: "https://github.com/HariAcharyaKhatri/TIGER-GAMBIT",
        description: "A modern, authentic web implementation of Bagh-Chal (traditional two-player asymmetric strategy board game of Nepal). Features genuine 5x5 Alquerque board topology, handcrafted vector piece medallions (tigers & goats), turn-based state enforcement, and dynamic move mechanics.",
        highlights: [
            "Authentic 5x5 Alquerque network with accurate orthogonal lines and parity diagonals",
            "Handcrafted vector piece medallions featuring brushed brass and ivory styling",
            "Asymmetric turn state machine enforcing tiger captures and goat traps"
        ],
        techStack: ["JavaScript (ES6+)", "HTML5 Canvas", "SVG Vector Design", "Game State Logic", "Algorithms"],
        previewTheme: "preview-tiger"
    },
    {
        id: "luminary-ide",
        title: "Luminary IDE & Text Editor",
        subtitle: "Desktop Code Editor & Compiler Hub in Java",
        category: "system",
        badge: "College 3rd Sem Project",
        status: "repo",
        icon: "code-2",
        isLive: false,
        liveUrl: null,
        githubUrl: "https://github.com/HariAcharyaKhatri/LuminaryIDE",
        description: "A lightweight, custom-built desktop Integrated Development Environment and Text Editor developed in Java for my BCA 3rd semester project. Engineered with multi-tab file management, syntax highlighting routines, process stream redirection for compiling/running code, and an integrated terminal output window.",
        highlights: [
            "Native Java desktop GUI using Swing and custom rendering",
            "Process stream pipes for instant code compilation and execution",
            "Tabbed workspace architecture with stateful document models"
        ],
        techStack: ["Java", "Swing / AWT", "Process Streams", "Syntax Parsing", "Desktop Architecture"],
        previewTheme: "preview-ide"
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
