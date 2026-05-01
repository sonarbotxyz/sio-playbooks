import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'

const components = {
  SponsoredTool: ({ name, description, url, badge }: { name: string; description: string; url: string; badge?: string }) => (
    <div className="my-6 border border-stone-800 bg-stone-900/40 p-5">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-stone-100">{name}</h4>
        {badge && (
          <span className="border border-amber-deep/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-amber-deep">
            {badge}
          </span>
        )}
      </div>
      <p className="mb-3 text-sm text-stone-400">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-amber transition hover:text-amber-deep"
      >
        En savoir plus →
      </a>
    </div>
  ),
  ProTip: ({ children, type = 'tip' }: { children: React.ReactNode; type?: 'tip' | 'warning' | 'note' }) => {
    const styles = {
      tip: 'border-amber-deep/40 bg-amber-deep/5',
      warning: 'border-terminal-err/50 bg-terminal-err/5',
      note: 'border-stone-700 bg-stone-900/30',
    }
    const labels = {
      tip: '[ ASTUCE ]',
      warning: '[ ATTENTION ]',
      note: '[ NOTE ]',
    }
    const tone = {
      tip: 'text-amber-deep',
      warning: 'text-terminal-err',
      note: 'text-stone-400',
    }
    return (
      <div className={`my-6 border-l-2 px-5 py-4 ${styles[type]}`}>
        <p className={`mb-2 text-[10px] uppercase tracking-[0.25em] ${tone[type]}`}>
          {labels[type]}
        </p>
        <div className="text-sm leading-relaxed text-stone-200 [&>p]:my-1">{children}</div>
      </div>
    )
  },
}

export function MDXContent({ source }: { source: string }) {
  const cleanedSource = source.replace(/^#\s+.+$/m, '').trim()

  return (
    <div className="prose prose-terminal max-w-none">
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
