# Planning éditorial — Blog BTS SIO

Calendrier des posts blog. Statuts : `idea` → `draft` → `review` → `published`.

Règles : voir [STYLE.md](./STYLE.md). Toujours remplir `targetKeyword` et `searchIntent` avant de passer en `draft`.

---

## Pic exam (mai-juin 2026) — priorité absolue

Le trafic search "sujet bts sio corrigé" explose entre mi-mai et fin juin. **Tout ce qui est sujet corrigé doit être publié avant fin mai.**

Note réforme : depuis 2025, l'épreuve écrite Cybersécurité des services informatiques est passée du code **U6** (sessions ≤ 2024) au code **U7** (sessions ≥ 2025). Cible les keywords selon l'année.

| # | Titre | Mot-clé cible | Intention | Playbooks liés | Statut | Publier avant |
|---|---|---|---|---|---|---|
| 1 | Corrigé U7 BTS SIO 2025 SLAM — Sujet Casterman | `sujet u7 bts sio 2025 slam corrigé` | Trouver le corrigé pour réviser | securite, droit-rgpd, sql, procedures-triggers, php-mysql, tests | draft | 2026-05-25 |
| 2 | Corrigé U7 BTS SIO 2025 SISR | `sujet u7 bts sio 2025 sisr corrigé` | Trouver le corrigé SISR | securite, reseaux-fondamentaux, cybersecurite-infra | idea | 2026-05-25 |
| 3 | Corrigé U6 BTS SIO 2024 SLAM | `sujet u6 bts sio 2024 slam corrigé` | Sujet pré-réforme, entraînement | poo, sql, php-mysql | idea | 2026-05-30 |
| 4 | Corrigé U6 BTS SIO 2024 SISR | `sujet u6 bts sio 2024 sisr corrigé` | Sujet pré-réforme, entraînement | reseaux-fondamentaux, windows-server, linux-administration | idea | 2026-05-30 |

## Révisions de dernière minute (mai-juin)

Trafic search "réviser bts sio en X jours". Cible les retardataires.

| # | Titre | Mot-clé cible | Intention | Playbooks liés | Statut | Publier avant |
|---|---|---|---|---|---|---|
| 5 | Réviser le BTS SIO en 2 semaines : plan jour par jour | `réviser bts sio 2 semaines` | Plan de révision express | (tous) | idea | 2026-05-22 |
| 6 | E5 SLAM : les 10 erreurs qui coûtent cher le jour J | `e5 bts sio erreurs` | Éviter les pièges classiques | projet-e5 | idea | 2026-06-01 |

## Méta / choix de filière (août-septembre)

Trafic search "slam ou sisr" pic en juillet-septembre (post-bac, choix d'option).

| # | Titre | Mot-clé cible | Intention | Playbooks liés | Statut | Publier avant |
|---|---|---|---|---|---|---|
| 7 | SLAM ou SISR ? Comment choisir ton option en BTS SIO | `slam ou sisr` | Décider de l'option | — | idea | 2026-07-15 |
| 8 | BTS SIO : programme, épreuves, débouchés (le guide 2026) | `bts sio programme` | Comprendre la formation | — | idea | 2026-08-01 |

## Long-tail tech (publication continue)

Pages à publier au rythme d'1/semaine entre septembre et mars. Capture la longue traîne pendant l'année scolaire.

| # | Titre | Mot-clé cible | Intention | Playbooks liés | Statut | Publier avant |
|---|---|---|---|---|---|---|
| 9 | SQL au BTS SIO : les 20 requêtes à connaître par cœur | `sql bts sio` | Mémoriser les requêtes types | sql, procedures-triggers | idea | 2026-09-15 |
| 10 | Algorithmique BTS SIO : tri, recherche, complexité | `algorithmique bts sio` | Comprendre les algos au programme | algorithmique | idea | 2026-09-30 |

---

## Backlog (à prioriser plus tard)

Idées sans date. Mot-clé à valider (Google Keyword Planner, Ahrefs free, ou simple Search Console une fois les premiers posts indexés).

- "exemple projet personnel bts sio" — fort potentiel
- "stage bts sio rapport" — pic en avril
- "poursuite d'études après bts sio"
- "salaire après bts sio"
- "alternance bts sio" — pic juin-août
- "merise exemple bts sio"
- "docker bts sio"
- "cisco packet tracer bts sio"
- "comment se passe l'oral e6 bts sio"
- "bts sio en alternance ou initial"

---

## Cadence cible

- **Mai-juin 2026** : 4 posts (sujets corrigés + révisions express)
- **Juillet-août** : 2 posts (méta filière)
- **Septembre 2026 → mars 2027** : 1 post / semaine (long-tail)
- **Avril-juin 2027** : republier les sujets corrigés (mise à jour année N+1)

Si on tient pas 1/semaine en année scolaire → couper la cadence à 1 toutes les 2 semaines. Mieux vaut régulier que ambitieux puis abandonné.

---

## Workflow par post

1. **Créer la draft** dans `content/drafts/<slug>.mdx` avec le frontmatter complet (voir STYLE.md)
2. **Écrire**, en suivant le format type de STYLE.md
3. **Passer les 5 tests anti-AI** + la checklist SEO
4. **Demander review** (statut `review`)
5. **Publier** : déplacer dans le dossier de routing du blog (à wirer quand on a 2-3 drafts prêts), commit, push
6. **Mettre à jour le statut** ici en `published` + date réelle
