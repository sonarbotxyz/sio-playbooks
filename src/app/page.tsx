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

  const groupedGuides: Record<string, typeof guides> = {}
  categories.forEach(cat => {
    groupedGuides[cat] = guides.filter(g => g.frontmatter.category === cat)
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-base-blue/8 via-base-blue/4 to-transparent blur-[100px] animate-glow-pulse" />
          <div className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-blue-400/6 via-indigo-400/4 to-transparent blur-[80px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-b from-base-blue/5 to-transparent blur-[60px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        <div className="relative z-10 text-center px-4 sm:px-6 py-24 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-base-blue/8 dark:bg-base-blue/12 text-base-blue border border-base-blue/15 dark:border-base-blue/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-base-blue animate-pulse" />
              {guides.length} playbooks disponibles
            </span>
          </div>

          {/* Main headline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Tout le programme.
              <br />
              <span className="gradient-text">Zéro impasse.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-500 dark:text-dark-200 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            SLAM, SISR, maths, droit — chaque concept expliqué, chaque exercice corrigé.
            <br className="hidden sm:block" />
            <span className="text-gray-900 dark:text-white font-semibold">25 heures</span> de révision pour réussir ton BTS SIO.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <Link
              href="#categories"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-base-blue text-white font-display font-semibold text-sm hover:bg-base-blue-dark transition-all duration-200 shadow-lg shadow-base-blue/25 hover:shadow-xl hover:shadow-base-blue/30 hover:-translate-y-0.5"
            >
              Commencer les révisions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-500 text-gray-700 dark:text-dark-100 font-display font-semibold text-sm hover:bg-gray-50 dark:hover:bg-dark-700 hover:border-gray-300 dark:hover:border-dark-400 transition-all duration-200"
            >
              Voir tous les playbooks
            </Link>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-16 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.65s', opacity: 0 }}>
            <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-dark-600/60 p-4 text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white">{guides.length}</div>
              <div className="text-[11px] text-gray-400 dark:text-dark-300 font-medium uppercase tracking-wider mt-0.5">Playbooks</div>
            </div>
            <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-dark-600/60 p-4 text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-base-blue">25h</div>
              <div className="text-[11px] text-gray-400 dark:text-dark-300 font-medium uppercase tracking-wider mt-0.5">De révision</div>
            </div>
            <div className="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-dark-600/60 p-4 text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white">{categories.length}</div>
              <div className="text-[11px] text-gray-400 dark:text-dark-300 font-medium uppercase tracking-wider mt-0.5">Catégories</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-fade-up flex justify-center" style={{ animationDelay: '0.8s', opacity: 0 }}>
            <Link href="#categories" className="group flex flex-col items-center gap-2 text-gray-400 dark:text-dark-400 hover:text-base-blue transition-colors">
              <span className="text-xs font-medium uppercase tracking-wider">Explorer</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-bounce">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <section id="categories" className="max-w-content mx-auto px-4 sm:px-6 py-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight mb-3">
            Explorer par catégorie
          </h2>
          <p className="text-gray-500 dark:text-dark-300 max-w-md mx-auto">
            {guides.length} playbooks couvrant les options SLAM et SISR du BTS SIO.
          </p>
        </div>

        <div className="space-y-16">
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
                  <div className="flex-1 h-px bg-gray-200 dark:bg-dark-700" />
                  <span className="text-xs text-gray-400 dark:text-dark-400 font-mono">
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
