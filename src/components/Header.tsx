'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Playbooks', href: '/guides' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-dark-600/60 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-base-blue flex items-center justify-center shadow-md shadow-base-blue/20">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 2h4v2H9v-2z" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-display font-bold text-[15px] text-gray-900 dark:text-white tracking-tight">
              Reussir mon <span className="text-base-blue">BTS SIO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => {
              const isActive = item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-base-blue'
                      : 'text-gray-500 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-base-blue rounded-full" />
                  )}
                </Link>
              )
            })}
            <div className="w-px h-5 bg-gray-200 dark:bg-dark-600 mx-2" />
            <ThemeToggle />
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-500 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M5 5l10 10M15 5L5 15" />
                ) : (
                  <path d="M3 6h14M3 10h10M3 14h14" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-dark-600/60">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map(item => {
              const isActive = item.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-base-blue bg-base-blue/5'
                      : 'text-gray-600 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-700'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
