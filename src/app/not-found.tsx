import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <div className="border border-stone-800 bg-stone-900/30 p-10 text-center">
        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-terminal-err">
          [ STATUS · 404 — NOT FOUND ]
        </p>
        <div className="font-mono text-6xl font-bold text-amber">404</div>
        <h1 className="mt-4 text-xl font-semibold text-stone-100">Page introuvable</h1>
        <p className="mt-2 text-sm text-stone-500">
          La page que tu cherches n&apos;existe pas (ou plus).
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-3 border border-stone-700 bg-stone-900 px-5 py-2.5 text-sm text-stone-200 transition hover:border-amber hover:text-amber"
        >
          <span className="text-stone-500 group-hover:text-amber">&lt;</span>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
