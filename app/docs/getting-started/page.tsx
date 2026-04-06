import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started - n3wth/kit',
  description: 'Get started with n3wth/kit. Install components via shadcn CLI, configure AI context packs, and start building with AI-native components.',
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Getting Started
        </h1>
        <p className="mt-3 text-neutral-500">
          Add n3wth/kit components to your project in a few steps.
        </p>

        {/* Prerequisites */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Prerequisites</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-500">
            <li>
              A Next.js or React project with{' '}
              <a
                href="https://ui.shadcn.com/docs/installation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 underline underline-offset-4"
              >
                shadcn/ui initialized
              </a>
            </li>
            <li>Tailwind CSS v4</li>
            <li>Node.js 18+</li>
          </ul>
        </section>

        {/* Install */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            1. Install a component
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Use the shadcn CLI to add components directly from the n3wth/kit
            registry.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
            npx shadcn add https://kit.newth.ai/r/button.json
          </pre>
          <p className="mt-3 text-sm text-neutral-500">
            This installs the component source code into your project along with
            its AI context pack.
          </p>
        </section>

        {/* AI Context */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            2. Use with AI tools
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Once installed, AI coding tools like Cursor, Claude Code, v0,
            Lovable, and Windsurf read the context packs alongside your
            components. Generated code follows your design system rules.
          </p>
        </section>

        {/* Browse */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            3. Browse components
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            See all available components in the{' '}
            <a
              href="/components"
              className="text-stone-900 underline underline-offset-4"
            >
              component gallery
            </a>
            . Each component page includes install commands and usage details.
          </p>
        </section>

        {/* Registry URL */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Registry URL</h2>
          <p className="mt-3 text-sm text-neutral-500">
            The base registry URL for all components is:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
            https://kit.newth.ai/r
          </pre>
          <p className="mt-3 text-sm text-neutral-500">
            Append any component name with{' '}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-600">
              .json
            </code>{' '}
            to get its registry entry. For example:{' '}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-600">
              https://kit.newth.ai/r/card.json
            </code>
          </p>
        </section>
      </main>
    </div>
  )
}
