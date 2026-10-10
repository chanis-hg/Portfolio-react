import { useEffect, useRef, useState } from "react";
import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";

import styles from "./Preloader.module.css";

const CLOSE_DURATION = 1400;
const FINISH_DURATION = 2000;
const SESSION_KEY = "intro-seen";
const SKIP_EVENTS = ["pointerdown", "keydown", "wheel", "touchstart"];

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

/* Intro ignorée si déjà vue pendant la session, ou si l'utilisateur
   a demandé à réduire les animations dans son système. */
function shouldSkipIntro() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false; // navigation privée ou stockage bloqué : on joue l'intro
  }
}

export default function Preloader({ onComplete, lang = "fr" }) {
  const isFr = lang === "fr";
  const copy = isFr ? COPY.fr : COPY.en;
  const [closing, setClosing] = useState(false);
  const [skip] = useState(shouldSkipIntro);
  const closedRef = useRef(false);

  useEffect(() => {
    if (skip) {
      onComplete?.();
      return undefined;
    }

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* stockage indisponible : sans conséquence */
    }

    document.body.style.overflow = "hidden";

    let finishTimer;

    const removeSkipListeners = () =>
      SKIP_EVENTS.forEach((name) => window.removeEventListener(name, close));

    /* Fermeture : à la fin du minuteur OU au premier geste du visiteur */
    function close() {
      if (closedRef.current) return;
      closedRef.current = true;

      removeSkipListeners();
      setClosing(true);
      onComplete?.();

      finishTimer = window.setTimeout(() => {
        document.body.style.overflow = "";
      }, FINISH_DURATION - CLOSE_DURATION);
    }

    const closeTimer = window.setTimeout(close, CLOSE_DURATION);

    SKIP_EVENTS.forEach((name) =>
      window.addEventListener(name, close, { passive: true }),
    );

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(finishTimer);
      removeSkipListeners();
      document.body.style.overflow = "";
    };
  }, [skip, onComplete]);

  if (skip) return null;

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
        <p className={styles.welcomeName}>Gaïus Chanis</p>
        <p className={styles.welcomeRole}>{copy.role}</p>
      </div>
    </div>
  );
}