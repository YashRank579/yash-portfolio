# Darshan Patel — Personal Portfolio Website

A modern, premium personal portfolio website built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🎨 Design Features

- **Dark theme** — Deep navy/black (`#020816`) with gold/yellow accents (`#f5a623`)
- **Glassmorphism cards** — Backdrop blur, transparent borders, soft glow effects
- **Framer Motion animations** — Smooth fade-in, slide-in, and stagger effects
- **Fully responsive** — Mobile, tablet, and desktop optimized
- **Sticky navbar** — Scroll-aware active section highlight
- **Loading animation** — 2-second branded intro loader
- **Typing animation** — Auto-cycling role titles in the hero
- **Animated skill bars** — Triggered on scroll into view

## 📌 Sections

1. **Hero** — Full-screen with profile photo, typing animation, CTA buttons, social links, stats
2. **About Me** — Bio, info grid, highlight cards, download resume button
3. **Skills** — 4 categories (DSA, Backend, Frontend, Tools) with animated progress bars + tech stack chips
4. **Services** — 6 expertise cards with color-coded icons and hover effects
5. **Projects** — 3 project cards with tech stacks, highlights, live/GitHub links
6. **Resume** — Timeline-style education + experience + certifications
7. **Contact** — Form with validation + contact info cards + social links
8. **Footer** — Quick links, contact info, brand

## 🚀 How to Run Locally

### Prerequisites
- Node.js v18+ installed
- npm v9+

### Steps

```bash
# 1. Navigate to project directory
cd Darshan_portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to your Vercel account
# - Choose project name
# - Root directory: ./
# - Framework: Vite
```

### Option 2: Vercel Dashboard (GitHub)
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Framework preset: **Vite** (auto-detected)
5. Click **Deploy**

## 📁 Project Structure

```
Darshan_portfolio/
├── public/
│   └── assets/
│       └── favicon.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg         # Profile photo
│   ├── components/
│   │   ├── Loader.jsx           # Loading animation
│   │   ├── Navbar.jsx           # Sticky navigation
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About Me section
│   │   ├── Skills.jsx           # Skills with progress bars
│   │   ├── Services.jsx         # Services/Expertise
│   │   ├── Projects.jsx         # Portfolio projects
│   │   ├── Resume.jsx           # Education & Experience
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Root component
│   ├── App.css                  # App-level styles
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles (Tailwind + custom)
├── index.html                   # HTML entry point (SEO meta tags)
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── package.json
```

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI Framework |
| Vite | Build tool / Dev server |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Animations |
| React Icons | Icon library |

## ✏️ Customization

### Update Personal Info
- **Contact details**: Edit `src/components/Contact.jsx` and `About.jsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit `skillCategories` in `src/components/Skills.jsx`
- **Profile photo**: Replace `src/assets/profile.jpg`

### Update Colors
In `tailwind.config.js`, modify the color values:
- Gold accent: `#f5a623` → change to your preferred color
- Background: `#020816` → change the dark base color

## 📝 License

MIT License — Feel free to use and modify for your own portfolio.
