import { useEffect, useRef, useState } from "react";
import styles from "./SectionTransition.module.css";

export default function SectionTransition({
  children,
  direction = "right",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        ${styles.section}
        ${styles[direction]}
        ${visible ? styles.visible : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}