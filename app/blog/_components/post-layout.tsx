import Link from 'next/link'

interface PostLayoutProps {
  title: string
  date: string
  readingTime: string
  children: React.ReactNode
}

export function PostLayout({ title, date, readingTime, children }: PostLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
        <Link
          href="/blog"
          className="mb-12 inline-block text-sm text-neutral-400 transition-colors hover:text-neutral-900"
        >
          &larr; Back to blog
        </Link>

        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
            <time>{date}</time>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
        </header>

        <div className="space-y-6 text-base leading-relaxed text-neutral-500">
          {children}
        </div>
      </main>
    </div>
  )
}
