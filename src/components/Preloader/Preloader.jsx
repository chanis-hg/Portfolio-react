import { useEffect, useState } from "react";
import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";

import styles from "./Preloader.module.css";

const LOADING_DURATION = 3500;
const WELCOME_DURATION = 2200;
const CLOSE_DURATION = 4000;
const FINISH_DURATION = 4000;

const COPY = {
  fr: {
    welcomeLabel: "BIENVENUE SUR MON PORTFOLIO",
    role: "Développeur web & designer web",
    progress: "Chargement de l’expérience",
    progressLabel: "Chargement du portfolio",
    welcomeAria: "Bienvenue sur mon portfolio",
  },
  en: {
    welcomeLabel: "WELCOME TO MY PORTFOLIO",
    role: "Web developer & web designer",
    progress: "Loading the experience",
    progressLabel: "Loading the portfolio",
    welcomeAria: "Welcome to my portfolio",
  },
};

export default function Preloader({ onComplete, lang = "fr" }) {
  const isFr = lang === "fr";
  const copy = isFr ? COPY.fr : COPY.en;
  const [phase, setPhase] = useState("welcome");
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startTime = window.performance.now();
    const progressFrame = window.setInterval(() => {
      const elapsed = window.performance.now() - startTime;
      const nextProgress = Math.min(
        Math.round((elapsed / LOADING_DURATION) * 100),
        100,
      );

      setProgress(nextProgress);
    }, 30);

    const loadingTimer = window.setTimeout(() => {
      setPhase("loading");
    }, WELCOME_DURATION);

    const closeTimer = window.setTimeout(() => {
      setProgress(100);
      setClosing(true);
      onComplete?.();
    }, CLOSE_DURATION);

    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, FINISH_DURATION);

    return () => {
      window.clearInterval(progressFrame);
      window.clearTimeout(loadingTimer);
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
      aria-label={
        phase === "welcome"
          ? copy.welcomeAria
          : `${isFr ? "Chargement" : "Loading"} ${progress}%`
      }
    >
      {phase === "welcome" ? (
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
      ) : (
        <div className={styles.loading}>
          <p className={styles.loadingLabel}>LOADING</p>

          <div className={styles.progressInfo} aria-hidden="true">
            <span>{copy.progress}</span>
            <span>{progress}%</span>
          </div>

          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-label={copy.progressLabel}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={progress}
          >
            <span
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
