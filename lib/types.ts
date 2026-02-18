export interface GuideFrontmatter {
  title: string;
  description: string;
  category: string;
  tags?: string[];
  readTime?: string;
  difficulty?: string;
  date?: string;
  lastUpdated?: string;
  author?: string;
}

export interface Guide {
  slug: string;
  frontmatter: GuideFrontmatter;
  content: string;
  readTime: string;
}

export const CATEGORY_COLORS: Record<string, { gradient: string; bg: string; text: string; border: string; icon: string }> = {
  'Fondamentaux': {
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    icon: 'F',
  },
  'Programmation': {
    gradient: 'from-violet-500 to-fuchsia-400',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    icon: 'P',
  },
  'Bases de donnees': {
    gradient: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    icon: 'BD',
  },
  'Architecture': {
    gradient: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    icon: 'A',
  },
  'Qualite et Securite': {
    gradient: 'from-red-500 to-rose-400',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/20',
    icon: 'QS',
  },
  'Mathematiques': {
    gradient: 'from-cyan-500 to-blue-400',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    icon: 'M',
  },
  'Reseaux': {
    gradient: 'from-sky-500 to-indigo-400',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    border: 'border-sky-500/20',
    icon: 'R',
  },
  'Systemes': {
    gradient: 'from-orange-500 to-red-400',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    border: 'border-orange-500/20',
    icon: 'S',
  },
  'Virtualisation': {
    gradient: 'from-purple-500 to-indigo-400',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    icon: 'V',
  },
  'Securite': {
    gradient: 'from-red-600 to-pink-400',
    bg: 'bg-red-600/10',
    text: 'text-red-400',
    border: 'border-red-600/20',
    icon: 'Sec',
  },
  'Exploitation': {
    gradient: 'from-teal-500 to-green-400',
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'border-teal-500/20',
    icon: 'E',
  },
};

export function getCategoryColor(category: string) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS['Fondamentaux'];
}

export const CATEGORY_ORDER = [
  'Fondamentaux',
  'Programmation',
  'Bases de donnees',
  'Architecture',
  'Qualite et Securite',
  'Mathematiques',
  'Reseaux',
  'Systemes',
  'Virtualisation',
  'Securite',
  'Exploitation',
];
