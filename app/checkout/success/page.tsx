import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscription Confirmed - n3wth/kit',
  description: 'Your subscription to n3wth/kit is now active.',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-bg">
      <main className="mx-auto max-w-lg px-6 pt-32 pb-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-label">
          Confirmed
        </p>
        <h1 className="mt-4 text-2xl tracking-tight text-ink">
          You&apos;re subscribed
        </h1>
        <p className="mt-4 text-sm text-ink-dim">
          Your subscription is active. You&apos;ll receive a confirmation email
          shortly.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dim"
          >
            Get started
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-rail px-6 py-2.5 text-sm font-medium text-ink-dim transition-colors hover:border-rail-strong hover:text-ink"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
