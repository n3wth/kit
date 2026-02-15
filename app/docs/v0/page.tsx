import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'v0 Integration - n3wth/kit',
  description: 'Use the n3wth component registry with v0 to generate UIs that use your design system.',
}

export default function V0DocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          v0 Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Use the n3wth registry URL with v0 so generated UIs use your
          design system components instead of generic markup.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            How it works
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            v0 supports custom shadcn registries. Point v0 at the n3wth
            registry URL and it gains access to all components. The generated
            output uses your actual component imports, not approximations.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Reference the registry URL
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Include the registry URL in your v0 prompts. v0 resolves it at
            generation time.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            https://kit.newth.ai/r
          </pre>
          <p className="mt-3 text-sm text-neutral-400">
            Individual component URLs follow the pattern:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`https://kit.newth.ai/r/button.json
https://kit.newth.ai/r/card.json
https://kit.newth.ai/r/input.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Prompt with component references
          </h2>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`Build a hero section using components from
https://kit.newth.ai/r -- use Button for the CTA.`}
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`Create a pricing page with Card components from
https://kit.newth.ai/r/card.json`}
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            3. Install locally
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            After v0 generates the code, install the referenced components
            in your local project:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Include the full registry URL in prompts so v0 can fetch component definitions</li>
            <li>Be specific about which components to use</li>
            <li>n3wth components work alongside standard shadcn/ui components</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
