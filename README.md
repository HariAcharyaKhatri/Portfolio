# Hari Khatri — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-Portfolio-06b6d4?style=for-the-badge&logo=githubpages&logoColor=white)](https://hariacharyakhatri.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-HariAcharyaKhatri-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HariAcharyaKhatri)
[![Instagram](https://img.shields.io/badge/Instagram-@hariacharyakhatri-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/hariacharyakhatri/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hari%20Khatri-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hariacharyakhatri)

> **Welcome to my personal developer portfolio.**  
> Built with modern web standards, sleek obsidian glassmorphism, responsive UI, subtle interactive 3D particle constellations, and a centralized project management architecture.

---

## 🌟 Overview

I am **Hari Khatri**, a Bachelor of Computer Applications (BCA) student (3rd Semester) at **Adarsh College of Professional Studies**, Abu Road (affiliated with Mohanlal Sukhadia University / MLSU Udaipur), based in Mount Abu, Rajasthan.

My engineering journey bridges low-level systems programming in **C, C++, and Java** with modern, interactive web applications built with **React 19, TypeScript, Next.js, Vite, and Tailwind CSS**.

---

## 🚀 Live & Featured Projects Showcase

All 8 GitHub repositories and all verified live deployments:

| Project | Category | Tech Stack | Live Demo | Repository |
| :--- | :--- | :--- | :---: | :---: |
| **BranchVerse** | Interactive Storytelling | TypeScript, React, Next.js, AI, Vercel | [Live App (Vercel)](https://branch-verse.vercel.app) | [GitHub](https://github.com/HariAcharyaKhatri/BranchVerse) |
| **Silicon Dynasty** | Web Simulation | React 19, TypeScript, Vite 6, Tailwind CSS | [Live App (GH Pages)](https://hariacharyakhatri.github.io/Silicon-Dynasty/) | [GitHub](https://github.com/HariAcharyaKhatri/Silicon-Dynasty) |
| **Chess-Review** | Chess Analytics & Stockfish | React 18, TypeScript 5, Vite 6, Stockfish WASM | [Live App (GH Pages)](https://hariacharyakhatri.github.io/Chess-Review/) | [GitHub](https://github.com/HariAcharyaKhatri/Chess-Review) |
| **CALIGO** | Browser MMORPG | JavaScript, Canvas, Web Audio, LocalStorage | [Play Game (GH Pages)](https://hariacharyakhatri.github.io/Caligo/) | [GitHub](https://github.com/HariAcharyaKhatri/Caligo) |
| **Bagh-Chal: TIGER-GAMBIT** | Himalayan Strategy Game | JavaScript, HTML5 Canvas, SVG Vector Design | [Play Game (GH Pages)](https://hariacharyakhatri.github.io/TIGER-GAMBIT/) | [GitHub](https://github.com/HariAcharyaKhatri/TIGER-GAMBIT) |
| **Luminary IDE** | Desktop Text Editor & IDE | Java, Swing / AWT, Process Streams, Parser | *Desktop Application* | [GitHub](https://github.com/HariAcharyaKhatri/LuminaryIDE) |
| **Morph** | AI Next.js CLI Scaffolder | TypeScript, Next.js, Node.js CLI, Tailwind | *CLI Utility* | [GitHub](https://github.com/HariAcharyaKhatri/Morph) |
| **Portfolio** | Developer Portfolio | HTML5, CSS3 Glassmorphism, Three.js, Vanilla JS | [Live Site (GH Pages)](https://hariacharyakhatri.github.io/Portfolio/) | [GitHub](https://github.com/HariAcharyaKhatri/Portfolio) |
| **Ancient Chaturanga** | C++ Chess Engine | C++, Board Matrices, Discrete Algorithms | *Systems Engine* | [Profile](https://github.com/HariAcharyaKhatri) |
| **Student Record System** | Core Software | C, Direct Binary File I/O (`fread`/`fwrite`) | *Core Software* | [Profile](https://github.com/HariAcharyaKhatri) |
| **Library DBMS** | Relational Database | SQL, Relational DBMS, 3NF Normalization | *Database Schema* | [Profile](https://github.com/HariAcharyaKhatri) |

---

## 🛠️ Technical Arsenal

- **Languages:** C, C++, Java, TypeScript, JavaScript (ES6+), SQL
- **Frontend & Web:** React 19, Next.js, Vite, Tailwind CSS, HTML5 Canvas, Web Audio API, Stockfish WASM, CSS3 Glassmorphism
- **Systems & Architecture:** Relational DBMS (3NF Normalization), Memory Management, Data Structures, Algorithms, Game State Machines, Binary File Streams
- **Developer Tools:** Git, GitHub, GitHub Pages, Vercel, VS Code, PowerShell, Bash, Process Streams, Tally ERP.9

---

## 📁 Repository Structure

```text
Portfolio/
├── index.html              # Main responsive portfolio landing page
├── css/
│   └── style.css           # Modern design tokens, glassmorphism, responsive styling
├── js/
│   ├── projects-data.js    # Centralized project data file (easy to add/update projects)
│   └── main.js             # 3D Three.js canvas, filter engine, smooth scroll, contact actions
└── README.md               # Project documentation & overview
```

---

## 🧩 Adding or Updating Projects

To add or update a project, simply open [`js/projects-data.js`](js/projects-data.js) and add an entry:

```javascript
{
    id: "your-project-id",
    title: "Your Project Name",
    subtitle: "Short Tagline Here",
    category: "web", // 'web' | 'game' | 'system'
    badge: "Live Web App",
    status: "live", // 'live' | 'repo' | 'code'
    icon: "cpu", // Any Lucide icon name
    isLive: true,
    liveUrl: "https://your-deployment-url.com",
    githubUrl: "https://github.com/HariAcharyaKhatri/Your-Repo",
    description: "Detailed description of what you engineered...",
    highlights: [
        "Key technical achievement 1",
        "Key technical achievement 2"
    ],
    techStack: ["React", "TypeScript", "Vite"],
    previewTheme: "preview-silicon"
}
```

The UI will automatically render the new project card with its interactive live demo and source code buttons!

---

## 💻 Local Development

You can preview the portfolio using any standard static file server:

### Using Python:
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Node.js (npx serve):
```bash
npx serve .
```

---

## 🌐 Deployment to GitHub Pages

This portfolio is configured for zero-build deployment via GitHub Pages:

1. Push changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio with all GitHub repos and verified live links"
   git push origin main
   ```
2. In the GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select branch: `main` and folder `/ (root)`.
3. Your portfolio will immediately deploy live at:
   `https://hariacharyakhatri.github.io/Portfolio/`

---

## 📬 Connect with Hari Khatri

- 📸 **Instagram:** [@hariacharyakhatri](https://www.instagram.com/hariacharyakhatri/)
- 🐙 **GitHub:** [@HariAcharyaKhatri](https://github.com/HariAcharyaKhatri)
- 💼 **LinkedIn:** [Hari Khatri](https://www.linkedin.com/in/hariacharyakhatri)
- ✉️ **Email:** [hariacharyakhatri@gmail.com](mailto:hariacharyakhatri@gmail.com)
