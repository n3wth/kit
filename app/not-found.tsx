import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <p className="font-mono text-sm text-neutral-500">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-stone-900">
        Page not found
      </h1>
      <p className="mt-2 text-neutral-500">
        The page you are looking for does not exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800"
        >
          Go home
        </Link>
        <Link
          href="/components"
          className="rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900"
        >
          Browse components
        </Link>
      </div>
    </div>
  )
}
