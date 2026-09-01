import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Nav } from './_components/nav'
import { PostHogProvider } from './_components/posthog-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kit.n3wth.com'),
  title: {
    default: 'n3wth/kit - shadcn registry with AI context packs',
    template: '%s - n3wth/kit',
  },
  description:
    'A shadcn component registry with AI context packs. Install components via npx shadcn add, then drop in .cursorrules or CLAUDE.md so AI tools generate code that uses them correctly.',
  keywords: [
    'design system',
    'AI components',
    'shadcn',
    'React',
    'Tailwind CSS',
    'v0',
    'Cursor',
    'Claude Code',
    'Lovable',
    'Windsurf',
    'component registry',
    'AI code generation',
    'context packs',
    'cursorrules',
  ],
  authors: [{ name: 'Oliver Newth' }],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'n3wth/kit - shadcn registry with AI context packs',
    description: 'A shadcn component registry with AI context packs. Install via npx shadcn add, then drop in .cursorrules or CLAUDE.md.',
    url: 'https://kit.n3wth.com',
    siteName: 'n3wth/kit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n3wth/kit - shadcn registry with AI context packs',
    description: 'A shadcn component registry with AI context packs. Install via npx shadcn add, then drop in .cursorrules or CLAUDE.md.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'n3wth/kit',
  description: 'A shadcn component registry with AI context packs. Install components via npx shadcn add, then drop in .cursorrules or CLAUDE.md so AI tools generate code that uses them correctly.',
  url: 'https://kit.n3wth.com',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PostHogProvider>
          <Nav />
          {children}
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  )
}
