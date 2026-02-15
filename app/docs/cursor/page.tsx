export default function CursorPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Cursor Integration
        </h1>
        <p className="mt-3 text-neutral-400">
          Configure Cursor to generate code using n3wth/kit components.
        </p>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            1. Copy .cursorrules
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            The .cursorrules file tells Cursor about your component library,
            design principles, and usage patterns. Copy it to your project root.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules
          </pre>
          <p className="mt-3 text-sm text-neutral-400">
            Or if you cloned the kit repo:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            cp ai/.cursorrules .cursorrules
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            2. Configure MCP server
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            The MCP server gives Cursor direct access to the n3wth registry,
            letting it install and inspect components.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">{`mkdir -p .cursor
cat > .cursor/mcp.json << 'EOF'
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
            3. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            With the context pack in place, Cursor knows about every n3wth/kit
            component. You can also install components directly:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300">
            npx shadcn add https://kit.newth.ai/r/button.json
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">
            What Cursor gets
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>Full component catalog with descriptions and usage patterns</li>
            <li>Design principles (flat, minimal, CSS variable theming)</li>
            <li>Props API for every component</li>
            <li>Common composition patterns (page layout, forms, card grids)</li>
            <li>Direct registry access via MCP for installing components</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
