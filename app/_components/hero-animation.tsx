'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export function HeroAnimation({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      tl.to('.hero-glow', {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      }, 0)
      .to('.hero-badge', {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }, 0.15)
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
        duration: 0.8,
        stagger: 0.12,
        ease: 'back.out(1.7)',
      }, 0.9)
    }, container)

    return () => ctx.revert()
  }, [])

  return <div ref={container}>{children}</div>
}
