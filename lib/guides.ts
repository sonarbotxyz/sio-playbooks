import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { GuideFrontmatter, Guide } from './types';
import { PUBLISHED_GUIDES, SHOW_ALL } from './launch-config';

export type { GuideFrontmatter, Guide } from './types';
export { CATEGORY_COLORS, getCategoryColor } from './types';

function isPublished(slug: string): boolean {
  if (SHOW_ALL || !PUBLISHED_GUIDES) return true;
  return PUBLISHED_GUIDES.includes(slug);
}

const guidesDirectory = path.join(process.cwd(), 'guides');

const CATEGORY_MAP: Record<string, string> = {
  // SLAM — Fondamentaux
  'algorithmique': 'Fondamentaux',
  'html-css': 'Fondamentaux',
  'git-github': 'Fondamentaux',
  'projet-e5': 'Fondamentaux',
  // SLAM — Programmation
  'poo': 'Programmation',
  'javascript-vanilla': 'Programmation',
  'javascript-nodejs': 'Programmation',
  'javascript-react': 'Programmation',
  'csharp-winforms': 'Programmation',
  'api-nodejs-mongodb': 'Programmation',
  'php-mysql': 'Programmation',
  // Bases de donnees
  'sql': 'Bases de donnees',
  'merise': 'Bases de donnees',
  'procedures-triggers': 'Bases de donnees',
  // Architecture
  'architecture-mvc': 'Architecture',
  'uml': 'Architecture',
  // Qualite et Securite
  'tests': 'Qualite et Securite',
  'securite': 'Qualite et Securite',
  'droit-rgpd': 'Qualite et Securite',
  // Mathematiques
  'maths-arithmetique': 'Mathematiques',
  'maths-logique': 'Mathematiques',
  'maths-matrices': 'Mathematiques',
  'maths-suites': 'Mathematiques',
  'maths-probabilites': 'Mathematiques',
  'maths-graphes': 'Mathematiques',
  // SISR — Reseaux
  'reseaux-fondamentaux': 'Reseaux',
  'routage-commutation': 'Reseaux',
  'services-reseau': 'Reseaux',
  // SISR — Systemes
  'windows-server': 'Systemes',
  'linux-administration': 'Systemes',
  'linux-services': 'Systemes',
  // SISR — Virtualisation
  'virtualisation': 'Virtualisation',
  'docker': 'Virtualisation',
  // SISR — Securite
  'cybersecurite-infra': 'Securite',
  'sauvegarde-pra': 'Securite',
  // SISR — Exploitation
  'supervision': 'Exploitation',
  'scripting-powershell-bash': 'Exploitation',
  'glpi-parc': 'Exploitation',
};

function inferCategory(slug: string, frontmatter: Partial<GuideFrontmatter>): string {
  // Prefer CATEGORY_MAP (accent-free) over frontmatter to avoid mismatches
  if (CATEGORY_MAP[slug]) return CATEGORY_MAP[slug];
  if (frontmatter.category) return frontmatter.category;
  return 'Fondamentaux';
}

export function getGuideBySlug(slug: string): Guide {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const frontmatter: GuideFrontmatter = {
    title: data.title || slug,
    description: data.description || '',
    category: inferCategory(slug, data as Partial<GuideFrontmatter>),
    tags: data.tags || [],
    readTime: data.readTime || `${Math.ceil(stats.minutes)} min`,
    difficulty: data.difficulty,
    date: data.date || data.publishedAt,
    lastUpdated: data.lastUpdated,
    author: data.author,
  };

  return {
    slug,
    frontmatter,
    content,
    readTime: frontmatter.readTime!,
  };
}

export function getAllGuides(): Guide[] {
  const fileNames = fs.readdirSync(guidesDirectory).filter(f => f.endsWith('.mdx'));
  const guides = fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getGuideBySlug(slug);
    })
    .filter(guide => isPublished(guide.slug));

  return guides;
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(guidesDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
    .filter(slug => isPublished(slug));
}

export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter(g => g.frontmatter.category === category);
}

export function getAllCategories(): string[] {
  const guides = getAllGuides();
  const categories = new Set(guides.map(g => g.frontmatter.category));
  return Array.from(categories);
}
