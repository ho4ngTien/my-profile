# MY PROFILE

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node](https://img.shields.io/badge/Node-18%2B-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

A personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`

## 📚 Documentation

All documentation is in the `docs/` folder:

- [**ARCHITECTURE.md**](docs/ARCHITECTURE.md) - Frontend architecture guide (app-router, feature pattern)
- [**design.md**](docs/design.md) - Design system, color palette, typography
- [**requirements.md**](docs/requirements.md) - Functional and technical requirements
- [**tasks.md**](docs/tasks.md) - Development roadmap and task list

## 📁 Project Structure

```
my-profile/
├── frontend/              # React application
│   ├── src/
│   │   ├── app/          # App-level setup & routing
│   │   │   ├── (portfolio)/  # Portfolio page and layout
│   │   │   ├── layouts/      # Layout components (MainLayout)
│   │   │   ├── router/       # AppRouter configuration
│   │   │   ├── App.tsx       # Root App component
│   │   │   └── index.ts      # App exports
│   │   ├── features/     # Feature-based business domains
│   │   │   ├── hero/     # Hero section
│   │   │   ├── about/    # About section
│   │   │   ├── skills/   # Skills section
│   │   │   ├── projects/ # Projects section
│   │   │   └── contact/  # Contact section
│   │   ├── shared/       # Cross-feature reusable resources
│   │   │   ├── components/ # Reusable components (Header, Footer)
│   │   │   ├── hooks/    # Custom React hooks
│   │   │   ├── lib/      # Shared libraries & utilities
│   │   │   ├── types/    # Global typescript types
│   │   │   ├── constants/ # Global constants
│   │   │   └── styles/   # CSS & global styling
│   │   ├── assets/       # Media & static assets
│   │   ├── App.tsx       # Re-export of App
│   │   └── main.tsx      # Application entrypoint
│   ├── public/           # Public static files
│   ├── index.html        # HTML entrypoint
│   └── package.json
├── docs/                 # Project documentation
├── README.md            # Project overview
└── .gitignore
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Code Quality**: ESLint, TypeScript Strict Mode

## 📦 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Architecture

This project uses **(app)-router, feature** architecture:
- `app/` - Application-level setup and routing
- `features/` - Independent feature modules
- `shared/` - Cross-feature reusable resources

→ See [ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed guide

## 📋 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode styling
- ✅ Type-safe with TypeScript
- ✅ Scalable feature-based architecture
- ✅ Clean, maintainable code structure
- ✅ SEO ready
- ✅ Modern development tooling

## 🚀 Deployment

### Vercel (Recommended - Auto-Deploy)

The project includes a GitHub Actions workflow that automatically deploys to Vercel on every push to `main` or `master`.

**Setup:**
1. Connect your GitHub repo to Vercel
2. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN` - Your Vercel authentication token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

3. On next push, the workflow automatically builds and deploys!

[Get your Vercel tokens →](https://vercel.com/account/tokens)

### Manual Deployment

Build output is ready for static hosting:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

```bash
npm run build
# Output: frontend/dist/
```

## 📝 License

MIT

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
