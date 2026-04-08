'use client'

import { useState } from 'react'
import posthog from 'posthog-js'

const plans = [
  {
    tier: 'Free',
    price: '$0',
    description: 'Full component library with AI context packs. Unlimited projects.',
    features: 'All components, .cursorrules, CLAUDE.md, MCP config, community support',
  },
  {
    tier: 'Pro',
    price: '$29/mo',
    description: 'Premium kits and private registries for individuals.',
    features: 'Everything in Free + premium themed kits, private registry hosting, component analytics, priority support',
    plan: 'pro',
  },
  {
    tier: 'Team',
    price: '$99/mo',
    description: 'Design system packaging for teams shipping with AI.',
    features: 'Everything in Pro + Figma token import, team MCP server, brand consistency scoring, up to 10 members',
    plan: 'team',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with complex design systems.',
    features: 'Everything in Team + SSO, audit logs, Figma sync, unlimited members, dedicated support + SLA',
    href: 'mailto:oliver@newth.ai',
  },
]

function SubscribeButton({ plan, label }: { plan: string; label: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setError(null)
    posthog.capture('subscribe_clicked', { plan })
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
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className="text-sm font-medium text-[var(--color-kit-accent)] underline underline-offset-4 transition-colors hover:text-neutral-900 disabled:cursor-wait disabled:opacity-60"
      >
        {loading ? 'Redirecting...' : label}
      </button>
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </>
  )
}

export function PricingPlans() {
  return (
    <div className="mt-16">
      <table className="w-full">
        <thead>
          <tr className="border-b border-neutral-200 text-left">
            <th className="pb-4 text-xs font-medium uppercase tracking-widest text-neutral-400">Tier</th>
            <th className="pb-4 text-xs font-medium uppercase tracking-widest text-neutral-400">Price</th>
            <th className="hidden pb-4 text-xs font-medium uppercase tracking-widest text-neutral-400 sm:table-cell">What you get</th>
            <th className="pb-4 text-xs font-medium uppercase tracking-widest text-neutral-400"></th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr
              key={plan.tier}
              className={`border-b border-neutral-200 ${plan.highlight ? 'border-l-2 border-l-[var(--color-kit-accent)]' : ''}`}
            >
              <td className="py-6 pr-6 align-top">
                <p className="text-base font-medium text-neutral-900">{plan.tier}</p>
                <p className="mt-1 text-sm text-neutral-400 sm:hidden">{plan.description}</p>
              </td>
              <td className="py-6 pr-6 align-top">
                <p className="text-base text-neutral-900">{plan.price}</p>
              </td>
              <td className="hidden py-6 pr-6 align-top sm:table-cell">
                <p className="text-sm text-neutral-500">{plan.description}</p>
                <p className="mt-1 text-xs text-neutral-400">{plan.features}</p>
              </td>
              <td className="py-6 text-right align-top">
                {plan.plan ? (
                  <SubscribeButton plan={plan.plan} label="Subscribe" />
                ) : plan.href ? (
                  <a
                    href={plan.href}
                    onClick={() => posthog.capture('cta_clicked', { label: 'Contact us', tier: plan.tier })}
                    className="text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900"
                  >
                    Contact us
                  </a>
                ) : (
                  <a
                    href="/docs/getting-started"
                    onClick={() => posthog.capture('cta_clicked', { label: 'Get started', tier: plan.tier })}
                    className="text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900"
                  >
                    Get started
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
