import { useEffect, useState } from "react";
import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";

import styles from "./Preloader.module.css";

const CLOSE_DURATION = 1400;
const FINISH_DURATION = 2000;

const COPY = {
  fr: {
    welcomeLabel: "BIENVENUE SUR MON PORTFOLIO",
    role: "Développeur web orienté produit",
    welcomeAria: "Bienvenue sur mon portfolio",
  },
  en: {
    welcomeLabel: "WELCOME TO MY PORTFOLIO",
    role: "Product-focused web developer",
    welcomeAria: "Welcome to my portfolio",
  },
};

export default function Preloader({ onComplete, lang = "fr" }) {
  const isFr = lang === "fr";
  const copy = isFr ? COPY.fr : COPY.en;
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const closeTimer = window.setTimeout(() => {
      setClosing(true);
      onComplete?.();
    }, CLOSE_DURATION);

    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, FINISH_DURATION);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      className={`${styles.preloader} ${closing ? styles.closing : ""}`}
      role="status"
      aria-live="polite"
      aria-label={copy.welcomeAria}
    >
      <div className={styles.welcome}>
        <div className={styles.welcomeIcons} aria-hidden="true">
          <span className={styles.iconItem}>
            <FiCode />
          </span>
          <span className={styles.iconItem}>
            <FiMonitor />
          </span>
          <span className={styles.iconItem}>
            <FiDatabase />
          </span>
        </div>

        <p className={styles.welcomeLabel}>{copy.welcomeLabel}</p>
        <h1 className={styles.welcomeName}>Gaïus Chanis</h1>
        <p className={styles.welcomeRole}>{copy.role}</p>
      </div>
    </div>
  );
}
