import Link from 'next/link'

const guides = [
  {
    title: 'Getting Started',
    description: 'Install components and set up your project.',
    href: '/docs/getting-started',
  },
  {
    title: 'Cursor',
    description: 'Configure .cursorrules and MCP for Cursor AI.',
    href: '/docs/cursor',
  },
  {
    title: 'Claude Code',
    description: 'Set up CLAUDE.md and MCP for Claude Code.',
    href: '/docs/claude',
  },
  {
    title: 'v0',
    description: 'Use n3wth/kit components in v0 by Vercel.',
    href: '/docs/v0',
  },
  {
    title: 'Lovable',
    description: 'Configure Lovable to use the n3wth registry.',
    href: '/docs/lovable',
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Documentation
        </h1>
        <p className="mt-3 text-neutral-400">
          Guides for setting up n3wth/kit with your project and AI tools.
        </p>

        <div className="mt-12 grid gap-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-700"
            >
              <h2 className="text-sm font-semibold text-white group-hover:text-neutral-200">
                {guide.title}
              </h2>
              <p className="mt-1.5 text-sm text-neutral-400">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
