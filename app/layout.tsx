import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Nav } from './_components/nav'
import GSAPProvider from './_components/gsap-provider'
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
  metadataBase: new URL('https://kit.newth.ai'),
  title: {
    default: 'n3wth/kit - Make AI coding tools use your design system',
    template: '%s - n3wth/kit',
  },
  description:
    'The packaging layer between design systems and AI code generation. 47 components with AI context packs for v0, Cursor, Claude Code, Lovable, and Windsurf.',
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
  ],
  authors: [{ name: 'Oliver Newth' }],
  openGraph: {
    title: 'n3wth/kit - Make AI coding tools use your design system',
    description: 'The packaging layer between design systems and AI code generation.',
    url: 'https://kit.newth.ai',
    siteName: 'n3wth/kit',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n3wth/kit - Make AI coding tools use your design system',
    description: 'The packaging layer between design systems and AI code generation.',
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
  description: 'The packaging layer between design systems and AI code generation.',
  url: 'https://kit.newth.ai',
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PostHogProvider>
          <GSAPProvider>
            <Nav />
            {children}
          </GSAPProvider>
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  )
}
