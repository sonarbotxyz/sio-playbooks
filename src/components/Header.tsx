'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function fmt(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  const day = pad(d.getDate())
  const mon = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = String(d.getFullYear()).slice(2)
  return `${day}-${mon}-${year} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export function Header() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <header className="sticky top-0 z-10 border-b border-stone-800 bg-[#0d0d0d]/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-2 px-3 py-2 text-xs sm:px-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link href="/" className="whitespace-nowrap text-amber transition hover:text-amber-deep">
            [SIO PLAYBOOKS]
          </Link>
          <span className="hidden whitespace-nowrap text-terminal-ok sm:inline">[ONLINE]</span>
          <span className="hidden whitespace-nowrap text-terminal-dim md:inline">
            {now ? fmt(now) : '--'}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 sm:gap-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-stone-500 transition hover:text-amber"
          >
            Accueil
          </Link>
          <Link
            href="/guides"
            className="text-xs uppercase tracking-wider text-stone-500 transition hover:text-amber"
          >
            Playbooks
          </Link>
          <Link
            href="/blog"
            className="text-xs uppercase tracking-wider text-stone-500 transition hover:text-amber"
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  )
}
