# n3wth/kit

Component registry + marketing site. hey@n3wth.com | github.com/n3wth/kit

## Quick Reference

```
registry/              # Publishable components (shadcn format)
├── new-york/[name]/   # UI components: button.tsx, card.tsx...
├── hooks/             # React hooks: use-theme.ts, use-toast.ts...
└── lib/               # Utilities: cn.ts

app/                   # Marketing site (kit.n3wth.com)
├── page.tsx           # Landing page
├── layout.tsx         # Root layout (applies Nav globally)
├── _components/       # Site chrome (NOT registry components)
│   ├── nav.tsx        # Site header
│   └── footer.tsx     # Site footer
└── [route]/page.tsx   # Other pages

registry.json          # Component manifest → builds to public/r/
```

## Chrome vs Registry

**Site chrome** lives in `app/_components/`. These are NOT shadcn registry components.

To edit site header/footer: modify `app/_components/nav.tsx` or `footer.tsx` directly.
Do NOT read `registry/new-york/nav/` or `registry/new-york/footer/` for site changes.

## Commands

```bash
npm run dev              # Dev server
npm run registry:build   # Build registry JSON
npm run build            # Build everything
```

## Code Style

TypeScript, 2 spaces, single quotes, no semicolons. Tailwind v4 with CSS vars.
Flat, minimal design. No shadows/gradients unless specified.

## Registry Protocol

Components in `registry/new-york/[name]/` have `[name].tsx` + `index.ts`.
Defined in `registry.json`, built to `public/r/[name].json`.
Install: `npx shadcn add https://kit.n3wth.com/r/[name].json`

## README voice: don'ts

1. No LLM adjectives: robust, seamless, powerful, effortless, delightful, blazing, intuitive, elegant, supercharge, leverage.
2. No "getting started journey", "let's dive in", "you're all set". The install section is commands and one sentence per command.
3. No claim without a file, command or URL behind it. If it is not in the repo, it is not in the README.
4. No "AI-native", "context-aware", "on-brand" as a result. They are goals until an eval in this repo says otherwise.
5. No emojis, no `---` dividers, no badges beyond npm and license.
6. No problem/solution story ("You install X. It looks wrong. You waste 30 minutes."). Say what it does.
7. No comparison tables against other projects unless every cell is verified against that project's current docs, with the date.
8. No "coming soon", roadmap or "once we're listed on X". Describe the present tense only.
9. No inventing support channels. Issues exist. Discord and Discussions do not.
10. No version bumps or release notes in README edits. Versions come from package.json.
