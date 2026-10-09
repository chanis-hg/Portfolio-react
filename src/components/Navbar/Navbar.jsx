import { useEffect, useRef, useState } from "react";

import {
  Download,
  GitBranch,
  Languages,
  Menu,
  Moon,
  Sun,
  X,
  Home,
  FolderKanban,
  GraduationCap,
  GitPullRequest,
  Mail,
} from "lucide-react";

import styles from "./Navbar.module.css";

const NAV_SECTIONS = [
  {
    id: "home",
    label: "Accueil",
    icon: Home,
  },
  {
    id: "projects",
    label: "Projets",
    icon: FolderKanban,
  },
  {
    id: "journey",
    label: "Parcours",
    icon: GraduationCap,
  },
  {
    id: "capabilities",
    label: "Contribution",
    icon: GitBranch,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];


export default function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [active, setActive] = useState("home");
  const [mode, setMode] = useState("hero"); // "hero" | "focus"
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 180);
  };

  /* =================================
     MODE (hero ↔ focus) VIA OBSERVER
  ================================= */
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero considérée "sortie" quand moins de 40% visible
        setMode(
          entry.isIntersecting && entry.intersectionRatio > 0.4
            ? "hero"
            : "focus",
        );
      },
      {
        threshold: [0, 0.4, 0.7, 1],
        rootMargin: "-80px 0px 0px 0px",
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_SECTIONS.map(({ id }) =>
        document.getElementById(id),
      ).filter(Boolean);

      const current = sections.find((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= 140 && bottom > 140;
      });

      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =================================
     NAVIGATION
  ================================= */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.clearTimeout(closeTimer.current);
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav} data-mode={mode}>
      {/* ============ CAPSULE DE NAVIGATION ============ */}
      <div className={styles.capsule}>
        {/* Marque */}
        <button
          type="button"
          className={styles.brand}
          onClick={() => scrollTo("home")}
          aria-label="Retour à l'accueil"
        >
          <span className={styles.brandFull}>G.Chanis</span>
          <span className={styles.brandShort} aria-hidden="true">
            G
          </span>
        </button>

        {/* Séparateur discret */}
        <span className={styles.divider} aria-hidden="true" />

        {/* Items */}
        <ul className={styles.items}>
          {NAV_SECTIONS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id} data-active={isActive}>
                <button
                  type="button"
                  className={styles.item}
                  onClick={() => scrollTo(id)}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={label}
                >
                  <span className={styles.bubble}>
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className={styles.label}>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Burger mobile (dans la capsule) */}
        <div
          className={styles.menuArea}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          <button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={
              menuOpen ? "Fermer la navigation" : "Ouvrir la navigation"
            }
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.8} />
            ) : (
              <Menu size={18} strokeWidth={1.8} />
            )}
          </button>

          <div
            className={`${styles.menuPanel} ${
              menuOpen ? styles.menuPanelOpen : ""
            }`}
          >
            {NAV_SECTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`${styles.menuItem} ${
                  active === id ? styles.menuItemActive : ""
                }`}
                onClick={() => scrollTo(id)}
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.utils}>
        <a
          href="/Gaïus Chanis HONTONWAKOU CV_fr.pdf"
          download
          className={styles.btnCv}
          data-tooltip={t.nav.cv}
          aria-label={t.nav.cv}
        >
          <Download size={16} strokeWidth={1.8} />
        </a>

        <button
          type="button"
          className={styles.btnIcon}
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          data-tooltip="Changer de langue"
          aria-label="Changer de langue"
        >
          <Languages size={16} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          className={styles.btnIcon}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          data-tooltip="Changer de thème"
          aria-label="Changer de thème"
        >
          {theme === "dark" ? (
            <Sun size={16} strokeWidth={1.8} />
          ) : (
            <Moon size={16} strokeWidth={1.8} />
          )}
        </button>
      </div>
    </nav>
  );
}
