import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscription Confirmed - n3wth/kit',
  description: 'Your subscription to n3wth/kit is now active.',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-lg px-6 pt-32 pb-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          Confirmed
        </p>
        <h1 className="mt-4 font-serif text-2xl tracking-tight text-neutral-900">
          You&apos;re subscribed
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Your subscription is active. You&apos;ll receive a confirmation email
          shortly.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get started
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
