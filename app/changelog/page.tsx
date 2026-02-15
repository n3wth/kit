import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog - n3wth/kit',
  description: 'Latest updates and improvements to n3wth/kit. New components, features, and fixes.',
}

const entries = [
  {
    date: 'February 15, 2026',
    title: 'Business launch',
    changes: [
      'Added email waitlist capture on landing and pricing pages',
      'Complete documentation for Cursor, Claude Code, v0, and Lovable',
      'Blog with technical content for SEO',
      'Interactive component page with search, filter, and copy-to-clipboard',
      'Mobile hamburger navigation',
      'Vercel Analytics and Speed Insights',
      'Sitemap, robots.txt, and Open Graph images',
      'MIT license and proper README',
    ],
  },
  {
    date: 'February 14, 2026',
    title: 'Landing page redesign',
    changes: [
      'New hero with GSAP animations and floating design elements',
      'Live component showcase grid with 6 interactive demos',
      'Before/after code comparison section',
      'Scroll-aware navigation with backdrop blur',
    ],
  },
  {
    date: 'February 12, 2026',
    title: 'Initial release',
    changes: [
      '47 components built on Radix UI and Tailwind CSS v4',
      '11 custom React hooks for animations and state',
      'AI context packs (.cursorrules, CLAUDE.md, MCP config, components.json)',
      'shadcn registry protocol support',
      'CLI tool for project scaffolding',
      'Marketing site with pricing and documentation',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Changelog
        </h1>
        <p className="mt-3 text-neutral-400">
          Latest updates and improvements.
        </p>

        <div className="mt-16 space-y-16">
          {entries.map((entry) => (
            <article key={entry.date}>
              <time className="text-sm text-neutral-500">{entry.date}</time>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {entry.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {entry.changes.map((change) => (
                  <li key={change} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-700" />
                    {change}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
