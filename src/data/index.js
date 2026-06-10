// ============================================================
// DATA CENTRALISÉE — contenu et traductions
// ============================================================

import { img_vivrier, img_maman, img_montcho } from './images.js';

export const TRANSLATIONS = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      education: "Parcours",
      certif: "Certifs",
      contact: "Contact",
      cv: "↓ CV",
    },
    hero: {
      badge: "Disponible — Stages & Freelance",
      greeting: "Bonjour, je suis",
      role: "Développeur Web & Designer UX/UI",
      location: "Cotonou, Bénin · IFRI / UAC",
      bio: "Passionné de code et de design, je conçois des expériences numériques qui allient rigueur technique et sensibilité créative. Mon ambition : devenir indispensable dans mon domaine et résoudre des problèmes concrets liés au numérique.",
      cta1: "Voir mes projets",
      cta2: "↓ Télécharger CV",
      passions: ["🎵 Maître de Chœur", "🏋️ Sport", "📚 Lecture", "💡 Battant", "🤝 Esprit d'équipe"],
      quote: "Peu importe combien tu es puissant, si tu abandonnes, tout s'effondre.",
      quoteAuthor: "— Itachi Uchiha",
    },
    skills: {
      sectionTag: "Expertise",
      title: "Compétences & Savoir-faire",
      sub: "Un mix de design et de code pour créer des produits numériques complets — de la maquette Figma à la mise en ligne.",
      levels: ["Notions", "Débutant", "Intermédiaire", "Avancé", "Expert"],
      qualities: "Qualités personnelles",
      interests: "Centres d'intérêt",
      qualityList: ["Rigueur", "Créativité", "Curiosité", "Battant", "Souci du détail", "Leadership", "Esprit d'équipe"],
      interestList: ["🎵 Musique — Maître de Chœur", "🏋️ Sport", "📚 Lecture", "💻 Veille technologique", "🎨 Design & Créativité"],
    },
    projects: {
      sectionTag: "Réalisations",
      title: "Projets & Créations",
      sub: "Des projets concrets pour des clients réels et dans le cadre de ma formation — chaque réalisation reflète mon engagement pour la qualité.",
      filters: { all: "Tous", real: "Client Réel", academic: "Académique", personal: "Personnel", design: "Design" },
      demo: "Démo →",
      code: "Code",
      featured: "Phare",
    },
    education: {
      sectionTag: "Formation",
      title: "Parcours & Formation",
      sub: "Mon chemin académique et mes premières expériences concrètes.",
      current: "En cours",
    },
    certif: {
      sectionTag: "Reconnaissance",
      title: "Certifications",
      certified: "✓ Certifié",
    },
    contact: {
      sectionTag: "Contact",
      title: "Travaillons ensemble",
      sub: "Un projet web, un design ou une collaboration ? Je suis disponible pour des missions freelance, stages ou tout projet à fort impact numérique.",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer →",
      sending: "Envoi…",
      sent: "✓ Message envoyé ! Je vous répondrai très vite.",
      error: "Erreur d'envoi. Contactez-moi directement par email.",
    },
    footer: "Conçu & développé par Gaïus Chanis HONTONWAKOU",
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      certif: "Certifs",
      contact: "Contact",
      cv: "↓ Resume",
    },
    hero: {
      badge: "Available — Internships & Freelance",
      greeting: "Hi, I'm",
      role: "Web Developer & UX/UI Designer",
      location: "Cotonou, Benin · IFRI / UAC",
      bio: "Passionate about code and design, I craft digital experiences that combine technical rigor with creative sensitivity. My ambition: to become indispensable in my field and solve real-world digital challenges.",
      cta1: "View my projects",
      cta2: "↓ Download Resume",
      passions: ["🎵 Choir Master", "🏋️ Sport", "📚 Reading", "💡 Fighter", "🤝 Team player"],
      quote: "No matter how powerful you are, if you give up, everything crumbles.",
      quoteAuthor: "— Itachi Uchiha",
    },
    skills: {
      sectionTag: "Expertise",
      title: "Skills & Expertise",
      sub: "A mix of design and code to create complete digital products — from Figma mockup to deployment.",
      levels: ["Basics", "Beginner", "Intermediate", "Advanced", "Expert"],
      qualities: "Personal qualities",
      interests: "Interests",
      qualityList: ["Rigor", "Creativity", "Curiosity", "Fighter", "Attention to detail", "Leadership", "Teamwork"],
      interestList: ["🎵 Music — Choir Master", "🏋️ Sport", "📚 Reading", "💻 Tech watch", "🎨 Design & Creativity"],
    },
    projects: {
      sectionTag: "Work",
      title: "Projects & Creations",
      sub: "Concrete projects for real clients and as part of my training — each work reflects my commitment to quality.",
      filters: { all: "All", real: "Real Client", academic: "Academic", personal: "Personal", design: "Design" },
      demo: "Demo →",
      code: "Code",
      featured: "Featured",
    },
    education: {
      sectionTag: "Education",
      title: "Education & Background",
      sub: "My academic path and first concrete experiences.",
      current: "Ongoing",
    },
    certif: {
      sectionTag: "Recognition",
      title: "Certifications",
      certified: "✓ Certified",
    },
    contact: {
      sectionTag: "Contact",
      title: "Let's work together",
      sub: "A web project, a design or a collaboration? I'm available for freelance missions, internships or any high-impact digital project.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send →",
      sending: "Sending…",
      sent: "✓ Message sent! I'll get back to you very soon.",
      error: "Send error. Contact me directly by email.",
    },
    footer: "Designed & developed by Gaïus Chanis HONTONWAKOU",
  },
};

// ============================================================
// COMPÉTENCES
// ============================================================

export const SKILLS = [
  { name: "HTML / CSS",   icon: "🌐", level: 4, category: "Front-end" },
  { name: "JavaScript",   icon: "⚡", level: 3, category: "Front-end" },
  { name: "React",        icon: "⚛️",  level: 2, category: "Front-end" },
  { name: "PHP",          icon: "🐘", level: 2, category: "Back-end"  },
  { name: "Java",         icon: "☕", level: 2, category: "Back-end"  },
  { name: "Python",       icon: "🐍", level: 3, category: "Back-end"  },
  { name: "C#",           icon: "🔷", level: 2, category: "Back-end"  },
  { name: "C",            icon: "⚙️",  level: 2, category: "Back-end"  },
  { name: "SQL",          icon: "🗄️",  level: 3, category: "Data"      },
  { name: "Figma",        icon: "🖌️",  level: 3, category: "Design"    },
  { name: "Canva",        icon: "🎨", level: 4, category: "Design"    },
  { name: "UX/UI Design", icon: "📱", level: 3, category: "Design"    },
];

// ============================================================
// PROJETS
// ============================================================

export const PROJECTS = [
  {
    id: 1,
    title: "Africa Pulse",
    descFr: "Dashboard de données africaines — population, PIB et accès internet pour 15 pays, avec filtres régionaux, graphiques animés et fiches détail par pays.",
    descEn: "African data dashboard — population, GDP and internet access for 15 countries, with regional filters, animated charts and country detail panels.",
    tags: ["React", "Recharts", "Vite"],
    type: "personal",
    github: "https://github.com/chanis-hg/Africa-Pulse",
    demo: "https://africa-pulse.netlify.app",
    emoji: "🌍",
    color: "#D4A853",
    featured: true,
    // screenshot via iframe/image de la démo
    previewUrl: "https://africa-pulse.netlify.app",
  },
  {
    id: 2,
    title: "CV Generator",
    descFr: "Outil de création de CV professionnel — formulaire multi-étapes, aperçu en temps réel, 4 thèmes couleur et export PDF. Bilingue FR/EN.",
    descEn: "Professional resume builder — multi-step form, real-time preview, 4 color themes and PDF export. Bilingual FR/EN.",
    tags: ["React", "Vite", "html2pdf"],
    type: "personal",
    github: "https://github.com/chanis-hg/cvgen-hg",
    demo: "https://cvgen-hg.netlify.app",
    emoji: "📄",
    color: "#2E7D5E",
    featured: true,
    previewUrl: "https://cvgen-hg.netlify.app",
  },
  {
    id: 3,
    title: "Atelier Prestige Couture",
    descFr: "Site vitrine pour un couturier — galerie de créations, commandes WhatsApp intégrées, identité visuelle rouge & or.",
    descEn: "Showcase site for a tailor — creation gallery, integrated WhatsApp orders, red & gold visual identity.",
    tags: ["HTML", "CSS", "JS"],
    type: "real",
    github: "https://github.com/chanis-hg",
    demo: null,
    emoji: "✂️",
    color: "#b8860b",
    featured: false,
  },
  {
    id: 4,
    title: "Salon Élégance",
    descFr: "Site vitrine salon de coiffure — prestations, réservation WhatsApp, design noir & or.",
    descEn: "Hair salon showcase — services, WhatsApp booking, black & gold design.",
    tags: ["HTML", "CSS", "JS"],
    type: "real",
    github: "https://github.com/chanis-hg",
    demo: null,
    emoji: "💇",
    color: "#2d2d2d",
    featured: false,
  },
  {
    id: 5,
    title: "FarmFresh Benin",
    descFr: "Plateforme de vente de produits vivriers D2C — UX/UI, catalogue interactif, panier. Projet IFRI.",
    descEn: "Direct-to-consumer staple food sales platform — UX/UI, interactive catalogue, cart. IFRI project.",
    tags: ["Figma", "UX/UI"],
    type: "academic",
    github: "https://github.com/chanis-hg",
    demo: "https://www.figma.com/design/OiXQKhofngRnMe3F98zqaa/FarmFresh-Benin?node-id=16-3",
    emoji: "🌾",
    color: "#4a7c2f",
    featured: false,
    image: img_vivrier,
  },
  {
    id: 6,
    title: "IFRI Covoiturage",
    descFr: "Application de covoiturage pour les étudiants IFRI — mise en relation, trajets, communauté.",
    descEn: "Carpooling app for IFRI students — matching, routes, community.",
    tags: ["Figma", "UX/UI"],
    type: "academic",
    github: "https://github.com/chanis-hg",
    demo: null,
    emoji: "🚗",
    color: "#5b3a8a",
    featured: false,
  },
  {
    id: 7,
    title: "Alimentation Montcho",
    descFr: "Affiche pour épicerie de viandes et produits frais — positionnement premium local.",
    descEn: "Poster for a meat and fresh products store — local premium positioning.",
    tags: ["Canva"],
    type: "design",
    github: null,
    demo: null,
    emoji: "🥩",
    color: "#8a2a2a",
    featured: false,
    image: img_montcho,
  },
  {
    id: 8,
    title: "Chez Maman Bignon",
    descFr: "Affiche épicerie familiale à Womey — kit alimentaire bio à moindre coût.",
    descEn: "Family grocery poster in Womey — organic food kit at lower cost.",
    tags: ["Canva"],
    type: "design",
    github: null,
    demo: null,
    emoji: "🏪",
    color: "#7a5a1e",
    featured: false,
    image: img_maman,
  },
];

// ============================================================
// FORMATION
// ============================================================

export const EDUCATION = [
  {
    year: "2024 — Présent",
    yearEn: "2024 — Present",
    school: "IFRI — Institut de Formation et de Recherche en Informatique",
    degreeFr: "Licence 2 — Internet et Multimédia",
    degreeEn: "Bachelor's Year 2 — Internet & Multimedia",
    place: "Université d'Abomey-Calavi (UAC), Bénin",
    current: true,
    detailsFr: "Développement Web (HTML, CSS, JS, PHP, Java, Python, C#) · Design & Ergonomie · Production Audiovisuelle · Bases de données · Algorithmique",
    detailsEn: "Web Dev (HTML, CSS, JS, PHP, Java, Python, C#) · Design & Ergonomics · Audiovisual Production · Databases · Algorithmics",
  },
  {
    year: "2023 — 2024",
    yearEn: "2023 — 2024",
    school: "Collège Espérance 2000",
    degreeFr: "Baccalauréat — Série D (Sciences)",
    degreeEn: "High School Diploma — Series D (Sciences)",
    place: "Bénin",
    current: false,
    detailsFr: "",
    detailsEn: "",
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const CERTIFICATIONS = [
  {
    org: "Sololearn",
    titleFr: "Python Developer",
    titleEn: "Python Developer",
    descFr: "Structures de données, fonctions, POO et scripting Python.",
    descEn: "Data structures, functions, OOP and Python scripting.",
    icon: "🐍",
  },
  {
    org: "Sololearn",
    titleFr: "SQL Fundamentals",
    titleEn: "SQL Fundamentals",
    descFr: "Requêtes SQL, jointures, agrégations et gestion de BDD.",
    descEn: "SQL queries, joins, aggregations and database management.",
    icon: "🗄️",
  },
];


export const CONTACT_LINKS = [
  { icon: "📞", label: "+229 01 53 50 55 01", href: "tel:+22901535055501" },
  { icon: "✉️", label: "gaiuschanis03@gmail.com", href: "mailto:gaiuschanis03@gmail.com" },
  { icon: "💼", label: "LinkedIn — Gaïus Chanis", href: "https://linkedin.com/in/gaïus-chanis-08a782365" },
  { icon: "🐙", label: "github.com/chanis-hg", href: "https://github.com/chanis-hg" },
  { icon: "💬", label: "WhatsApp", href: "https://wa.me/229535055501" },
];

export const FORMSPREE_ID = "xgobozjw";