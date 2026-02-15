import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude Code Integration - n3wth/kit',
  description: 'Set up n3wth/kit with Claude Code. Configure CLAUDE.md, MCP server, and generate on-brand components.',
}

export default function ClaudeDocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Claude Code Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Configure Claude Code to use n3wth/kit components with full design
          system context.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Prerequisites</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Claude Code CLI installed</li>
            <li>A React/Next.js project with shadcn/ui initialized</li>
            <li>Tailwind CSS v4</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Add the CLAUDE.md file
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Download the context file to your project root. Claude Code reads
            CLAUDE.md automatically and gains full knowledge of your components.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Configure the MCP server
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Create or edit{' '}
            <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-xs text-neutral-300">
              .mcp.json
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
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json`}
          </pre>
          <p className="mt-3 text-sm text-neutral-400">
            Or tell Claude Code: &quot;Install the card component from
            kit.newth.ai&quot;. It will run the command for you.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            4. Usage examples
          </h2>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Build a settings page using the n3wth design system
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
              Add a pricing section with Card components and semantic colors
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Commit CLAUDE.md to your repo so everyone gets the same AI context</li>
            <li>Use headless mode: <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-xs text-neutral-300">claude -p &quot;...&quot;</code></li>
            <li>Reference component names directly for unambiguous results</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
