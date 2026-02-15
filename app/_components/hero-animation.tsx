'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export function HeroAnimation({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.8,
    })
    .from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      force3D: true,
    }, '-=0.4')
    .from('.hero-subtitle', {
      y: 40,
      opacity: 0,
      duration: 1,
    }, '-=0.7')
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.12,
      ease: 'back.out(1.7)',
    }, '-=0.5')
    .from('.hero-glow', {
      scale: 0.5,
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    }, 0)
  }, { scope: container })

  return <div ref={container}>{children}</div>
}
