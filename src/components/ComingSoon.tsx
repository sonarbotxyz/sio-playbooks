import Link from 'next/link'

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="pt-16">
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-blue/10 border border-base-blue/20 mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-dark-100 mb-3">
            Coming Soon
          </h1>
          <p className="text-gray-500 dark:text-dark-300 mb-2">
            <span className="text-gray-700 dark:text-dark-200 font-medium">{title}</span>
          </p>
          <p className="text-gray-400 dark:text-dark-400 text-sm mb-8">
            This guide is being finalized and will be published shortly.
          </p>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-base-blue/10 text-base-blue-light text-sm font-medium hover:bg-base-blue/20 transition-colors border border-base-blue/20"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 7H1M6 2L1 7l5 5" />
            </svg>
            Browse available guides
          </Link>
        </div>
      </div>
    </div>
  )
}
