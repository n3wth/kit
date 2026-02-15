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
 */
function DesignSystemScope({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        '--color-white': '#ffffff',
        '--color-bg': '#0a0a0a',
        '--color-bg-secondary': '#141414',
        '--color-accent': '#a78bfa',
        '--color-grey-200': '#e5e5e5',
        '--color-grey-300': '#d4d4d4',
        '--color-grey-400': '#a3a3a3',
        '--color-grey-500': '#737373',
        '--color-grey-600': '#525252',
        '--color-grey-700': '#404040',
        '--color-sage': '#4ade80',
        '--color-coral': '#f87171',
        '--color-mint': '#2dd4bf',
        '--color-gold': '#fbbf24',
        '--glass-bg': 'rgba(255,255,255,0.05)',
        '--glass-border': 'rgba(255,255,255,0.1)',
        '--glass-highlight': 'rgba(255,255,255,0.2)',
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
      <div className="max-w-xs">
        <Input placeholder="Enter your email" inputSize="md" />
      </div>
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
      <div className="flex max-w-xs flex-col gap-3">
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
    <DesignSystemScope>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseItems.map((item) => (
          <div key={item.name} className="flex flex-col bg-neutral-950 p-8">
            <p className="text-xs font-medium text-neutral-600">{item.name}</p>
            <div className="mt-6 flex-1">
              {item.render()}
            </div>
            <div className="mt-8">
              <InstallCommand command={item.install} />
            </div>
          </div>
        ))}
      </div>
    </DesignSystemScope>
  )
}
