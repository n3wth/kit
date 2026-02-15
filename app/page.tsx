import { InstallCommand } from './_components/install-command'
import { HeroAnimation } from './_components/hero-animation'
import { ScrollReveal } from './_components/scroll-reveal'
import { FloatingElements } from './_components/floating-elements'
import { Footer } from './_components/footer'

const tools = [
  { name: 'v0', org: 'Vercel', color: 'border-sky-500/40 hover:border-sky-400' },
  { name: 'Cursor', org: 'Anysphere', color: 'border-violet-500/40 hover:border-violet-400' },
  { name: 'Claude Code', org: 'Anthropic', color: 'border-amber-500/40 hover:border-amber-400' },
  { name: 'Lovable', org: 'Lovable', color: 'border-pink-500/40 hover:border-pink-400' },
  { name: 'Windsurf', org: 'Codeium', color: 'border-emerald-500/40 hover:border-emerald-400' },
]

const steps = [
  {
    num: '01',
    title: 'Registry Protocol',
    desc: 'Each component ships as a shadcn registry item. Install with one command into any project.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    glow: 'bg-emerald-500/5',
  },
  {
    num: '02',
    title: 'AI Context Packs',
    desc: 'Structured metadata for LLMs: props tables, usage examples, design tokens, and when-to-use guidance.',
    color: 'text-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    glow: 'bg-violet-500/5',
  },
  {
    num: '03',
    title: 'Every Tool, One Source',
    desc: 'One registry serves v0, Cursor, Claude Code, Lovable, and Windsurf. Write once, generate everywhere.',
    color: 'text-amber-400',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    glow: 'bg-amber-500/5',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 overflow-hidden">
      <main className="mx-auto max-w-5xl px-6 pt-20 pb-24">
        {/* Hero */}
        <HeroAnimation>
          <section className="relative flex min-h-[80vh] flex-col items-center justify-center text-center">
            {/* Ambient glow */}
            <div className="hero-glow pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/20 via-pink-500/10 to-emerald-500/15 blur-3xl" style={{ opacity: 0, transform: 'scale(0.5)' }} />

            {/* Floating design system elements */}
            <FloatingElements />

            <p className="hero-badge relative rounded-full border border-violet-500/30 bg-violet-500/5 px-4 py-1.5 text-xs font-medium text-violet-300" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              Built on the shadcn registry protocol
            </p>
            <h1 className="hero-title relative mt-8 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              Make AI coding tools use{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                your
              </span>{' '}
              design system
            </h1>
            <p className="hero-subtitle relative mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              AI tools generate generic code. kit is the packaging layer that
              teaches v0, Cursor, Claude Code, and Lovable to generate{' '}
              <span className="text-white">on-brand components</span> instead.
              One registry, every tool.
            </p>
            <div className="relative mt-10 flex gap-4">
              <a
                href="/docs/getting-started"
                className="hero-cta rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:from-violet-400 hover:to-pink-400 hover:shadow-lg hover:shadow-violet-500/25"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                Get started
              </a>
              <a
                href="/components"
                className="hero-cta rounded-lg border border-neutral-700 bg-neutral-900/50 px-6 py-2.5 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-600 hover:text-white"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                Browse components
              </a>
            </div>
          </section>
        </HeroAnimation>

        {/* The Problem */}
        <ScrollReveal className="mt-40">
          <section className="flex flex-col items-center text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-pink-400">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Everything AI Generates Looks the Same
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
              AI coding tools default to generic shadcn output. Your design
              system, brand tokens, and component patterns are invisible to them.
            </p>
          </section>
        </ScrollReveal>

        {/* Before / After */}
        <ScrollReveal className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.2}>
          <div className="reveal-item rounded-lg border border-red-500/20 bg-red-500/[0.03] p-5 transition-colors hover:border-red-500/30">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-red-400/60" />
              <p className="text-xs font-medium text-red-300/80">
                Without kit
              </p>
            </div>
            <pre className="mt-3 overflow-x-auto rounded-md border border-neutral-800/50 bg-neutral-900/80 p-4 font-mono text-xs leading-relaxed text-neutral-400">
{`<button className="bg-primary
  text-primary-foreground
  hover:bg-primary/90 h-10 px-4 py-2
  rounded-md text-sm font-medium">
  Get Started
</button>`}
            </pre>
            <p className="mt-3 text-sm text-neutral-500">Generic shadcn output. Every project looks the same.</p>
          </div>
          <div className="reveal-item rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-5 transition-colors hover:border-emerald-500/30">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <p className="text-xs font-medium text-emerald-300">
                With n3wth/kit
              </p>
            </div>
            <pre className="mt-3 overflow-x-auto rounded-md border border-neutral-800/50 bg-neutral-900/80 p-4 font-mono text-xs leading-relaxed text-emerald-300/80">
{`<Button variant="primary" size="lg">
  Get Started
</Button>`}
            </pre>
            <p className="mt-3 text-sm text-neutral-400">On-brand, opinionated. <span className="text-emerald-300/80">AI knows your design system.</span></p>
          </div>
        </ScrollReveal>

        {/* How It Works */}
        <ScrollReveal className="mt-40">
          <section className="flex flex-col items-center text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Three Layers, One Registry
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
              Components ship with structured context that AI tools can read:
              props, usage rules, design rationale, and accessibility requirements.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal className="mt-12 grid gap-4 sm:grid-cols-3" stagger={0.15}>
          {steps.map((step) => (
            <div
              key={step.num}
              className={`reveal-item rounded-lg border ${step.border} ${step.glow} p-6 transition-colors`}
            >
              <p className={`font-mono text-xs ${step.color}`}>{step.num}</p>
              <h3 className="mt-3 text-sm font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {step.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>

        {/* Install */}
        <ScrollReveal className="mt-40 flex flex-col items-center">
          <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">
            Try it now
          </p>
          <div className="mt-4">
            <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
          </div>
          <p className="mt-3 text-xs text-neutral-600">
            or scaffold a full project:{' '}
            <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-emerald-400/70">
              npx @n3wth/kit init
            </code>
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal className="mt-40 grid grid-cols-3 gap-4" stagger={0.12}>
          {[
            { num: '47', label: 'Components', color: 'text-emerald-400' },
            { num: '11', label: 'Hooks', color: 'text-violet-400' },
            { num: '5', label: 'AI Tools', color: 'text-pink-400' },
          ].map((stat) => (
            <div key={stat.label} className="reveal-item text-center">
              <p className={`text-4xl font-bold ${stat.color} sm:text-5xl`}>
                {stat.num}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Multi-tool */}
        <ScrollReveal className="mt-40">
          <section className="flex flex-col items-center text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-amber-400">
              Universal
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Works With Every AI Coding Tool
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
              No lock-in. Your design system follows your team wherever they write
              code.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5" stagger={0.08}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`reveal-item flex flex-col items-center rounded-lg border ${tool.color} bg-neutral-900/30 px-4 py-5 transition-all`}
            >
              <p className="text-sm font-medium text-white">{tool.name}</p>
              <p className="mt-1 text-xs text-neutral-500">{tool.org}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Platform Teaser */}
        <ScrollReveal className="mt-40">
          <section className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-pink-500/[0.05] p-10 text-center">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl" />
            <p className="relative text-xs font-medium uppercase tracking-widest text-violet-300">
              Coming soon
            </p>
            <h2 className="relative mt-4 text-3xl font-bold tracking-tight text-white">
              Package Any Design System for AI
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-neutral-400">
              Input your Figma tokens or CSS variables. Get a hosted registry, MCP
              server, and AI context packs for your entire team.
            </p>
            <a
              href="mailto:oliver@newth.ai"
              className="relative mt-8 inline-block rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-2.5 text-sm font-medium text-violet-200 transition-all hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white"
            >
              Join the waitlist
            </a>
          </section>
        </ScrollReveal>

        {/* Pricing Preview */}
        <ScrollReveal className="mt-40">
          <section className="flex flex-col items-center text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-pink-400">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Free to Start
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
              Pay when you need private registries and team features.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal className="mt-12 grid w-full gap-4 sm:grid-cols-4" stagger={0.1}>
          {[
            {
              tier: 'Free',
              price: '$0',
              desc: 'Open source kit',
              features: [
                'n3wth/ui components',
                'AI context packs',
                'Community support',
              ],
              accent: 'text-neutral-400',
              border: 'border-neutral-800 hover:border-neutral-700',
            },
            {
              tier: 'Pro',
              price: '$29/mo',
              desc: 'For individuals',
              features: [
                'Premium kits',
                'Private registries',
                'Usage analytics',
              ],
              accent: 'text-emerald-400',
              border: 'border-neutral-800 hover:border-emerald-500/30',
            },
            {
              tier: 'Team',
              price: '$99/mo',
              desc: 'For teams',
              features: [
                'Design system packaging',
                'Team MCP server',
                'Brand consistency scoring',
              ],
              highlight: true,
              accent: 'text-violet-400',
              border: 'border-violet-500/40 hover:border-violet-400/60',
            },
            {
              tier: 'Enterprise',
              price: 'Custom',
              desc: 'For organizations',
              features: ['SSO + audit logs', 'Figma sync', 'Dedicated support'],
              accent: 'text-amber-400',
              border: 'border-neutral-800 hover:border-amber-500/30',
            },
          ].map((plan) => (
            <div
              key={plan.tier}
              className={`reveal-item rounded-lg border ${plan.border} ${
                plan.highlight ? 'bg-violet-500/[0.04]' : ''
              } p-6 text-left transition-colors`}
            >
              <p className={`text-xs font-medium ${plan.accent}`}>{plan.tier}</p>
              <p className="mt-2 text-2xl font-bold text-white">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{plan.desc}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-neutral-400"
                  >
                    <span className={`text-xs ${plan.accent}`}>-</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
