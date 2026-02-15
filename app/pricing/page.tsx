const plans = [
  {
    tier: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Open source components with AI context packs.',
    features: [
      'Full n3wth/ui component library',
      'AI context packs (.cursorrules, CLAUDE.md)',
      'MCP server config',
      'Community support',
      'Unlimited projects',
    ],
    cta: 'Get started',
    href: '/docs/getting-started',
  },
  {
    tier: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'Premium kits and private registries for individuals.',
    features: [
      'Everything in Free',
      'Premium themed kits',
      'Private registry hosting',
      'Component usage analytics',
      'Priority support',
    ],
    cta: 'Coming soon',
    href: '#',
    disabled: true,
  },
  {
    tier: 'Team',
    price: '$99',
    period: '/month',
    desc: 'Design system packaging for teams shipping with AI.',
    features: [
      'Everything in Pro',
      'Design system packaging from Figma tokens',
      'Team MCP server',
      'Brand consistency scoring',
      'Up to 10 team members',
    ],
    cta: 'Coming soon',
    href: '#',
    highlight: true,
    disabled: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations with complex design systems.',
    features: [
      'Everything in Team',
      'SSO + audit logs',
      'Figma sync',
      'Unlimited team members',
      'Dedicated support + SLA',
    ],
    cta: 'Contact us',
    href: 'mailto:oliver@newth.ai',
  },
]

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

        {/* Plans */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`flex flex-col rounded-lg border p-6 ${
                plan.highlight ? 'border-white' : 'border-neutral-800'
              }`}
            >
              <p className="text-xs font-medium text-neutral-500">
                {plan.tier}
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-neutral-500">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-neutral-400">{plan.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="mt-0.5 text-neutral-600">-</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.disabled
                    ? 'cursor-default border border-neutral-800 text-neutral-600'
                    : plan.highlight
                      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                      : 'border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

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
                tiers (coming soon) let you package your own design system with
                Figma tokens or CSS variables.
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
