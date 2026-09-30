import { useEffect, useRef } from "react";
import styles from "./JourneyHorizontal.module.css";

export default function JourneyHorizontal({ children }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const update = () => {
      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollDistance),
      );

      const maxTranslate =
        track.scrollWidth - window.innerWidth;

      const translateX = progress * maxTranslate;

      track.style.transform = `translate3d(-${translateX}px, 0, 0)`;
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="journey"
    >
      <div className={styles.sticky}>
        <div ref={trackRef} className={styles.track}>
          {children}
        </div>
      </div>
    </section>
  );
}