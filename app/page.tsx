import type { Metadata } from 'next'
import { InstallCommand } from './_components/install-command'
import { ComponentShowcase } from './_components/component-showcase'
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
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-32 pb-40">
        <h1
          className="max-w-3xl font-serif text-neutral-900 tracking-tight"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
        >
          Your design system,<br />
          every AI tool.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
          AI coding tools generate generic UI. kit teaches them to use your
          components, your tokens, your brand.
        </p>
        <div className="mt-10 max-w-lg">
          <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 py-32 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
              Same prompt.<br />
              Different output.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-500">
              Every AI tool generates the same generic components with the same
              utility classes. No brand, no system, no consistency. kit is the
              packaging layer that gives AI tools the context they need to
              generate on-brand code.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
            <div className="bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                <p className="text-xs font-medium text-neutral-400">Without kit</p>
              </div>
              <pre className="mt-6 overflow-x-auto font-mono text-sm leading-relaxed text-neutral-400">
{`<button className="bg-primary
  text-primary-foreground
  hover:bg-primary/90
  h-10 px-4 py-2 rounded-md
  text-sm font-medium">
  Get Started
</button>`}
              </pre>
              <p className="mt-6 text-xs text-neutral-400">Seven utility classes. Zero brand identity.</p>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-xs font-medium text-neutral-400">With kit</p>
              </div>
              <pre className="mt-6 overflow-x-auto font-mono text-sm leading-relaxed text-neutral-900">
{`<Button
  variant="primary"
  size="lg">
  Get Started
</Button>`}
              </pre>
              <p className="mt-6 text-xs text-neutral-500">Your component. Your brand. AI knows the difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-32">
          <h2 className="max-w-3xl font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            47 components.<br />
            One install each.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Every component ships with AI context &mdash; props, usage rules,
            and design tokens that v0, Cursor, Claude Code, Lovable, and
            Windsurf understand.
          </p>
          <div className="mt-16">
            <ComponentShowcase />
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-32">
          <h2 className="font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            Get started
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Install a single component or scaffold a full project.
          </p>
          <div className="mt-8 max-w-lg">
            <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            or:{' '}
            <code className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-neutral-600">
              npx @n3wth/kit init
            </code>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
