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
      className="group flex w-full max-w-xl items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-3.5 text-left font-mono text-sm text-neutral-300 transition-colors hover:border-neutral-700"
    >
      <span className="truncate">
        <span className="text-neutral-500 select-none">$ </span>
        {command}
      </span>
      <span className="ml-4 shrink-0 text-xs text-neutral-500 transition-colors group-hover:text-neutral-300">
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  )
}
