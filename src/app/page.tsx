import { getAllGuides, getAllCategories } from '../../lib/guides'
import { CATEGORY_ORDER, getCategoryColor } from '../../lib/types'
import { GuideCard } from '@/components/GuideCard'

export default function HomePage() {
  const guides = getAllGuides()
  const categories = getAllCategories().sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a)
    const bi = CATEGORY_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  const groupedGuides: Record<string, typeof guides> = {}
  categories.forEach(cat => {
    groupedGuides[cat] = guides.filter(g => g.frontmatter.category === cat)
  })

  return (
    <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-12">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pb-16">
        <div className="mb-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-stone-500">
          <span className="inline-block h-[6px] w-[6px] bg-amber" />
          {guides.length} playbooks · SLAM · SISR · MATHS · CEJM
        </div>
        <h1 className="max-w-3xl text-[44px] font-semibold leading-[0.95] tracking-tight text-white md:text-[88px]">
          Tout le programme,
          <br />
          en playbook.
        </h1>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
          SLAM, SISR, maths, CEJM — chaque concept expliqué, chaque exercice
          corrigé. {guides.length} playbooks ultra-détaillés pour réussir ton
          BTS SIO. 25 heures de révision, zéro impasse.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/guides"
            className="group inline-flex items-center gap-3 border border-amber bg-stone-900 px-5 py-2.5 text-sm text-amber transition hover:bg-stone-950"
          >
            <span className="text-stone-500 group-hover:text-amber">&gt;</span>
            Voir tous les playbooks
          </a>
        </div>
      </section>

      {/* Category sections */}
      <section id="categories" className="space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <span className="border border-stone-700 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-stone-200">
            Catalogue · {categories.length} catégories
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
            sélectionne ta catégorie
          </span>
        </div>

        {categories.map(category => {
          const colors = getCategoryColor(category)
          const catGuides = groupedGuides[category]
          if (!catGuides || catGuides.length === 0) return null

          return (
            <div key={category}>
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-stone-700 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-stone-200">
                  <span className="text-amber-deep font-semibold">{colors.icon}</span>
                  {category}
                </span>
                <div className="h-px flex-1 bg-stone-800" />
                <span className="text-[10px] uppercase tracking-wider text-stone-500 tabular-nums">
                  {catGuides.length} {catGuides.length === 1 ? 'playbook' : 'playbooks'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {catGuides.map(guide => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
