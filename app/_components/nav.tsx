import Link from 'next/link'

const links = [
  { href: '/docs/getting-started', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
  { href: 'https://github.com/n3wth/kit', label: 'GitHub', external: true },
]

export function Nav() {
  return (
    <nav className="w-full border-b border-neutral-200">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold text-stone-900">
          n3wth/kit
        </Link>

        <div className="flex items-center gap-8">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {l.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}
