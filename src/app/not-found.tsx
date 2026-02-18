import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-mono text-6xl font-bold text-base-blue mb-4">404</div>
        <h1 className="font-display font-bold text-xl text-dark-100 mb-2">Page not found</h1>
        <p className="text-dark-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-700 border border-dark-500 text-dark-100 font-display font-semibold text-sm hover:bg-dark-650 transition-colors"
        >
          Back to Playbook
        </Link>
      </div>
    </div>
  )
}
