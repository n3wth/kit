import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6">
      <p className="font-mono text-sm text-neutral-500">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-white">
        Page not found
      </h1>
      <p className="mt-2 text-neutral-400">
        The page you are looking for does not exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
        >
          Go home
        </Link>
        <Link
          href="/components"
          className="rounded-lg border border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
        >
          Browse components
        </Link>
      </div>
    </div>
  )
}
