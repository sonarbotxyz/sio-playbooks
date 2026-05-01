import Link from 'next/link'

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <div className="border border-stone-800 bg-stone-900/30 p-10 text-center">
        <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-amber-deep">
          [ STATUS · 503 — EN COURS DE RÉDACTION ]
        </p>
        <h1 className="mx-auto max-w-2xl text-[28px] font-semibold leading-[1.1] tracking-tight text-white md:text-[44px]">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-400">
          Ce playbook est en cours de finalisation. Reviens très vite — il sera
          publié sous peu.
        </p>
        <Link
          href="/guides"
          className="group mt-8 inline-flex items-center gap-3 border border-stone-700 bg-stone-900 px-5 py-2.5 text-sm text-stone-200 transition hover:border-amber hover:text-amber"
        >
          <span className="text-stone-500 group-hover:text-amber">&lt;</span>
          Voir les playbooks disponibles
        </Link>
      </div>
    </div>
  )
}
