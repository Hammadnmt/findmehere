# AGENT.MD: System Architecture & Agent Guide

> **Project Name:** findmehere (Portfolio & Case Studies Showcase)  
> **Repository:** `Hammadnmt/findmehere`  
> **Role/Owner:** Hammad Javed — Full Stack Engineer  
> **Status:** Production-Ready Portfolio & Enterprise Case Studies

---

## 1. Project Overview & Objective

This repository contains the official portfolio and case-study showcase for **Hammad Javed**, a Full Stack Engineer specializing in scalable Next.js architectures, Node.js backends, enterprise SaaS systems, and AI workflows.

### Primary Goals
- **High-Impact Presentation:** Present technical capability and business outcomes through clean, editorial, minimalist design.
- **Showcase Enterprise Case Studies:** Detail complex projects (such as *Elite CMS*, *Whoosh Logistics*, and *DocuMind AI*) with metrics, system architecture details, interactive image carousels, and measurable impact.
- **Flawless User Experience:** Fluid animations powered by Framer Motion, instant page loads with Turbopack, dark/light theme switching without hydration flash, and responsive design across all viewports.

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose & Notes |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `15.5.9` | Turbopack dev/build (`next dev --turbopack`), asynchronous dynamic params, optimized routing. |
| **UI Library** | React / React DOM | `19.1.0` | React 19 concurrent features, Server & Client Components. |
| **Language** | TypeScript | `^5` | Strict type checking (`strict: true`), path aliases mapped to `@/*`. |
| **Styling** | Tailwind CSS v4 | `^4` | Native CSS-first config using `@import "tailwindcss";`, `@theme inline`, and `@tailwindcss/postcss`. |
| **Animation** | Framer Motion | `^12.23.13` | Motion variants, entrance transitions, staggered reveals, interactive hover effects. |
| **Components** | shadcn/ui & Radix UI | New York Style | Radix UI primitives (`@radix-ui/react-slot`, etc.), `cva`, `clsx`, `tailwind-merge`. |
| **Icons** | Lucide React | `^0.544.0` | Clean, lightweight SVG iconography across all pages and buttons. |
| **Carousel** | Embla Carousel React | `^8.6.0` | Touch-enabled, accessible project screenshot slider with navigation arrows. |
| **Theming** | `next-themes` | `^0.4.6` | System/Dark/Light theme toggle with `class` attribute selector. |
| **Tooling & Linter** | ESLint & ESLint Next | `^9` / `15.5.3` | Flat config (`eslint.config.mjs`) extending Next.js core web vitals. |

---

## 3. Directory & File Structure

```
findmehere/
├── .next/                   # Next.js build cache and runtime artifacts
├── public/                  # Static assets (project screenshots, icons, svgs)
│   ├── contactUs.jpeg       # Case study mockup
│   ├── costEstimator.jpeg   # Case study mockup
│   ├── homePage.jpeg        # Case study mockup
│   ├── s1.PNG - s5.PNG      # DocuMind AI screenshots
│   └── w1.PNG - w5.PNG      # Whoosh Logistics screenshots
├── src/
│   ├── app/                 # Next.js App Router routes & layout
│   │   ├── about/
│   │   │   └── page.tsx     # /about route (story, expertise, services)
│   │   ├── contact/
│   │   │   └── page.tsx     # /contact route (contact cards, brief CTA)
│   │   ├── projects/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx # /projects/[slug] route (detailed case study view)
│   │   │   └── page.tsx     # /projects route (selected case studies catalog)
│   │   ├── favicon.ico      # Site favicon
│   │   ├── globals.css      # Tailwind v4 configuration, theme tokens, custom utilities
│   │   ├── layout.tsx       # Root layout (Inter font, ThemeProvider, Navbar, Footer)
│   │   └── page.tsx         # / route (Landing page, Hero, Value proposition, Metrics)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx   # Global footer with copyright and social links
│   │   │   └── Navbar.tsx   # Sticky blurred navbar with logo, nav links & theme toggle
│   │   ├── ui/              # shadcn/ui primitive components
│   │   │   ├── badge.tsx    # Tech stack / status badges
│   │   │   ├── button.tsx   # Standard and ghost button variants
│   │   │   ├── card.tsx     # Card container primitives
│   │   │   └── carousel.tsx # Embla-based carousel components
│   │   ├── mode-toggle.tsx  # Light/Dark theme toggle button
│   │   └── theme-provider.tsx # Client wrapper around next-themes ThemeProvider
│   └── lib/
│       └── utils.ts         # `cn` helper combining clsx and tailwind-merge
├── components.json          # shadcn/ui configuration file (New York style)
├── eslint.config.mjs        # ESLint flat configuration file
├── next-env.d.ts            # Next.js TypeScript definitions
├── next.config.ts           # Next.js configuration
├── package.json             # NPM dependencies and Turbopack scripts
├── postcss.config.mjs       # PostCSS configuration with @tailwindcss/postcss
├── tsconfig.json            # TypeScript configuration with @/* path alias
└── agent.md                 # System instructions & AI agent operational guide
```

---

## 4. Pages & Routing Architecture

All routes follow the Next.js App Router specification under `src/app`:

### 1. Root Layout (`src/app/layout.tsx`)
- Configures global metadata: title `"Hammad Javed | Portfolio"` and description.
- Imports `globals.css` and sets up Google Font (`Inter` with Latin subset).
- Wraps entire application in `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>`.
- Injects `Navbar` at top, `<main className="min-h-[80vh]">` for routed content, and `Footer` at bottom.
- Sets `suppressHydrationWarning` on `<html>` to avoid hydration mismatches with theme classes.

### 2. Home Page (`/` - `src/app/page.tsx`)
- **Hero Section:** High-contrast typography ("I Build Systems That Grow With Your Business."), availability status badge, bio summary, and CTAs ("Start a Project", "View Case Studies").
- **Background Details:** Elegant `.bg-grid` subtle overlay with opacity.
- **Value Proposition:** 3-column architecture highlights (Scalable Architecture, AI Integration, Performance First).
- **Social Proof / Metrics:** 4-column metric counters (Years Experience, Projects Delivered, Performance Score, Client Satisfaction).
- **Client Component:** Marked with `"use client"` for Framer Motion stagger animations.

### 3. Case Studies Catalog (`/projects` - `src/app/projects/page.tsx`)
- Editorial listing of featured case studies:
  - **Elite CMS & Business Automation** (`/projects/elite-cms`)
  - **Whoosh Logistics** (`/projects/whoosh-logistics`)
  - **DocuMind AI** (`/projects/documind-ai`)
- Each item features: 16:9 screenshot preview, category uppercase pill, descriptive overview, and an **Impact** callout card.
- Smooth link navigation with hover scale effects.

### 4. Dynamic Case Study Detail (`/projects/[slug]` - `src/app/projects/[slug]/page.tsx`)
- Dynamic route reading `params: Promise<{ slug: string }>`. Uses React 19's `React.use(params)` unwrapping.
- **Left Column:** Category kicker, Project Title, Full Architectural Description, and interactive `Carousel` (Embla) for viewing UI screenshots.
- **Right Column / Sidebar:**
  - **Live Demo Link** (when available, e.g., staging link).
  - **Impact Callout:** Highlighting key metrics (e.g., 90% automation, 10k+ monthly bookings, 20 hrs saved).
  - **Technology Stack:** Badges displaying technologies (Next.js 15, NestJS, PostgreSQL, Gemini API, Vector DBs, Socket.io, etc.).
- **Fallback State:** Renders a clean "Project Not Found" with link back to works if slug is unknown.

### 5. About Page (`/about` - `src/app/about/page.tsx`)
- **Narrative Section:** Explains Hammad's technical evolution (from .NET to high-scale Next.js / Node.js ecosystems) and engineering philosophy.
- **Services Grid:** 4 structured service offerings:
  - *Custom SaaS Development*
  - *Performance Audits*
  - *AI Pipeline Engineering*
  - *CTO as a Service*

### 6. Contact Page (`/contact` - `src/app/contact/page.tsx`)
- Clean contact cards for direct inquiries:
  - Direct Email: `hammad.alinmt@gmail.com`
  - LinkedIn: `linkedin.com/in/hammadali909`
  - GitHub: `github.com/Hammadnmt`
- "Send a Brief" CTA linking directly to mail client.

---

## 5. Configurations Breakdown

### 1. `package.json`
- **Turbopack Execution:**
  - `npm run dev` executes `next dev --turbopack`
  - `npm run build` executes `next build --turbopack`
  - `npm run lint` executes `eslint`
  - `npm run start` executes `next start`

### 2. `tsconfig.json`
- Target: `ES2017`, `moduleResolution: "bundler"`, `strict: true`.
- Module: `esnext`.
- Path Aliasing: `"@/*": ["./src/*"]` for imports such as `@/components/...` or `@/lib/utils`.

### 3. `components.json` (shadcn/ui)
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 4. `postcss.config.mjs`
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 5. `src/app/globals.css` (Tailwind CSS v4)
- Uses modern Tailwind v4 imports:
  - `@import "tailwindcss";`
  - `@import "tw-animate-css";`
- Configures custom variant: `@custom-variant dark (&:is(.dark *));`.
- Inlines design tokens under `@theme inline`:
  - `--font-sans: 'Inter', sans-serif;`
  - Border radii: `--radius-sm: 2px;`, `--radius-md: 4px;`, `--radius-lg: 8px;`.
  - HSL-compatible hex variables mapping light `:root` and `.dark` palettes.
- Base element styling: fine border rules, antialiased body, tracking-tight lightweight headings (`font-light`).
- Custom `.bg-grid` utility for subtle developer-aesthetic background grid.

---

## 6. Coding Practices & Engineering Standards

When modifying or extending this codebase, any AI agent or engineer must adhere strictly to these practices:

### A. Next.js 15 & React 19 Patterns
1. **Dynamic Route Params:**
   In Next.js 15, route parameters are promises. Always unwrap `params` in dynamic pages:
   ```tsx
   export default function Page({ params }: { params: Promise<{ slug: string }> }) {
     const { slug } = React.use(params);
     // ...
   }
   ```
2. **Component Boundaries:**
   - Use `"use client"` **only** when required (e.g., Framer Motion animations, event handlers, client hooks like `usePathname` or `useTheme`).
   - Keep data structures, constants, and static metadata server-side or at module scope where appropriate.

### B. Styling & Tailwind CSS v4 Rules
1. **No Outdated Tailwind v3 Patterns:**
   - Do NOT create a `tailwind.config.js` unless specifically requested. Tokens and extensions live in `src/app/globals.css` using `@theme inline`.
2. **Class Utility Merging:**
   - Always use `cn(...)` from `@/lib/utils` for conditional classes.
3. **Design Aesthetic Tone:**
   - **Monochrome & High Contrast:** Predominantly black (`#0A0A0A`) and white (`#FFFFFF`) with neutral grays (`#171717`, `#262626`, `#737373`, `#A3A3A3`).
   - **Fine Borders:** Borders are thin (`border border-border`), radii are sharp/subtle (`rounded-sm`).
   - **Typography Hierarchy:**
     - Headings: `font-light tracking-tight` (e.g. `text-5xl md:text-7xl font-light`).
     - Metadata kickers: `text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground`.
     - Body: `font-light text-muted-foreground leading-relaxed`.

### C. Motion & Animation Standards
1. **Framer Motion Variants:**
   - Keep animations smooth and understated. Typical duration: `0.6s - 0.8s`.
   - Use custom cubic bezier ease `[0.16, 1, 0.3, 1]` for natural deceleration.
   - Use `viewport={{ once: true }}` on `whileInView` to prevent distracting animation restarts while scrolling.

### D. Component Structure & shadcn/ui
1. UI components live in `src/components/ui/` and follow Radix UI composition (`asChild` pattern via `@radix-ui/react-slot`).
2. Global structural components live in `src/components/layout/`.
3. Feature or helper components live directly in `src/components/`.

### E. Code Quality & Linting
1. Always run verification before concluding tasks:
   ```bash
   npm run lint
   npm run build
   ```
2. Avoid unnecessary `any` types; prefer strict TypeScript interfaces or record dictionaries.

---

## 7. AI Agent Quick Command Reference

```bash
# Start Turbopack local development server (port 3000)
npm run dev

# Run Turbopack production build verification
npm run build

# Run ESLint check
npm run lint

# Add a new shadcn component (if needed)
npx shadcn@latest add <component-name>
```

---
*End of agent.md specification.*
