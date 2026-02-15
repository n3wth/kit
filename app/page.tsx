import { InstallCommand } from './_components/install-command'

const tools = [
  { name: 'v0', label: 'v0' },
  { name: 'Cursor', label: 'Cursor' },
  { name: 'Claude Code', label: 'Claude Code' },
  { name: 'Lovable', label: 'Lovable' },
  { name: 'Windsurf', label: 'Windsurf' },
]

const features = [
  {
    title: 'AI Context Packs',
    description:
      'Every component ships with structured context that AI tools understand. Design tokens, usage rules, and constraints built in.',
  },
  {
    title: 'shadcn Compatible',
    description:
      'Built on shadcn registry protocol. Install components the same way you already do, into any shadcn project.',
  },
  {
    title: 'Design System First',
    description:
      'Components enforce your design system by default. AI tools generate code that stays on-brand without extra prompting.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ship your design system to every AI coding tool
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            A component registry that gives AI tools the context they need to
            generate on-brand code. Built on shadcn, designed for the AI
            development workflow.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="/docs/getting-started"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Get Started
            </a>
            <a
              href="/components"
              className="rounded-lg border border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
            >
              Browse Components
            </a>
          </div>
        </section>

        {/* Install */}
        <section className="mt-24 flex flex-col items-center">
          <p className="mb-4 text-sm text-neutral-500">Install a component</p>
          <InstallCommand command="npx shadcn add https://kit.newth.ai/r/button.json" />
        </section>

        {/* Tools */}
        <section className="mt-24 flex flex-col items-center">
          <p className="mb-6 text-sm text-neutral-500">
            Works with the tools you already use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="rounded-full border border-neutral-800 px-4 py-1.5 text-sm text-neutral-400"
              >
                {tool.label}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-24 grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-neutral-800 p-6"
            >
              <h3 className="text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
