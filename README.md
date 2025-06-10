# Zukunftsentscheid Website

A Next.js project with MDX support for [Hamburger Zukunftsentscheid](https://zukunftsentscheid-hamburg.de/).

## Quick Start

```
bun install
bun dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Scripts

### Process Blobs

Convert individual blob SVG files into reusable symbol-based SVGs:

```bash
# Process blobs from 'blobs' directory to 'public/blobs'
bun run scripts/process-blobs.ts

# Custom input/output directories
bun run scripts/process-blobs.ts input-dir output-dir
```

This script:
- Reads SVG files from the input directory (default: `blobs/`)
- Extracts the blob ID from filenames (e.g., `Property 1=blob0.svg` → `blob0`)
- Removes fill attributes and creates symbol-based SVGs
- Outputs individual SVG files to the output directory (default: `public/blobs/`)

Each output file contains a `<symbol>` definition with a `<use>` element, making the blobs easily reusable and styleable with CSS.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
