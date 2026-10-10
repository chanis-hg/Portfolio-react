import { useEffect, useRef, useState } from "react";
import {
  Download,
  FolderKanban,
  GitBranch,
  GraduationCap,
  Home,
  Languages,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import styles from "./Navbar.module.css";

export const CV_URL = "/cv-gaius-chanis-fr.pdf";

const NAV_SECTIONS = [
  { id: "home", key: "home", icon: Home },
  { id: "projects", key: "projects", icon: FolderKanban },
  { id: "journey", key: "journey", icon: GraduationCap },
  { id: "capabilities", key: "capabilities", icon: GitBranch },
  { id: "contact", key: "contact", icon: Mail },
];

export default function Navbar({ t, lang, setLang, theme, setTheme }) {
  const isFr = lang === "fr";
  const [active, setActive] = useState("home");
  const [mode, setMode] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const copy = {
    home: isFr ? "Retour à l'accueil" : "Back to home",
    openMenu: isFr ? "Ouvrir le menu" : "Open menu",
    closeMenu: isFr ? "Fermer le menu" : "Close menu",
    lang: isFr ? "Switch to English" : "Passer en français",
    langShort: isFr ? "EN" : "FR",
    theme: theme === "dark"
      ? isFr ? "Passer au thème clair" : "Switch to light theme"
      : isFr ? "Passer au thème sombre" : "Switch to dark theme",
    cv: isFr ? "Télécharger mon CV" : "Download my resume",
    mainNav: isFr ? "Navigation principale" : "Main navigation",
  };

  const toggleLang = () => setLang(isFr ? "en" : "fr");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  /* Mode compact quand le Hero est sorti de l'écran */
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setMode(entry.isIntersecting && entry.intersectionRatio > 0.4 ? "hero" : "focus"),
      { threshold: [0, 0.4, 0.7, 1], rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /* Section active au défilement */
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const current = NAV_SECTIONS.map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .find((section) => {
          const { top, bottom } = section.getBoundingClientRect();
          return top <= 140 && bottom > 140;
        });

      if (current) setActive(current.id);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* Menu mobile : fermeture par Échap ou clic à l'extérieur */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav} data-mode={mode} aria-label={copy.mainNav}>
      <div className={styles.capsule}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => scrollTo("home")}
          aria-label={copy.home}
        >
          <span className={styles.brandFull}>G.Chanis</span>
          <span className={styles.brandShort} aria-hidden="true">G</span>
        </button>

        <span className={styles.divider} aria-hidden="true" />

        <ul className={styles.items}>
          {NAV_SECTIONS.map(({ id, key, icon: Icon }) => {
            const isActive = active === id;
            return (
              <li key={id} data-active={isActive}>
                <button
                  type="button"
                  className={styles.item}
                  onClick={() => scrollTo(id)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={styles.bubble} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className={styles.label}>{t.nav[key]}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.menuArea} ref={menuRef}>
          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>

          <div
            id="mobile-menu"
            className={`${styles.menuPanel} ${menuOpen ? styles.menuPanelOpen : ""}`}
          >
            {NAV_SECTIONS.map(({ id, key, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`${styles.menuItem} ${active === id ? styles.menuItemActive : ""}`}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? "true" : undefined}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{t.nav[key]}</span>
              </button>
            ))}

            <div className={styles.menuTools}>
              <a href={CV_URL} download className={styles.menuTool}>
                <Download size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{t.nav.cv}</span>
              </a>
              <button type="button" className={styles.menuTool} onClick={toggleLang} aria-label={copy.lang}>
                <Languages size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{copy.langShort}</span>
              </button>
              <button type="button" className={styles.menuTool} onClick={toggleTheme} aria-label={copy.theme}>
                {theme === "dark"
                  ? <Sun size={17} strokeWidth={1.8} aria-hidden="true" />
                  : <Moon size={17} strokeWidth={1.8} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.utils}>
        <a
          href={CV_URL}
          download
          className={styles.btnIcon}
          data-tooltip={copy.cv}
          aria-label={copy.cv}
        >
          <Download size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>

        <button
          type="button"
          className={styles.btnIcon}
          onClick={toggleLang}
          data-tooltip={copy.lang}
          aria-label={copy.lang}
        >
          <span className={styles.langCode}>{copy.langShort}</span>
        </button>

        <button
          type="button"
          className={styles.btnIcon}
          onClick={toggleTheme}
          data-tooltip={copy.theme}
          aria-label={copy.theme}
        >
          {theme === "dark"
            ? <Sun size={17} strokeWidth={1.8} aria-hidden="true" />
            : <Moon size={17} strokeWidth={1.8} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}