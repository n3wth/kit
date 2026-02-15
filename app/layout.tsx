import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Nav } from './_components/nav'
import GSAPProvider from './_components/gsap-provider'
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
  title: 'n3wth/kit - Make AI coding tools use your design system',
  description:
    'The packaging layer between design systems and AI code generation. One registry for v0, Cursor, Claude Code, Lovable, and Windsurf.',
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
        <GSAPProvider>
          <Nav />
          {children}
        </GSAPProvider>
      </body>
    </html>
  )
}
