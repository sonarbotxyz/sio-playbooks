import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'

const components = {
  SponsoredTool: ({ name, description, url, badge }: { name: string; description: string; url: string; badge?: string }) => (
    <div className="rounded-xl bg-dark-750 border border-base-blue/20 p-5 my-6 hover-glow">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="font-display font-semibold text-dark-100">{name}</h4>
        {badge && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-base-blue bg-base-blue/10 border border-base-blue/20 px-2 py-0.5 rounded-md flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-dark-300 mb-3">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-base-blue-light hover:text-base-blue transition-colors">
        Learn more &rarr;
      </a>
    </div>
  ),
  ProTip: ({ children, type = 'tip' }: { children: React.ReactNode; type?: 'tip' | 'warning' | 'note' }) => {
    const styles = {
      tip: 'border-base-blue/30 bg-base-blue/5',
      warning: 'border-amber-500/30 bg-amber-500/5',
      note: 'border-dark-400/30 bg-dark-700/50',
    }
    const icons = {
      tip: '💡',
      warning: '⚠️',
      note: '📝',
    }
    const labels = {
      tip: 'Pro Tip',
      warning: 'Warning',
      note: 'Note',
    }
    return (
      <div className={`rounded-xl border-l-4 p-5 my-6 ${styles[type]}`}>
        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-dark-100">
          <span>{icons[type]}</span>
          {labels[type]}
        </div>
        <div className="text-sm text-dark-200 [&>p]:my-1">{children}</div>
      </div>
    )
  },
}

export function MDXContent({ source }: { source: string }) {
  // Strip the first H1 from content to avoid duplicate H1 (already in ArticleHeader)
  const cleanedSource = source.replace(/^#\s+.+$/m, '').trim()

  return (
    <div className="prose prose-dark max-w-none">
      <MDXRemote
        source={cleanedSource}
        components={components}
        options={{
          mdxOptions: {
            format: 'md',
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeHighlight],
          },
        }}
      />
    </div>
  )
}
