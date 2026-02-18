import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-display font-bold text-gray-900 dark:text-dark-100 tracking-tight">
                Reussir mon <span className="text-base-blue">BTS SIO</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-dark-300 max-w-xs leading-relaxed">
              Tout le programme BTS SIO en playbooks ultra-detailles avec exercices corriges.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-gray-600 dark:text-dark-200 uppercase tracking-wider">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-sm text-gray-500 dark:text-dark-300 hover:text-base-blue-light transition-colors">Tous les playbooks</Link></li>
            </ul>
          </div>
        </div>

        <div className="accent-line mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-dark-400">
            &copy; {new Date().getFullYear()} Reussir mon BTS SIO. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
