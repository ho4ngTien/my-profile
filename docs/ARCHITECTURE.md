# Architecture Guide

This project uses **(app)-router, feature** architecture pattern for better scalability and maintainability.

## Quick Reference

```
src/
├── app/              # App setup, routing, layouts, and pages
├── features/         # Feature modules (independent business domains)
├── shared/           # Shared resources (cross-feature reusable code)
├── App.tsx           # Re-export of app entrypoint
├── main.tsx          # App entrypoint
└── index.html        # HTML template (located in frontend/)
```

## Folder Breakdown

### `app/` - Application Level
**Responsibility**: App-level setup, routing, global layouts, and page routing groups.

- **App.tsx** - App shell component, wraps layouts and routing.
- **layouts/MainLayout.tsx** - Global layout wrapping the header, main content area, and footer.
- **router/index.tsx** - Centralized React Router configuration (routes definitions).
- **(portfolio)/** - Group of routes for the landing portfolio, containing its `page.tsx` and `layout.tsx`.

```tsx
// app/router/index.tsx - Centralized routes
<Routes>
  <Route path="/" element={<PortfolioPage />} />
</Routes>
```

### `features/` - Feature Modules
**Responsibility**: Business features containing localized presentation components, hooks, assets, types, etc.

Each feature folder exports its public API through a root `index.ts` file:
```
features/about/
├── components/        # Feature components (AboutSection.tsx)
│   ├── AboutSection.tsx
│   └── index.ts       # Exports AboutSection
└── index.ts          # Barrel export exporting components/
```

The current features are:
- `hero/` - Landing hero presentation and CTAs
- `about/` - Bio and objectives
- `skills/` - Professional skills display
- `projects/` - Showcase portfolio projects
- `contact/` - Contact form section

### `shared/` - Shared Resources
**Responsibility**: Cross-feature reusable code.

```
shared/
├── components/       # Reusable components (Header, Footer)
├── hooks/           # Reusable custom hooks
├── lib/             # Shared libraries and utility scripts
├── types/           # Global type definitions
├── constants/       # Global application constants
├── styles/          # Global CSS (globals.css)
└── index.ts         # Barrel export re-exporting all subfolders
```

## Import Patterns

```typescript
// ✅ Import from app
import { App } from '@/App'

// ✅ Import from features (using feature barrel export)
import { AboutSection } from '@/features/about'

// ✅ Import from shared (using shared barrel export)
import { Header, Footer } from '@/shared'

// ❌ Don't: Cross-feature imports
import { ProjectCard } from '@/features/projects/components'

// ❌ Don't: Relative paths
import { Header } from '../../../shared/components'
```

## Adding a New Feature

### 1. Create folder structure
```bash
mkdir -p src/features/newFeature/components
```

### 2. Create page component
```tsx
// src/features/newFeature/components/NewFeatureSection.tsx
export function NewFeatureSection() {
  return <section>New Feature Component</section>
}
```

### 3. Create barrel exports
```ts
// src/features/newFeature/components/index.ts
export * from './NewFeatureSection'

// src/features/newFeature/index.ts
export * from './components'
```

### 4. Import and mount
Include the feature component in the portfolio landing page or register a new route in the app router.

## Best Practices

### ✅ DO
- Keep features independent and self-contained
- Use barrel exports (`index.ts`) at the feature roots and components folders
- Centralize routes in `app/router/index.tsx`
- Put shared code in `shared/` and re-export them from `shared/index.ts`
- Use path alias `@/` for all imports
- Colocate related code (component + hooks + types)

### ❌ DON'T
- Import between features directly (use `shared/` instead if code is shared)
- Put feature-specific code in `shared/`
- Use relative imports (e.g. `../../`)
- Define routes in multiple places
- Mix app-level routing/layout with feature presentation logic

## Configuration

### Path Aliases (`@/`)

Configured in both files:

**tsconfig.json**:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**vite.config.ts**:
```typescript
import path from 'path'

resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### Styling

- **Global CSS**: `src/shared/styles/globals.css`
- **Tailwind CSS**: Configured in `tailwind.config.js`
- **Component styles**: Use Tailwind classes directly (no CSS modules)
- **Feature CSS**: Add to `src/features/featureName/styles/` if needed

## File Tree

```
frontend/
├── src/
│   ├── app/
│   │   ├── (portfolio)/      # Portfolio routes
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── router/
│   │   │   └── index.tsx     # Route definitions
│   │   ├── App.tsx           # App configuration
│   │   └── index.ts          # Barrel export
│   ├── features/             # Feature domains
│   │   ├── hero/
│   │   │   ├── components/
│   │   │   └── index.ts      # Feature re-export
│   │   ├── about/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   ├── skills/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   ├── projects/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   └── contact/
│   │       ├── components/
│   │       └── index.ts
│   ├── shared/               # Shared logic & UI
│   │   ├── components/       # Header, Footer, etc.
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── hooks/            # Custom hooks
│   │   │   └── index.ts
│   │   ├── lib/              # Shared library/utils
│   │   │   └── index.ts
│   │   ├── types/            # Type definitions
│   │   │   └── index.ts
│   │   ├── constants/        # Global constants
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── index.ts          # Shared exports
│   ├── App.tsx               # App root re-export
│   └── main.tsx              # React entrypoint
├── config/                   # Config files (tsconfig, vite, eslint)
├── public/                   # Static public assets
├── index.html                # HTML entrypoint
└── package.json
```

## Development Workflow

### Start development
```bash
npm install
npm run dev
```

### Build for production
```bash
npm run build
```

### Lint code
```bash
npm run lint
```

## Key Takeaways

| Aspect | Rule |
|--------|------|
| **Routing** | All defined in `app/router/index.tsx` |
| **Features** | Independent, import only via `@/features/featureName` |
| **Shared** | Reusable cross-feature components & logic |
| **Imports** | Always use `@/`, never relative paths |
| **Structure** | Keep files colocated within features/shared directories |

---

For detailed requirements and task list, see [requirements.md](./requirements.md) and [tasks.md](./tasks.md).
