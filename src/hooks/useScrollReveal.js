import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — déclenche la classe "visible" quand l'élément entre dans le viewport.
 * @param {number} threshold - fraction visible avant déclenchement (défaut 0.12)
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
