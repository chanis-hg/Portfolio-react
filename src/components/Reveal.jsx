import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Reveal.module.css';

/**
 * Reveal — wrapper d'animation au scroll
 * @param {string}  direction - "up" | "left" | "right" | "scale"
 * @param {number}  delay     - délai en secondes
 */
export default function Reveal({ children, direction = 'up', delay = 0 }) {
  const [ref, visible] = useScrollReveal();

  const dirClass = {
    up:    '',
    left:  styles.left,
    right: styles.right,
    scale: styles.scale,
  }[direction] || '';

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${dirClass} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
