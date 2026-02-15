import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - n3wth/kit',
  description: 'Thoughts on AI-native design systems, component registries, and building better developer tools.',
}

const posts = [
  {
    slug: 'why-ai-tools-generate-ugly-code',
    title: 'Why AI Tools Generate Ugly Code',
    date: 'February 15, 2026',
    excerpt: 'AI coding tools produce functional but generic code because they lack context about your design system. Here\'s how AI context packs fix that.',
  },
  {
    slug: 'shadcn-registry-protocol',
    title: 'The shadcn Registry Protocol',
    date: 'February 12, 2026',
    excerpt: 'A technical deep-dive into the registry protocol that powers shadcn/ui, how it works under the hood, and why it matters for the component ecosystem.',
  },
  {
    slug: 'ai-context-packs-explained',
    title: 'AI Context Packs Explained',
    date: 'February 10, 2026',
    excerpt: 'What are AI context packs? How .cursorrules, CLAUDE.md, and MCP configs teach AI coding tools to use your design system.',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Blog
        </h1>
        <p className="mt-3 text-neutral-400">
          Thoughts on AI-native design systems, component registries, and the
          future of developer tooling.
        </p>

        <div className="mt-16 space-y-12">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-neutral-300">
                  {post.title}
                </h2>
                <time className="mt-2 block text-sm text-neutral-500">
                  {post.date}
                </time>
                <p className="mt-3 text-neutral-400">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
