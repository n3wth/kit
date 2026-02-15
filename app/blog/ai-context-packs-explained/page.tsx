import type { Metadata } from 'next'
import { PostLayout } from '../_components/post-layout'

export const metadata: Metadata = {
  title: 'AI Context Packs Explained - n3wth/kit',
  description: 'What are AI context packs? How .cursorrules, CLAUDE.md, and MCP configs teach AI coding tools to use your design system.',
}

export default function Post() {
  return (
    <PostLayout
      title="AI Context Packs Explained"
      date="February 10, 2026"
      readingTime="4 min read"
    >
      <p>
        AI context packs are the missing link between your design system and
        AI code generation tools. They are structured files that describe your
        components, tokens, and conventions in formats that AI tools can read
        and act on.
      </p>

      <p>
        This post explains what context packs are, what formats exist, and
        how to use them.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-white">
        The four formats
      </h2>

      <p>
        A complete context pack includes four files, each targeting a
        different AI tool or workflow:
      </p>

      <h3 className="mt-8 text-base font-semibold text-white">
        1. .cursorrules
      </h3>

      <p>
        Natural language instructions that Cursor reads from your project
        root. This file tells Cursor about your design principles, available
        components, color system, and composition patterns. It is prose, not
        code &mdash; written for an LLM to understand.
      </p>

      <pre className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`# n3wth Design System

## Principles
- Flat design: no shadows or gradients unless specified
- Use design system components over custom markup
- CSS variables for all colors and spacing

## Available Components
- Button: variant (primary, secondary, ghost, glass), size (sm, md, lg)
- Card: variant (default, glass, interactive)
- Input: inputSize (sm, md, lg), variant (default, glass)
...`}
      </pre>

      <h3 className="mt-8 text-base font-semibold text-white">
        2. CLAUDE.md
      </h3>

      <p>
        A structured reference document that Claude Code reads automatically
        from your project root. More technical than .cursorrules &mdash; includes
        prop tables, code snippets, and exact API signatures.
      </p>

      <pre className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`## Button

Props:
- variant: "primary" | "secondary" | "ghost" | "glass"
- size: "sm" | "md" | "lg"
- disabled: boolean
- loading: boolean

Usage:
<Button variant="primary" size="lg">Get Started</Button>`}
      </pre>

      <h3 className="mt-8 text-base font-semibold text-white">
        3. MCP server config
      </h3>

      <p>
        An MCP (Model Context Protocol) server configuration that gives AI
        tools live access to your component registry. The tool can look up
        components, read their source, and check for updates during a session.
      </p>

      <pre className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
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

      <h3 className="mt-8 text-base font-semibold text-white">
        4. components.json
      </h3>

      <p>
        A structured JSON file with every component&apos;s props, types, defaults,
        usage examples, and accessibility notes. This is the most
        machine-readable format &mdash; any AI tool or script can consume it.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-white">
        How AI tools use them
      </h2>

      <p>
        Each AI tool has a preferred context format:
      </p>

      <ul className="list-inside list-disc space-y-2">
        <li>
          <span className="text-white">Cursor</span> reads .cursorrules from
          your project root automatically
        </li>
        <li>
          <span className="text-white">Claude Code</span> reads CLAUDE.md
          from your project root automatically
        </li>
        <li>
          <span className="text-white">v0 and Lovable</span> use the registry
          URL directly in prompts
        </li>
        <li>
          <span className="text-white">Windsurf</span> reads .cursorrules
          similar to Cursor
        </li>
        <li>
          <span className="text-white">MCP-compatible tools</span> connect
          to the MCP server for live registry access
        </li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold text-white">
        Getting started
      </h2>

      <p>
        The simplest way to add context packs to your project is to download
        them from kit:
      </p>

      <pre className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`# For Cursor
curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules

# For Claude Code
curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md`}
      </pre>

      <p>
        Once the files are in your project, AI tools pick them up
        automatically. No configuration needed beyond placing the files.
      </p>

      <div className="mt-12 rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <p className="text-white">
          kit ships AI context packs with every component. Install a
          component, and your AI tools immediately understand how to use it.
        </p>
        <a
          href="/docs/getting-started"
          className="mt-4 inline-block text-sm text-white underline underline-offset-4"
        >
          Read the docs to get started
        </a>
      </div>
    </PostLayout>
  )
}
