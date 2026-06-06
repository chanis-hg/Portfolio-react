# Portfolio V2 — Gaïus Chanis HONTONWAKOU

Stack : **React 18 · Vite · CSS Modules**

---

## Structure du projet

```
portfolio-v2/
├── public/
│   ├── favicon.svg
│   ├── profil.jpg                  ← ta photo (à ajouter)
│   └── CV_GaiusChanis_HONTONWAKOU.pdf  ← ton CV (à ajouter)
│
├── src/
│   ├── styles/
│   │   ├── tokens.css              ← variables CSS (couleurs, typographie)
│   │   └── global.css              ← reset + utilitaires globaux
│   │
│   ├── data/
│   │   └── index.js                ← TOUT le contenu (projets, skills, traductions)
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js      ← hook IntersectionObserver
│   │
│   ├── components/
│   │   ├── Reveal.jsx / .module.css
│   │   ├── SectionHeader.jsx / .module.css
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Education/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   └── Footer/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## Installation & lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de dev
npm run dev

# 3. Builder pour la production
npm run build
```

---

## Personnalisation

Tout le contenu est centralisé dans **`src/data/index.js`** :
- `TRANSLATIONS` → textes FR/EN
- `SKILLS` → compétences + niveaux (1-5)
- `PROJECTS` → projets avec démos et liens GitHub
- `EDUCATION` → parcours académique
- `CERTIFICATIONS` → certifications

Pour changer les couleurs → **`src/styles/tokens.css`**

---

## Fichiers à ajouter dans `public/`

| Fichier | Description |
|---|---|
| `profil.jpg` | Ta photo de profil (format carré recommandé) |
| `CV_GaiusChanis_HONTONWAKOU.pdf` | Ton CV téléchargeable |

---

## Déploiement Netlify

1. Push sur GitHub
2. Netlify → New site from Git
3. **Build command** : `npm run build`
4. **Publish directory** : `dist`
5. Deploy 🚀
