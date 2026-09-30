import { useEffect, useRef } from "react";
import styles from "./ScrollTransition.module.css";

export default function ScrollTransition({
  children,
  direction = "left",
  distance = 420,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * La transition commence lorsque le haut
       * de la section entre dans la zone de transition.
       */
      const start = viewportHeight;
      const end = viewportHeight * 0.15;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (start - rect.top) / (start - end),
        ),
      );

      const offset = (1 - progress) * distance;

      let x = 0;
      let y = 0;

      if (direction === "left") {
        x = -offset;
      }

      if (direction === "right") {
        x = offset;
      }

      if (direction === "top") {
        y = -offset;
      }

      if (direction === "bottom") {
        y = offset;
      }

      section.style.setProperty(
        "--transition-x",
        `${x}px`,
      );

      section.style.setProperty(
        "--transition-y",
        `${y}px`,
      );

      section.style.setProperty(
        "--transition-progress",
        progress,
      );
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
  }, [direction, distance]);

  return (
    <div
      ref={sectionRef}
      className={styles.wrapper}
    >
      {children}
    </div>
  );
}