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
      className="group flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-3.5 text-left font-mono text-sm text-neutral-700 transition-colors hover:border-neutral-300"
    >
      <span className="truncate">
        <span className="text-neutral-400 select-none">$ </span>
        {command}
      </span>
      <span className="ml-4 shrink-0 text-xs text-neutral-400 transition-colors group-hover:text-neutral-600">
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  )
}
