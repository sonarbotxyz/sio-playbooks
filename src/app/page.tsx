import Link from 'next/link'
import { getAllGuides, getAllCategories } from '../../lib/guides'
import { getCategoryColor, CATEGORY_ORDER } from '../../lib/types'
import { GuideCard } from '@/components/GuideCard'

const SLAM_CATS = ['Fondamentaux', 'Programmation', 'Bases de donnees', 'Architecture', 'Qualite et Securite', 'Mathematiques']
const SISR_CATS = ['Fondamentaux', 'Reseaux', 'Systemes', 'Virtualisation', 'Securite', 'Exploitation', 'Mathematiques']

export default function HomePage() {
  const guides = getAllGuides()
  const slamMinutes = guides.filter(g => SLAM_CATS.includes(g.frontmatter.category)).reduce((s, g) => s + parseInt(g.readTime), 0)
  const sisrMinutes = guides.filter(g => SISR_CATS.includes(g.frontmatter.category)).reduce((s, g) => s + parseInt(g.readTime), 0)
  const totalHours = Math.round(Math.max(slamMinutes, sisrMinutes) / 60)
  const categories = getAllCategories().sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a)
    const bi = CATEGORY_ORDER.indexOf(b)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })

  // Group guides by category
  const groupedGuides: Record<string, typeof guides> = {}
  categories.forEach(cat => {
    groupedGuides[cat] = guides.filter(g => g.frontmatter.category === cat)
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,82,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Dual glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-base-blue/6 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-base-blue/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 sm:px-6 py-24 max-w-3xl mx-auto">
          <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-4">
              <span className="gradient-text">{totalHours}h</span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-6">
              pour reussir ton BTS SIO.
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-dark-200 max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            {guides.length} playbooks. SLAM, SISR, maths, droit.
            <br className="hidden sm:block" />
            Chaque concept explique, chaque exercice corrige.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-base-blue text-white font-display font-semibold text-sm hover:bg-base-blue-dark transition-colors glow-blue-strong"
            >
              Voir tous les playbooks
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-dark-700 border border-dark-500 text-dark-100 font-display font-semibold text-sm hover:bg-dark-650 hover:border-dark-400 transition-colors"
            >
              Explorer par categorie
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 mt-16 animate-fade-up" style={{ animationDelay: '0.65s', opacity: 0 }}>
            <div className="text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">{guides.length}</div>
              <div className="text-xs text-dark-300 font-medium uppercase tracking-wider mt-1">Playbooks</div>
            </div>
            <div className="w-px h-10 bg-dark-600" />
            <div className="text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">{categories.length}</div>
              <div className="text-xs text-dark-300 font-medium uppercase tracking-wider mt-1">Categories</div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none z-10" />
      </section>

      {/* Category sections */}
      <section id="categories" className="max-w-content mx-auto px-4 sm:px-6 py-20">
        <div className="space-y-20">
          {categories.map(category => {
            const colors = getCategoryColor(category)
            const catGuides = groupedGuides[category]
            if (!catGuides || catGuides.length === 0) return null

            return (
              <div key={category}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold ${colors.bg} ${colors.text} ${colors.border} border`}>
                    <span>{colors.icon}</span>
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-dark-700" />
                  <span className="text-xs text-dark-400 font-mono">
                    {catGuides.length} {catGuides.length === 1 ? 'playbook' : 'playbooks'}
                  </span>
                </div>

                {/* Guides grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catGuides.map(guide => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
