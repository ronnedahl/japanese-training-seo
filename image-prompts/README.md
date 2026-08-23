# Image Prompts

ChatGPT/DALL-E prompts for adding more imagery to article pages. One markdown file per article.

## Style anchor (applies to every prompt)

Every prompt below is self-contained, but they all target the same visual style so the site stays visually consistent:

- **Medium:** photorealistic photography (not stylized art, not 3D render)
- **Subjects:** seniors aged 55–70, calm and content expressions, natural body language
- **Clothing:** neutral linen pants, soft cotton tops in greys / creams / muted earth tones
- **Settings:** minimalist Japanese-influenced interiors (light wood floors, white walls, sheer curtains, single houseplant) OR serene natural outdoor settings (forest, garden, beach at sunrise)
- **Light:** soft, natural — window light, golden hour, dappled forest light. Never harsh.
- **Palette:** muted, warm, calming — cream, soft grey, warm wood, sage green
- **Mood:** peaceful, focused, dignified — not staged, not commercial-stocky
- **Aspect ratio:** 16:9 preferred (`aspect-[16/9]` in the layout)
- **Quality:** authentic, slightly imperfect feel — avoid the AI-glossy look

## Workflow

1. For each prompt, copy the prompt block into ChatGPT (with DALL-E or GPT-Image)
2. Download as `.jpg` (preferred for photos) or `.webp` (smaller file size)
3. Save into `src/assets/images/<page-slug>/` using the suggested filename, creating the folder if the page has none yet
4. Once all images for a page are generated, add `import`s and `<figure>` blocks into the corresponding `.astro` file
