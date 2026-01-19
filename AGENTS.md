# Agent Guidelines for 100K Dev Jobs Repository

## Overview

This is a Next.js 16 application built with React 19, TypeScript, Tailwind CSS 4, and Drizzle ORM. The project focuses on job listings for high-paying developer positions ($100K+).

## Build, Lint, and Test Commands

### Development

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server

### Code Quality

- `bun run lint` - Run ESLint on all files
- `bun run lint:fix` - Auto-fix ESLint issues
- `bun run format` - Format all files with Prettier
- `bun run format:check` - Check Prettier formatting
- `bun run type-check` - Run TypeScript type checking

### Database

- `bun run db:generate` - Generate Drizzle migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:push` - Push schema changes to database

### Testing

This project currently has no test framework configured. When adding tests:

- Use Jest or Vitest with React Testing Library
- Run tests with `bun run test`
- Run a single test file: `bun run test -- path/to/test.spec.ts`
- Run tests in watch mode: `bun run test -- --watch`

## Code Style Guidelines

### TypeScript Configuration

- **Target**: ES2017
- **Module Resolution**: Bundler (for Next.js)
- **JSX**: react-jsx (automatic runtime)
- **Strict Mode**: Enabled (includes strictNullChecks)
- **Path Aliases**: `@/*` maps to `./*`

### Formatting (Prettier)

```json
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Linting (ESLint)

- Uses `eslint-config-next` for Next.js best practices
- Includes `eslint-config-prettier` for Prettier compatibility
- `better-tailwindcss` plugin for Tailwind CSS linting
- `promise` plugin for Promise-related rules
- Integrates with Prettier via `eslint-plugin-prettier`

### File Structure

```
/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── atoms/          # Atomic design pattern components
│   └── *.tsx           # Page-specific components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── @types/             # TypeScript type definitions
├── drizzle/            # Database migrations and config
└── public/             # Static assets
```

### Component Patterns

#### React Components

- Use functional components with hooks
- Add `"use client"` directive for client components
- Use PascalCase for component names
- Define props interfaces with `interface Props`
- Export as default export

```tsx
interface Props {
  jobs: Job[]
}

const JobPosts: React.FC<Props> = ({ jobs }) => {
  // component logic
}

export default JobPosts
```

#### Hooks

- Prefix custom hooks with `use`
- Use camelCase for hook names
- Place in `hooks/` directory
- Export as default export

```tsx
const useJobFilters = (jobs: Job[]) => {
  // hook logic
}

export default useJobFilters
```

### Import Conventions

- Use absolute imports with `@/` alias
- Group imports by type:
  1. React imports
  2. External libraries
  3. Internal utilities/hooks
  4. Local components/types

```tsx
import * as React from "react"
import { motion } from "motion/react"
import { MapPin } from "@phosphor-icons/react"

import { BASE_TRANSITION } from "@/utils/animation"
import classNames from "@/utils/classNames"

import { Job } from "@/components/JobPosts"
```

### Naming Conventions

- **Components**: PascalCase (e.g., `JobPosts`, `Header`)
- **Hooks**: camelCase with `use` prefix (e.g., `useJobFilters`)
- **Functions/Variables**: camelCase (e.g., `handleSearch`, `filteredJobs`)
- **Types/Interfaces**: PascalCase (e.g., `Job`, `FILTERS`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BASE_TRANSITION`)
- **Files**: PascalCase for components, camelCase for utilities

### Styling (Tailwind CSS)

- Use Tailwind utility classes
- Use responsive prefixes: `md:`, `lg:`
- Use `classNames` utility for conditional classes
- Follow mobile-first approach
- Use consistent color palette (zinc, green theme)
- Group related classes logically

```tsx
className={classNames(
  "base-classes",
  isScrolled ? "conditional-class" : ""
)}
```

### State Management

- Use React hooks for local state
- Use custom hooks for complex state logic
- Use URL search params for filter state persistence
- Prefer `useMemo` for expensive computations
- Use `useEffect` for side effects

### Error Handling

- Use TypeScript strict mode for compile-time safety
- Validate forms with React Hook Form and Zod
- Handle async operations with proper error boundaries
- Use try/catch for API calls
- Provide user-friendly error messages

### Database (Drizzle ORM)

- Define schemas in `utils/schema.tsx`
- Use Neon serverless for database connection
- Run migrations for schema changes
- Use Drizzle Kit for development workflow

### Performance

- Use Next.js Image component for images
- Implement proper code splitting
- Use React.memo for expensive components
- Optimize bundle with dynamic imports
- Use motion/react for animations with proper transitions

### Accessibility

- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain proper color contrast
- Use focus management

### Git Workflow

- Use conventional commits
- Pre-commit hooks configured with Husky and lint-staged
- Commit message format: `type(scope): description`
- Run linting and formatting on pre-commit

### Environment Variables

- Use `.env.local` for local development
- Prefix with `NEXT_PUBLIC_` for client-side variables
- Never commit secrets or API keys

### Deployment

- Deploy to Vercel (recommended for Next.js)
- Use Next.js production build
- Configure proper environment variables
- Enable analytics and monitoring
