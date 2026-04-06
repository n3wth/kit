import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-03-31.basil',
  })
}

const PRICE_IDS: Record<string, string | undefined> = {
  pro: process.env.STRIPE_PRICE_ID_PRO,
  team: process.env.STRIPE_PRICE_ID_TEAM,
}

export async function POST(request: NextRequest) {
  const { plan } = await request.json()

  if (!plan || !(plan in PRICE_IDS)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const priceId = PRICE_IDS[plan]

  if (!priceId) {
    return NextResponse.json(
      { error: 'Price ID not configured for this plan' },
      { status: 500 }
    )
  }

  const stripe = getStripe()
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    allow_promotion_codes: true,
    billing_address_collection: 'required',
  })

  return NextResponse.json({ url: session.url })
}
