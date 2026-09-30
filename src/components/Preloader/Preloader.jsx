import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('welcome');
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const loadingTimer = setTimeout(() => {
      setPhase('loading');
    }, 1800);

    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, 4400);

    const finishTimer = setTimeout(() => {
      onComplete?.();
      document.body.style.overflow = '';
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(closeTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`${styles.preloader} ${
        closing ? styles.closing : ''
      }`}
      role="status"
      aria-label="Bienvenue"
    >
      {phase === 'welcome' ? (
        <h1 className={styles.welcome}>BIENVENUE.</h1>
      ) : (
        <h1 className={styles.loading}>LOADING</h1>
      )}
    </div>
  );
}