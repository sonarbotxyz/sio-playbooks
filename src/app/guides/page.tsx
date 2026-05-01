import type { Metadata } from 'next'
import { getAllGuides, getAllCategories } from '../../../lib/guides'
import { CategoryFilter } from '@/components/CategoryFilter'

export const metadata: Metadata = {
  title: 'Tous les playbooks',
  description: 'Parcourez tous les playbooks BTS SIO. SLAM, SISR, mathématiques, droit — chaque concept expliqué et chaque exercice corrigé.',
  openGraph: {
    title: 'Tous les playbooks | BTS SIO',
    description: 'Parcourez tous les playbooks BTS SIO.',
  },
}

export default function GuidesPage() {
  const guides = getAllGuides()
  const categories = getAllCategories()

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
          <span className="inline-block h-[6px] w-[6px] bg-amber" />
          Catalogue · {guides.length} playbooks
        </div>
        <h1 className="max-w-3xl text-[36px] font-semibold leading-[0.95] tracking-tight text-white md:text-[64px]">
          Tous les playbooks.
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
          {guides.length} playbooks couvrant tout le programme BTS SIO — SLAM,
          SISR, mathématiques et droit du numérique.
        </p>
      </header>

      <CategoryFilter guides={guides} categories={categories} />
    </div>
  )
}
