import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscription Confirmed - n3wth/kit',
  description: 'Your subscription to n3wth/kit is now active.',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <main className="mx-auto max-w-lg px-6 pt-32 pb-24 text-center">
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          Confirmed
        </p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          You&apos;re subscribed
        </h1>
        <p className="mt-4 text-sm text-neutral-400">
          Your subscription is active. You&apos;ll receive a confirmation email
          shortly.
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors"
          >
            Get started
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-neutral-800 px-6 py-2.5 text-sm font-medium text-neutral-400 hover:border-neutral-700 hover:text-white transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
