# n3wth/kit

**AI-native component registry for the n3wth design system.**

Components with built-in context packs so AI tools generate on-brand code instead of generic shadcn output.

[**Browse components**](https://kit.newth.ai/components) · [**Docs**](https://kit.newth.ai/docs) · [**Blog**](https://kit.newth.ai/blog)

---

## The problem

You install shadcn/ui. You add a `.cursorrules` file. You prompt an AI to build a feature. It generates valid React — but it looks nothing like your product. Wrong colors, wrong spacing, wrong component patterns. You spend 30 minutes fixing what should have taken 30 seconds.

This happens because AI tools don't know your design system. They know shadcn defaults.

## What kit does

kit is a shadcn-compatible registry that ships every component with machine-readable context:

- **Design tokens** — CSS variables your AI tools can read and apply
- **AI context packs** — `.cursorrules`, `CLAUDE.md`, and MCP config that teach Cursor, Claude Code, v0, Lovable, and Windsurf what "on-brand" means for your project
- **Usage rules** — Props, patterns, and accessibility notes in structured JSON that LLMs consume directly

The result: AI-generated code that matches your design system on the first try.

---

## Quick start

Install any component with one command:

```bash
npx shadcn add https://kit.newth.ai/r/button.json
```

Install the design system style first (required for CSS variables):

```bash
npx shadcn add https://kit.newth.ai/r/n3wth.json
```

Or scaffold a full project:

```bash
npx @n3wth/kit init
```

---

## AI tool setup

### Cursor

```bash
curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules
```

### Claude Code

```bash
curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md
```

### MCP (Cursor, Claude, Cline, etc.)

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

---

## Components

### Atoms (12)

| Component | Install |
|-----------|---------|
| Button — multi-variant, loading state, asChild | `npx shadcn add https://kit.newth.ai/r/button.json` |
| Badge — semantic color variants (sage, coral, mint, gold) | `npx shadcn add https://kit.newth.ai/r/badge.json` |
| Input — glass variant, icon slots, error state | `npx shadcn add https://kit.newth.ai/r/input.json` |
| Icon — iconoir-react wrapper with size presets | `npx shadcn add https://kit.newth.ai/r/icon.json` |
| Switch — controlled/uncontrolled, size variants | `npx shadcn add https://kit.newth.ai/r/switch.json` |
| Avatar — image, fallback initials, size presets | `npx shadcn add https://kit.newth.ai/r/avatar.json` |
| Label — form label with required indicator | `npx shadcn add https://kit.newth.ai/r/label.json` |
| Textarea — resize control, error state | `npx shadcn add https://kit.newth.ai/r/textarea.json` |
| Separator — horizontal or vertical | `npx shadcn add https://kit.newth.ai/r/separator.json` |
| Progress — animated bar, semantic color states | `npx shadcn add https://kit.newth.ai/r/progress.json` |
| Skeleton — text, circular, rectangular variants | `npx shadcn add https://kit.newth.ai/r/skeleton.json` |
| Tooltip — portal-based, auto-positioning, arrow | `npx shadcn add https://kit.newth.ai/r/tooltip.json` |

### Molecules (11)

| Component | Install |
|-----------|---------|
| Card — default, glass, interactive variants | `npx shadcn add https://kit.newth.ai/r/card.json` |
| Modal — portal, focus trap, compound sub-components | `npx shadcn add https://kit.newth.ai/r/modal.json` |
| Tabs — underline and pill variants, animated indicator | `npx shadcn add https://kit.newth.ai/r/tabs.json` |
| Toast — auto-dismiss, variant styling | `npx shadcn add https://kit.newth.ai/r/toast.json` |
| Dropdown — single/multi-select, search | `npx shadcn add https://kit.newth.ai/r/dropdown.json` |
| Accordion — single/multiple mode, animated | `npx shadcn add https://kit.newth.ai/r/accordion.json` |
| Command Box — copyable command display | `npx shadcn add https://kit.newth.ai/r/command-box.json` |
| Theme Toggle — dark/light with sun/moon icons | `npx shadcn add https://kit.newth.ai/r/theme-toggle.json` |
| Code Block — syntax highlighting, line numbers | `npx shadcn add https://kit.newth.ai/r/code-block.json` |
| Mobile Drawer — slide-in nav, focus trap | `npx shadcn add https://kit.newth.ai/r/mobile-drawer.json` |
| Noise Overlay — SVG grain texture | `npx shadcn add https://kit.newth.ai/r/noise-overlay.json` |

### Blocks (4)

| Component | Install |
|-----------|---------|
| Nav — responsive bar, mobile drawer, theme toggle | `npx shadcn add https://kit.newth.ai/r/nav.json` |
| Hero — badge, title, description, CTA buttons | `npx shadcn add https://kit.newth.ai/r/hero.json` |
| Section — layout wrapper with size and spacing options | `npx shadcn add https://kit.newth.ai/r/section.json` |
| Footer — link columns, social icons, copyright | `npx shadcn add https://kit.newth.ai/r/footer.json` |

### Hooks (11)

| Hook | Description |
|------|-------------|
| `use-theme` | localStorage persistence, system preference detection |
| `use-media-query` | SSR-safe breakpoint matching |
| `use-reduced-motion` | prefers-reduced-motion with animation config defaults |
| `use-keyboard-shortcuts` | declarative shortcut handler with modifier keys |
| `use-toast` | toast context provider and variant helpers |
| `use-count-up` | animated number counter with scroll trigger |
| `use-scroll-reveal` | scroll-triggered entrance animations |
| `use-stagger-list` | staggered cascade animations |
| `use-page-transition` | page entrance/exit fade-and-slide |
| `use-text-reveal` | character-by-character text reveal |
| `use-button-pulse` | hover/press scale animations |

### Visual / decorative

`animated-text`, `character`, `composite-shape`, `hamburger-icon`, `nav-link`, `scroll-indicator`, `shape`, `speech-bubble`

---

## vs plain shadcn/ui

| | shadcn/ui | n3wth/kit |
|---|---|---|
| Component primitives | Yes | Yes (extended) |
| shadcn registry protocol | Yes | Yes |
| Design tokens | Defaults only | Custom system |
| AI context packs | No | Yes |
| Machine-readable usage rules | No | Yes |
| MCP server support | No | Yes |
| Animation hooks (GSAP) | No | Yes |
| Install command | `npx shadcn add` | `npx shadcn add` |

kit is additive — it uses the same install protocol, so it works with any shadcn-compatible toolchain.

---

## Tech stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 with CSS variables
- Radix UI primitives
- shadcn registry protocol
- GSAP animations

---

## Development

```bash
npm install
npm run dev              # Start dev server at localhost:3000
npm run registry:build   # Build registry JSON to public/r/
npm run build            # Build everything
```

Registry items live in `registry/new-york/[name]/`. Each item has a `.tsx` source and is declared in `registry.json`, then built to `public/r/[name].json`.

---

## License

MIT
