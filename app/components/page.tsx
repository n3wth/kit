import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Components - n3wth/kit',
  description: '47 production-ready React components with built-in AI context. Install via shadcn CLI with context packs for v0, Cursor, Claude Code, Lovable, and Windsurf.',
}

const components = [
  { name: 'button', category: 'Atoms', description: 'Primary actions with variant, size, and loading state' },
  { name: 'badge', category: 'Atoms', description: 'Status indicators with semantic color variants' },
  { name: 'input', category: 'Atoms', description: 'Text input with glass variant and icon slots' },
  { name: 'icon', category: 'Atoms', description: 'Icon wrapper with named map and size presets' },
  { name: 'switch', category: 'Atoms', description: 'Toggle control with three size variants' },
  { name: 'avatar', category: 'Atoms', description: 'Profile image with fallback initials' },
  { name: 'label', category: 'Atoms', description: 'Form label with required indicator' },
  { name: 'textarea', category: 'Atoms', description: 'Resizable text area with error state' },
  { name: 'separator', category: 'Atoms', description: 'Horizontal or vertical divider' },
  { name: 'progress', category: 'Atoms', description: 'Progress bar with semantic color states' },
  { name: 'skeleton', category: 'Atoms', description: 'Loading placeholder with shape variants' },
  { name: 'tooltip', category: 'Atoms', description: 'Portal-based tooltip with auto-positioning' },
  { name: 'card', category: 'Molecules', description: 'Content container with glass and interactive variants' },
  { name: 'modal', category: 'Molecules', description: 'Dialog with portal, focus trap, and compound API' },
  { name: 'tabs', category: 'Molecules', description: 'Tabbed navigation with underline and pill styles' },
  { name: 'toast', category: 'Molecules', description: 'Notification with variant styling and auto-dismiss' },
  { name: 'dropdown', category: 'Molecules', description: 'Select with single/multi-select and search' },
  { name: 'accordion', category: 'Molecules', description: 'Collapsible content with animated transitions' },
  { name: 'command-box', category: 'Molecules', description: 'Copyable command display with clipboard' },
  { name: 'theme-toggle', category: 'Molecules', description: 'Dark/light mode toggle button' },
  { name: 'nav', category: 'Blocks', description: 'Responsive navigation with mobile drawer' },
  { name: 'hero', category: 'Blocks', description: 'Page hero with badge, title, and CTA buttons' },
  { name: 'section', category: 'Blocks', description: 'Layout section with container options' },
  { name: 'footer', category: 'Blocks', description: 'Site footer with link columns and social icons' },
]

const categories = ['Atoms', 'Molecules', 'Blocks'] as const

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Components
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Every component ships with AI context packs. Install one, and AI tools
          know how to use it on-brand.
        </p>

        {categories.map((category) => {
          const items = components.filter((c) => c.category === category)
          return (
            <section key={category} className="mt-12">
              <h2 className="text-sm font-medium text-neutral-500">
                {category}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((comp) => (
                  <div
                    key={comp.name}
                    className="rounded-lg border border-neutral-800 p-4"
                  >
                    <h3 className="font-mono text-sm font-medium text-white">
                      {comp.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-400">
                      {comp.description}
                    </p>
                    <code className="mt-3 block rounded bg-neutral-900 px-2 py-1 font-mono text-xs text-neutral-500">
                      npx shadcn add https://kit.newth.ai/r/{comp.name}.json
                    </code>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
