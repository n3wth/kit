'use client'

import { useState } from 'react'

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="group flex w-full items-center justify-between rounded-lg border border-stone-200 bg-[#ffffff] px-5 py-3.5 text-left font-mono text-sm text-stone-700 transition-colors hover:border-stone-300"
    >
      <span className="truncate">
        <span className="text-stone-400 select-none">$ </span>
        {command}
      </span>
      <span className="ml-4 shrink-0 text-xs text-stone-400 transition-colors group-hover:text-stone-600">
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  )
}
