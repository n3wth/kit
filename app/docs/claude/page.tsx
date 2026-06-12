import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude Code Integration - n3wth/kit',
  description: 'Set up n3wth/kit with Claude Code. Configure CLAUDE.md, MCP server, and generate on-brand components.',
}

export default function ClaudeDocsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-ink">
          Claude Code Integration
        </h1>
        <p className="mt-3 text-ink-dim">
          Configure Claude Code to use n3wth/kit components with full design
          system context.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">Prerequisites</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-dim">
            <li>Claude Code CLI installed</li>
            <li>A React/Next.js project with shadcn/ui initialized</li>
            <li>Tailwind CSS v4</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">
            1. Add the CLAUDE.md file
          </h2>
          <p className="mt-3 text-sm text-ink-dim">
            Download the context file to your project root. Claude Code reads
            CLAUDE.md automatically and gains full knowledge of your components.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-rail bg-bg-soft p-4 font-mono text-sm text-ink-dim">
            curl -o CLAUDE.md https://kit.n3wth.com/ai/CLAUDE.md
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">
            2. Configure the MCP server
          </h2>
          <p className="mt-3 text-sm text-ink-dim">
            Create or edit{' '}
            <code className="rounded bg-bg-raise px-1.5 py-0.5 font-mono text-xs text-ink-dim">
              .mcp.json
            </code>{' '}
            in your project root:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-rail bg-bg-soft p-4 font-mono text-sm text-ink-dim">
{`{
  "mcpServers": {
    "n3wth-kit": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://kit.n3wth.com/r/registry.json"
      }
    }
  }
}`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">
            3. Install components
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-rail bg-bg-soft p-4 font-mono text-sm text-ink-dim">
{`npx shadcn add https://kit.n3wth.com/r/button.json
npx shadcn add https://kit.n3wth.com/r/card.json`}
          </pre>
          <p className="mt-3 text-sm text-ink-dim">
            Or tell Claude Code: &quot;Install the card component from
            kit.n3wth.com&quot;. It will run the command for you.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">
            4. Usage examples
          </h2>
          <div className="mt-4 space-y-3">
            <pre className="overflow-x-auto rounded-lg border border-rail bg-bg-soft p-4 font-mono text-sm text-ink-dim">
              Build a settings page using the n3wth design system
            </pre>
            <pre className="overflow-x-auto rounded-lg border border-rail bg-bg-soft p-4 font-mono text-sm text-ink-dim">
              Add a pricing section with Card components and semantic colors
            </pre>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">Tips</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-dim">
            <li>Commit CLAUDE.md to your repo so everyone gets the same AI context</li>
            <li>Use headless mode: <code className="rounded bg-bg-raise px-1.5 py-0.5 font-mono text-xs text-ink-dim">claude -p &quot;...&quot;</code></li>
            <li>Reference component names directly for unambiguous results</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
