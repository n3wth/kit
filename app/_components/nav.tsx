'use client'

import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'

const links = [
  { href: '/components', label: 'Components' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs/getting-started', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://github.com/n3wth/kit', label: 'GitHub', external: true },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-[background-color,border-color] duration-300 ${scrolled ? 'border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm' : 'border-b border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold text-white">
          n3wth/kit
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center justify-center gap-[5px] sm:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block h-[2px] w-[18px] bg-neutral-400 transition-all duration-200"
            style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
          />
          <span
            className="block h-[2px] w-[18px] bg-neutral-400 transition-all duration-200"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="block h-[2px] w-[18px] bg-neutral-400 transition-all duration-200"
            style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="overflow-hidden bg-neutral-950 transition-all duration-200 sm:hidden"
        style={{
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <div className="mx-auto max-w-5xl border-t border-neutral-800 px-6 pb-2">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block py-3 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="block py-3 text-sm text-neutral-400 transition-colors hover:text-white"
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
