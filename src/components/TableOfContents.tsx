'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const headings: TocItem[] = content
    .split('\n')
    .filter(line => /^#{2,3}\s/.test(line))
    .map(line => {
      const match = line.match(/^(#{2,3})\s+(.+)$/)
      if (!match) return null
      const text = match[2].replace(/\*\*/g, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      return {
        id,
        text,
        level: match[1].length,
      }
    })
    .filter(Boolean) as TocItem[]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-amber-deep">
          [ Sommaire ]
        </p>
        <ul className="space-y-1 border-l border-stone-800">
          {headings.map(h => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block border-l-2 -ml-[1px] text-[12px] leading-relaxed transition ${
                  h.level === 3 ? 'pl-6' : 'pl-4'
                } ${
                  activeId === h.id
                    ? 'text-amber border-amber'
                    : 'text-stone-500 border-transparent hover:text-stone-200 hover:border-stone-600'
                }`}
                onClick={() => setActiveId(h.id)}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile toggle */}
      <div className="xl:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center gap-2 border border-stone-800 bg-stone-900/30 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-stone-300 transition hover:border-amber hover:text-amber"
        >
          <span className="text-amber-deep">[</span>
          Sommaire
          <span className="text-amber-deep">]</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M3 5l3 3 3-3" />
          </svg>
        </button>
        {isOpen && (
          <ul className="mt-2 space-y-1 border border-stone-800 bg-stone-900/30 p-4">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1 text-sm transition ${
                    h.level === 3 ? 'pl-6' : 'pl-3'
                  } ${
                    activeId === h.id
                      ? 'text-amber'
                      : 'text-stone-500 hover:text-stone-200'
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
