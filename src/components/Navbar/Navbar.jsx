import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_SECTIONS = [
  ['about',         'nav.about'],
  ['skills',        'nav.skills'],
  ['projects',      'nav.projects'],
  ['education',     'nav.education'],
  ['certifications','nav.certif'],
  ['contact',       'nav.contact'],
];

export default function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [active, setActive]       = useState('about');
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* Scroll spy */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const [id] of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 80 && bottom > 80) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const getLabel = (key) => {
    const [section, prop] = key.split('.');
    return t[section]?.[prop] ?? key;
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => scrollTo('about')}
            aria-label="Retour en haut"
          >
            G.Chanis
          </button>

          {/* Links desktop */}
          <ul className={styles.links}>
            {NAV_SECTIONS.map(([id, key]) => (
              <li key={id}>
                <button
                  className={`${styles.link} ${active === id ? styles.linkActive : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {getLabel(key)}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href="/CV_GaiusChanis_HONTONWAKOU_EN.pdf" download
              download
              className={styles.btnCv}
            >
              {t.nav.cv}
            </a>
            <button
              className={styles.btnIcon}
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              aria-label="Changer de langue"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              {lang === 'fr' ? '🇬🇧' : '🇫🇷'}
            </button>
            <button
              className={styles.btnIcon}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Changer de thème"
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_SECTIONS.map(([id, key]) => (
          <button
            key={id}
            className={`${styles.mobileLink} ${active === id ? styles.mobileLinkActive : ''}`}
            onClick={() => scrollTo(id)}
          >
            {getLabel(key)}
          </button>
        ))}
        <a
          href="/CV_GaiusChanis_HONTONWAKOU.pdf"
          download
          className={styles.mobileCv}
          onClick={() => setMenuOpen(false)}
        >
          {t.nav.cv}
        </a>
      </div>
    </>
  );
}
