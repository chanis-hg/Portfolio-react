import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_SECTIONS = [
  ['about',      'nav.about'],
  ['experience', 'nav.experience'],
  ['projects',   'nav.projects'],
  ['skills',     'nav.skills'],
  ['education',  'nav.education'],
  ['contact',    'nav.contact'],
];

export default function Navbar({ t, lang, setLang, theme, setTheme }) {
  const [active,   setActive]   = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const getLabel = (key) => { const [s, p] = key.split('.'); return t[s]?.[p] ?? key; };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => scrollTo('about')}>G.Chanis</button>

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

          <div className={styles.actions}>
            <a href="/Gaïus Chanis HONTONWAKOU CV_fr.pdf" download className={styles.btnCv}>{t.nav.cv}</a>
            <button className={styles.btnIcon} onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} title="Langue">
              {lang === 'fr' ? '🇬🇧' : '🇫🇷'}
            </button>
            <button className={styles.btnIcon} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Thème">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_SECTIONS.map(([id, key]) => (
          <button key={id} className={`${styles.mobileLink} ${active === id ? styles.mobileLinkActive : ''}`} onClick={() => scrollTo(id)}>
            {getLabel(key)}
          </button>
        ))}
        <a href="/Gaïus Chanis HONTONWAKOU CV_fr.pdf" download className={styles.mobileCv} onClick={() => setMenuOpen(false)}>{t.nav.cv}</a>
      </div>
    </>
  );
}
