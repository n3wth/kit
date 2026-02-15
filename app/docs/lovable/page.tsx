import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lovable Integration - n3wth/kit',
  description: 'Add n3wth components to Lovable projects using the shadcn registry URL.',
}

export default function LovableDocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Lovable Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Use n3wth components in Lovable projects by referencing the
          registry URL in your prompts.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            How it works
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Lovable uses shadcn/ui under the hood. Since n3wth components are
            distributed as shadcn registry items, you can install them into
            Lovable projects using the shadcn CLI command.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Use the Lovable terminal to install n3wth components:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/input.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Tell Lovable about your components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            After installing, include context in your prompts so Lovable uses
            your components instead of generating custom markup:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`This project has custom components from the n3wth
registry (kit.newth.ai): Button, Card, Input.
Use these instead of building custom ones.
Import from @/components/ui/[name].`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            3. Prompt with component names
          </h2>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Build a pricing page using the Card component for each tier
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Create a settings form using Input and Button components
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Install components before prompting for better results</li>
            <li>Include component context early in the conversation</li>
            <li>n3wth components work alongside standard shadcn/ui defaults</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
