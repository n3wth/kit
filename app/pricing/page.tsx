import type { Metadata } from 'next'
import { PricingPlans } from '../_components/pricing-plans'

export const metadata: Metadata = {
  title: 'Pricing - n3wth/kit',
  description: 'Simple pricing for n3wth/kit. Free tier for individual developers, Pro for teams, and Enterprise for design system teams.',
}

const personas = [
  {
    title: 'Agency Leads',
    range: '$50-200/mo',
    desc: 'Ship five to 15 client projects per year with AI tools. Pay to keep AI output on-brand across every project.',
  },
  {
    title: 'Startup Engineers',
    range: '$20-50/mo',
    desc: 'Need polished UI without a designer. Pay for differentiation from the default shadcn look.',
  },
  {
    title: 'Design System Teams',
    range: '$500-2000/mo',
    desc: 'Maintain brand consistency across AI-assisted development. Package your own design system for every team member.',
  },
  {
    title: 'Solo Builders',
    range: 'Free',
    desc: 'Builders shipping side projects with AI tools. The free tier gives you everything you need to start.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pricing
          </h1>
          <p className="mt-4 text-neutral-400">
            Free to start. Pay when you need private registries, team features,
            or design system packaging.
          </p>
        </div>

        <PricingPlans />

        {/* Who it's for */}
        <section className="mt-32">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white">
            Who Is This For?
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {personas.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-neutral-800 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
                    {p.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">
                    {p.range}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-32">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white">
            Questions
          </h2>
          <div className="mx-auto mt-12 max-w-2xl space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white">
                How is this different from shadcn/ui?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                shadcn/ui provides components. kit provides the AI translation
                layer that teaches AI tools to use those components correctly.
                Context packs, design tokens, and usage rules that LLMs can
                read.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Can I use my own design system?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                The free tier uses n3wth/ui as a showcase. Team and Enterprise
                tiers let you package your own design system with Figma tokens
                or CSS variables.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                What AI tools are supported?
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                v0, Cursor, Claude Code, Lovable, and Windsurf. Any tool that
                supports the shadcn registry protocol or MCP servers works
                automatically.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
