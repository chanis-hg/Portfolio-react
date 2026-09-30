import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { PROJECTS } from "../../data/index";
import ProjectVisual from "../ProjectVisual/ProjectVisual";
import styles from "./ProjectsCarousel.module.css";

export default function ProjectsCarousel({ t, lang, onActiveChange }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardOffset, setCardOffset] = useState(430);

  const projects = PROJECTS;

  /* -------------------------
     RESPONSIVE CARD OFFSET
  ------------------------- */

  useEffect(() => {
    const updateCardOffset = () => {
      if (window.innerWidth <= 520) {
        setCardOffset(235);
      } else if (window.innerWidth <= 768) {
        setCardOffset(285);
      } else {
        setCardOffset(430);
      }
    };

    updateCardOffset();

    window.addEventListener("resize", updateCardOffset);

    return () => {
      window.removeEventListener("resize", updateCardOffset);
    };
  }, []);

  /* -------------------------
     ACTIVE PROJECT SYNC
  ------------------------- */

  useEffect(() => {
    const activeProject = projects[active];

    if (activeProject) {
      onActiveChange?.(activeProject.id);
    }
  }, [active, onActiveChange, projects]);

  /* -------------------------
     NAVIGATION
  ------------------------- */

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  /* -------------------------
     KEYBOARD NAVIGATION
  ------------------------- */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;

      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* -------------------------
     AUTO PLAY
  ------------------------- */

  useEffect(() => {
    if (isPaused || projects.length <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [active, isPaused, projects.length]);

  /* -------------------------
     CARD POSITION
  ------------------------- */

  const getOffset = (index) => {
    let offset = index - active;

    if (offset > projects.length / 2) {
      offset -= projects.length;
    }

    if (offset < -projects.length / 2) {
      offset += projects.length;
    }

    return offset;
  };

  /* -------------------------
     FAMILY LABEL
  ------------------------- */

  const getFamilyLabel = (family) => {
    const labels = {
      development: lang === "fr" ? "DÉVELOPPEMENT" : "DEVELOPMENT",
      design: "DESIGN",
      ux: lang === "fr" ? "UX / CONCEPTION" : "UX / DESIGN",
    };

    return labels[family] || family;
  };

  return (
    <section
      id="project-selector"
      className={styles.section}
      aria-label="Projets"
    >
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <span className={styles.eyebrow}>
            {lang === "fr"
              ? "Sélection de réalisations"
              : "Selected work"}
          </span>

          <h2 className={styles.title}>
            {lang === "fr"
              ? "Des problèmes concrets. Des produits construits."
              : "Concrete problems. Built products."}
          </h2>
        </div>

        <div className={styles.counter} aria-label="Position du projet">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
      </div>

      <div
        className={styles.viewport}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.track}>
          {projects.map((project, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;

            return (
              <article
                key={project.id}
                className={`${styles.card} ${
                  isActive ? styles.active : ""
                }`}
                style={{
                  transform: `
                    translateX(calc(-50% + ${
                      offset * cardOffset
                    }px))
                    scale(${isActive ? 1 : 0.78})
                  `,
                  opacity: isActive ? 1 : 0.42,
                  zIndex: isActive ? 3 : 1,
                }}
                onClick={() => setActive(index)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.family}>
                    {getFamilyLabel(project.family)}
                  </span>

                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ProjectVisual project={project} lang={lang} />

                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>

                  <p className={styles.category}>
                    {project.category}
                  </p>

                  <p className={styles.description}>
                    {lang === "fr"
                      ? project.descFr
                      : project.descEn}
                  </p>

                  {project.roleFr && (
                    <div className={styles.meta}>
                      <span>
                        {lang === "fr" ? "Rôle" : "Role"}
                      </span>

                      <p>
                        {lang === "fr"
                          ? project.roleFr
                          : project.roleEn}
                      </p>
                    </div>
                  )}

                  <div className={styles.tags}>
                    {project.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <span>
                    {project.status === "finished"
                      ? lang === "fr"
                        ? "Terminé"
                        : "Completed"
                      : lang === "fr"
                        ? "En cours"
                        : "In progress"}
                  </span>

                  <div className={styles.projectLinks}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        aria-label={`GitHub — ${project.title}`}
                      >
                        <FaGithub size={17} />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        aria-label={`Voir ${project.title}`}
                      >
                        <ExternalLink
                          size={17}
                          strokeWidth={1.7}
                        />
                      </a>
                    )}

                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) =>
                          event.stopPropagation()
                        }
                        aria-label={`Prototype Figma — ${project.title}`}
                      >
                        <ExternalLink
                          size={17}
                          strokeWidth={1.7}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={previous}
          aria-label={
            lang === "fr"
              ? "Projet précédent"
              : "Previous project"
          }
        >
          <ArrowLeft size={18} strokeWidth={1.7} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={
            lang === "fr"
              ? "Projet suivant"
              : "Next project"
          }
        >
          <ArrowRight size={18} strokeWidth={1.7} />
        </button>
      </div>
    </section>
  );
}