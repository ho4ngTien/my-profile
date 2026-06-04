# Design

## Architecture

### (App)-Router, Feature Structure
```
App
├── BrowserRouter (app/App.tsx)
└── MainLayout (app/layouts/MainLayout.tsx)
    ├── Header (Shared)
    ├── AppRouter (app/router/index.tsx)
    │   ├── / → PortfolioPage (landing page with all section features)
    │   ├── /auth/login → LoginPage
    │   └── /auth/register → RegisterPage
    └── Footer (Shared)
```

### Directory Structure
```
frontend/src/
├── app/                      # App-level setup, layout, routing groups
│   ├── (portfolio)/          # Portfolio landing page routes
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── (auth)/               # Authentication page routes
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── layouts/              # Global layout components
│   │   └── MainLayout.tsx
│   ├── router/               # Centralized routing definitions
│   │   └── index.tsx
│   ├── App.tsx              # Main App component
│   └── index.ts             # Barrel export
├── features/                # Domain-specific feature modules
│   ├── hero/
│   │   ├── components/
│   │   └── index.ts
│   ├── about/
│   │   ├── components/
│   │   └── index.ts
│   ├── skills/
│   │   ├── components/
│   │   └── index.ts
│   ├── projects/
│   │   ├── components/
│   │   └── index.ts
│   └── contact/
│       ├── components/
│       └── index.ts
├── shared/                  # Reusable cross-feature modules
│   ├── components/          # Reusable UI (Header, Footer)
│   ├── hooks/               # Custom shared React hooks
│   ├── lib/                 # Common helper libraries
│   ├── types/               # TypeScript global models
│   ├── constants/           # Global app constants
│   └── styles/              # CSS & globals (globals.css)
├── App.tsx                  # Root App re-export
├── main.tsx                 # Entrypoint
└── index.html               # HTML entrypoint (in frontend/)
```

## Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Background**: Dark Slate (#1E293B - #0F172A)
- **Text**: White (#FFFFFF) / Slate Gray (#CBD5E1)
- **Accent**: Blue (#06B6D4)

### Typography
- **Headings**: Inter, bold, sizes 24px - 56px
- **Body**: Inter, regular, 14px - 18px
- **Mono**: Fira Code, 12px - 14px

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## UI Components

### Header/Navigation
- Logo on the left
- Navigation menu in center
- Responsive hamburger menu on mobile
- Sticky navigation on scroll (optional)

### Hero Section
- Large headline
- Subheading
- CTA buttons
- Background gradient

### Feature Cards
- 3-column grid on desktop
- Stack vertically on mobile
- Hover effects and transitions
- Icon + title + description

### Footer
- Copyright notice
- Quick links
- Social links
- Newsletter signup (optional)

## Interactions

### Micro-interactions
- Button hover state: Color change + shadow
- Link hover: Underline animation
- Card hover: Subtle scale and shadow
- Smooth transitions: 0.3s ease

### Animations
- Page load fade-in
- Scroll-triggered animations (future)
- Smooth scroll behavior

## State Management
- Local component state (useState)
- Context API for global state (future)
- No external state management needed initially

## Performance Considerations
- Code splitting by route
- Image optimization
- CSS-in-JS minimal approach (Tailwind)
- No unnecessary re-renders (React.memo for future)

## Feature-Based Architecture Guidelines

### What is (App)-Router, Feature Architecture?
This architecture separates concerns into three layers:

1. **App Layer**: Handles application-level setup (routing, layout, global state)
2. **Router**: Centralizes all route definitions
3. **Features**: Self-contained, independent business modules

### Benefits
- **Separation of Concerns**: App logic separated from features
- **Scalability**: Add features without affecting routing
- **Maintainability**: Clear boundaries and responsibilities
- **Team Collaboration**: Teams can work on features independently
- **Testing**: Features and routes tested in isolation
- **Code Reusability**: Common logic in `shared/`

### App Layer (`src/app/`)

Contains app-level logic:
- **App.tsx**: Root component wrapping layout (MainLayout) and router (AppRouter)
- **router/index.tsx**: Centralized route definitions
- **index.ts**: Barrel export for clean imports

```tsx
// app/App.tsx
import { AppRouter } from './router'
import { MainLayout } from './layouts/MainLayout'

export function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  )
}

// app/router/index.tsx
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
    </Routes>
  )
}
```

### Feature Layer (`src/features/`)

Each feature is self-contained:

```
features/featureName/
├── components/     # Page sections and components
│   ├── Component.tsx
│   └── index.ts    # Component-level barrel export
└── index.ts       # Feature-level barrel export (exports from ./components)
```

### Shared Layer (`src/shared/`)

Truly reusable resources:
- Components used across multiple features (re-exported from `shared/components`)
- Custom hooks used by multiple features (re-exported from `shared/hooks`)
- Global library/utils (re-exported from `shared/lib`)
- Global types and constants (re-exported from `shared/types` and `shared/constants`)
- Global styles

### Import Rules

```typescript
// ✅ Good: Import from app
import { App } from '@/App'

// ✅ Good: Import from feature barrel export
import { AboutSection } from '@/features/about'

// ✅ Good: Import from shared barrel export
import { Header } from '@/shared'

// ❌ Bad: Cross-feature imports
import { ProjectCard } from '@/features/projects/components'

// ❌ Bad: Relative imports
import { Header } from '../../../shared/components'
```

### Routing Centralization

All routes are defined in one place (`app/router/index.tsx`):

```tsx
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
    </Routes>
  )
}
```

**Benefits:**
- Single source of truth for routes
- Easy to add/remove routes
- Easy to find all routes

### Adding a New Feature

1. Create feature structure
   ```bash
   mkdir -p src/features/newFeature/components
   ```

2. Create component
   ```tsx
   // src/features/newFeature/components/NewFeatureSection.tsx
   export function NewFeatureSection() {
     return <section>New Feature</section>
   }
   ```

3. Create barrel exports
   ```ts
   // src/features/newFeature/components/index.ts
   export * from './NewFeatureSection'
   
   // src/features/newFeature/index.ts
   export * from './components'
   ```

4. Add/mount the feature
   Either add the section component directly in the portfolio layout at `app/(portfolio)/page.tsx` or register a new route in the app router.

