'use client'

import { useState } from 'react'
import { Button } from '@/registry/new-york/button/button'
import { Badge } from '@/registry/new-york/badge/badge'
import { Input } from '@/registry/new-york/input/input'
import { Switch } from '@/registry/new-york/switch/switch'
import { Progress } from '@/registry/new-york/progress/progress'
import { Avatar } from '@/registry/new-york/avatar/avatar'
import { Skeleton } from '@/registry/new-york/skeleton/skeleton'
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from '@/registry/new-york/tabs/tabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/registry/new-york/accordion/accordion'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/registry/new-york/card/card'

/**
 * Remaps n3wth design system CSS variables to light-theme values so
 * registry components render correctly on the white marketing site.
 */
export function DesignSystemScope({ children }: { children: React.ReactNode }) {
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

// --- Individual demo components (stateful where needed) ---

function ButtonDemo() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="primary" size="sm">Primary</Button>
      <Button variant="secondary" size="sm">Secondary</Button>
      <Button variant="ghost" size="sm">Ghost</Button>
      <Button
        variant="primary"
        size="sm"
        isLoading={loading}
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 1500)
        }}
      >
        {loading ? 'Loading' : 'Click me'}
      </Button>
    </div>
  )
}

function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="sage" size="md">Success</Badge>
      <Badge variant="coral" size="md">Error</Badge>
      <Badge variant="mint" size="md">Info</Badge>
      <Badge variant="gold" size="md">Warning</Badge>
      <Badge variant="default" size="md">Default</Badge>
    </div>
  )
}

function InputDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-2 w-full">
      <Input
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputSize="md"
      />
      <Input placeholder="Error state" inputSize="md" error="This field is required" />
    </div>
  )
}

function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultChecked label="Small" />
      <Switch size="md" checked={checked} onChange={setChecked} label="Medium" />
      <Switch size="lg" label="Large" />
    </div>
  )
}

function ProgressDemo() {
  const [value, setValue] = useState(65)
  return (
    <div className="flex flex-col gap-3 w-full">
      <Progress value={value} variant="default" size="md" showValue />
      <Progress value={80} variant="success" size="md" />
      <Progress value={40} variant="warning" size="md" />
      <Progress value={25} variant="error" size="sm" />
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => setValue((v) => Math.max(0, v - 10))}
          className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5 hover:border-neutral-400"
        >
          −10
        </button>
        <button
          onClick={() => setValue((v) => Math.min(100, v + 10))}
          className="text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5 hover:border-neutral-400"
        >
          +10
        </button>
      </div>
    </div>
  )
}

function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar fallback="ON" size="xs" />
      <Avatar fallback="KT" size="sm" />
      <Avatar fallback="JD" size="md" />
      <Avatar fallback="AB" size="lg" />
      <Avatar fallback="XY" size="xl" />
    </div>
  )
}

function TabsDemo() {
  return (
    <div className="w-full">
      <Tabs defaultValue="overview" variant="underline">
        <TabsList>
          <TabsTab value="overview">Overview</TabsTab>
          <TabsTab value="usage">Usage</TabsTab>
          <TabsTab value="api">API</TabsTab>
        </TabsList>
        <TabsPanel value="overview">
          <p className="text-sm text-neutral-500">Component overview content.</p>
        </TabsPanel>
        <TabsPanel value="usage">
          <p className="text-sm text-neutral-500">Usage examples and patterns.</p>
        </TabsPanel>
        <TabsPanel value="api">
          <p className="text-sm text-neutral-500">API reference and props.</p>
        </TabsPanel>
      </Tabs>
    </div>
  )
}

function AccordionDemo() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible defaultValue={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is n3wth/kit?</AccordionTrigger>
          <AccordionContent>
            An AI-native component registry with context packs for v0, Cursor, and Claude Code.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install?</AccordionTrigger>
          <AccordionContent>
            Run <code className="text-xs bg-neutral-100 px-1 rounded">npx shadcn add</code> with any component URL from this registry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
          <AccordionContent>
            Yes — all components use CSS custom properties that adapt to your theme.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

function SkeletonDemo() {
  const [animate, setAnimate] = useState(true)
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} animate={animate} />
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton variant="text" width="60%" animate={animate} />
          <Skeleton variant="text" width="90%" animate={animate} />
        </div>
      </div>
      <Skeleton variant="rectangular" height={60} animate={animate} />
      <button
        onClick={() => setAnimate((a) => !a)}
        className="self-start text-xs text-neutral-500 border border-neutral-200 rounded px-2 py-0.5 hover:border-neutral-400"
      >
        {animate ? 'Pause' : 'Animate'}
      </button>
    </div>
  )
}

function CardDemo() {
  return (
    <div className="w-full grid gap-3">
      <Card variant="default" padding="sm">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Transparent background with border.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Badge variant="sage" size="sm">Active</Badge>
        </CardFooter>
      </Card>
      <Card variant="glass" padding="sm">
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>Frosted glass background variant.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

function SeparatorDemo() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-[var(--color-white)]">Section A</span>
        <div className="h-px w-full bg-[var(--glass-border)]" />
        <span className="text-sm text-[var(--color-white)]">Section B</span>
        <div className="h-px w-full bg-[var(--glass-border)]" />
        <span className="text-sm text-[var(--color-white)]">Section C</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-[var(--color-white)]">Left</span>
        <div className="w-px h-6 bg-[var(--glass-border)]" />
        <span className="text-sm text-[var(--color-white)]">Right</span>
      </div>
    </div>
  )
}

function TooltipDemo() {
  const [visible, setVisible] = useState<string | null>(null)
  const items = ['Hover me', 'Or this', 'Try this too']
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((label) => (
        <div key={label} className="relative">
          <button
            onMouseEnter={() => setVisible(label)}
            onMouseLeave={() => setVisible(null)}
            className="text-sm border border-neutral-200 rounded px-3 py-1.5 text-neutral-700 hover:border-neutral-400"
          >
            {label}
          </button>
          {visible === label && (
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs text-white bg-stone-900 whitespace-nowrap pointer-events-none"
              role="tooltip"
            >
              Tooltip for: {label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function DropdownDemo() {
  const [selected, setSelected] = useState('apple')
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'mango', label: 'Mango' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-48">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:border-neutral-400 bg-white"
      >
        <span>{options.find((o) => o.value === selected)?.label}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-sm z-10 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setSelected(opt.value); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 ${selected === opt.value ? 'text-stone-900 font-medium' : 'text-neutral-600'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// --- Demo registry ---

export const componentDemos: Record<string, React.FC> = {
  button: ButtonDemo,
  badge: BadgeDemo,
  input: InputDemo,
  switch: SwitchDemo,
  progress: ProgressDemo,
  avatar: AvatarDemo,
  tabs: TabsDemo,
  accordion: AccordionDemo,
  skeleton: SkeletonDemo,
  card: CardDemo,
  separator: SeparatorDemo,
  tooltip: TooltipDemo,
  dropdown: DropdownDemo,
}
