'use client'

import { useState } from 'react'
import { WaitlistForm } from './waitlist-form'

const plans = [
  {
    tier: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Open source components with AI context packs.',
    features: [
      'Full n3wth/ui component library',
      'AI context packs (.cursorrules, CLAUDE.md)',
      'MCP server config',
      'Community support',
      'Unlimited projects',
    ],
    cta: 'Get started',
    href: '/docs/getting-started',
  },
  {
    tier: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'Premium kits and private registries for individuals.',
    features: [
      'Everything in Free',
      'Premium themed kits',
      'Private registry hosting',
      'Component usage analytics',
      'Priority support',
    ],
    cta: 'Subscribe',
    plan: 'pro',
  },
  {
    tier: 'Team',
    price: '$99',
    period: '/month',
    desc: 'Design system packaging for teams shipping with AI.',
    features: [
      'Everything in Pro',
      'Design system packaging from Figma tokens',
      'Team MCP server',
      'Brand consistency scoring',
      'Up to 10 team members',
    ],
    cta: 'Subscribe',
    plan: 'team',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations with complex design systems.',
    features: [
      'Everything in Team',
      'SSO + audit logs',
      'Figma sync',
      'Unlimited team members',
      'Dedicated support + SLA',
    ],
    cta: 'Contact us',
    href: 'mailto:oliver@newth.ai',
  },
]

function SubscribeButton({ plan, highlight }: { plan: string; highlight?: boolean }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }
      window.location.href = data.url
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full rounded-lg py-2.5 text-center text-sm font-medium transition-colors disabled:cursor-wait disabled:opacity-60 ${
          highlight
            ? 'bg-white text-neutral-950 hover:bg-neutral-200'
            : 'border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
        }`}
      >
        {loading ? 'Redirecting...' : 'Subscribe'}
      </button>
      {error && (
        <p className="mt-2 text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}

export function PricingPlans() {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.tier}
          className={`flex flex-col rounded-lg border p-6 ${
            plan.highlight ? 'border-white' : 'border-neutral-800'
          }`}
        >
          <p className="text-xs font-medium text-neutral-500">
            {plan.tier}
          </p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-sm text-neutral-500">
                {plan.period}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-neutral-400">{plan.desc}</p>
          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-neutral-400">
                <span className="mt-0.5 text-neutral-600">-</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            {'plan' in plan && plan.plan ? (
              <SubscribeButton plan={plan.plan} highlight={plan.highlight} />
            ) : (
              <a
                href={plan.href}
                className={`block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                    : 'border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
