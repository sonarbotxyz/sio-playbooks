import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-dark-700 bg-dark-900">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-display font-bold text-dark-100 tracking-tight">
                BTS SIO <span className="text-base-blue">SLAM</span>
              </span>
            </Link>
            <p className="text-sm text-dark-300 max-w-xs leading-relaxed">
              Le guide ultime pour reussir ton examen BTS SIO option SLAM. Gratuit pour toujours.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-dark-200 uppercase tracking-wider">Ressources</h4>
            <ul className="space-y-2">
              <li><Link href="/guides" className="text-sm text-dark-300 hover:text-base-blue-light transition-colors">Tous les playbooks</Link></li>
            </ul>
          </div>
        </div>

        <div className="accent-line mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-400">
            &copy; {new Date().getFullYear()} BTS SIO SLAM. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
