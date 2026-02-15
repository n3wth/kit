export default function ClaudePage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Claude Code Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Configure Claude Code to generate code using n3wth/kit components.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Copy CLAUDE.md
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            CLAUDE.md provides Claude Code with your component API reference,
            design tokens, and usage patterns. Copy it to your project root.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md
          </pre>
          <p className="mt-3 text-sm text-neutral-400">
            Or if you cloned the kit repo:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            cp ai/CLAUDE.md CLAUDE.md
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Configure MCP server
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            The MCP server gives Claude Code direct registry access for
            installing and inspecting components.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">{`mkdir -p .claude
cat > .claude/mcp.json << 'EOF'
{
  "mcpServers": {
    "n3wth-kit": {
      "command": "npx",
      "args": ["-y", "shadcn@latest", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://kit.newth.ai/r/registry.json"
      }
    }
  }
}
EOF`}</pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            3. Use with Claude Code
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Once configured, Claude Code reads CLAUDE.md automatically and
            generates code using your n3wth/kit components. Ask it to build UI
            and it will use the correct component APIs, design tokens, and
            patterns.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            npx shadcn add https://kit.newth.ai/r/card.json
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            What Claude Code gets
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Complete props API reference for every component</li>
            <li>Design token table with CSS variable names and purposes</li>
            <li>Usage patterns (page layout, forms, card grids, theme switching)</li>
            <li>Accessibility notes for each component</li>
            <li>Hook reference (useTheme, useMediaQuery, useToast, etc.)</li>
            <li>Direct registry access via MCP</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
