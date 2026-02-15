import Link from 'next/link'

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold text-white">
          n3wth/kit
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/components"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Components
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/docs/getting-started"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Docs
          </Link>
          <a
            href="https://github.com/n3wth/kit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
