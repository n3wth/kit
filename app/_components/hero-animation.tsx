'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export function HeroAnimation({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Set initial state immediately so there's no flash
    gsap.set(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta'], {
      opacity: 0,
      y: 40,
    })
    gsap.set('.hero-glow', { opacity: 0, scale: 0.5 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.1,
    })

    tl.to('.hero-glow', {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    })
    .to('.hero-badge', {
      y: 0,
      opacity: 1,
      duration: 0.8,
    }, 0.1)
    .to('.hero-title', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      force3D: true,
    }, 0.3)
    .to('.hero-subtitle', {
      y: 0,
      opacity: 1,
      duration: 1,
    }, 0.7)
    .to('.hero-cta', {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: 'back.out(1.7)',
    }, 0.9)
  }, { scope: container })

  return <div ref={container}>{children}</div>
}
