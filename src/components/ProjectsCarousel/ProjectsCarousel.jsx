import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

import { PROJECTS } from "../../data/index";
import ProjectVisual from "../ProjectVisual/ProjectVisual";
import styles from "./ProjectsCarousel.module.css";

/* Distance horizontale entre deux cartes, selon la largeur d'écran */
const getCardOffset = () => {
  if (typeof window === "undefined") return 430;
  if (window.innerWidth <= 520) return 235;
  if (window.innerWidth <= 768) return 285;
  return 430;
};

const SWIPE_THRESHOLD = 50; // px de glissement nécessaires pour changer de carte

const pad = (n) => String(n).padStart(2, "0");

export default function ProjectsCarousel({ lang = "fr", onActiveChange }) {
  const isFr = lang === "fr";
  const projects = PROJECTS;
  const total = projects.length;

  const [active, setActive] = useState(0);
  const [cardOffset, setCardOffset] = useState(getCardOffset);
  const touchStartX = useRef(null);

  /* -------------------------
     RESPONSIVE
  ------------------------- */
  useEffect(() => {
    const update = () => setCardOffset(getCardOffset());
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  /* -------------------------
     SYNCHRONISATION AVEC L'ÉTUDE DE CAS
     Pas de défilement automatique : le contenu ne change que sur action
     du visiteur (sinon l'étude de cas en dessous change pendant la lecture).
  ------------------------- */
  useEffect(() => {
    const project = projects[active];
    if (project) onActiveChange?.(project.id);
  }, [active, onActiveChange, projects]);

  /* -------------------------
     NAVIGATION
  ------------------------- */
  const goTo = (index) => setActive((index + total) % total);
  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  /* Flèches du clavier : seulement quand le carrousel a le focus,
     jamais sur toute la page. */
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  /* Glissement au doigt sur mobile */
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else previous();
  };

  /* Position relative au projet actif, en boucle */
  const getOffset = (index) => {
    let offset = index - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const familyLabels = {
    development: isFr ? "DÉVELOPPEMENT" : "DEVELOPMENT",
    design: "DESIGN",
    ux: isFr ? "UX / CONCEPTION" : "UX / DESIGN",
  };

  const activeProject = projects[active];

  return (
    <section
      id="project-selector"
      className={styles.section}
      aria-roledescription={isFr ? "carrousel" : "carousel"}
      aria-label={isFr ? "Sélection de projets" : "Selected projects"}
    >
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <span className={styles.eyebrow}>
            {isFr ? "Sélection de réalisations" : "Selected work"}
          </span>

          <h2 className={styles.title}>
            {isFr
              ? "Des problèmes concrets. Des produits construits."
              : "Concrete problems. Built products."}
          </h2>
        </div>

        <p className={styles.counter} aria-hidden="true">
          <span>{pad(active + 1)}</span>
          <span>/</span>
          <span>{pad(total)}</span>
        </p>
      </div>

      {/* Annonce pour les lecteurs d'écran à chaque changement de projet */}
      <p className={styles.srOnly} aria-live="polite">
        {isFr
          ? `Projet ${active + 1} sur ${total} : ${activeProject?.title}`
          : `Project ${active + 1} of ${total}: ${activeProject?.title}`}
      </p>

      <div
        className={styles.viewport}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={
          isFr
            ? "Projets : utilisez les flèches gauche et droite pour naviguer"
            : "Projects: use the left and right arrow keys to navigate"
        }
      >
        <div className={styles.track}>
          {projects.map((project, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const linkTabIndex = isActive ? 0 : -1;

            return (
              <article
                key={project.id}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                style={{
                  transform: `translateX(${offset * cardOffset}px) scale(${isActive ? 1 : 0.78})`,
                  opacity: isActive ? 1 : 0.42,
                  zIndex: isActive ? 3 : 1,
                }}
                aria-hidden={!isActive}
                onClick={isActive ? undefined : () => goTo(index)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.family}>
                    {familyLabels[project.family] || project.family}
                  </span>
                  <span className={styles.number}>{pad(index + 1)}</span>
                </div>

                <ProjectVisual project={project} lang={lang} />

                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>
                  <p className={styles.category}>{project.category}</p>

                  <p className={styles.description}>
                    {isFr ? project.descFr : project.descEn}
                  </p>

                  {project.roleFr && (
                    <div className={styles.meta}>
                      <span>{isFr ? "Rôle" : "Role"}</span>
                      <p>{isFr ? project.roleFr : project.roleEn}</p>
                    </div>
                  )}

                  {project.tags?.length > 0 && (
                    <ul className={styles.tags}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={styles.cardBottom}>
                  <span>
                    {project.status === "finished"
                      ? isFr ? "Terminé" : "Completed"
                      : isFr ? "En cours" : "In progress"}
                  </span>

                  <div className={styles.projectLinks}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={linkTabIndex}
                        aria-label={
                          isFr
                            ? `Code source de ${project.title} sur GitHub (nouvel onglet)`
                            : `${project.title} source code on GitHub (new tab)`
                        }
                      >
                        <FaGithub size={18} aria-hidden="true" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={linkTabIndex}
                        aria-label={
                          isFr
                            ? `Voir ${project.title} en ligne (nouvel onglet)`
                            : `View ${project.title} live (new tab)`
                        }
                      >
                        <ExternalLink size={18} strokeWidth={1.7} aria-hidden="true" />
                      </a>
                    )}

                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={linkTabIndex}
                        aria-label={
                          isFr
                            ? `Prototype Figma de ${project.title} (nouvel onglet)`
                            : `${project.title} Figma prototype (new tab)`
                        }
                      >
                        <SiFigma size={16} aria-hidden="true" />
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
          aria-label={isFr ? "Projet précédent" : "Previous project"}
        >
          <ArrowLeft size={18} strokeWidth={1.7} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label={isFr ? "Projet suivant" : "Next project"}
        >
          <ArrowRight size={18} strokeWidth={1.7} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}