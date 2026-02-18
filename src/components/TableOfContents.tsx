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

  // Parse headings from markdown content
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
        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-gray-400 dark:text-dark-300 mb-4">
          On this page
        </h4>
        <ul className="space-y-1 border-l border-gray-200 dark:border-dark-600">
          {headings.map(h => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block text-[13px] leading-relaxed transition-colors border-l-2 -ml-[1px] ${
                  h.level === 3 ? 'pl-6' : 'pl-4'
                } ${
                  activeId === h.id
                    ? 'text-base-blue-light border-base-blue'
                    : 'text-gray-400 dark:text-dark-300 border-transparent hover:text-gray-700 dark:hover:text-dark-100 hover:border-gray-300 dark:hover:border-dark-400'
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
          className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-dark-100 transition-colors bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 rounded-lg px-4 py-2.5 w-full"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 4h12M2 8h8M2 12h10" />
          </svg>
          Table of Contents
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
          <ul className="mt-2 p-3 space-y-1 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 rounded-lg">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm py-1 transition-colors ${
                    h.level === 3 ? 'pl-6' : 'pl-3'
                  } ${
                    activeId === h.id
                      ? 'text-base-blue-light'
                      : 'text-gray-400 dark:text-dark-300 hover:text-gray-700 dark:hover:text-dark-100'
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
