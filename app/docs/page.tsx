import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Docs - n3wth/kit',
  description: 'Documentation for n3wth/kit. Guides for getting started, Cursor, Claude Code, v0, and Lovable integration.',
}

const guides = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    description: 'Install components and set up AI context packs in your project.',
  },
  {
    title: 'Cursor Integration',
    href: '/docs/cursor',
    description: 'Configure .cursorrules and MCP server for Cursor AI.',
  },
  {
    title: 'Claude Code Integration',
    href: '/docs/claude',
    description: 'Set up CLAUDE.md and MCP server for Claude Code.',
  },
  {
    title: 'v0 Integration',
    href: '/docs/v0',
    description: 'Use the registry URL with v0 to generate on-brand UIs.',
  },
  {
    title: 'Lovable Integration',
    href: '/docs/lovable',
    description: 'Add n3wth components to Lovable projects.',
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
          Guides for installing components and integrating with AI coding tools.
        </p>

        <div className="mt-12 space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group block rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-700"
            >
              <h2 className="text-base font-semibold text-white transition-colors group-hover:text-neutral-200">
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
