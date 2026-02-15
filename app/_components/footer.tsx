import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Components', href: '/components' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Registry', href: '/docs/getting-started' },
    ],
  },
  {
    title: 'Docs',
    links: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Cursor', href: '/docs/cursor' },
      { label: 'Claude Code', href: '/docs/claude' },
      { label: 'v0', href: '/docs/v0' },
      { label: 'Lovable', href: '/docs/lovable' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/n3wth/kit', external: true },
      { label: 'Email', href: 'mailto:oliver@newth.ai' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-semibold text-white">
              n3wth/kit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Design systems for the AI era. One registry, every tool.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex items-center justify-between border-t border-neutral-800/50 pt-6">
          <p className="text-xs text-neutral-600">
            &copy; 2026 Oliver Newth
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-violet-500 via-pink-500 to-emerald-500" />
        </div>
      </div>
    </footer>
  )
}
