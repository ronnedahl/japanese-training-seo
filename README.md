# Eastern Wellness Methods

A static website built with Astro showcasing Japanese wellness and physical therapy content.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Sidebar.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Design System

The site uses a custom Tailwind CSS configuration with:
- **Primary accent**: `#08f7b3` (bright teal/green)
- **Dark mode**: Class-based toggle
- **Fonts**: Lexend (sans-serif), Playfair Display (serif)
- **Icons**: Material Symbols from Google Fonts

## 📝 Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import and use the `BaseLayout` component
3. Pass SEO metadata as props
4. Add your content

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Your Page Title"
  description="Your page description"
  author="Author Name"
>
  <main class="flex-1 w-full max-w-6xl mx-auto pb-12 px-6">
    <!-- Your content here -->
  </main>
</BaseLayout>
```

## SEO

SEO metadata is managed through the `BaseLayout` component, which includes:
- Meta tags (title, description, keywords)
- Open Graph tags
- Schema.org structured data (Article type)
- Canonical URLs

## Deployment

Build the static site:
```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy to any static hosting service.
