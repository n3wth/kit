import { InstallCommand } from './_components/install-command'

const tools = [
  { name: 'v0', description: 'Vercel' },
  { name: 'Cursor', description: 'Anysphere' },
  { name: 'Claude Code', description: 'Anthropic' },
  { name: 'Lovable', description: 'Lovable' },
  { name: 'Windsurf', description: 'Codeium' },
]

const beforeAfter = [
  {
    label: 'Without kit',
    code: `<button className="bg-primary text-primary-foreground
  hover:bg-primary/90 h-10 px-4 py-2
  rounded-md text-sm font-medium">
  Get Started
</button>`,
    note: 'Generic shadcn output. Every project looks the same.',
  },
  {
    label: 'With n3wth/kit',
    code: `<Button variant="primary" size="lg">
  Get Started
</Button>`,
    note: 'On-brand, opinionated. AI knows your design system.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <p className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500">
            Built on the shadcn registry protocol
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Make AI coding tools use{' '}
            <span className="text-neutral-400">your</span> design system
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            AI tools generate generic code. kit is the packaging layer that
            teaches v0, Cursor, Claude Code, and Lovable to generate on-brand
            components instead. One registry, every tool.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="/docs/getting-started"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Get started
            </a>
            <a
              href="/pricing"
              className="rounded-lg border border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
            >
              View pricing
            </a>
          </div>
        </section>

        {/* The Problem */}
        <section className="mt-32 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Everything AI Generates Looks the Same
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            AI coding tools default to generic shadcn output. Your design
            system, brand tokens, and component patterns are invisible to them.
            kit fixes that.
          </p>
        </section>

        {/* Before / After */}
        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          {beforeAfter.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-neutral-800 p-5"
            >
              <p className="text-xs font-medium text-neutral-500">
                {item.label}
              </p>
              <pre className="mt-3 overflow-x-auto rounded-md bg-neutral-900 p-4 font-mono text-xs leading-relaxed text-neutral-300">
                {item.code}
              </pre>
              <p className="mt-3 text-sm text-neutral-400">{item.note}</p>
            </div>
          ))}
        </section>

        {/* How It Works */}
        <section className="mt-32 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            kit packages your design system into a format every AI tool
            understands. Components ship with structured context: props, usage
            rules, design rationale, and accessibility requirements.
          </p>
        </section>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-neutral-800 p-6">
            <p className="font-mono text-xs text-neutral-500">01</p>
            <h3 className="mt-3 text-sm font-semibold text-white">
              Registry Protocol
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Each component ships as a shadcn registry item. Install with one
              command into any project.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-6">
            <p className="font-mono text-xs text-neutral-500">02</p>
            <h3 className="mt-3 text-sm font-semibold text-white">
              AI Context Packs
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Structured metadata for LLMs: props tables, usage examples, design
              tokens, and when-to-use guidance. Ships as .cursorrules, CLAUDE.md,
              and MCP configs.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-6">
            <p className="font-mono text-xs text-neutral-500">03</p>
            <h3 className="mt-3 text-sm font-semibold text-white">
              Every Tool, One Source
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              One registry serves v0, Cursor, Claude Code, Lovable, and
              Windsurf. No per-tool configuration. Write once, generate
              everywhere.
            </p>
          </div>
        </div>

        {/* Install */}
        <section className="mt-32 flex flex-col items-center">
          <p className="mb-4 text-sm text-neutral-500">
            Try it now
          </p>
          <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
          <p className="mt-3 text-xs text-neutral-600">
            or scaffold a full project:{' '}
            <code className="text-neutral-500">npx @n3wth/kit init</code>
          </p>
        </section>

        {/* Multi-tool */}
        <section className="mt-32 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Works With Every AI Coding Tool
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            No lock-in. Your design system follows your team wherever they write
            code.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center rounded-lg border border-neutral-800 px-4 py-4"
              >
                <p className="text-sm font-medium text-white">{tool.name}</p>
                <p className="mt-1 text-xs text-neutral-500">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Teaser */}
        <section className="mt-32 rounded-lg border border-neutral-800 p-8 text-center">
          <p className="text-xs font-medium text-neutral-500">Coming soon</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
            Package Any Design System for AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Input your Figma tokens or CSS variables. Get a hosted registry, MCP
            server, and AI context packs for your entire team.
          </p>
          <a
            href="mailto:oliver@newth.ai"
            className="mt-6 inline-block rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-600 hover:text-white"
          >
            Join the waitlist
          </a>
        </section>

        {/* Pricing Preview */}
        <section className="mt-32 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Free to start. Pay when you need private registries and team
            features.
          </p>
          <div className="mt-12 grid w-full gap-4 sm:grid-cols-4">
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
              },
              {
                tier: 'Enterprise',
                price: 'Custom',
                desc: 'For organizations',
                features: ['SSO + audit logs', 'Figma sync', 'Dedicated support'],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-lg border p-6 text-left ${
                  plan.highlight
                    ? 'border-white'
                    : 'border-neutral-800'
                }`}
              >
                <p className="text-xs text-neutral-500">{plan.tier}</p>
                <p className="mt-2 text-2xl font-bold text-white">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{plan.desc}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-neutral-400"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
