import type { Metadata } from 'next'
import { getAllGuides, getAllCategories } from '../../../lib/guides'
import { CategoryFilter } from '@/components/CategoryFilter'

export const metadata: Metadata = {
  title: 'Tous les playbooks',
  description: 'Parcourez les 14 playbooks BTS SIO SLAM. Algorithmique, POO, JavaScript, SQL, C# WinForms et plus encore.',
  openGraph: {
    title: 'Tous les playbooks | BTS SIO SLAM',
    description: 'Parcourez les 14 playbooks BTS SIO SLAM.',
  },
}

export default function GuidesPage() {
  const guides = getAllGuides()
  const categories = getAllCategories()

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
            Tous les playbooks
          </h1>
          <p className="text-dark-200 text-lg max-w-lg">
            {guides.length} playbooks couvrant tout le programme BTS SIO SLAM.
          </p>
        </div>

        {/* Filterable grid */}
        <CategoryFilter guides={guides} categories={categories} />
      </div>
    </div>
  )
}
