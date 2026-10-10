import { Download } from "lucide-react";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { CV_URL } from "../Navbar/Navbar";
import styles from "./Footer.module.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/chanis-hg", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ga%C3%AFus-chanis-08a782365",
    icon: FaLinkedinIn,
  },
];

export default function Footer({ t, lang }) {
  const year = new Date().getFullYear();
  const isFr = lang === "fr";

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <div className={styles.panelGlow} aria-hidden="true" />

        <div className={styles.panelTop}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>
              {isFr ? "Une idée à concrétiser ?" : "An idea to bring to life?"}
            </p>
            <h2 className={styles.title}>
              {isFr ? "Construisons quelque chose d’utile." : "Let’s build something useful."}
            </h2>
          </div>

          <div className={styles.actions}>
            <a href={CV_URL} download className={styles.cv}>
              <Download size={16} strokeWidth={1.8} aria-hidden="true" />
              <span>{t.hero.cta2}</span>
            </a>
            <button type="button" className={styles.contactCta} onClick={scrollToContact}>
              <span>{isFr ? "Me contacter" : "Contact me"}</span>
              <FiArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={styles.panelBottom}>
          <div className={styles.identity}>
            <p className={styles.logo}>Gaïus Chanis</p>
            <p className={styles.role}>
              {isFr ? "Développeur web orienté produit." : "Product-focused web developer."}
            </p>
          </div>

          <nav aria-label={isFr ? "Réseaux" : "Social links"}>
            <ul className={styles.socials}>
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <Icon size={16} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <span>© {year} · Gaïus Chanis HONTONWAKOU</span>
        <button type="button" className={styles.backTop} onClick={scrollTop}>
          <FiArrowUp size={15} aria-hidden="true" />
          <span>{isFr ? "Haut de page" : "Back to top"}</span>
        </button>
      </div>
    </footer>
  );
}