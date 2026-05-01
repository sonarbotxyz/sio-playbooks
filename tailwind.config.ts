import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: '#ffffff',
        'amber-dim': '#e7e5e4',
        'amber-deep': '#fbbf24',
        'terminal-bg': '#0a0a0a',
        'terminal-dim': '#808080',
        'terminal-ok': '#9ca3af',
        'terminal-err': '#ef5350',
        'terminal-warn': '#fbbf24',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        body: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        reading: '720px',
        content: '1100px',
        narrow: '560px',
      },
      typography: {
        terminal: {
          css: {
            maxWidth: '720px',
            color: '#e7e5e4',
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            lineHeight: '1.75',
            fontSize: '0.95rem',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            a: {
              color: '#ffffff',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255,255,255,0.3)',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              transition: 'color 0.15s ease, text-decoration-color 0.15s ease',
              '&:hover': {
                color: '#fbbf24',
                textDecorationColor: '#fbbf24',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              fontWeight: '600',
              color: '#ffffff',
              letterSpacing: '-0.01em',
            },
            h1: {
              fontSize: '2em',
              marginTop: '0',
              marginBottom: '0.85em',
              lineHeight: '1.1',
            },
            h2: {
              marginTop: '2.6em',
              marginBottom: '0.85em',
              fontSize: '1.45em',
              lineHeight: '1.2',
              paddingBottom: '0.5em',
              borderBottom: '1px solid #292524',
            },
            h3: {
              marginTop: '2em',
              marginBottom: '0.6em',
              fontSize: '1.18em',
              lineHeight: '1.3',
              color: '#fbbf24',
            },
            h4: {
              marginTop: '1.6em',
              marginBottom: '0.5em',
              fontSize: '1.02em',
              lineHeight: '1.35',
              color: '#e7e5e4',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
            code: {
              color: '#fbbf24',
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              fontWeight: '500',
              fontSize: '0.85em',
              backgroundColor: 'rgba(251,191,36,0.08)',
              padding: '0.15em 0.4em',
              border: '1px solid rgba(251,191,36,0.2)',
              borderRadius: '0',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              backgroundColor: '#000000',
              color: '#e7e5e4',
              borderRadius: '0',
              padding: '1.2rem 1.4rem',
              overflowX: 'auto',
              border: '1px solid #292524',
              fontSize: '0.84rem',
              lineHeight: '1.7',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
              fontSize: 'inherit',
              fontWeight: '400',
              border: 'none',
            },
            blockquote: {
              borderLeftColor: '#fbbf24',
              borderLeftWidth: '2px',
              fontStyle: 'normal',
              color: '#a8a29e',
              backgroundColor: 'rgba(251,191,36,0.04)',
              padding: '0.9rem 1.3rem',
              borderRadius: '0',
              fontSize: '0.95em',
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
            table: {
              fontSize: '0.85rem',
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            },
            'thead th': {
              color: '#ffffff',
              fontWeight: '600',
              borderBottomColor: '#292524',
              padding: '0.7rem 0.9rem',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            },
            thead: {
              borderBottomColor: '#292524',
            },
            'tbody td': {
              borderBottomColor: '#1c1917',
              padding: '0.7rem 0.9rem',
            },
            'tbody tr': {
              borderBottomColor: '#1c1917',
            },
            hr: {
              borderColor: '#292524',
              marginTop: '2.6em',
              marginBottom: '2.6em',
            },
            strong: {
              color: '#ffffff',
              fontWeight: '600',
            },
            li: {
              marginTop: '0.3em',
              marginBottom: '0.3em',
            },
            'ul > li::marker': {
              color: '#fbbf24',
            },
            'ol > li::marker': {
              color: '#fbbf24',
              fontWeight: '600',
            },
            img: {
              borderRadius: '0',
              border: '1px solid #292524',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
