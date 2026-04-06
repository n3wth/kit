'use client'

import { Button } from '@/registry/new-york/button/button'
import { Badge } from '@/registry/new-york/badge/badge'
import { Input } from '@/registry/new-york/input/input'
import { Switch } from '@/registry/new-york/switch/switch'
import { Progress } from '@/registry/new-york/progress/progress'
import { Avatar } from '@/registry/new-york/avatar/avatar'
import { InstallCommand } from './install-command'

/**
 * Scoped wrapper that provides the n3wth design system CSS variables
 * so registry components render correctly on the marketing site.
 *
 * Note: Tailwind v4 resolves `bg-white` via var(--color-white), so this
 * wrapper must NOT contain any Tailwind `bg-white` elements.
 */
function DesignSystemScope({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        '--color-white': '#1c1917',
        '--color-bg': '#ffffff',
        '--color-bg-secondary': '#fafaf9',
        '--color-accent': '#7c3aed',
        '--color-grey-200': '#e7e5e4',
        '--color-grey-300': '#d6d3d1',
        '--color-grey-400': '#78716c',
        '--color-grey-500': '#57534e',
        '--color-grey-600': '#a8a29e',
        '--color-grey-700': '#d6d3d1',
        '--color-sage': '#16a34a',
        '--color-coral': '#dc2626',
        '--color-mint': '#0d9488',
        '--color-gold': '#d97706',
        '--glass-bg': 'rgba(0,0,0,0.04)',
        '--glass-border': 'rgba(0,0,0,0.12)',
        '--glass-highlight': 'rgba(0,0,0,0.18)',
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

const showcaseItems = [
  {
    name: 'Button',
    install: 'npx shadcn add https://kit.newth.ai/r/button.json',
    render: () => (
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" size="lg">Primary</Button>
        <Button variant="secondary" size="lg">Secondary</Button>
        <Button variant="ghost" size="lg">Ghost</Button>
        <Button variant="glass" size="lg">Glass</Button>
      </div>
    ),
  },
  {
    name: 'Badge',
    install: 'npx shadcn add https://kit.newth.ai/r/badge.json',
    render: () => (
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="sage" size="md">Success</Badge>
        <Badge variant="coral" size="md">Error</Badge>
        <Badge variant="mint" size="md">Info</Badge>
        <Badge variant="gold" size="md">Warning</Badge>
        <Badge variant="outline" size="md">Outline</Badge>
      </div>
    ),
  },
  {
    name: 'Input',
    install: 'npx shadcn add https://kit.newth.ai/r/input.json',
    render: () => (
      <Input placeholder="Enter your email" inputSize="md" />
    ),
  },
  {
    name: 'Switch',
    install: 'npx shadcn add https://kit.newth.ai/r/switch.json',
    render: () => (
      <div className="flex items-center gap-4">
        <Switch defaultChecked size="md" label="Toggle" />
        <Switch size="md" label="Toggle off" />
      </div>
    ),
  },
  {
    name: 'Progress',
    install: 'npx shadcn add https://kit.newth.ai/r/progress.json',
    render: () => (
      <div className="flex flex-col gap-3">
        <Progress value={72} variant="success" size="md" />
        <Progress value={45} variant="warning" size="md" />
      </div>
    ),
  },
  {
    name: 'Avatar',
    install: 'npx shadcn add https://kit.newth.ai/r/avatar.json',
    render: () => (
      <div className="flex items-center gap-3">
        <Avatar fallback="ON" size="lg" />
        <Avatar fallback="KT" size="lg" />
        <Avatar fallback="JD" size="lg" />
      </div>
    ),
  },
]

export function ComponentShowcase() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
      {showcaseItems.map((item) => (
        <div key={item.name} className="flex flex-col bg-[#ffffff] p-6">
          <p className="text-xs font-medium tracking-wide uppercase text-stone-400">{item.name}</p>
          <DesignSystemScope>
            <div className="mt-5 flex-1 flex items-center">
              {item.render()}
            </div>
          </DesignSystemScope>
          <div className="mt-5">
            <InstallCommand command={item.install} />
          </div>
        </div>
      ))}
    </div>
  )
}
