const components = [
  { name: 'button', description: 'Clickable actions and form submissions' },
  { name: 'badge', description: 'Status indicators and labels' },
  { name: 'input', description: 'Text input fields and form controls' },
  { name: 'card', description: 'Contained content surfaces' },
  { name: 'modal', description: 'Overlay dialogs and confirmations' },
  { name: 'tabs', description: 'Tabbed content navigation' },
  { name: 'toast', description: 'Temporary notification messages' },
  { name: 'dropdown', description: 'Action menus and select triggers' },
  { name: 'accordion', description: 'Collapsible content sections' },
  { name: 'nav', description: 'Navigation bars and menus' },
  { name: 'hero', description: 'Page-level hero sections' },
  { name: 'section', description: 'Layout content sections' },
  { name: 'footer', description: 'Page footers and site links' },
  { name: 'tooltip', description: 'Contextual hover information' },
  { name: 'switch', description: 'Toggle controls for binary options' },
  { name: 'avatar', description: 'User profile images and initials' },
  { name: 'skeleton', description: 'Loading state placeholders' },
  { name: 'code-block', description: 'Syntax-highlighted code display' },
  { name: 'command-box', description: 'Command palette and search' },
  { name: 'theme-toggle', description: 'Dark and light mode switcher' },
]

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Components
        </h1>
        <p className="mt-3 text-neutral-400">
          Browse all available components in the registry. Each ships with AI
          context packs for on-brand generation.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((comp) => (
            <div
              key={comp.name}
              className="rounded-lg border border-neutral-800 p-5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-mono text-sm font-medium text-white">
                  {comp.name}
                </h2>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                {comp.description}
              </p>
              <div className="mt-4">
                <code className="rounded bg-neutral-900 px-2 py-1 font-mono text-xs text-neutral-500">
                  npx shadcn add {comp.name}
                </code>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
