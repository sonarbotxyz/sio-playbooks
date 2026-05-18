# Style éditorial — Reussir mon BTS SIO

Toute publication (blog, playbook, page) suit ces règles. C'est ce qui rend le contenu humain, utile, et trouvable sur Google.

---

## Voix

- **Tutoiement, toujours.** Jamais "vous", jamais "nous" (sauf "on" rare).
- **Concret > abstrait.** Donne un exemple avant la définition, pas l'inverse.
- **Phrases courtes.** Une idée par phrase. Si la phrase a deux virgules, coupe-la.
- **Verbes d'action.** "Code ta requête" > "il faut écrire une requête".
- **Le mot c'est "playbook"**, pas "guide", "tutoriel" ou "cours".
- **Anglais autorisé** uniquement pour les termes tech standards (SELECT, JOIN, GET, async). Pas de "let's", "deep dive", "actionable".

## Interdits (red flags AI)

Si tu vois ces formules dans une draft, réécris :

- "Il est important de…" / "Il convient de…" / "Il faut noter que…"
- "En effet" / "Par ailleurs" / "De plus" / "Néanmoins" (transitions corporate)
- "N'oublions pas que…" / "Voyons ensemble…"
- "Cet article va te permettre de…" (parle du sujet, pas de l'article)
- "En conclusion" / "Pour résumer" (la dernière section parle d'elle-même)
- "Plusieurs", "beaucoup", "certains" sans chiffre → remplace par un nombre
- Tirets cadratins en rafale (— — —) : un par paragraphe max
- Tricolons répétés ("X, Y et Z") : pas deux d'affilée
- Émojis sauf demande explicite

## Anti-AI : 5 tests rapides avant publication

1. **Lis à voix haute le premier paragraphe.** Si tu n'écrirais pas ça à un pote, réécris.
2. **Compte les "il est / il faut / il convient".** Vise zéro.
3. **Cherche le mot le plus précis du texte.** Si y'en a aucun, ajoute un chiffre, une date, un nom de fonction.
4. **Vérifie le rythme.** Trois phrases moyennes d'affilée = tu endors. Casse avec une courte.
5. **Demande "pourquoi le lecteur lit ça maintenant ?"** Si la réponse est "c'est intéressant", c'est mort. Vise "j'en ai besoin pour mon exam dans 3 semaines".

---

## SEO — checklist par post

À cocher avant de marquer `status: published` dans PLANNING.md.

### Structure

- [ ] **Slug URL** = le mot-clé cible, en kebab-case (`/blog/sujet-e5-bts-sio-2025-corrige`)
- [ ] **H1 unique** = titre de la page, contient le mot-clé exact
- [ ] **Meta description** : 150–160 caractères, contient le mot-clé, formulée comme une promesse concrète
- [ ] **3 à 6 H2** minimum, avec variantes du mot-clé (longue traîne)
- [ ] **800–1500 mots** pour un post blog. En dessous → pas crédible. Au-dessus → personne ne lit.
- [ ] **Une FAQ en bas** (3–5 questions) pour capturer les "People Also Ask"

### Liens

- [ ] **2 liens internes minimum** vers des playbooks pertinents (`/guides/[slug]`)
- [ ] **1 lien externe** vers une source autoritative (officiel BTS SIO, MDN, doc Microsoft, etc.) si applicable
- [ ] **Pas de lien sortant en `target="_blank"` sans `rel="noopener"`**

### Contenu

- [ ] **Le mot-clé apparaît dans** : H1, premier paragraphe (100 premiers mots), au moins un H2, meta description
- [ ] **Variantes du mot-clé** dans les H2/H3 (sujet, corrigé, exemple, exercice, méthode…)
- [ ] **Schéma, code, ou tableau** si le sujet s'y prête. Bloc de code > paragraphe.
- [ ] **Intention de recherche respectée.** "Sujet corrigé" → mets le corrigé en haut, pas l'historique de l'épreuve.

### Métadonnées MDX

```yaml
---
title: 'Sujet E5 BTS SIO 2025 corrigé'           # < 60 chars, contient mot-clé
description: 'Corrigé pas-à-pas du sujet E5 2025…' # 150-160 chars
slug: 'sujet-e5-bts-sio-2025-corrige'
publishedAt: '2026-05-20'
category: 'Sujets corrigés'
targetKeyword: 'sujet e5 bts sio 2025'
relatedPlaybooks: ['projet-e5', 'sql', 'php-mysql']
---
```

---

## Format type d'un post

```
H1 (= titre = mot-clé exact)

Paragraphe d'intro (3-4 phrases max).
Phrase 1 : le contexte du lecteur ("Tu passes le BTS SIO dans 3 semaines.").
Phrase 2 : la promesse concrète ("Voici le corrigé complet du sujet E5 2025.").
Phrase 3 : ce qu'il va apprendre, en bullet points si > 2 items.

H2 — Sous-sujet 1 (variante mot-clé)
Contenu. Code, schéma, exemple concret.

H2 — Sous-sujet 2

…

H2 — FAQ
**Question 1 ?**
Réponse courte (2-3 phrases).

H2 — Pour aller plus loin
- [Playbook lié 1](/guides/...)
- [Playbook lié 2](/guides/...)
```

Pas de "conclusion" ni de "à retenir" — la FAQ + les liens font le job.
