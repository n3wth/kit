import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started - n3wth/kit',
  description: 'Get started with n3wth/kit. Install components via shadcn CLI, configure AI context packs for Cursor, Claude Code, and v0, and start building with AI-native components.',
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 p-4 font-mono text-sm text-stone-700 leading-relaxed">
      {children}
    </pre>
  )
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-600">
      {children}
    </code>
  )
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <div className="mb-2 text-sm text-neutral-400">
          <Link href="/docs" className="hover:text-stone-700 transition-colors">Docs</Link>
          {' / '}
          <span>Getting Started</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Getting Started
        </h1>
        <p className="mt-3 text-neutral-500">
          Add n3wth/kit components to your project and configure AI tools to generate on-brand code.
        </p>

        {/* Prerequisites */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Prerequisites</h2>
          <p className="mt-3 text-sm text-neutral-500">
            You need an existing React or Next.js project with the following set up:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-neutral-500">
            <li>
              Node.js 18+
            </li>
            <li>
              A Next.js or React project
            </li>
            <li>
              Tailwind CSS v4 (uses <InlineCode>@import "tailwindcss"</InlineCode> syntax)
            </li>
            <li>
              shadcn/ui initialized — run <InlineCode>npx shadcn init</InlineCode> if not yet set up
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-sm font-medium text-stone-700">New project from scratch:</p>
            <CodeBlock>{`npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npx shadcn init`}</CodeBlock>
          </div>
        </section>

        {/* Install the design system style */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            1. Install the n3wth style
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Start by installing the base style. This sets up the design tokens — colors, typography, and border radius — used by all n3wth components.
          </p>
          <CodeBlock>{'npx shadcn add https://kit.newth.ai/r/n3wth.json'}</CodeBlock>
          <p className="mt-3 text-sm text-neutral-500">
            This updates your <InlineCode>globals.css</InlineCode> with CSS variables for the full n3wth color palette and adds the <InlineCode>cn</InlineCode> utility.
          </p>
        </section>

        {/* Install components */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            2. Install components
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Use the shadcn CLI to add individual components from the registry. Each component is copied directly into your project so you own and can modify the source.
          </p>
          <CodeBlock>{`npx shadcn add https://kit.newth.ai/r/button.json
npx shadcn add https://kit.newth.ai/r/card.json
npx shadcn add https://kit.newth.ai/r/input.json`}</CodeBlock>
          <p className="mt-3 text-sm text-neutral-500">
            Components are installed to <InlineCode>components/ui/</InlineCode> by default. See the{' '}
            <Link href="/components" className="text-stone-900 underline underline-offset-4">
              component gallery
            </Link>{' '}
            for all available components and their install commands.
          </p>
        </section>

        {/* First component usage */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            3. Use your first component
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Import and use components like any React component:
          </p>
          <CodeBlock>{`import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get started</Button>
        <Button variant="secondary">Learn more</Button>
      </CardContent>
    </Card>
  )
}`}</CodeBlock>

          <div className="mt-6">
            <p className="text-sm font-medium text-stone-700">Button variants:</p>
            <CodeBlock>{`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button isLoading>Loading...</Button>`}</CodeBlock>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-stone-700">Input with icon:</p>
            <CodeBlock>{`import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

<Input
  placeholder="Search..."
  leftIcon={<Search className="h-4 w-4" />}
/>
<Input
  placeholder="Email"
  type="email"
  error="Please enter a valid email"
/>`}</CodeBlock>
          </div>
        </section>

        {/* AI Context Packs */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">
            4. Set up AI context packs
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Context packs teach your AI coding tool about the n3wth design system. With them loaded, generated code uses your components correctly — right variants, right props, right patterns.
          </p>

          <div className="mt-8 space-y-8">
            {/* Cursor */}
            <div>
              <h3 className="text-base font-semibold text-stone-900">Cursor</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Add the <InlineCode>.cursorrules</InlineCode> file to your project root:
              </p>
              <CodeBlock>{'curl -o .cursorrules https://kit.newth.ai/ai/.cursorrules'}</CodeBlock>
              <p className="mt-3 text-sm text-neutral-500">
                Commit this file so your whole team gets the same AI context. See the{' '}
                <Link href="/docs/cursor" className="text-stone-900 underline underline-offset-4">
                  Cursor integration guide
                </Link>
                {' '}for MCP setup.
              </p>
            </div>

            {/* Claude Code */}
            <div>
              <h3 className="text-base font-semibold text-stone-900">Claude Code</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Download the <InlineCode>CLAUDE.md</InlineCode> context file:
              </p>
              <CodeBlock>{'curl -o CLAUDE.md https://kit.newth.ai/ai/CLAUDE.md'}</CodeBlock>
              <p className="mt-3 text-sm text-neutral-500">
                Claude Code reads <InlineCode>CLAUDE.md</InlineCode> automatically at startup. See the{' '}
                <Link href="/docs/claude" className="text-stone-900 underline underline-offset-4">
                  Claude Code integration guide
                </Link>
                {' '}for MCP setup.
              </p>
            </div>

            {/* v0 */}
            <div>
              <h3 className="text-base font-semibold text-stone-900">v0</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Point v0 at the registry URL in your prompts:
              </p>
              <CodeBlock>{'Use components from https://kit.newth.ai/r — build a settings page with Card and Input'}</CodeBlock>
              <p className="mt-3 text-sm text-neutral-500">
                See the{' '}
                <Link href="/docs/v0" className="text-stone-900 underline underline-offset-4">
                  v0 integration guide
                </Link>
                {' '}for full details.
              </p>
            </div>
          </div>
        </section>

        {/* Registry URL reference */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Registry URL</h2>
          <p className="mt-3 text-sm text-neutral-500">
            All components are available at:
          </p>
          <CodeBlock>{'https://kit.newth.ai/r'}</CodeBlock>
          <p className="mt-3 text-sm text-neutral-500">
            Append <InlineCode>{`<name>.json`}</InlineCode> for a specific component:{' '}
            <InlineCode>https://kit.newth.ai/r/badge.json</InlineCode>
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            Full registry manifest: <InlineCode>https://kit.newth.ai/r/registry.json</InlineCode>
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-stone-900">Troubleshooting</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                &ldquo;Cannot find module @/components/ui/button&rdquo;
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Make sure you have a path alias configured. In <InlineCode>tsconfig.json</InlineCode>:
              </p>
              <CodeBlock>{`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                Styles not applying
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                n3wth/kit requires Tailwind CSS v4. Check your <InlineCode>globals.css</InlineCode> starts with:
              </p>
              <CodeBlock>{'@import "tailwindcss";'}</CodeBlock>
              <p className="mt-3 text-sm text-neutral-500">
                If you see <InlineCode>@tailwind base</InlineCode> directives instead, you are on Tailwind v3. See the{' '}
                <a
                  href="https://tailwindcss.com/docs/upgrade-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline underline-offset-4"
                >
                  Tailwind v4 upgrade guide
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                shadcn prompts to overwrite existing components
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                If you have existing shadcn components, you will be prompted before any file is overwritten. Review the diff before confirming — n3wth components use different variant names and props from default shadcn components.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                &ldquo;Could not resolve registry&rdquo;
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Verify the registry is reachable. If kit.newth.ai is down, check{' '}
                <a
                  href="https://github.com/n3wth/kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline underline-offset-4"
                >
                  github.com/n3wth/kit
                </a>
                {' '}and install directly from the source.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-900">
                Peer dependency warnings
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Some components depend on <InlineCode>lucide-react</InlineCode> and <InlineCode>class-variance-authority</InlineCode>. Install them if needed:
              </p>
              <CodeBlock>{'npm install lucide-react class-variance-authority clsx tailwind-merge'}</CodeBlock>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="mt-12 border-t border-stone-100 pt-12">
          <h2 className="text-lg font-semibold text-stone-900">Next steps</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: 'Browse components',
                href: '/components',
                description: 'See all 40+ components with install commands.',
              },
              {
                title: 'Cursor integration',
                href: '/docs/cursor',
                description: 'Full .cursorrules and MCP setup guide.',
              },
              {
                title: 'Claude Code integration',
                href: '/docs/claude',
                description: 'CLAUDE.md and MCP server configuration.',
              },
              {
                title: 'v0 integration',
                href: '/docs/v0',
                description: 'Generate on-brand UIs with v0.',
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300"
              >
                <p className="text-sm font-semibold text-stone-900 group-hover:text-neutral-700 transition-colors">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
