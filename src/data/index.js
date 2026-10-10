export const TRANSLATIONS = {
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      journey: "Parcours",
      capabilities: "Contribution",
      contact: "Contact",
      cv: "CV",
    },

    hero: {
      badge: "Disponible : Stages & Freelance",
      greeting: "Bonjour, je suis",
      location: "Cotonou, Bénin · IFRI / UAC",
      bio: "Je conçois des produits numériques à partir des contraintes réelles du terrain. Du système backend à l'expérience utilisateur, je transforme des problèmes concrets en produits fonctionnels.",
      cta1: "Voir CAVI-Alibori",
      cta2: "Télécharger mon CV",
      quote:
        "Je m'intéresse particulièrement aux produits qui doivent fonctionner dans les réalités du terrain ouest-africain.",
      quoteAuthor: "Approche personnelle",
    },

    about: {
      sectionTag: "Qui suis-je",
      title: "Un builder, pas juste un développeur.",
      p1: "Étudiant en Licence Internet & Multimédia à l'IFRI (UAC), je me situe à l'intersection du design et du développement. Je ne choisis pas entre les deux — je les combine pour créer des produits numériques complets, utiles et beaux.",
      p2: "Que ce soit une API sécurisée sous Laravel, une interface React animée, ou un logo livré à un client, mon moteur reste le même : faire un travail dont je suis fier, qui résout un vrai problème.",
      p3: "Basé à Cotonou, disponible pour des collaborations locales et internationales.",
    },

    experience: {
      sectionTag: "Terrain",
      title: "Expériences",
      sub: "Deux stages simultanés. Un en communication, un en développement actif de produit.",
    },

    capabilities: {
      sectionTag: "Contribution",
      title: "Ce que je peux construire",
      sub: "Je contribue à concevoir et développer des produits numériques utiles, du problème initial jusqu'à une interface réellement utilisable.",
    },

    projects: {
      sectionTag: "Réalisations",
      title: "Projets & Créations",
      sub: "Du backend Laravel à l'interface React, du logo client au prototype Figma.",
      filters: {
        all: "Tous",
        real: "Client",
        academic: "Académique",
        personal: "Personnel",
        design: "Design",
      },
      demo: "Démo",
      figma: "Prototype",
      code: "Code",
      featured: "Phare",
    },

    skills: {
      sectionTag: "Expertise",
      title: "Compétences",
      sub: "Front-end, back-end, design, un profil complet en construction constante.",
      levels: [
        "Notions",
        "Débutant",
        "Intermédiaire",
        "Avancé",
        "Expert",
      ],
    },

    education: {
      sectionTag: "Formation",
      title: "Formation",
      sub: "Mon parcours académique et les formations suivies en parallèle.",
      current: "En cours",
      certified: "Certificat obtenu",
    },

    contact: {
      sectionTag: "Contact",
      title: "Travaillons ensemble",
      sub: "Un projet, un stage, une collaboration ? Je réponds rapidement.",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer",
      sending: "Envoi…",
      sent: "Message envoyé !",
      error: "Erreur. Contactez-moi directement par WhatsApp.",
    },

    footer: "Conçu & développé par Gaïus Chanis HONTONWAKOU",
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      journey: "Journey",
      capabilities: "Contribution",
      contact: "Contact",
      cv: "Resume",
    },

    hero: {
      badge: "Available — Internships & Freelance",
      greeting: "Hello, I am",
      location: "Cotonou, Benin · IFRI / UAC",
      bio: "I design digital products around real-world constraints. From backend systems to user experience, I turn concrete problems into functional products.",
      cta1: "View CAVI-Alibori",
      cta2: "Download my resume",
      quote:
        "I am particularly interested in products that must work within West African realities.",
      quoteAuthor: "Personal approach",
    },

    about: {
      sectionTag: "Who I am",
      title: "A builder, not just a developer.",
      p1: "Bachelor's student in Internet & Multimedia at IFRI (UAC), I stand at the intersection of design and development. I don't choose between the two — I combine them to create complete, useful, and beautiful digital products.",
      p2: "Whether it's a secure Laravel API, an animated React interface, or a logo delivered to a client, my engine stays the same: doing work I'm proud of, that solves a real problem.",
      p3: "Based in Cotonou, available for local and international collaborations.",
    },

    experience: {
      sectionTag: "Field",
      title: "Experience",
      sub: "Two simultaneous internships. One in communication, one in active product development.",
    },

    capabilities: {
      sectionTag: "Contribution",
      title: "What I can build",
      sub: "I contribute to designing and developing useful digital products, from the initial problem to a genuinely usable interface.",
    },

    projects: {
      sectionTag: "Work",
      title: "Projects & Creations",
      sub: "From Laravel backend to React interface, from client logo to Figma prototype.",
      filters: {
        all: "All",
        real: "Client",
        academic: "Academic",
        personal: "Personal",
        design: "Design",
      },
      demo: "Demo",
      figma: "Prototype",
      code: "Code",
      featured: "Featured",
    },

    skills: {
      sectionTag: "Expertise",
      title: "Skills",
      sub: "Front-end, back-end, design — a complete profile in constant growth.",
      levels: [
        "Basics",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert",
      ],
    },

    education: {
      sectionTag: "Education",
      title: "Education",
      sub: "My academic path and the training I took alongside it.",
      current: "Ongoing",
      certified: "Certificate earned",
    },

    contact: {
      sectionTag: "Contact",
      title: "Let's work together",
      sub: "A project, an internship, a collaboration? I respond quickly.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      sending: "Sending…",
      sent: "Message sent!",
      error: "Error. Contact me directly by WhatsApp.",
    },

    footer: "Designed & developed by Gaïus Chanis HONTONWAKOU",
  },
};

export const EXPERIENCES = [
  {
    id: 1,
    period: "Juin 2026 — Septembre 2026",
    periodEn: "June 2026 — September 2026",
    company: "Brillio / DigiMama",
    roleFr: "Stagiaire Développeur Backend",
    roleEn: "Backend Developer Intern",
    typeFr: "Stage · Remote",
    typeEn: "Internship · Remote",
    current: false,

    descFr:
      "DigiMama est une plateforme EdTech pour les femmes commerçantes béninoises : formations en langues locales (fon, adja, yorùbá), communauté et progression, consommées par une application mobile. Dans une équipe de 4 développeurs, j'ai construit l'API des paramètres utilisatrice et écrit les tests du module Communauté et de sa modération.",

    descEn:
      "DigiMama is an EdTech platform for Beninese market women: training in local languages (Fon, Adja, Yorùbá), community and progress tracking, consumed by a mobile app. In a team of 4 developers, I built the user settings API and wrote the tests for the Community module and its moderation.",

    stackFr: [
      "Laravel 12",
      "Pest",
      "MySQL",
      "Sanctum",
      "Filament",
    ],

    stackEn: [
      "Laravel 12",
      "Pest",
      "MySQL",
      "Sanctum",
      "Filament",
    ],

    highlights: [
      "API des paramètres utilisatrice : mode hors ligne, seuil de téléchargement en Mo, langue, notifications",
      "Test de bout en bout du parcours Communauté : rejoindre, publier, être signalée",
      "11 tests du back-office de modération : permissions, traçabilité, contenu supprimé",
      "Correction d'une migration bloquante liée au fon comme langue par défaut",
    ],

    highlightsEn: [
      "User settings API: offline mode, download limit in MB, language, notifications",
      "End-to-end test of the Community journey: join, post, get reported",
      "11 tests for the moderation back-office: permissions, traceability, deleted content",
      "Fix for a blocking migration tied to Fon as the default language",
    ],

    images: [
      "/images/digimama_landing.webp",
      "/images/digimama_app.webp",
      "/images/digimama_admin.webp",
    ],
  },

  {
    id: 2,
    period: "Juin 2026 — Septembre 2026",
    periodEn: "June 2026 — September 2026",
    company: "MISP — Ministère de l'Intérieur et de la Sécurité Publique",
    roleFr: "Stagiaire Community Manager & Photographe",
    roleEn: "Community Manager & Photographer Intern",
    typeFr: "Stage · Cotonou, Bénin",
    typeEn: "Internship · Cotonou, Benin",
    current: false,

    descFr:
      "Appui à la communication numérique du Point Focal Communication du ministère, en collaboration avec le tuteur. Participation à la production de contenus visuels sur Facebook et couverture photographique d'événements officiels.",

    descEn:
      "Support for the digital communication of the ministry's Communication Focal Point, in collaboration with the supervisor. Participation in visual content production on Facebook and photographic coverage of official events.",

    stackFr: [
      "Community Management",
      "Photographie",
      "Canva",
      "Facebook",
    ],

    stackEn: [
      "Community Management",
      "Photography",
      "Canva",
      "Facebook",
    ],

    highlights: [],
    highlightsEn: [],
    images: [],
  },
];

export const SKILLS = [
  { name: "HTML / CSS", icon: "html-css", category: "Front-end" },
  { name: "JavaScript", icon: "javascript", category: "Front-end" },
  { name: "React", icon: "react", category: "Front-end" },
  { name: "Laravel", icon: "laravel", category: "Back-end" },
  { name: "PHP", icon: "php", category: "Back-end" },
  { name: "SQL", icon: "sql", category: "Data" },
  { name: "API REST", icon: "api", category: "Back-end" },
  { name: "Figma", icon: "figma", category: "Design" },
  { name: "Canva", icon: "canva", category: "Design" },
  { name: "UX/UI Design", icon: "ux-ui", category: "Design" },
];

export const CAPABILITIES = [
  {
    id: "interfaces",
    number: "01",
    categoryFr: "INTERFACE",
    categoryEn: "INTERFACE",
    image: "/images/capability_interface.webp",

    altFr: "Illustration d'une interface web responsive sur ordinateur et mobile",
    altEn: "Illustration of a responsive web interface on desktop and mobile",
    titleFr: "Interfaces et sites web",
    titleEn: "Websites and interfaces",
    descriptionFr:
      "Créer des interfaces web claires, responsive et cohérentes, du premier écran aux composants réutilisables.",
    descriptionEn:
      "Creating clear, responsive and coherent web interfaces, from the first screen to reusable components.",
    pointsFr: [
      "Composants réutilisables",
      "Approche mobile-first",
      "Accessibilité et performance",
    ],
    pointsEn: [
      "Reusable components",
      "Mobile-first approach",
      "Accessibility and performance",
    ],
  },

  {
    id: "backend",
    number: "02",
    categoryFr: "SYSTÈME",
    categoryEn: "SYSTEM",
    image: "/images/digimama_admin.webp",

    altFr:
      "Back-office Filament de DigiMama : gestion des cours, leçons et badges",

    altEn:
      "DigiMama Filament back-office: managing courses, lessons and badges",

    titleFr: "Backend, API et fonctionnalités métier",
    titleEn: "Backend, APIs and business features",
    descriptionFr:
      "Construire la logique qui fait fonctionner un produit numérique et relie l'interface aux données.",
    descriptionEn:
      "Building the logic that powers a digital product and connects the interface to its data.",
    pointsFr: [
      "API REST avec Laravel",
      "Authentification et autorisations",
      "Logique métier et back-office",
    ],
    pointsEn: [
      "REST APIs with Laravel",
      "Authentication and permissions",
      "Business logic and back-office",
    ],
  },

  {
    id: "product-design",
    number: "03",
    categoryFr: "CONCEPTION",
    categoryEn: "DESIGN",
    image: "/images/capability_design.webp",

    altFr:
      "Illustration de wireframes et d'un parcours utilisateur en conception",

    altEn:
      "Illustration of wireframes and a user journey in progress",

    titleFr: "UX/UI et conception de produits",
    titleEn: "UX/UI and product design",
    descriptionFr:
      "Transformer un besoin réel en parcours et interfaces compréhensibles, testables et réellement utilisables.",
    descriptionEn:
      "Turning a real need into understandable, testable and genuinely usable journeys and interfaces.",
    pointsFr: [
      "Parcours et hiérarchie visuelle",
      "Wireframes et prototypes Figma",
      "États d'erreur, chargement et contenu vide",
    ],
    pointsEn: [
      "User journeys and visual hierarchy",
      "Figma wireframes and prototypes",
      "Error, loading and empty states",
    ],
  },

  {
    id: "photography",
    number: "04",
    categoryFr: "CONTENU",
    categoryEn: "CONTENT",

    image: "/images/capability_photography.webp",

    altFr: "Photographe couvrant un événement officiel",
    altEn: "Photographer covering an official event",

    titleFr: "Photographie et contenu visuel",
    titleEn: "Photography and visual content",

    descriptionFr:
      "Produire des contenus visuels cohérents pour documenter un événement, présenter une activité ou renforcer une communication numérique.",

    descriptionEn:
      "Creating coherent visual content to document an event, present an activity or support digital communication.",

    pointsFr: [
      "Couverture photographique d'événements",
      "Production de contenus pour les réseaux sociaux",
      "Sélection, cadrage et retouche de base",
    ],

    pointsEn: [
      "Event photography coverage",
      "Content production for social media",
      "Selection, framing and basic editing",
    ],
  },
];

export const PROJECTS = [
  {
    id: "cavi-alibori",
    title: "CAVI-Alibori",
    category: "Hackathon IndabaX Bénin 2026 · 72 h",
    visual: "cavi",

    descFr:
      "Les bulletins météo sont en français écrit, alors que les producteurs de l'Alibori parlent surtout bariba, peulh ou dendi. En équipe de 4, nous avons prototypé un pipeline qui transforme un bulletin en consigne agricole audio, assemblée à partir de segments pré-enregistrés.",

    descEn:
      "Weather bulletins are written in French, while farmers in Alibori mostly speak Bariba, Fulfulde or Dendi. As a team of 4, we prototyped a pipeline that turns a bulletin into an audio farming instruction assembled from pre-recorded segments.",

    tags: ["Laravel", "Filament", "FFmpeg", "Python"],

    type: "personal",
    family: "development",

    roleFr: "Tout le backend Laravel et le traitement des bulletins, au sein d'une équipe de 4",
    roleEn: "The entire Laravel backend and bulletin processing, within a team of 4",

    proofFr:
      "Démo fonctionnelle : bulletin → extraction → règle → message audio assemblé, écoutable sur un SVI simulé",

    proofEn:
      "Working demo: bulletin → extraction → rule → assembled audio message, playable on a simulated IVR",

    caseStudy: {
      contextFr:
        "Dans l'Alibori, premier bassin cotonnier du Bénin, une sécheresse non anticipée peut ruiner une campagne. L'information météo existe, mais en français écrit et en jargon technique, hors de portée d'une grande partie des producteurs.",
      contextEn:
        "In Alibori, Benin's main cotton-growing area, an unanticipated drought can ruin a season. Weather information exists, but in written French and technical jargon, out of reach for many farmers.",

      problemFr:
        "Comment transformer un bulletin météo écrit en consigne agricole concrète, compréhensible à l'oral et sans smartphone ?",
      problemEn:
        "How can a written weather bulletin become a concrete farming instruction, understandable by ear and without a smartphone?",

      constraintsFr: [
        "Public peu alphabétisé en français, souvent sans smartphone",
        "Pas assez de données en bariba, peulh et dendi pour une synthèse vocale",
        "Hackathon de 72 h, l'essentiel du code écrit sur la dernière journée",
        "Hébergement gratuit uniquement",
      ],
      constraintsEn: [
        "Audience with limited French literacy, often without a smartphone",
        "Not enough Bariba, Fulfulde and Dendi data for speech synthesis",
        "72-hour hackathon, most of the code written on the last day",
        "Free hosting tiers only",
      ],

      decisionFr:
        "Séparer strictement extraction et décision : l'IA structure le bulletin, mais c'est une table de règles validée par des agronomes qui choisit la consigne. Pour la voix, assembler des segments pré-enregistrés plutôt que générer la parole.",
      decisionEn:
        "Strictly separate extraction from decision: AI structures the bulletin, but a rules table validated by agronomists picks the instruction. For voice, assemble pre-recorded segments instead of generating speech.",

      implementationFr:
        "Bulletin → extraction (microservice d'embeddings, repli regex automatique) → moteur de règles → assemblage audio FFmpeg → SVI simulé. Back-office Filament pour gérer les règles.",
      implementationEn:
        "Bulletin → extraction (embeddings microservice, automatic regex fallback) → rules engine → FFmpeg audio assembly → simulated IVR. Filament back-office to manage rules.",

      proofFr:
        "Scénario de démo complet (Banikoara, sécheresse sévère sur 12 jours → paillage du sol) : la règle est trouvée et un message de 6 s est généré puis lu dans le navigateur. Chaque brique a un repli : regex si l'IA ne répond pas, réencodage si la concaténation échoue.",
      proofEn:
        "Complete demo scenario (Banikoara, severe drought over 12 days → mulching): the rule is matched and a 6-second message is generated and played in the browser. Each step has a fallback: regex if the AI does not respond, re-encoding if concatenation fails.",

      limitsFr: [
        "Les segments audio sont des tonalités de substitution : les enregistrements d'un locuteur bariba restent à faire.",
        "Les phrases de référence du modèle d'IA restent à calibrer sur de vrais bulletins Météo-Bénin.",
        "Une seule commune, un seul scénario, une seule langue.",
        "Granularité des bulletins et couverture réseau non vérifiées ; aucun test auprès d'agriculteurs.",
        "Tests automatisés partiels : pas encore de test de bout en bout.",
      ],
      limitsEn: [
        "Audio segments are placeholder tones: recordings by a Bariba speaker are still needed.",
        "The AI model's reference sentences still need calibrating on real Météo-Bénin bulletins.",
        "One district, one scenario, one language.",
        "Bulletin granularity and network coverage unverified; no testing with farmers.",
        "Partial automated tests: no end-to-end test yet.",
      ],

      takeawayFr:
        "Une démo fiable vaut mieux qu'une démo impressionnante : chaque brique a un plan B. J'en retiens aussi qu'il faut répartir le travail dans le temps plutôt que tout écrire la dernière nuit.",
      takeawayEn:
        "A reliable demo beats an impressive one: every step has a plan B. I also learned to spread the work over time instead of writing everything on the last night.",
    },

    github: "https://github.com/chanis-hg/cavi-alibori",
    demo: null,
    featured: true,
    wip: false,
    status: "finished",
  },

  {
    id: "digimama",
    title: "DigiMama",
    category: "Backend · Laravel · Stage",
    visual: "digimama",
    image: "/images/digimama_landing.webp",

    descFr:
      "Contribuer au backend d'une plateforme EdTech pour les femmes commerçantes béninoises : API des paramètres utilisatrice, pensée pour les connexions lentes, et tests du module Communauté.",

    descEn:
      "Contributing to the backend of an EdTech platform for Beninese market women: a user settings API designed for slow connections, and tests for the Community module.",

    tags: ["Laravel 12", "Pest", "MySQL", "Sanctum"],

    type: "real",
    family: "development",

    roleFr: "Développeur backend stagiaire, équipe de 4",
    roleEn: "Backend developer intern, team of 4",

    proofFr:
      "API des paramètres et 14 tests sur la communauté et sa modération",

    proofEn:
      "Settings API and 14 tests covering the community and its moderation",

    caseStudy: {
      contextFr:
        "DigiMama forme des femmes commerçantes béninoises en langues locales, via une application mobile utilisée souvent avec peu de données mobiles et une connexion instable.",
      contextEn:
        "DigiMama trains Beninese market women in local languages through a mobile app, often used with limited mobile data and an unstable connection.",

      problemFr:
        "Comment laisser chaque utilisatrice maîtriser sa consommation de données, et s'assurer que l'espace Communauté et sa modération restent fiables à chaque évolution du code ?",
      problemEn:
        "How can each user control her data usage, and how can the Community space and its moderation stay reliable as the code evolves?",

      constraintsFr: [
        "Projet en équipe de 4 développeurs, avec revue par pull request",
        "Utilisatrices souvent sur des connexions lentes et coûteuses",
        "Modération : chaque signalement doit rester traçable",
      ],
      constraintsEn: [
        "Team of 4 developers, with pull request reviews",
        "Users often on slow, costly connections",
        "Moderation: every report must stay traceable",
      ],

      decisionFr:
        "Créer des paramètres par utilisatrice, avec des valeurs par défaut prudentes (téléchargements automatiques désactivés, seuil de 15 Mo), et tester le parcours Communauté comme une vraie utilisatrice le vivrait.",
      decisionEn:
        "Create per-user settings with cautious defaults (automatic downloads off, 15 MB limit), and test the Community journey the way a real user would go through it.",

      implementationFr:
        "Migration et modèle des paramètres → validation des requêtes → routes de l'API → tests Pest. Tests de bout en bout : rejoindre une communauté → publier → être comptée → être signalée.",
      implementationEn:
        "Settings migration and model → request validation → API routes → Pest tests. End-to-end tests: join a community → post → get counted → get reported.",

      proofFr:
        "Paramètres créés automatiquement à l'inscription et modifiables via l'API (langue, notifications, mode hors ligne, seuil de téléchargement). 3 tests de bout en bout sur la communauté et 11 tests du back-office de modération.",
      proofEn:
        "Settings created automatically at sign-up and editable through the API (language, notifications, offline mode, download limit). 3 end-to-end tests on the community and 11 tests for the moderation back-office.",

      limitsFr: [
        "Projet en équipe : la gamification et l'essentiel du back-office ont été développés par d'autres membres.",
        "Une partie de l'API des paramètres a ensuite été reprise et étendue par l'équipe.",
        "Dépôt privé : le code n'est pas consultable publiquement.",
        "Ma participation s'est terminée avec mon stage (septembre 2026) ; le produit continue d'évoluer.",
      ],
      limitsEn: [
        "Team project: gamification and most of the back-office were built by other team members.",
        "Part of the settings API was later reworked and extended by the team.",
        "Private repository: the code is not publicly available.",
        "My involvement ended with my internship (September 2026); the product continues to evolve.",
      ],

      takeawayFr:
        "Travailler dans une base de code partagée : une pull request propre, des tests qui décrivent le comportement attendu, et accepter que son code soit repris par l'équipe.",
      takeawayEn:
        "Working in a shared codebase: a clean pull request, tests that describe the expected behaviour, and accepting that the team will rework your code.",
    },
    github: null,
    demo: null,
    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "cv-generator",
    title: "CV Generator",
    category: "Frontend · React",
    visual: "cv-generator",

    descFr:
      "Générer un CV personnalisé avec formulaire multi-étapes, aperçu temps réel, 4 thèmes et export PDF A4 directement dans le navigateur.",

    descEn:
      "Create a personalized resume with a multi-step form, real-time preview, 4 themes and A4 PDF export directly in the browser.",

    tags: ["React", "Vite", "html2pdf.js"],

    type: "personal",
    family: "development",

    roleFr: "Conception et développement frontend",
    roleEn: "Frontend design and development",

    proofFr:
      "Formulaire → aperçu temps réel → thèmes → export PDF A4",

    proofEn:
      "Form → real-time preview → themes → A4 PDF export",

    caseStudy: {
      contextFr:
        "CV Generator est une application web qui permet de créer un CV directement dans le navigateur, sans inscription ni installation.",
      contextEn:
        "CV Generator is a web application that lets users create a CV directly in the browser, without registration or installation.",

      problemFr:
        "Comment permettre à un utilisateur de construire son CV tout en gardant le formulaire, l'aperçu et le document exporté cohérents en temps réel ?",
      problemEn:
        "How can users build their CV while keeping the form, live preview, and exported document consistent in real time?",

      constraintsFr: [
        "Création entièrement dans le navigateur",
        "Aperçu synchronisé avec les données saisies",
        "Export au format PDF A4",
        "Prise en charge du français et de l'anglais",
      ],
      constraintsEn: [
        "Entirely browser-based creation",
        "Preview synchronized with entered data",
        "A4 PDF export",
        "French and English support",
      ],

      decisionFr:
        "Construire une expérience guidée en plusieurs étapes avec un état partagé entre le formulaire et l'aperçu, puis gérer l'export à partir du rendu final.",
      decisionEn:
        "Build a guided multi-step experience with shared state between the form and preview, then handle export from the final rendered result.",

      implementationFr:
        "Formulaire en 4 étapes → état partagé → aperçu temps réel → thème → export PDF A4.",
      implementationEn:
        "4-step form → shared state → live preview → theme → A4 PDF export.",

      proofFr:
        "Le projet propose un formulaire guidé en 4 étapes, un aperçu temps réel, 4 thèmes, une gestion de photo et un export PDF A4 en français ou en anglais.",
      proofEn:
        "The project provides a 4-step guided form, live preview, 4 themes, photo handling, and A4 PDF export in French or English.",

      limitsFr: [
        "Le rendu PDF dépend du comportement du navigateur et de la bibliothèque d'export.",
        "Le projet reste entièrement côté navigateur.",
        "Aucune validation des champs ni sauvegarde : recharger la page efface la saisie.",
      ],
      limitsEn: [
        "PDF rendering depends on browser behavior and the export library.",
        "The project remains entirely browser-based.",
        "No field validation or saving: reloading the page clears the form.",
      ],

      takeawayFr:
        "Ce projet m'a appris à penser une interface comme un flux de données continu : une modification dans le formulaire doit rester cohérente jusqu'au document final.",
      takeawayEn:
        "This project taught me to think of an interface as a continuous data flow: a change in the form must remain consistent through to the final document.",
    },

    github: "https://github.com/chanis-hg/cvgen-hg",
    demo: "https://cvgen-hg.netlify.app",
    previewUrl: "https://cvgen-hg.netlify.app",

    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "africa-pulse",
    title: "Africa Pulse",
    category: "Data Viz · React",
    visual: "africa-pulse",

    descFr:
      "Explorer des données démographiques, économiques et numériques de 15 pays africains à travers des filtres régionaux et des visualisations interactives.",

    descEn:
      "Explore demographic, economic and digital data from 15 African countries through regional filters and interactive visualizations.",

    tags: ["React", "Recharts", "Vite"],

    type: "personal",
    family: "development",

    roleFr: "Conception et développement frontend",
    roleEn: "Frontend design and development",

    proofFr:
      "Filtres régionaux, visualisations interactives et fiches pays",

    proofEn:
      "Regional filters, interactive visualizations and country views",

    caseStudy: {
      contextFr:
        "Africa Pulse est un dashboard web consacré à l'exploration de données démographiques, économiques et numériques de 15 pays africains.",
      contextEn:
        "Africa Pulse is a web dashboard for exploring demographic, economic, and digital data from 15 African countries.",

      problemFr:
        "Comment rendre des données africaines hétérogènes plus faciles à explorer et à comparer sans surcharger l'utilisateur ?",
      problemEn:
        "How can heterogeneous African data be made easier to explore and compare without overwhelming the user?",

      constraintsFr: [
        "Plusieurs indicateurs à visualiser",
        "Comparaison entre 15 pays",
        "Navigation entre vue régionale et vue pays",
        "Interface responsive",
      ],
      constraintsEn: [
        "Multiple indicators to visualize",
        "Comparison across 15 countries",
        "Navigation between regional and country views",
        "Responsive interface",
      ],

      decisionFr:
        "Organiser l'expérience autour de filtres régionaux, de visualisations dédiées aux principaux indicateurs et d'une vue détaillée par pays.",
      decisionEn:
        "Structure the experience around regional filters, dedicated visualizations for key indicators, and a detailed country view.",

      implementationFr:
        "Données → filtres régionaux → graphiques animés → comparaison → détail d'un pays.",
      implementationEn:
        "Data → regional filters → animated charts → comparison → country detail.",

      proofFr:
        "L'application permet d'explorer les données de 15 pays avec des filtres régionaux, des graphiques sur le PIB, la démographie et l'accès à Internet, ainsi qu'une vue détaillée par pays.",
      proofEn:
        "The application allows users to explore data from 15 countries through regional filters, GDP, demographic and internet-access charts, and country detail views.",

      limitsFr: [
        "Données saisies à la main pour 15 pays, sans source affichée ; les chiffres 2025 sont des estimations.",
        "La qualité des visualisations dépend de la qualité des données disponibles.",
        "Le dashboard se concentre sur un ensemble limité d'indicateurs.",
        "Interface en français uniquement.",
      ],
      limitsEn: [
        "Data entered by hand for 15 countries, with no source shown; 2025 figures are estimates.",
        "Visualization quality depends on the quality of the available data.",
        "The dashboard focuses on a limited set of indicators.",
        "French-only interface.",
      ],

      takeawayFr:
        "Ce projet m'a appris qu'une bonne visualisation ne consiste pas seulement à afficher des données, mais à construire un chemin simple pour les comprendre.",
      takeawayEn:
        "This project taught me that good data visualization is not only about displaying data, but about creating a clear path to understanding it.",
    },
    github: "https://github.com/chanis-hg/Africa-Pulse",
    demo: "https://africa-pulse.netlify.app",
    previewUrl: "https://africa-pulse.netlify.app",

    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "kaud",
    title: "KAUD",
    category: "Identité visuelle",
    image: "/images/kaud.webp",

    descFr:
      "Création du logo de KAUD pour traduire visuellement son expertise et renforcer la perception de la qualité de ses réalisations.",

    descEn:
      "Logo design for KAUD, translating its expertise into a visual identity and reinforcing the perception of the quality of its work.",

    tags: ["Logo Design", "Branding", "Figma"],

    type: "real",
    family: "design",

    roleFr: "Conception de l'identité visuelle",
    roleEn: "Visual identity design",

    caseStudy: {
      contextFr:
        "KAUD est un projet d'identité visuelle destiné à construire une présence de marque cohérente autour d'un langage graphique identifiable.",
      contextEn:
        "KAUD is a visual identity project focused on building a coherent brand presence around an identifiable visual language.",

      problemFr:
        "Comment construire une identité suffisamment distinctive pour être reconnaissable tout en restant cohérente sur différents supports ?",
      problemEn:
        "How can a distinctive identity be built while remaining consistent across different media?",

      constraintsFr: [
        "Créer un langage visuel cohérent",
        "Définir un système graphique réutilisable",
        "Maintenir une identité reconnaissable sur différents supports",
      ],
      constraintsEn: [
        "Create a coherent visual language",
        "Define a reusable graphic system",
        "Maintain a recognizable identity across different media",
      ],

      decisionFr:
        "Construire l'identité autour d'un système visuel cohérent plutôt que de traiter chaque support comme une création indépendante.",
      decisionEn:
        "Build the identity around a coherent visual system rather than treating each medium as an independent creation.",

      implementationFr:
        "Direction visuelle → logo → langage graphique → déclinaisons.",
      implementationEn:
        "Visual direction → logo → graphic language → applications.",

      proofFr:
        "L'identité finale a été construite autour d'un système graphique décliné sur plusieurs éléments de communication.",
      proofEn:
        "The final identity was built around a graphic system applied across multiple communication elements.",

      limitsFr: [
        "Le projet porte principalement sur l'identité visuelle.",
        "Les performances commerciales de la marque ne sont pas mesurées dans ce projet.",
      ],
      limitsEn: [
        "The project focuses primarily on visual identity.",
        "The brand's commercial performance is not measured in this project.",
      ],

      takeawayFr:
        "Ce projet m'a appris à penser une identité comme un système cohérent plutôt que comme un simple logo.",
      takeawayEn:
        "This project taught me to think of identity as a coherent system rather than simply as a logo.",
    },
    github: null,
    demo: null,
    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "farmfresh-benin",
    title: "FarmFresh Benin",
    category: "UX / UI · Académique",
    image: "/images/vivrier.webp",

    descFr:
      "Conception d'une plateforme reliant directement les producteurs agricoles béninois aux acheteurs, sans intermédiaire du marché. La solution intègre également un espace d'échange pour faciliter les discussions et les transactions.",

    descEn:
      "UX/UI design for a digital experience focused on promoting and accessing local agricultural products. Design of a platform connecting Beninese farmers directly with buyers, bypassing traditional market intermediaries. The solution also integrates an exchange space to facilitate discussions and transactions.",

    tags: ["Figma", "UX/UI", "Wireframe"],

    type: "academic",
    family: "ux",

    roleFr: "Conception UX/UI",
    roleEn: "UX/UI design",

    caseStudy: {
      contextFr:
        "FarmFresh Benin est un projet académique de conception UX/UI autour d'une expérience numérique liée à l'agriculture et aux produits locaux.",
      contextEn:
        "FarmFresh Benin is an academic UX/UI design project focused on a digital experience related to agriculture and local products.",

      problemFr:
        "Comment structurer une expérience utilisateur claire pour permettre de comprendre, explorer et utiliser le service sans complexifier le parcours ?",
      problemEn:
        "How can a clear user experience be structured so users can understand, explore, and use the service without unnecessary complexity?",

      constraintsFr: [
        "Projet centré sur la conception UX/UI",
        "Structurer les parcours avant l'interface finale",
        "Adapter l'information aux besoins de l'utilisateur",
      ],
      constraintsEn: [
        "Project focused on UX/UI design",
        "Structure user flows before the final interface",
        "Adapt information to user needs",
      ],

      decisionFr:
        "Commencer par organiser les parcours et la structure de l'information avant de construire les interfaces visuelles.",
      decisionEn:
        "Start by organizing user flows and information architecture before building the visual interfaces.",

      implementationFr:
        "Besoins → parcours utilisateur → architecture de l'information → wireframes → interface.",
      implementationEn:
        "User needs → user flows → information architecture → wireframes → interface.",

      proofFr:
        "Le projet comprend une réflexion sur les parcours utilisateurs et une conception d'interface réalisée sur Figma.",
      proofEn:
        "The project includes user-flow exploration and interface design created in Figma.",

      limitsFr: [
        "Projet académique, sans validation auprès d'utilisateurs réels.",
        "La conception ne constitue pas une application fonctionnelle.",
      ],
      limitsEn: [
        "Academic project without validation with real users.",
        "The design does not constitute a functional application.",
      ],

      takeawayFr:
        "Ce projet m'a appris à traiter l'interface comme l'aboutissement d'une réflexion sur le parcours utilisateur, et non comme le point de départ.",
      takeawayEn:
        "This project taught me to treat the interface as the result of user-flow thinking rather than the starting point.",
    },

    figma:
      "https://www.figma.com/proto/OiXQKhofngRnMe3F98zqaa/FarmFresh-Benin?node-id=53-124&starting-point-node-id=47%3A2",

    github: null,
    demo: null,
    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "alimentation-montcho",
    title: "Alimentation Montcho",
    category: "Design graphique",
    image: "/images/montcho.webp",

    descFr:
      "Création d'un visuel promotionnel pour faire connaître Alimentation Montcho et mettre en avant son activité de vente de produits congelés.",

    descEn:
      "Creation of a promotional visual to increase awareness of Alimentation Montcho and highlight its frozen food business.",

    tags: ["Canva", "Design graphique"],

    type: "design",
    family: "design",

    roleFr: "Conception graphique",
    roleEn: "Graphic design",

    caseStudy: {
      contextFr:
        "Alimentation Montcho est un projet de design graphique destiné à construire des supports visuels cohérents pour une activité commerciale.",
      contextEn:
        "Alimentation Montcho is a graphic design project focused on creating coherent visual materials for a commercial activity.",

      problemFr:
        "Comment rendre une communication commerciale plus claire et visuellement cohérente tout en conservant une identité facilement reconnaissable ?",
      problemEn:
        "How can commercial communication become clearer and visually consistent while maintaining a recognizable identity?",

      constraintsFr: [
        "Hiérarchiser clairement l'information",
        "Créer une composition visuelle cohérente",
        "Adapter le design à un usage commercial",
      ],
      constraintsEn: [
        "Clearly structure the information",
        "Create a coherent visual composition",
        "Adapt the design to commercial use",
      ],

      decisionFr:
        "Construire les visuels autour d'une hiérarchie claire entre information, éléments graphiques et identité de l'activité.",
      decisionEn:
        "Build the visuals around a clear hierarchy between information, graphic elements, and the business identity.",

      implementationFr:
        "Contenu → hiérarchie visuelle → composition → éléments graphiques → visuel final.",
      implementationEn:
        "Content → visual hierarchy → composition → graphic elements → final visual.",

      proofFr:
        "Le projet aboutit à des supports graphiques conçus pour présenter l'activité de manière claire et cohérente.",
      proofEn:
        "The project resulted in graphic materials designed to present the business clearly and consistently.",

      limitsFr: [
        "Projet centré sur le design graphique.",
        "Aucune mesure de performance commerciale n'est associée au projet.",
      ],
      limitsEn: [
        "Project focused on graphic design.",
        "No commercial performance metrics are associated with the project.",
      ],

      takeawayFr:
        "Ce projet m'a appris à utiliser la hiérarchie visuelle comme un outil de communication avant même de penser à l'esthétique.",
      takeawayEn:
        "This project taught me to use visual hierarchy as a communication tool before focusing on aesthetics.",
    },

    github: null,
    demo: null,
    featured: false,
    wip: false,
    status: "finished",
  },

  {
    id: "chez-maman-bignon",
    title: "Chez Maman Bignon",
    category: "Design graphique",
    image: "/images/maman.webp",

    descFr:
      "Création d'un visuel pour faire connaître Chez Maman Bignon, une activité proposant des produits vivriers accessibles, notamment adaptés au budget des étudiants.",

    descEn:
      "Creation of a promotional visual to increase awareness of Chez Maman Bignon, offering affordable staple food products, particularly suited to students' budgets.",

    tags: ["Canva", "Design graphique"],

    type: "design",
    family: "design",

    roleFr: "Conception graphique",
    roleEn: "Graphic design",

    caseStudy: {
      contextFr:
        "Chez Maman Bignon est un projet de design graphique visant à construire une communication visuelle adaptée à une activité commerciale.",
      contextEn:
        "Chez Maman Bignon is a graphic design project focused on creating visual communication adapted to a commercial activity.",

      problemFr:
        "Comment présenter une activité et ses informations essentielles dans un visuel immédiatement compréhensible et attractif ?",
      problemEn:
        "How can a business and its essential information be presented in a visual that is immediately clear and appealing?",

      constraintsFr: [
        "Prioriser l'information essentielle",
        "Maintenir une composition lisible",
        "Créer un visuel adapté à la communication commerciale",
      ],
      constraintsEn: [
        "Prioritize essential information",
        "Maintain a readable composition",
        "Create a visual suited to commercial communication",
      ],

      decisionFr:
        "Privilégier une composition simple avec une hiérarchie visuelle permettant de comprendre rapidement le message principal.",
      decisionEn:
        "Use a simple composition with a visual hierarchy that makes the main message immediately understandable.",

      implementationFr:
        "Message → hiérarchie → composition → éléments graphiques → support final.",
      implementationEn:
        "Message → hierarchy → composition → graphic elements → final asset.",

      proofFr:
        "Le projet produit un support graphique final destiné à présenter l'activité de manière structurée et visuellement cohérente.",
      proofEn:
        "The project produces a final graphic asset designed to present the business in a structured and visually coherent way.",

      limitsFr: [
        "Projet centré sur la conception graphique.",
        "Aucune donnée de performance ou de conversion n'est disponible.",
      ],
      limitsEn: [
        "Project focused on graphic design.",
        "No performance or conversion data is available.",
      ],

      takeawayFr:
        "Ce projet m'a appris à simplifier un message commercial pour qu'il reste lisible avant même que l'utilisateur ne s'y attarde.",
      takeawayEn:
        "This project taught me to simplify a commercial message so it remains understandable at a glance.",
    },

    github: null,
    demo: null,
    featured: false,
    wip: false,
    status: "finished",
  },
];

export const EDUCATION = [
  {
    year: "2024 — Présent",
    yearEn: "2024 — Present",
    school:
      "IFRI — Institut de Formation et de Recherche en Informatique",

    degreeFr: "Licence 3 — Internet et Multimédia",
    degreeEn: "Bachelor's Year 3 — Internet & Multimedia",

    place: "Université d'Abomey-Calavi (UAC), Bénin",

    current: true,

    detailsFr:
      "Dev Web · Design & Ergonomie · Production AV · BDD · Algorithmique · Java · Python · C# · PHP",

    detailsEn:
      "Web Dev · Design & Ergonomics · AV Production · Databases · Algorithmics · Java · Python · C# · PHP",
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

export const CERTIFICATIONS = [
  {
    org: "Sololearn",
    titleFr: "Python Developer",
    titleEn: "Python Developer",
    descFr: "POO, structures de données, scripting.",
    descEn: "OOP, data structures, scripting.",
  },

  {
    org: "Sololearn",
    titleFr: "SQL Fundamentals",
    titleEn: "SQL Fundamentals",
    descFr: "Requêtes, jointures, agrégations.",
    descEn: "Queries, joins, aggregations.",
  },

  {
    org: "Sololearn",
    titleFr: "Java",
    titleEn: "Java",
    descFr: "POO, structures, concepts fondamentaux.",
    descEn: "OOP, structures, core concepts.",
  },

  {
    org: "Sololearn",
    titleFr: "C#",
    titleEn: "C#",
    descFr: "Syntaxe, POO, tableaux, récursivité.",
    descEn: "Syntax, OOP, arrays, recursion.",
  },

  {
    org: "Sololearn",
    titleFr: "C",
    titleEn: "C",
    descFr: "Pointeurs, mémoire, structures.",
    descEn: "Pointers, memory, structures.",
  },
];

export const LINKEDIN_COURSES = [
  {
    title: "HTML Essential Training",
    descFr: "Structure sémantique, accessibilité et bonnes pratiques HTML.",
    descEn: "Semantic structure, accessibility, and HTML best practices.",
  },
  {
    title: "CSS Essential Training",
    descFr: "Mise en page, styles, responsive design et organisation du CSS.",
    descEn: "Layout, styling, responsive design, and CSS organization.",
  },
  {
    title: "Web Programming Foundations",
    descFr: "Compréhension des principes fondamentaux du fonctionnement du Web.",
    descEn: "Understanding the fundamental principles of how the Web works.",
  },
  {
    title: "JavaScript Essential Training",
    descFr: "Syntaxe, logique, DOM, fonctions et programmation côté navigateur.",
    descEn: "Syntax, logic, DOM, functions, and browser-side programming.",
  },
  {
    title: "React Essential Training",
    descFr: "Composants, état, props et construction d’interfaces React.",
    descEn: "Components, state, props, and building React interfaces.",
  },
  {
    title: "Devenir développeur / développeuse React",
    descFr: "React, Node.js, Express, MongoDB et conception d’applications full-stack.",
    descEn: "React, Node.js, Express, MongoDB, and full-stack application development.",
  },
  {
    title: "L’essentiel de Laravel",
    descFr: "Fondamentaux du framework Laravel pour construire des applications web.",
    descEn: "Laravel fundamentals for building web applications.",
  },
  {
    title: "L’essentiel de PHP et MySQL",
    descFr: "Développement web côté serveur et intégration d’une base MySQL.",
    descEn: "Server-side web development and MySQL database integration.",
  },
  {
    title: "Figma for UX Design",
    descFr: "Wireframes, interfaces, prototypes et collaboration dans Figma.",
    descEn: "Wireframes, interfaces, prototypes, and collaboration in Figma.",
  },
  {
    title: "Figma: From Design to CSS Implementation",
    descFr: "Passage d’une conception Figma à une implémentation CSS fonctionnelle.",
    descEn: "Turning a Figma design into a functional CSS implementation.",
  },
];

export const CONTACT_LINKS = [
  {
    label: "+229 01 53 50 55 01",
    href: "tel:+2290153505501",
  },

  {
    label: "gaiuschanis03@gmail.com",
    href: "mailto:gaiuschanis03@gmail.com",
  },

  {
    label: "LinkedIn — Gaïus Chanis",
    href: "https://www.linkedin.com/in/ga%C3%AFus-chanis-08a782365",
  },

  {
    label: "github.com/chanis-hg",
    href: "https://github.com/chanis-hg",
  },

  {
    label: "WhatsApp",
    href: "https://wa.me/2290153505501",
  },
];

export const FORMSPREE_ID = "xgobozjw";