import styles from './Footer.module.css';

export default function Footer({ t, lang }) {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <button className={styles.logo} onClick={scrollTop}>G.Chanis</button>
          <p className={styles.copy}>
            © {year} — {t.footer}
          </p>
          <p className={styles.stack}>
            <span className={styles.dot} />
            Built with React · Vite · CSS Modules
          </p>
        </div>

        <blockquote className={styles.quote}>
          <p>
            "Peu importe combien tu es puissant,<br />
            si tu abandonnes, tout s'effondre."
          </p>
          <footer>— Itachi Uchiha</footer>
        </blockquote>

        <button
          className={styles.backTop}
          onClick={scrollTop}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
