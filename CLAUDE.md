# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website built with **Astro** for "Eastern Wellness Methods" focused on Japanese wellness and physical therapy content. The modular component-based architecture makes it easy to maintain and add new pages.

## Architecture

**Astro Static Site**: Component-based architecture with reusable layouts and components.

**Technology Stack**:
- **Astro 5.x**: Static site generator with component-based architecture
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **TypeScript**: Strict mode enabled for type safety
- **Google Fonts**: Atkinson Hyperlegible (sans-serif) and Poppins (serif)
- **Material Symbols**: Icon library from Google Fonts
- **Dark Mode**: Implemented using Tailwind's class-based dark mode

**Component Structure**:
```
src/
├── components/
│   ├── Header.astro      # Sticky header with navigation
│   ├── Footer.astro      # Footer with company info and legal links
│   └── Sidebar.astro     # Sidebar with TOC, products, author info
├── layouts/
│   └── BaseLayout.astro  # Main layout with SEO metadata
└── pages/
    └── index.astro       # Homepage article
```

**Theme Configuration** (`tailwind.config.mjs`):
- Custom color scheme with primary accent color `#08f7b3` (bright teal/green)
- Light/dark mode variables for background, surface, and text colors
- Custom font families configured in Tailwind config
- Extended border radius utilities
- Form plugin included

**SEO Strategy**:
- Centralized SEO management in `BaseLayout.astro`
- Props-based metadata (title, description, keywords, author, dates)
- Schema.org structured data automatically generated
- Canonical URLs and Open Graph tags

**Responsive Design**:
- Mobile-first approach with breakpoints (lg:, md:)
- Sidebar component hidden on mobile (`lg:block`)
- Mobile-specific product cards and topic sections
- Grid layout switches to single column on mobile

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro check  # Type-check the project
```

## Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import `BaseLayout` from `src/layouts/BaseLayout.astro`
3. Pass SEO metadata as props to `BaseLayout`
4. Add article content inside the layout

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Article Title"
  description="Article description"
  keywords="keyword1, keyword2"
  author="Dr. Author Name"
>
  <main class="flex-1 w-full max-w-6xl mx-auto pb-12 px-6">
    <!-- Content here -->
  </main>
</BaseLayout>
```

## Component Usage

**Header Component**: Automatic sticky navigation, no props needed
**Footer Component**: Static footer, no props needed
**Sidebar Component**: Contains TOC, product cards, author info, related links

To use sidebar in a page with article content:
```astro
<div class="lg:grid lg:grid-cols-12 lg:gap-12">
  <article class="lg:col-span-8">
    <!-- Article content -->
  </article>
  <Sidebar />
</div>
```

## Styling Guidelines

- Use Tailwind utility classes consistently
- Always include dark mode variants with `dark:` prefix
- Maintain responsive breakpoints: default (mobile), lg: (desktop)
- Use semantic HTML elements (article, section, nav, etc.)
- Custom colors are defined in `tailwind.config.mjs`

## SEO Best Practices

All SEO metadata is managed through `BaseLayout.astro` props:
- `title`: Page title (required)
- `description`: Meta description (required)
- `keywords`: Comma-separated keywords (optional)
- `canonicalUrl`: Full canonical URL (optional)
- `author`: Author name or organization (optional)
- `datePublished`: ISO date string (optional)
- `dateModified`: ISO date string (optional)

The layout automatically generates:
- Meta tags (description, keywords)
- Open Graph tags (og:title, og:description, og:type)
- Schema.org Article structured data
- Canonical link tag

## Image Handling

- Images are stored in `src/assets/images/`
- Use Astro's `Image` component for optimization
- Import images directly in Astro components
- Use descriptive alt text for all images
- For hero images, use background-image with aspect ratio containers
- For thumbnails, use object-cover with defined dimensions
