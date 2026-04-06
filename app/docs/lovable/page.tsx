import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lovable Integration - n3wth/kit',
  description: 'Add n3wth components to Lovable projects using the shadcn registry URL.',
}

export default function LovableDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Lovable Integration
        </h1>
        <p className="mt-3 text-neutral-500">
          Use n3wth components in Lovable projects by referencing the
          registry URL in your prompts.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            How it works
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Lovable uses shadcn/ui under the hood. Since n3wth components are
            distributed as shadcn registry items, you can install them into
            Lovable projects using the shadcn CLI command.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            1. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Use the Lovable terminal to install n3wth components:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/input.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            2. Tell Lovable about your components
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            After installing, include context in your prompts so Lovable uses
            your components instead of generating custom markup:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
{`This project has custom components from the n3wth
registry (kit.newth.ai): Button, Card, Input.
Use these instead of building custom ones.
Import from @/components/ui/[name].`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            3. Prompt with component names
          </h2>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
              Build a pricing page using the Card component for each tier
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
              Create a settings form using Input and Button components
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-500">
            <li>Install components before prompting for better results</li>
            <li>Include component context early in the conversation</li>
            <li>n3wth components work alongside standard shadcn/ui defaults</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
