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
    url: 'https://kit.n3wth.com',
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
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <h1
              className="text-ink tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
            >
              Your design system,<br />
              every AI tool.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-dim">
              AI coding tools generate generic UI. kit teaches them to use your
              components, your tokens, your brand.
            </p>
            <div className="mt-8">
              <InstallCommand command="npx shadcn add https://kit.n3wth.com/r/button.json" />
            </div>
          </div>

          {/* Code comparison */}
          <div className="grid gap-px overflow-hidden rounded-lg border border-rail-strong bg-rail-strong">
            <div className="bg-bg-raise p-5">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
                <p className="text-[11px] font-medium text-ink-faint">Without kit</p>
              </div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-ink-faint">
{`<button className="bg-primary
  text-primary-foreground
  hover:bg-primary/90
  h-10 px-4 py-2 rounded-md
  text-sm font-medium">
  Get Started
</button>`}
              </pre>
            </div>
            <div className="bg-bg-raise p-5">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p className="text-[11px] font-medium text-ink-faint">With kit</p>
              </div>
              <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-ink">
{`<Button
  variant="primary"
  size="lg">
  Get Started
</Button>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="border-t border-rail">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="max-w-3xl text-2xl tracking-tight text-ink sm:text-3xl">
            47 components. One install each.
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-dim">
            Every component ships with AI context &mdash; props, usage rules,
            and design tokens that v0, Cursor, Claude Code, Lovable, and
            Windsurf understand.
          </p>
          <div className="mt-10">
            <ComponentShowcase />
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="border-t border-rail">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl tracking-tight text-ink sm:text-3xl">
            Get started
          </h2>
          <p className="mt-3 text-sm text-ink-dim">
            Install a single component with the shadcn CLI.
          </p>
          <div className="mt-6 max-w-lg">
            <InstallCommand command="npx shadcn add https://kit.n3wth.com/r/button.json" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
