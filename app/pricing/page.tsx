import type { Metadata } from 'next'
import { PricingPlans } from '../_components/pricing-plans'
import { Footer } from '../_components/footer'

export const metadata: Metadata = {
  title: 'Pricing - n3wth/kit',
  description: 'Simple pricing for n3wth/kit. Free tier for individual developers, Pro for teams, and Enterprise for design system teams.',
}

const faqs = [
  {
    q: 'How is this different from shadcn/ui?',
    a: 'shadcn/ui provides components. kit provides the AI translation layer that teaches AI tools to use those components correctly. Context packs, design tokens, and usage rules that LLMs can read.',
  },
  {
    q: 'Can I use my own design system?',
    a: 'The free tier uses n3wth/ui as a showcase. Team and Enterprise tiers let you package your own design system with Figma tokens or CSS variables.',
  },
  {
    q: 'What AI tools are supported?',
    a: 'v0, Cursor, Claude Code, Lovable, and Windsurf. Any tool that supports the shadcn registry protocol or MCP servers works automatically.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <h1 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl">
          Pricing
        </h1>
        <p className="mt-4 text-base text-neutral-500">
          Free to start. Pay when you need private registries, team features,
          or design system packaging.
        </p>

        <PricingPlans />

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl tracking-tight text-neutral-900">
            Questions
          </h2>
          <div className="mt-10 max-w-2xl space-y-10">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
