import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-[2] mt-16 border-t border-stone-800">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="text-amber text-sm transition hover:text-amber-deep"
            >
              [SIO PLAYBOOKS]
            </Link>
            <p className="text-[11px] uppercase tracking-wider text-stone-500">
              Tout le programme BTS SIO · zéro impasse
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/guides"
              className="text-[11px] uppercase tracking-wider text-stone-500 transition hover:text-amber"
            >
              Tous les playbooks &gt;
            </Link>
            <span className="text-[11px] uppercase tracking-wider text-stone-700">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
