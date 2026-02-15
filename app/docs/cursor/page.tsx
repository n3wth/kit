import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursor Integration - n3wth/kit',
  description: 'Set up n3wth/kit with Cursor AI. Configure .cursorrules, MCP server, and start generating on-brand components.',
}

export default function CursorDocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Cursor Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Configure Cursor AI to use n3wth/kit components with full design
          system context.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Prerequisites</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Cursor installed</li>
            <li>A React/Next.js project with shadcn/ui initialized</li>
            <li>Tailwind CSS v4</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Add the .cursorrules file
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Download the context file to your project root. This gives Cursor
            full knowledge of the n3wth component catalog, design tokens, and
            usage patterns.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Configure the MCP server
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            The MCP server gives Cursor live access to the component registry.
            Create or edit{' '}
            <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-xs text-neutral-300">
              .cursor/mcp.json
            </code>{' '}
            in your project root:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
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
          <h2 className="text-lg font-semibold text-white">
            3. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Use the shadcn CLI to add components from the registry:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/input.json`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            4. Prompt examples
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            With .cursorrules loaded, Cursor knows about your components:
          </p>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Build a settings page using the n3wth Card and Input components
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Create a modal with form inputs following the n3wth design system
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Commit .cursorrules to your repo so the whole team gets the same context</li>
            <li>Reference component names directly in prompts for better results</li>
            <li>Re-download .cursorrules when new components are added to the registry</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
