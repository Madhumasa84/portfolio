# Madhusudhanan G — Portfolio

Personal portfolio website built with plain HTML, Tailwind CSS (CDN), and vanilla JavaScript.  
Designed for GitHub Pages — zero build step, instant deployment.

![Dark mode](https://img.shields.io/badge/theme-dark%20%2B%20light-22d3ee?style=flat-square)
![Static](https://img.shields.io/badge/hosting-GitHub%20Pages-181717?style=flat-square&logo=github)

---

## ✨ Features

- **Single-page layout** — Hero, About, Projects, Open Source, Contact
- **Dark mode default** with light mode toggle (persisted via `localStorage`)
- **Smooth scroll** navigation with active section highlighting
- **Scroll-triggered reveal** animations
- **Animated gradient blobs** in the hero section
- **Fully responsive** — mobile-first design
- **No build step** — open `index.html` and go

---

## 🗂️ File Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — auto deploy on push
├── .nojekyll                   # Bypass Jekyll processing
├── index.html                  # Main page
├── style.css                   # Custom styles
├── script.js                   # Theme toggle, animations, nav
└── README.md                   # This file
```

---

## 🚀 Local Development

No build tools required. Just open the file in a browser:

```bash
# Clone the repo
git clone https://github.com/Madhumasa84/portfolio.git
cd portfolio

# Option 1 — Open directly
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux

# Option 2 — Local server (recommended for accurate behavior)
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` (or whichever port your server uses).

---

## 🌐 GitHub Pages Deployment

### Automatic (GitHub Actions)

The repo includes a workflow at `.github/workflows/deploy.yml` that automatically deploys to GitHub Pages on every push to `main`.

**Setup steps:**

1. Push this repo to GitHub (e.g. `https://github.com/Madhumasa84/portfolio`)
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the site will deploy automatically

### Manual

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose the `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at `https://Madhumasa84.github.io/portfolio/`

---

## 🎨 Customization

| What             | Where                          |
|------------------|--------------------------------|
| Content / text   | `index.html`                   |
| Colors / design  | `style.css` + Tailwind config in `index.html` `<script>` |
| Animations       | `style.css` (`@keyframes`)     |
| Theme toggle     | `script.js`                    |
| Accent color     | Search for `#22d3ee` (cyan)    |

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
