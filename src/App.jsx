import { useState, useEffect, useRef } from "react";

const FR = {
  nav: { about: "À propos", skills: "Compétences", projects: "Projets", education: "Parcours", certif: "Certif.", contact: "Contact", cv: "↓ CV" },
  hero: {
    badge: "Disponible — Stages & Freelance",
    role: "Développeur Web & Designer UX/UI",
    location: "Cotonou, Bénin · IFRI / UAC",
    bio: "Passionné de code et de design, je conçois des expériences numériques qui allient rigueur technique et sensibilité créative. Mon ambition : devenir indispensable dans mon domaine et résoudre des problèmes concrets liés au numérique.",
    cta1: "Voir mes projets",
    cta2: "↓ Télécharger CV",
    passions: ["🎵 Maître de Chœur", "🏋️ Sport", "📚 Lecture", "💡 Battant", "🤝 Esprit d'équipe"],
  },
  skills: {
    title: "Compétences & Savoir-faire",
    sub: "Un mix de design et de code pour créer des produits numériques complets — de la maquette Figma à la mise en ligne.",
    levels: ["Notions", "Débutant", "Intermédiaire", "Avancé", "Expert"],
    qualities: "Qualités personnelles",
    interests: "Centres d'intérêt",
    qualityList: ["Rigueur", "Créativité", "Curiosité", "Battant", "Souci du détail", "Leadership", "Esprit d'équipe"],
    interestList: ["🎵 Musique — Maître de Chœur", "🏋️ Sport", "📚 Lecture", "💻 Veille technologique", "🎨 Design & Créativité"],
  },
  projects: {
    title: "Projets & Créations",
    sub: "Des projets concrets pour des clients réels et dans le cadre de ma formation.",
    code: "Code",
    tags: { real: "Client Réel", academic: "Académique", personal: "Personnel", design: "Design Graphique" },
  },
  education: { title: "Parcours & Formation", sub: "Mon chemin académique et mes premières expériences concrètes.", current: "En cours" },
  certif: { title: "Certifications", certified: "✓ Certifié" },
  contact: {
    title: "Travaillons ensemble",
    sub: "Un projet web, un design ou une collaboration ? Je suis disponible pour des missions freelance, stages ou tout projet à fort impact numérique.",
    name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer →",
    sent: "✓ Message envoyé ! Je vous répondrai très vite.",
    error: "Erreur d'envoi. Contactez-moi directement par email.",
  },
  footer: "Conçu & développé par Gaïus Chanis HONTONWAKOU",
};

const EN = {
  nav: { about: "About", skills: "Skills", projects: "Projects", education: "Education", certif: "Certif.", contact: "Contact", cv: "↓ Resume" },
  hero: {
    badge: "Available — Internships & Freelance",
    role: "Web Developer & UX/UI Designer",
    location: "Cotonou, Benin · IFRI / UAC",
    bio: "Passionate about code and design, I craft digital experiences that combine technical rigor with creative sensitivity. My ambition: to become indispensable in my field and solve real-world digital problems.",
    cta1: "See my projects",
    cta2: "↓ Download Resume",
    passions: ["🎵 Choir Master", "🏋️ Sport", "📚 Reading", "💡 Fighter", "🤝 Team player"],
  },
  skills: {
    title: "Skills & Expertise",
    sub: "A mix of design and code to create complete digital products — from Figma mockup to deployment.",
    levels: ["Basics", "Beginner", "Intermediate", "Advanced", "Expert"],
    qualities: "Personal qualities", interests: "Interests",
    qualityList: ["Rigor", "Creativity", "Curiosity", "Fighter", "Attention to detail", "Leadership", "Teamwork"],
    interestList: ["🎵 Music — Choir Master", "🏋️ Sport", "📚 Reading", "💻 Tech watch", "🎨 Design & Creativity"],
  },
  projects: {
    title: "Projects & Creations",
    sub: "Concrete projects for real clients and as part of my training.",
    code: "Code",
    tags: { real: "Real Client", academic: "Academic", personal: "Personal", design: "Graphic Design" },
  },
  education: { title: "Education & Background", sub: "My academic path and first concrete experiences.", current: "Ongoing" },
  certif: { title: "Certifications", certified: "✓ Certified" },
  contact: {
    title: "Let's work together",
    sub: "A web project, a design or a collaboration? I'm available for freelance missions, internships or any high-impact digital project.",
    name: "Your name", email: "Your email", message: "Your message", send: "Send →",
    sent: "✓ Message sent! I'll get back to you very soon.",
    error: "Send error. Contact me directly by email.",
  },
  footer: "Designed & developed by Gaïus Chanis HONTONWAKOU",
};

const SKILLS = [
  { name: "HTML / CSS", icon: "🌐", level: 4, category: "Front-end" },
  { name: "JavaScript", icon: "⚡", level: 3, category: "Front-end" },
  { name: "React", icon: "⚛️", level: 2, category: "Front-end" },
  { name: "Java", icon: "☕", level: 2, category: "Back-end" },
  { name: "Python", icon: "🐍", level: 3, category: "Back-end" },
  { name: "C#", icon: "🔷", level: 2, category: "Back-end" },
  { name: "C", icon: "⚙️", level: 2, category: "Back-end" },
  { name: "PHP", icon: "🐘", level: 2, category: "Back-end" },
  { name: "SQL", icon: "🗄️", level: 3, category: "Data" },
  { name: "Figma", icon: "🖌️", level: 4, category: "Design" },
  { name: "Canva", icon: "🎨", level: 4, category: "Design" },
  { name: "UX/UI Design", icon: "📱", level: 3, category: "Design" },
];

const PROJECTS = [
  { id: 1, title: "Atelier Prestige Couture", descFr: "Site vitrine pour un couturier — galerie, commandes WhatsApp, identité rouge & or.", descEn: "Showcase site for a tailor — gallery, WhatsApp orders, red & gold identity.", tags: ["HTML", "CSS", "JS"], type: "real", github: "https://github.com/chanis-hg", emoji: "✂️", color: "#b8860b" },
  { id: 2, title: "Salon Élégance", descFr: "Site vitrine salon de coiffure — prestations, réservation WhatsApp, design noir & or.", descEn: "Hair salon showcase — services, WhatsApp booking, black & gold design.", tags: ["HTML", "CSS", "JS"], type: "real", github: "https://github.com/chanis-hg", emoji: "💇", color: "#2d2d2d" },
  { id: 3, title: "Africa Pulse", descFr: "Dashboard de données africaines — population, PIB et accès internet pour 15 pays, avec filtres régionaux, graphiques animés et fiches détail par pays.", descEn: "African data dashboard — population, GDP and internet access for 15 countries, with regional filters, animated charts and country detail panels.", tags: ["React", "Recharts", "Vite", "JS"], type: "personal", github: "https://github.com/chanis-hg/Africa-Pulse", demo: "https://africa-pulse.netlify.app", emoji: "🌍", color: "#D4A853" },
  { id: 4, title: "CV Generator", descFr: "Outil de création de CV professionnel — formulaire multi-étapes, aperçu en temps réel, 4 thèmes couleur et export PDF. Bilingue FR/EN.", descEn: "Professional resume builder — multi-step form, real-time preview, 4 color themes and PDF export. Bilingual FR/EN.", tags: ["React", "Vite", "html2pdf", "JS"], type: "personal", github: "https://github.com/chanis-hg/cvgen-hg", demo: "https://cvgen-hg.netlify.app", emoji: "📄", color: "#2E7D5E" },
  { id: 5, title: "Plateforme Agri-Vivrier", descFr: "E-commerce de produits vivriers — ergonomie, catalogue, panier. Projet d'ergonomie IFRI.", descEn: "Food products e-commerce — UX/ergonomics, catalogue, cart. IFRI project.", tags: ["Figma", "UX/UI"], type: "academic", github: "https://github.com/chanis-hg", emoji: "🌾", color: "#4a7c2f" },
  { id: 6, title: "IFRI Covoiturage", descFr: "Application de covoiturage pour les étudiants IFRI — mise en relation, trajets, communauté.", descEn: "Carpooling app for IFRI students — matching, routes, community.", tags: ["Figma", "UX/UI"], type: "academic", github: "https://github.com/chanis-hg", emoji: "🚗", color: "#5b3a8a" },
  { id: 7, title: "Alimentation Montcho", descFr: "Affiche pour épicerie de viandes et produits frais — positionnement premium.", descEn: "Poster for a meat and fresh products store — premium positioning.", tags: ["Canva"], type: "design", github: null, emoji: "🥩", color: "#8a2a2a" },
  { id: 8, title: "Chez Maman Bignon", descFr: "Affiche épicerie familiale à Womey — kit alimentaire bio à moindre coût.", descEn: "Family grocery poster in Womey — organic food kit at lower cost.", tags: ["Canva"], type: "design", github: null, emoji: "🏪", color: "#7a5a1e" },
];

const EDUCATION = [
  {
    year: "2024 — Présent / Present",
    school: "IFRI — Institut de Formation et de Recherche en Informatique",
    degreeFr: "Licence 2 — Internet et Multimédia",
    degreeEn: "Bachelor's Degree Year 2 — Internet & Multimedia",
    place: "University of Abomey-Calavi (UAC), Bénin",
    current: true,
    detailsFr: "Développement Web (HTML, CSS, JS, PHP, Java, Python, C#) · Design & Ergonomie · Production Audiovisuelle · Base de données · Algorithmique",
    detailsEn: "Web Development (HTML, CSS, JS, PHP, Java, Python, C#) · Design & Ergonomics · Audiovisual Production · Databases · Algorithmics",
  },
  {
    year: "2023 — 2024",
    school: "Collège Espérance 2000",
    degreeFr: "Baccalauréat — Série D",
    degreeEn: "High School Diploma — Series D (Science)",
    place: "Bénin",
    current: false,
    detailsFr: "",
    detailsEn: "",
  },
];

const CERTIFS = [
  { org: "Sololearn", titleFr: "Python Developer", titleEn: "Python Developer", descFr: "Structures de données, fonctions, POO et scripting Python.", descEn: "Data structures, functions, OOP and Python scripting.", icon: "🐍" },
  { org: "Sololearn", titleFr: "SQL Fundamentals", titleEn: "SQL Fundamentals", descFr: "Requêtes SQL, jointures, agrégations et gestion de BDD.", descEn: "SQL queries, joins, aggregations and database management.", icon: "🗄️" },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, visible] = useScrollReveal();
  const transforms = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", scale: "scale(0.92)" };
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : transforms[direction],
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SectionHeader({ title, sub, fgMuted }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>{title}</h2>
      {sub && <p style={{ fontSize: "0.95rem", color: fgMuted, maxWidth: "540px", lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState("fr");
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("about");
  const [filterType, setFilterType] = useState("all");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const t = lang === "fr" ? FR : EN;

  const bg = dark ? "#0d0d0d" : "#f5f0e8";
  const fg = dark ? "#e8e8e2" : "#1c1a14";
  const fgMuted = dark ? "#888" : "#6b6350";
  const fgSubtle = dark ? "#555" : "#a09880";
  const cardBg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const cardBorder = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)";
  const navBg = dark ? "rgba(13,13,13,0.92)" : "rgba(245,240,232,0.92)";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "education", "certifications", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 80 && r.bottom > 80) { setActiveNav(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/xpwzggoo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      setFormStatus("ok");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
    setSending(false);
  };

  const filtered = filterType === "all" ? PROJECTS : PROJECTS.filter(p => p.type === filterType);

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: bg, color: fg, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes ringRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ringRotateReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pulseDot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.7); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-6px); } }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: ${fgSubtle}; }
        input:focus, textarea:focus { border-color: rgba(212,175,55,0.5) !important; outline: none; }
        .nav-btn { background:none; border:none; cursor:pointer; padding:0.4rem 0.75rem; border-radius:6px; font-family:'Syne',sans-serif; font-size:0.82rem; transition: all 0.2s; position:relative; }
        .nav-btn::after { content:''; position:absolute; bottom:-2px; left:50%; right:50%; height:2px; background:#d4af37; border-radius:2px; transition: left 0.25s, right 0.25s; }
        .nav-btn:hover::after, .nav-btn.active::after { left:10%; right:10%; }
        .nav-btn:hover { color: #d4af37 !important; }
        .skill-card { transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; }
        .skill-card:hover { transform: translateY(-4px) !important; border-color: rgba(212,175,55,0.45) !important; box-shadow: 0 8px 24px rgba(212,175,55,0.08); }
        .proj-card { transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.25s; }
        .proj-card:hover { transform: translateY(-6px) scale(1.01) !important; border-color: rgba(212,175,55,0.4) !important; box-shadow: 0 12px 32px rgba(212,175,55,0.1); }
        .contact-link { transition: all 0.22s; }
        .contact-link:hover { border-color: rgba(212,175,55,0.45) !important; color: #d4af37 !important; transform: translateX(4px); }
        .cta-btn { transition: opacity 0.2s, transform 0.2s; }
        .cta-btn:hover { opacity: 0.88; transform: translateY(-2px); }
        .cta-outline { transition: border-color 0.2s, color 0.2s, transform 0.2s; }
        .cta-outline:hover { border-color: #d4af37 !important; color: #d4af37 !important; transform: translateY(-2px); }
        .passion-tag { transition: all 0.2s; cursor: default; }
        .passion-tag:hover { border-color: rgba(212,175,55,0.35) !important; color: #d4af37 !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: navBg, backdropFilter: "blur(14px)", borderBottom: `1px solid ${dark ? "rgba(212,175,55,0.12)" : "rgba(0,0,0,0.08)"}`, padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "62px" }}>
        <span onClick={() => scrollTo("about")} style={{ cursor: "pointer", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "#d4af37", animation: "float 4s ease-in-out infinite", display: "inline-block" }}>G.Chanis</span>
        <div style={{ display: "flex", gap: "0.1rem", alignItems: "center" }}>
          {[["about", t.nav.about], ["skills", t.nav.skills], ["projects", t.nav.projects], ["education", t.nav.education], ["certifications", t.nav.certif], ["contact", t.nav.contact]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className={`nav-btn${activeNav === id ? " active" : ""}`} style={{ fontWeight: activeNav === id ? 700 : 400, color: activeNav === id ? "#d4af37" : fgMuted }}>
              {label}
            </button>
          ))}
          <a href="CV2_GaiusChanis_HONTONWAKOU.pdf" download="CV_GaiusChanis_HONTONWAKOU.pdf" style={{ background: "#d4af37", color: "#0d0d0d", border: "none", cursor: "pointer", padding: "0.4rem 0.85rem", borderRadius: "6px", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", marginLeft: "0.5rem" }}>
            {t.nav.cv}
          </a>
          <button onClick={() => setLang(lang === "fr" ? "en" : "fr")} style={{ background: "none", border: `1px solid ${dark ? "rgba(212,175,55,0.25)" : "rgba(0,0,0,0.15)"}`, cursor: "pointer", padding: "0.3rem 0.6rem", borderRadius: "6px", fontSize: "0.75rem", color: dark ? "#d4af37" : fgMuted, marginLeft: "0.25rem" }}>
            {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <button onClick={() => setDark(!dark)} style={{ background: "none", border: `1px solid ${dark ? "rgba(212,175,55,0.25)" : "rgba(0,0,0,0.15)"}`, cursor: "pointer", padding: "0.3rem 0.5rem", borderRadius: "6px", fontSize: "0.9rem", marginLeft: "0.25rem", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "rotate(20deg)"} onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto", gap: "3rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 380px" }}>
          <Reveal delay={0.1}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(38,191,107,0.1)", border: "1px solid rgba(38,191,107,0.28)", color: "#26bf6b", padding: "0.35rem 0.9rem", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 600, marginBottom: "1.5rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#26bf6b", animation: "pulseDot 2s infinite", display: "inline-block" }}></span>
              {t.hero.badge}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "0.5rem", color: fg }}>
              Gaïus Chanis<br />
              <span style={{ color: "#d4af37" }}>HONTONWAKOU</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p style={{ fontSize: "1.05rem", color: fgMuted, marginBottom: "0.25rem", fontWeight: 500 }}>{t.hero.role}</p>
            <p style={{ fontSize: "0.85rem", color: fgSubtle, marginBottom: "1.5rem" }}>📍 {t.hero.location}</p>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.8, color: dark ? "#b0b0a8" : "#5a5040", maxWidth: "500px", marginBottom: "2rem" }}>{t.hero.bio}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {t.hero.passions.map((p, i) => (
                <span key={i} className="passion-tag" style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)", border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}`, padding: "0.3rem 0.75rem", borderRadius: "20px", fontSize: "0.82rem", color: fgMuted }}>{p}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <button className="cta-btn" onClick={() => scrollTo("projects")} style={{ background: "#d4af37", color: "#0d0d0d", border: "none", cursor: "pointer", padding: "0.75rem 1.75rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Syne',sans-serif" }}>{t.hero.cta1}</button>
              <a className="cta-outline" href="CV2_GaiusChanis_HONTONWAKOU.pdf" download="CV_GaiusChanis_HONTONWAKOU.pdf" style={{ background: "none", color: fg, border: `1px solid ${dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}`, padding: "0.75rem 1.75rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>{t.hero.cta2}</a>
            </div>
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              {[["🐙 GitHub", "https://github.com/chanis-hg"], ["💼 LinkedIn", "https://linkedin.com/in/gaïus-chanis-08a782365"], ["💬 WhatsApp", "https://wa.me/22901535055501"]].map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" style={{ color: fgSubtle, fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#d4af37"} onMouseLeave={e => e.target.style.color = fgSubtle}>{label}</a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* PHOTO */}
        <Reveal delay={0.2} direction="scale">
          <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ position: "relative", width: "280px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: "-16px", borderRadius: "50%", border: "2px dashed rgba(212,175,55,0.35)", animation: "ringRotate 12s linear infinite" }} />
              <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px solid transparent", borderTopColor: "#d4af37", borderRightColor: "rgba(212,175,55,0.3)", animation: "ringRotateReverse 6s linear infinite" }} />
              <div style={{ position: "absolute", inset: "-16px", borderRadius: "50%", animation: "ringRotate 12s linear infinite" }}>
                <div style={{ position: "absolute", top: "6px", left: "50%", width: "8px", height: "8px", borderRadius: "50%", background: "#d4af37", transform: "translateX(-50%)", boxShadow: "0 0 8px rgba(212,175,55,0.6)" }} />
                <div style={{ position: "absolute", bottom: "6px", left: "50%", width: "5px", height: "5px", borderRadius: "50%", background: "rgba(212,175,55,0.5)", transform: "translateX(-50%)" }} />
              </div>
              <div style={{ width: "240px", height: "240px", borderRadius: "50%", overflow: "hidden", border: "3px solid #d4af37", boxShadow: `0 0 40px rgba(212,175,55,0.18), 0 0 0 6px ${dark ? "rgba(212,175,55,0.06)" : "rgba(212,175,55,0.1)"}` }}>
                <img src="profil.jpg.jpg" alt="Gaïus Chanis" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "#d4af37", color: "#0d0d0d", padding: "0.3rem 0.7rem", borderRadius: "12px", fontSize: "0.7rem", fontWeight: 700, boxShadow: "0 4px 12px rgba(212,175,55,0.3)" }}>
                Designer & Dev
              </div>
            </div>
            <div style={{ background: dark ? "rgba(212,175,55,0.07)" : "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.22)", borderRadius: "12px", padding: "0.85rem 1.25rem", textAlign: "center", maxWidth: "260px" }}>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#d4af37", fontStyle: "italic", fontWeight: 500, lineHeight: 1.6 }}>
                "Peu importe combien tu es puissant,<br />si tu abandonnes, tout s'effondre."
              </p>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.7rem", color: fgSubtle }}>— Itachi Uchiha</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal><SectionHeader title={t.skills.title} sub={t.skills.sub} fgMuted={fgMuted} /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <div className="skill-card" style={{ background: cardBg, border: `1px solid ${cardBorder}`, borderRadius: "12px", padding: "1rem 1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{skill.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem", color: fg }}>{skill.name}</span>
                  </div>
                  <span style={{ fontSize: "0.68rem", color: fgSubtle, background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>{skill.category}</span>
                </div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "0.3rem" }}>
                  {[1, 2, 3, 4, 5].map(dot => (
                    <div key={dot} style={{ flex: 1, height: "5px", borderRadius: "3px", background: dot <= skill.level ? "#d4af37" : dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.1)" }} />
                  ))}
                </div>
                <span style={{ fontSize: "0.7rem", color: fgSubtle }}>{t.skills.levels[skill.level - 1]}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <Reveal direction="left">
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#d4af37", marginBottom: "1rem" }}>{t.skills.qualities}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {t.skills.qualityList.map(q => (
                  <span key={q} style={{ background: dark ? "rgba(212,175,55,0.08)" : "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", color: "#d4af37", padding: "0.35rem 0.85rem", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 500 }}>✦ {q}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#d4af37", marginBottom: "1rem" }}>{t.skills.interests}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {t.skills.interestList.map(item => (
                  <span key={item} style={{ fontSize: "0.88rem", color: dark ? "#b0b0a8" : "#5a5040" }}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "5rem 2rem", background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.025)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal><SectionHeader title={t.projects.title} sub={t.projects.sub} fgMuted={fgMuted} /></Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {[["all", lang === "fr" ? "Tous" : "All"], ["real", t.projects.tags.real], ["academic", t.projects.tags.academic], ["personal", t.projects.tags.personal], ["design", t.projects.tags.design]].map(([val, label]) => (
                <button key={val} onClick={() => setFilterType(val)} style={{ background: filterType === val ? "#d4af37" : "none", color: filterType === val ? "#0d0d0d" : fgMuted, border: `1px solid ${filterType === val ? "#d4af37" : cardBorder}`, cursor: "pointer", padding: "0.35rem 0.9rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: filterType === val ? 700 : 400, transition: "all 0.22s", fontFamily: "'Syne',sans-serif" }}>
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(295px, 1fr))", gap: "1.25rem" }}>
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div className="proj-card" style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: `1px solid ${cardBorder}`, borderRadius: "14px", overflow: "hidden" }}>
                  <div style={{ height: "110px", background: `linear-gradient(135deg, ${p.color}18, ${p.color}38)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", borderBottom: `1px solid ${cardBorder}` }}>
                    {p.emoji}
                  </div>
                  <div style={{ padding: "1.1rem 1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: fg }}>{p.title}</h3>
                      <span style={{ fontSize: "0.65rem", background: cardBg, padding: "0.2rem 0.5rem", borderRadius: "4px", color: fgSubtle, whiteSpace: "nowrap", marginLeft: "0.5rem" }}>{t.projects.tags[p.type]}</span>
                    </div>
                    <p style={{ margin: "0 0 0.85rem", fontSize: "0.82rem", color: fgMuted, lineHeight: 1.65 }}>{lang === "fr" ? p.descFr : p.descEn}</p>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{ fontSize: "0.68rem", background: "rgba(212,175,55,0.1)", color: "#d4af37", border: "1px solid rgba(212,175,55,0.2)", padding: "0.2rem 0.55rem", borderRadius: "4px", fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" style={{ fontSize: "0.78rem", color: fgSubtle, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#d4af37"} onMouseLeave={e => e.target.style.color = fgSubtle}>
                        🐙 {t.projects.code}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal><SectionHeader title={t.education.title} sub={t.education.sub} fgMuted={fgMuted} /></Reveal>
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{ position: "absolute", left: "7px", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(to bottom, #d4af37, rgba(212,175,55,0.1))" }} />
          {EDUCATION.map((edu, i) => (
            <Reveal key={i} delay={i * 0.15} direction="left">
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                <div style={{ position: "absolute", left: "-1.85rem", top: "6px", width: "16px", height: "16px", borderRadius: "50%", background: edu.current ? "#d4af37" : dark ? "#333" : "#c8bea8", border: `2px solid ${edu.current ? "#d4af37" : dark ? "#555" : "#a89880"}`, boxShadow: edu.current ? "0 0 12px rgba(212,175,55,0.5)" : "none" }} />
                <div style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: `1px solid ${edu.current ? "rgba(212,175,55,0.3)" : cardBorder}`, borderRadius: "12px", padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <p style={{ margin: "0 0 0.25rem", fontSize: "0.72rem", color: "#d4af37", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{edu.year}</p>
                      <p style={{ margin: "0 0 0.25rem", fontSize: "0.97rem", fontWeight: 700, color: fg }}>{edu.school}</p>
                      <p style={{ margin: "0 0 0.25rem", fontSize: "0.88rem", color: dark ? "#b0b0a8" : "#5a5040" }}>{lang === "fr" ? edu.degreeFr : edu.degreeEn}</p>
                      <p style={{ margin: 0, fontSize: "0.78rem", color: fgSubtle }}>📍 {edu.place}</p>
                      {edu.detailsFr !== "" && (
                        <p style={{ margin: "0.5rem 0 0", fontSize: "0.78rem", color: "#d4af37", lineHeight: 1.65 }}>
                          {lang === "fr" ? edu.detailsFr : edu.detailsEn}
                        </p>
                      )}
                    </div>
                    {edu.current && (
                      <span style={{ background: "rgba(38,191,107,0.1)", color: "#26bf6b", border: "1px solid rgba(38,191,107,0.25)", padding: "0.25rem 0.75rem", borderRadius: "12px", fontSize: "0.7rem", fontWeight: 700 }}>
                        {t.education.current}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "5rem 2rem", background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.025)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal><SectionHeader title={t.certif.title} sub="" fgMuted={fgMuted} /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {CERTIFS.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="skill-card" style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: `1px solid ${cardBorder}`, borderRadius: "14px", padding: "1.5rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "2rem", lineHeight: 1 }}>{c.icon}</div>
                  <div>
                    <p style={{ margin: "0 0 0.2rem", fontSize: "0.72rem", color: fgSubtle, fontWeight: 600 }}>{c.org}</p>
                    <p style={{ margin: "0 0 0.35rem", fontSize: "0.95rem", fontWeight: 700, color: fg }}>{lang === "fr" ? c.titleFr : c.titleEn}</p>
                    <p style={{ margin: "0 0 0.75rem", fontSize: "0.82rem", color: fgMuted, lineHeight: 1.6 }}>{lang === "fr" ? c.descFr : c.descEn}</p>
                    <span style={{ fontSize: "0.72rem", color: "#26bf6b", fontWeight: 700 }}>{t.certif.certified}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal><SectionHeader title={t.contact.title} sub={t.contact.sub} fgMuted={fgMuted} /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <Reveal direction="left" delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[["📞", "+229 01 53 50 55 01", "tel:+22901535055501"], ["✉️", "gaiuschanis03@gmail.com", "mailto:gaiuschanis03@gmail.com"], ["💼", "LinkedIn — Gaïus Chanis", "https://linkedin.com/in/gaïus-chanis-08a782365"], ["🐙", "github.com/chanis-hg", "https://github.com/chanis-hg"], ["💬", "WhatsApp", "https://wa.me/22901535055501"]].map(([icon, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-link" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: dark ? "#b0b0a8" : "#5a5040", fontSize: "0.88rem", padding: "0.75rem 1rem", borderRadius: "10px", border: `1px solid ${cardBorder}`, background: cardBg }}>
                  <span>{icon}</span> {label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[["text", "name", t.contact.name], ["email", "email", t.contact.email]].map(([type, field, placeholder]) => (
                <input key={field} type={type} placeholder={placeholder} required value={formState[field]} onChange={e => setFormState({ ...formState, [field]: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: `1px solid ${cardBorder}`, background: cardBg, color: fg, fontSize: "0.9rem", fontFamily: "'Syne',sans-serif" }} />
              ))}
              <textarea placeholder={t.contact.message} required rows={5} value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: `1px solid ${cardBorder}`, background: cardBg, color: fg, fontSize: "0.9rem", resize: "vertical", fontFamily: "'Syne',sans-serif" }} />
              <button type="submit" disabled={sending} style={{ background: "#d4af37", color: "#0d0d0d", border: "none", padding: "0.85rem", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.7 : 1, fontFamily: "'Syne',sans-serif", transition: "opacity 0.2s, transform 0.2s" }} onMouseEnter={e => { if (!sending) e.currentTarget.style.transform = "translateY(-2px)"; }} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                {sending ? "..." : t.contact.send}
              </button>
              {formStatus === "ok" && <p style={{ color: "#26bf6b", fontSize: "0.85rem" }}>{t.contact.sent}</p>}
              {formStatus === "error" && <p style={{ color: "#e24b4a", fontSize: "0.85rem" }}>{t.contact.error}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "2.5rem 2rem", borderTop: `1px solid ${cardBorder}`, textAlign: "center" }}>
        <p style={{ fontSize: "0.85rem", color: fgSubtle, marginBottom: "0.4rem" }}>{t.footer}</p>
        <p style={{ fontSize: "0.72rem", color: dark ? "#2e2e2a" : "#c8bea8" }}>Built with React · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
