import { Download } from 'lucide-react';
import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
} from 'react-icons/fa';

import styles from './Footer.module.css';

const CV_URL = '/Gaïus Chanis HONTONWAKOU CV_fr.pdf';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/chanis-hg', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gaïus-chanis-08a782365',
    icon: FaLinkedinIn,
  },
  { label: 'WhatsApp', href: 'https://wa.me/22953505501', icon: FaWhatsapp },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61577300496519',
    icon: FaFacebookF,
  },
];

export default function Footer({ t, lang }) {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        <div className={styles.links}>
          <a href={CV_URL} download className={styles.cv}>
            <Download size={16} strokeWidth={1.8} />
            <span>{t.hero.cta2}</span>
          </a>

          <ul className={styles.socials}>
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

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
        <span>Portfolio · 2026</span>

        <span className={styles.bottomArrow}>
          <FiArrowUpRight size={14} />
        </span>
      </div>
    </footer>
  );
}
