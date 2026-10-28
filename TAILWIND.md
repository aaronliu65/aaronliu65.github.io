# Tailwind CSS migration

This project uses Tailwind CSS 4 with the official `@tailwindcss/postcss` integration.

## Install and verify

After applying the update files to the project:

```sh
npm install
npm run build
npm run dev
```

Restart any running development server after changing the PostCSS configuration.

## Styling

- `src/app/page.tsx`: Tailwind utility classes for layout, responsive breakpoints, hover/focus states, project filtering, dialogs, and accordion content.
- `src/components/artwork.tsx`: illustrations built entirely with Tailwind utilities, including gradients, shadows, and pseudo-elements. All conditional classes are full literal strings so Tailwind can detect them.
- `src/app/layout.tsx`: document-level typography, focus indicators, scroll behavior, selection, and reduced-motion utilities.
- `src/app/globals.css`: font imports, Tailwind import, theme tokens, and the entry animation keyframes only. No custom CSS class selectors or `@apply`.
- `postcss.config.mjs`: Tailwind's PostCSS integration.

Shared colours use `bg-paper`, `text-ink`, `text-muted`, `text-accent`, and `border-line`. Edit their values in the `@theme` block. Scroll reveals use `data-reveal` / `data-visible` attributes and Tailwind data variants. Modal scroll locking uses the `overflow-hidden` utility; there are no inline style declarations.

The original page content and portfolio interactions are retained. Existing sample projects and contact placeholders are unchanged.

Official setup: https://tailwindcss.com/docs/installation/framework-guides/nextjs
