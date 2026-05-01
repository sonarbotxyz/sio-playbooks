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

const CATEGORY_ICONS: Record<string, string> = {
  'Fondamentaux': 'F',
  'Programmation': 'P',
  'Bases de donnees': 'BD',
  'Architecture': 'A',
  'Qualite et Securite': 'QS',
  'Mathematiques': 'M',
  'Reseaux': 'R',
  'Systemes': 'S',
  'Virtualisation': 'V',
  'Securite': 'SEC',
  'Exploitation': 'E',
};

const MONO = {
  gradient: 'from-stone-700 to-stone-900',
  bg: 'bg-stone-900/40',
  text: 'text-stone-200',
  border: 'border-stone-700',
};

export function getCategoryColor(category: string) {
  return {
    ...MONO,
    icon: CATEGORY_ICONS[category] || category.slice(0, 1).toUpperCase(),
  };
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
