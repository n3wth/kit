import type { Metadata } from 'next'
import { ComponentGrid } from './_components/component-grid'

export const metadata: Metadata = {
  title: 'Components - n3wth/kit',
  description: '47 production-ready React components with built-in AI context. Install via shadcn CLI with context packs for v0, Cursor, Claude Code, Lovable, and Windsurf.',
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <div className="flex items-baseline gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Components
          </h1>
          <span className="rounded-full border border-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-500">
            47
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Every component ships with AI context packs. Install one, and AI tools
          know how to use it on-brand.
        </p>

        <ComponentGrid />
      </main>
    </div>
  )
}
