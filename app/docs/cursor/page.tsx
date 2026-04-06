import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursor Integration - n3wth/kit',
  description: 'Set up n3wth/kit with Cursor AI. Configure .cursorrules, MCP server, and start generating on-brand components.',
}

export default function CursorDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Cursor Integration
        </h1>
        <p className="mt-3 text-neutral-500">
          Configure Cursor AI to use n3wth/kit components with full design
          system context.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Prerequisites</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-500">
            <li>Cursor installed</li>
            <li>A React/Next.js project with shadcn/ui initialized</li>
            <li>Tailwind CSS v4</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            1. Add the .cursorrules file
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Download the context file to your project root. This gives Cursor
            full knowledge of the n3wth component catalog, design tokens, and
            usage patterns.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
            curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            2. Configure the MCP server
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            The MCP server gives Cursor live access to the component registry.
            Create or edit{' '}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-600">
              .cursor/mcp.json
            </code>{' '}
            in your project root:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
{`{
  "mcpServers": {
    "n3wth-kit": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://kit.newth.ai/r/registry.json"
      }
    }
  }
}`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            3. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Use the shadcn CLI to add components from the registry:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/input.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            4. Prompt examples
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            With .cursorrules loaded, Cursor knows about your components:
          </p>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
              Build a settings page using the n3wth Card and Input components
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700">
              Create a modal with form inputs following the n3wth design system
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-500">
            <li>Commit .cursorrules to your repo so the whole team gets the same context</li>
            <li>Reference component names directly in prompts for better results</li>
            <li>Re-download .cursorrules when new components are added to the registry</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
