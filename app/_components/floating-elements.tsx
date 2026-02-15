'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function MiniButton({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-8 items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 px-4 shadow-lg shadow-violet-500/20">
        <span className="text-[10px] font-medium text-white">Get Started</span>
      </div>
    </div>
  )
}

function MiniCard({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-28 rounded-lg border border-emerald-500/30 bg-neutral-900/90 p-3 shadow-lg shadow-emerald-500/10">
        <div className="h-1.5 w-10 rounded-full bg-emerald-400/60" />
        <div className="mt-2 h-1 w-16 rounded-full bg-neutral-700" />
        <div className="mt-1 h-1 w-12 rounded-full bg-neutral-800" />
      </div>
    </div>
  )
}

function MiniToggle({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-6 w-11 items-center rounded-full bg-emerald-500/80 p-0.5 shadow-lg shadow-emerald-500/20">
        <div className="ml-auto h-5 w-5 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  )
}

function MiniBadge({ className, color = 'violet' }: { className?: string; color?: string }) {
  const colors: Record<string, string> = {
    violet: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  }
  return (
    <div className={className}>
      <div className={`rounded-full border px-2.5 py-0.5 text-[9px] font-medium ${colors[color]}`}>
        {color === 'violet' ? 'New' : color === 'pink' ? 'Beta' : color === 'amber' ? 'Pro' : 'Live'}
      </div>
    </div>
  )
}

function MiniInput({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-8 w-32 items-center gap-2 rounded-lg border border-neutral-700/80 bg-neutral-900/90 px-3 shadow-lg">
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-neutral-500">
          <circle cx="4" cy="4" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="6.5" y1="6.5" x2="9" y2="9" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="text-[9px] text-neutral-600">Search...</span>
      </div>
    </div>
  )
}

function MiniSwatch({ className, color }: { className?: string; color: string }) {
  return (
    <div className={className}>
      <div className={`h-6 w-6 rounded-md ${color} shadow-lg`} />
    </div>
  )
}

function MiniAvatar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-amber-400 shadow-lg shadow-pink-500/20">
        <span className="text-[9px] font-bold text-white">ON</span>
      </div>
    </div>
  )
}

function MiniProgress({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="h-2 w-20 overflow-hidden rounded-full bg-neutral-800">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
      </div>
    </div>
  )
}

export function FloatingElements() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = container.current?.querySelectorAll('.float-item')
    if (!items) return

    items.forEach((item, i) => {
      const yRange = 8 + Math.random() * 12
      const xRange = 4 + Math.random() * 8
      const duration = 3 + Math.random() * 3
      const delay = i * 0.3

      // Initial entrance
      gsap.from(item, {
        opacity: 0,
        scale: 0.5,
        y: 30,
        duration: 1.2,
        delay: 0.8 + delay * 0.15,
        ease: 'back.out(1.4)',
      })

      // Continuous float
      gsap.to(item, {
        y: `+=${yRange}`,
        x: `+=${xRange}`,
        duration,
        delay: 1.5 + delay * 0.15,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })
  }, { scope: container })

  return (
    <div ref={container} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Right cluster */}
      <MiniButton className="float-item absolute right-[8%] top-[15%] rotate-[-6deg]" />
      <MiniCard className="float-item absolute right-[2%] top-[40%] rotate-[4deg]" />
      <MiniToggle className="float-item absolute right-[22%] top-[28%] rotate-[8deg]" />
      <MiniBadge className="float-item absolute right-[15%] top-[60%] rotate-[-3deg]" color="pink" />
      <MiniAvatar className="float-item absolute right-[5%] top-[70%]" />

      {/* Left cluster */}
      <MiniInput className="float-item absolute left-[3%] top-[20%] rotate-[5deg]" />
      <MiniBadge className="float-item absolute left-[8%] top-[45%] rotate-[-8deg]" color="emerald" />
      <MiniSwatch className="float-item absolute left-[2%] top-[65%]" color="bg-violet-500" />
      <MiniProgress className="float-item absolute left-[12%] top-[72%] rotate-[3deg]" />

      {/* Scattered color dots */}
      <MiniSwatch className="float-item absolute left-[18%] top-[12%]" color="bg-pink-400" />
      <MiniSwatch className="float-item absolute right-[28%] top-[10%]" color="bg-amber-400" />
      <MiniBadge className="float-item absolute left-[15%] top-[55%] rotate-[12deg]" color="amber" />
      <MiniSwatch className="float-item absolute right-[18%] top-[75%]" color="bg-emerald-400" />
    </div>
  )
}
