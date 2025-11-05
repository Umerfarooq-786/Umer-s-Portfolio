/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

/* Base Colors */
:root {
    --primary: #0078ff;
    --background: #f5f5f5;
    --text: #333;
    --card-bg: #fff;
    --dark-bg: #121212;
    --dark-text: #eee;
}

/* Dark Theme */
body.dark {
    background-color: var(--dark-bg);
    color: var(--dark-text);
}
body.dark .card,
body.dark .project-card,
body.dark .about-content {
    background-color: #1e1e1e;
    color: #fff;
}

/* Header */
.header {
    background: var(--card-bg);
    position: fixed;
    width: 100%;
    top: 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 100;
}
.nav {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
.logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary);
}
.nav-links {
    display: flex;
    list-style: none;
}
.nav-links li a {
    text-decoration: none;
    margin: 0 1rem;
    color: var(--text);
    font-weight: 500;
    transition: 0.3s;
}
.nav-links li a:hover {
    color: var(--primary);
}

/* Hero */
.hero {
    height: 100vh;
    background: linear-gradient(to right, #0078ff, #00b4ff);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.hero-content {
    max-width: 700px;
}
.highlight {
    color: #ffe500;
}
.cta-btn {
    margin-top: 20px;
    padding: 10px 25px;
    background: #fff;
    color: #0078ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
}
.cta-btn:hover {
    background: #ffe500;
    color: #000;
}

/* Sections */
section {
    padding: 80px 20px;
}
.container {
    max-width: 1100px;
    margin: auto;
}

/* About */
.about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
}
.about-text {
    flex: 1;
}
.about-image img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    object-fit: cover;
}

/* Skills */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 40px;
}
.skill-item {
    background: var(--card-bg);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.skill-item i {
    font-size: 40px;
    color: var(--primary);
    margin-bottom: 15px;
}

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}
.project-card {
    background: var(--card-bg);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: 0.3s;
}
.project-card:hover {
    transform: translateY(-5px);
}
.project-card img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

/* Contact */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
}
form input, form textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
form button {
    padding: 12px;
    background: var(--primary);
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}
form button:hover {
    background: #005fcc;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px;
    background: #f1f1f1;
    font-size: 0.9rem;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.7);
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
}
.close {
    float: right;
    font-size: 25px;
    cursor: pointer;
}
// 🌙 Theme Toggle
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Check for saved theme in local storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeIcon.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
/* 🌙 Dark Theme Mode */
.dark-theme {
  background-color: #121212;
  color: #ffffff;
}

.dark-theme header,
.dark-theme nav,
.dark-theme section,
.dark-theme footer {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark-theme a {
  color: #00c6ff;
}

.dark-theme .cta-btn {
  background: #00c6ff;
  color: #fff;
}

.dark-theme .cta-btn:hover {
  background: #0094cc;
}

.dark-theme .skill-item,
.dark-theme .timeline-content {
  background: #1b1b1b;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
}
// CV Download button animation
const downloadBtn = document.querySelector('.btn.download');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    downloadBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      downloadBtn.style.transform = 'scale(1)';
    }, 150);
  });
}
make it better and in sequence
