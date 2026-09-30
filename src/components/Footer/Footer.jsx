import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer({ t, lang }) {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quote =
    lang === 'fr'
      ? '« Ce n’est pas un bug, c’est une fonctionnalité. »'
      : '“It’s not a bug, it’s a feature.”';

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.identity}>
          <button
            type="button"
            className={styles.logo}
            onClick={scrollTop}
          >
            G.Chanis
          </button>

          <p className={styles.copy}>
            © {year} — {t.footer}
          </p>

          <p className={styles.stack}>
            <span className={styles.dot} />
            Built with React · Vite · CSS Modules
          </p>
        </div>

        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>

        <button
          type="button"
          className={styles.backTop}
          onClick={scrollTop}
          aria-label={lang === 'fr' ? 'Retour en haut' : 'Back to top'}
        >
          <FiArrowUp size={16} strokeWidth={1.7} />
          <span>{lang === 'fr' ? 'Haut' : 'Top'}</span>
        </button>

      </div>

      <div className={styles.bottomLine}>
        <span>
          {lang === 'fr' ? 'Portfolio · 2026' : 'Portfolio · 2026'}
        </span>

        <span className={styles.bottomArrow}>
          <FiArrowUpRight size={13} />
        </span>
      </div>
    </footer>
  );
}