# n3wth/kit

The packaging layer between design systems and AI code generation.

47 components with AI context packs that teach v0, Cursor, Claude Code, Lovable, and Windsurf to generate on-brand code.

## Quick Start

Install any component with one command:

```bash
npx shadcn add https://kit.newth.ai/r/button.json
```

Or scaffold a full project:

```bash
npx @n3wth/kit init
```

## What's Included

Every component ships with:

- **Component source** -- TypeScript, Tailwind v4, Radix primitives
- **AI context packs** -- .cursorrules, CLAUDE.md, MCP config, structured JSON
- **Design tokens** -- CSS variables for colors, spacing, typography
- **Usage rules** -- Props, patterns, and accessibility notes that LLMs can read

## Components

### Atoms

button, badge, input, icon, switch, avatar, label, textarea, separator, progress, skeleton, tooltip

### Molecules

card, modal, tabs, toast, dropdown, accordion, command-box, theme-toggle, code-block, noise-overlay

### Blocks

nav, hero, section, footer

### Hooks

use-theme, use-media-query, use-reduced-motion, use-keyboard-shortcuts, use-toast, use-count-up, use-scroll-reveal, use-stagger-list, use-page-transition, use-text-reveal, use-button-pulse

## AI Tool Setup

### Cursor

Copy the context file to your project root:

```bash
curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules
```

### Claude Code

```bash
curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md
```

### MCP Server

Add to your MCP client config:

```json
{
  "mcpServers": {
    "n3wth-kit": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://kit.newth.ai/r/registry.json"
      }
    }
  }
}
```

## Registry URL

Base: `https://kit.newth.ai/r`

Pattern: `https://kit.newth.ai/r/{component-name}.json`

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 with CSS variables
- Radix UI primitives
- shadcn registry protocol
- GSAP animations

## Development

```bash
npm install
npm run dev              # Start dev server
npm run build            # Build everything
npm run registry:build   # Build registry JSON
```

## License

MIT
