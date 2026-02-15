import type { Metadata } from 'next'
import { InstallCommand } from './_components/install-command'
import { HeroAnimation } from './_components/hero-animation'
import { FloatingElements, HeroBackground } from './_components/floating-elements'
import { ComponentShowcase } from './_components/component-showcase'
import { WaitlistForm } from './_components/waitlist-form'
import { Footer } from './_components/footer'

export const metadata: Metadata = {
  title: 'n3wth/kit - Make AI coding tools use your design system',
  description: 'The packaging layer between design systems and AI code generation. 47 components with AI context packs for v0, Cursor, Claude Code, Lovable, and Windsurf.',
  openGraph: {
    title: 'n3wth/kit - Make AI coding tools use your design system',
    description: 'The packaging layer between design systems and AI code generation.',
    url: 'https://kit.newth.ai',
    siteName: 'n3wth/kit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n3wth/kit - Make AI coding tools use your design system',
    description: 'The packaging layer between design systems and AI code generation.',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 overflow-hidden">
      {/* Hero */}
      <HeroAnimation>
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
          <HeroBackground />
          <FloatingElements />

          <div className="hero-content relative flex flex-col items-center">
            <h1
              className="hero-title max-w-5xl font-bold tracking-[-0.04em] text-white"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
                lineHeight: 0.95,
                opacity: 0,
                transform: 'translateY(40px)',
              }}
            >
              Make AI coding tools use{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                your
              </span>{' '}
              design system
            </h1>

            <p className="hero-subtitle mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl" style={{ opacity: 0, transform: 'translateY(30px)' }}>
              AI tools generate generic code. kit is the packaging layer that
              teaches them to generate{' '}
              <span className="text-neutral-200">on-brand components</span> instead.
            </p>

            <div className="mt-12 flex gap-4">
              <a
                href="/docs/getting-started"
                className="hero-cta rounded-lg bg-white px-7 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                Get started
              </a>
              <a
                href="/components"
                className="hero-cta rounded-lg border border-neutral-800 px-7 py-3 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                Browse components
              </a>
            </div>
          </div>
        </section>
      </HeroAnimation>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-40">
        <h2 className="text-center text-sm font-medium uppercase tracking-widest text-neutral-600">
          How it works
        </h2>
        <h3 className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Three steps to on-brand AI output
        </h3>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Install',
              description: 'One command adds components with AI context to your project.',
            },
            {
              step: '2',
              title: 'Context',
              description: 'AI tools read component rules, props, and design tokens automatically.',
            },
            {
              step: '3',
              title: 'Generate',
              description: 'Every prompt produces on-brand code. No more generic output.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-neutral-800 p-8"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md border border-neutral-700 text-sm font-semibold text-neutral-300">
                {item.step}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="mx-auto max-w-6xl px-6 py-40">
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Same prompt.<br />Different output.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
          <div className="bg-neutral-950 p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
              <p className="text-sm font-medium text-neutral-400">Without kit</p>
            </div>
            <pre className="mt-8 overflow-x-auto font-mono text-base leading-relaxed text-neutral-600">
{`<button className="bg-primary
  text-primary-foreground
  hover:bg-primary/90
  h-10 px-4 py-2 rounded-md
  text-sm font-medium">
  Get Started
</button>`}
            </pre>
            <p className="mt-8 text-sm text-neutral-700">Seven utility classes. Zero brand identity.</p>
          </div>
          <div className="bg-neutral-950 p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-sm font-medium text-neutral-400">With kit</p>
            </div>
            <pre className="mt-8 overflow-x-auto font-mono text-base leading-relaxed text-white">
{`<Button
  variant="primary"
  size="lg">
  Get Started
</Button>`}
            </pre>
            <p className="mt-8 text-sm text-neutral-500">Your component. Your brand. AI knows the difference.</p>
          </div>
        </div>
      </section>

      {/* Works with every AI tool */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Works with every AI tool
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {['v0', 'Cursor', 'Claude Code', 'Lovable', 'Windsurf'].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-neutral-800 px-5 py-2.5 text-sm text-neutral-500"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Component showcase */}
      <section className="mx-auto max-w-6xl px-6 pb-40">
        <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          47 components. One install each.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-neutral-500">
          Every component ships with AI context &mdash; props, usage rules, and design tokens that v0, Cursor, Claude Code, Lovable, and Windsurf understand.
        </p>

        <div className="mt-16">
          <ComponentShowcase />
        </div>
      </section>

      {/* Install + CTA */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <div className="grid items-start gap-16 sm:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Start building
              </h2>
              <p className="mt-4 text-lg text-neutral-500">
                Install a single component or scaffold a full project. Get started in 30 seconds.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
                <p className="text-sm text-neutral-600">
                  or:{' '}
                  <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-neutral-400">
                    npx @n3wth/kit init
                  </code>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Package yours
              </h2>
              <p className="mt-4 text-lg text-neutral-500">
                Input your Figma tokens or CSS variables. Get a hosted registry, MCP
                server, and AI context packs for your entire team.
              </p>
              <div className="mt-8">
                <WaitlistForm />
                <p className="mt-3 text-xs font-medium uppercase tracking-widest text-neutral-700">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
