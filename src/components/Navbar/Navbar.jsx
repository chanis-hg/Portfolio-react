import { useEffect, useState } from "react";
import {
  Download,
  Languages,
  Menu,
  Moon,
  Sun,
  X,
  Home,
  FolderKanban,
  GraduationCap,
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
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

export default function Navbar({
  t,
  lang,
  setLang,
  theme,
  setTheme,
}) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_SECTIONS
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const { top, bottom } =
          section.getBoundingClientRect();

        return top <= 140 && bottom > 140;
      });

      if (current) {
        setActive(current.id);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.nav} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.inner}>
        {/* IDENTITÉ */}
        <button
          type="button"
          className={styles.logo}
          onClick={() => scrollTo("home")}
          aria-label="Retour à l'accueil"
        >
          G.Chanis
        </button>

        {/* ACTIONS */}
        <div className={styles.actions}>
          {/* CV */}
          <a
            href="/Gaïus Chanis HONTONWAKOU CV_fr.pdf"
            download
            className={styles.btnCv}
          >
            <Download
              size={15}
              strokeWidth={1.8}
            />
            <span>{t.nav.cv}</span>
          </a>

          {/* LANGUE */}
          <button
            type="button"
            className={styles.btnIcon}
            onClick={() =>
              setLang(lang === "fr" ? "en" : "fr")
            }
            title="Changer de langue"
            aria-label="Changer de langue"
          >
            <Languages
              size={17}
              strokeWidth={1.8}
            />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* THÈME */}
          <button
            type="button"
            className={styles.btnIcon}
            onClick={() =>
              setTheme(
                theme === "dark" ? "light" : "dark",
              )
            }
            title="Changer de thème"
            aria-label="Changer de thème"
          >
            {theme === "dark" ? (
              <Sun
                size={17}
                strokeWidth={1.8}
              />
            ) : (
              <Moon
                size={17}
                strokeWidth={1.8}
              />
            )}
          </button>

          {/* NAVIGATION */}
          <div
            className={styles.menuArea}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className={`${styles.menuButton} ${
                menuOpen
                  ? styles.menuButtonOpen
                  : ""
              }`}
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label={
                menuOpen
                  ? "Fermer la navigation"
                  : "Ouvrir la navigation"
              }
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              {menuOpen ? (
                <X
                  size={19}
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  size={19}
                  strokeWidth={1.8}
                />
              )}
            </button>

            {/* MENU */}
            <div
              className={`${styles.menuPanel} ${
                menuOpen
                  ? styles.menuPanelOpen
                  : ""
              }`}
            >
              {NAV_SECTIONS.map(
                ({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.menuItem} ${
                      active === id
                        ? styles.menuItemActive
                        : ""
                    }`}
                    onClick={() => scrollTo(id)}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />

                    <span>{label}</span>
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}