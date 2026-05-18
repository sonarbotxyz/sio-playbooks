import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  publishedAt?: string;
  category?: string;
  targetKeyword?: string;
  relatedPlaybooks?: string[];
  readTime: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: {
      title: data.title || slug,
      description: data.description || '',
      publishedAt: data.publishedAt,
      category: data.category,
      targetKeyword: data.targetKeyword,
      relatedPlaybooks: data.relatedPlaybooks || [],
      readTime: `${Math.ceil(stats.minutes)} min`,
    },
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'));
  return files
    .map(f => getPostBySlug(f.replace(/\.mdx$/, '')))
    .sort((a, b) => {
      const da = a.frontmatter.publishedAt || '';
      const db = b.frontmatter.publishedAt || '';
      return db.localeCompare(da);
    });
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''));
}
