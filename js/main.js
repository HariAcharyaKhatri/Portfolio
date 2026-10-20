/**
 * ====================================================================
 * Hari Khatri Portfolio - Main Application Logic
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialize all components
    initNavigation();
    initProjects();
    initContactForm();
    initCopyEmail();
    initThreeBackground();
    updateYear();
});

/**
 * Navigation & Header interactions
 */
function initNavigation() {
    const header = document.querySelector("header.site-header");
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll header background transition
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        highlightActiveSection();
    }, { passive: true });

    // Mobile drawer toggle
    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener("click", () => {
            const isActive = mobileDrawer.classList.toggle("active");
            mobileToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.setAttribute("data-lucide", isActive ? "x" : "menu");
                if (window.lucide) lucide.createIcons();
            }
        });

        // Close mobile drawer when clicking any link
        mobileDrawer.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("active");
                mobileToggle.setAttribute("aria-expanded", "false");
                const icon = mobileToggle.querySelector("i");
                if (icon) {
                    icon.setAttribute("data-lucide", "menu");
                    if (window.lucide) lucide.createIcons();
                }
            });
        });
    }

    // Scroll spy for active link
    function highlightActiveSection() {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/**
 * Render Project Cards & Handle Category Filtering
 */
function initProjects() {
    const grid = document.getElementById("projectsGrid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!grid) return;

    // Render cards from PROJECTS_DATA
    renderProjectCards("all");

    // Setup filter listeners
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            renderProjectCards(filter);
        });
    });

    function renderProjectCards(category) {
        if (typeof PROJECTS_DATA === "undefined" || !Array.isArray(PROJECTS_DATA)) {
            console.error("PROJECTS_DATA is not defined or not an array");
            return;
        }

        let filtered = PROJECTS_DATA;
        if (category === "live") {
            filtered = PROJECTS_DATA.filter(p => p.isLive === true);
        } else if (category !== "all") {
            filtered = PROJECTS_DATA.filter(p => p.category === category);
        }

        grid.innerHTML = "";

        filtered.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";

            // Status Indicator HTML
            let statusIndicatorHtml = "";
            if (project.isLive) {
                statusIndicatorHtml = `<div class="card-status-indicator status-live"><span class="pulse-indicator"></span> Live Demo</div>`;
            } else if (project.githubUrl) {
                statusIndicatorHtml = `<div class="card-status-indicator status-repo"><i data-lucide="github" style="width:13px;height:13px;"></i> GitHub Repo</div>`;
            } else {
                statusIndicatorHtml = `<div class="card-status-indicator status-code"><i data-lucide="code-2" style="width:13px;height:13px;"></i> Core Software</div>`;
            }

            // Highlights HTML
            let highlightsHtml = "";
            if (project.highlights && project.highlights.length) {
                highlightsHtml = `
                    <ul class="project-highlights-list">
                        ${project.highlights.map(h => `<li><i data-lucide="check-circle-2"></i> <span>${escapeHtml(h)}</span></li>`).join("")}
                    </ul>
                `;
            }

            // Tech Tags HTML
            const tagsHtml = (project.techStack || [])
                .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
                .join("");

            // Action Buttons HTML
            let actionsHtml = "";
            if (project.isLive && project.liveUrl) {
                actionsHtml += `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-cyan btn-sm">
                        <i data-lucide="external-link" style="width:15px;height:15px;"></i> Live Demo
                    </a>
                `;
            }

            if (project.githubUrl) {
                actionsHtml += `
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                        <i data-lucide="github" style="width:15px;height:15px;"></i> ${project.isLive ? "Source Code" : "View Project"}
                    </a>
                `;
            } else {
                actionsHtml += `
                    <a href="#contact" class="btn btn-outline btn-sm">
                        <i data-lucide="mail" style="width:15px;height:15px;"></i> Inquire Project
                    </a>
                `;
            }

            card.innerHTML = `
                <div class="project-visual-banner ${escapeHtml(project.previewTheme || 'preview-silicon')}">
                    <div class="banner-grid-overlay"></div>
                    ${statusIndicatorHtml}
                    <div class="banner-content-badge">
                        <i data-lucide="${escapeHtml(project.icon || 'folder')}"></i>
                        <span class="banner-badge-title">${escapeHtml(project.badge || 'Project')}</span>
                    </div>
                </div>

                <div class="project-card-body">
                    <div class="project-card-header">
                        <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
                        <p class="project-card-subtitle">${escapeHtml(project.subtitle)}</p>
                    </div>

                    <p class="project-card-desc">${escapeHtml(project.description)}</p>

                    ${highlightsHtml}

                    <div class="project-tech-tags">
                        ${tagsHtml}
                    </div>

                    <div class="project-actions">
                        ${actionsHtml}
                    </div>
                </div>
            `;

            grid.appendChild(card);
        });

        // Re-run Lucide icons for dynamically added elements
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

/**
 * Handle Contact Form Submission
 */
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("senderName");
        const emailInput = document.getElementById("senderEmail");
        const messageInput = document.getElementById("senderMessage");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        if (!name || !email || !message) {
            showToast("Please fill in all fields before sending.", "error");
            return;
        }

        // Generate mailto link for direct communication
        const recipient = "hariacharyakhatri@gmail.com";
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Hi Hari,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        showToast("Opening your email client to send message... Thank you!", "success");
        form.reset();
    });
}

/**
 * Copy Email to Clipboard helper
 */
function initCopyEmail() {
    const copyBtn = document.getElementById("copyEmailBtn");
    if (!copyBtn) return;

    copyBtn.addEventListener("click", () => {
        const email = "hariacharyakhatri@gmail.com";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email)
                .then(() => {
                    showToast("Email copied to clipboard! (hariacharyakhatri@gmail.com)", "success");
                })
                .catch(() => {
                    fallbackCopy(email);
                });
        } else {
            fallbackCopy(email);
        }
    });

    function fallbackCopy(text) {
        const temp = document.createElement("input");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        showToast("Email copied to clipboard! (hariacharyakhatri@gmail.com)", "success");
    }
}

/**
 * Toast feedback notice
 */
function showToast(message, type = "success") {
    let toast = document.getElementById("toastNotice");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toastNotice";
        toast.className = "toast-notice";
        document.body.appendChild(toast);
    }

    const iconHtml = type === "success" 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `${iconHtml} <span>${escapeHtml(message)}</span>`;
    toast.classList.add("visible");

    setTimeout(() => {
        toast.classList.remove("visible");
    }, 4000);
}

/**
 * Dynamic Year in Footer
 */
function updateYear() {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Three.js 3D Constellation & Geometric Scene
 */
function initThreeBackground() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = document.getElementById("bg-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    try {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x060913, 0.012);

        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 42);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x060913, 0);

        // Core geometric wireframe node (Icosahedron)
        const icoGeo = new THREE.IcosahedronGeometry(9, 1);
        const icoMat = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            wireframe: true,
            transparent: true,
            opacity: 0.14
        });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        scene.add(ico);

        // Surrounding orbital ring
        const ringGeo = new THREE.TorusGeometry(13.5, 0.18, 16, 64);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.18
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 3;
        scene.add(ring);

        // Starfield / Node constellation
        const particleCount = 750;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 220;
            positions[i + 1] = (Math.random() - 0.5) * 220;
            positions[i + 2] = (Math.random() - 0.5) * 160;
        }

        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const particleMat = new THREE.PointsMaterial({
            color: 0x38bdf8,
            size: 0.28,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        scene.add(particles);

        // Mouse Parallax Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        window.addEventListener("mousemove", (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        }, { passive: true });

        // Scroll Tracking
        let scrollY = 0;
        window.addEventListener("scroll", () => {
            scrollY = window.scrollY;
        }, { passive: true });

        // Resize handler
        window.addEventListener("resize", () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            targetX += (mouseX - targetX) * 0.03;
            targetY += (mouseY - targetY) * 0.03;

            // Geometry continuous rotation
            ico.rotation.x += 0.0018;
            ico.rotation.y += 0.0028;

            ring.rotation.z += 0.0015;
            ring.rotation.y += 0.001;

            particles.rotation.y += 0.0003;

            // Camera parallax based on mouse
            camera.position.x += (targetX * 3.5 - camera.position.x) * 0.02;
            camera.position.y += (targetY * 2.5 - camera.position.y) * 0.02;

            // Dynamic depth response based on scroll
            const scrollFactor = scrollY * 0.01;
            ico.position.y = -scrollFactor * 0.4;
            ring.position.y = -scrollFactor * 0.4;

            camera.lookAt(0, -scrollFactor * 0.2, 0);

            renderer.render(scene, camera);
        }

        animate();
    } catch (err) {
        console.warn("3D WebGL background initialization skipped:", err);
    }
}

/**
 * XSS prevention helper for text insertion
 */
function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
