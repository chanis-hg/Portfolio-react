import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { PROJECTS } from "../../data/index";
import ProjectVisual from "../ProjectVisual/ProjectVisual";

import styles from "./Projects.module.css";

export default function Projects({
  t,
  lang,
  activeProjectId,
}) {
  const project =
    PROJECTS.find(
      (item) => item.id === activeProjectId,
    ) || PROJECTS[0];

  if (!project) return null;

  const desc =
    lang === "fr"
      ? project.descFr
      : project.descEn;

  const role =
    lang === "fr"
      ? project.roleFr
      : project.roleEn;

  const proof =
    lang === "fr"
      ? project.proofFr
      : project.proofEn;

  const caseStudy = project.caseStudy;

  const getText = (fr, en) =>
    lang === "fr" ? fr : en;

  const familyLabels = {
    development:
      lang === "fr"
        ? "DÉVELOPPEMENT"
        : "DEVELOPMENT",

    design: "DESIGN",

    ux:
      lang === "fr"
        ? "UX / CONCEPTION"
        : "UX / DESIGN",
  };

  return (
    <section
      id="projects"
      className={styles.section}
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.projects.sectionTag}
            title={
              lang === "fr"
                ? "Comprendre le projet."
                : "Understand the project."
            }
            sub={
              lang === "fr"
                ? "Au-delà du résultat, voici le problème, les choix et les contraintes."
                : "Beyond the result: the problem, decisions and constraints."
            }
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className={styles.caseStudy}>

            {/* COLONNE TEXTE */}

            <div className={styles.content}>
              <header className={styles.header}>
                <div>
                  <span className={styles.family}>
                    {familyLabels[project.family] ||
                      project.family}
                  </span>

                  <h2 className={styles.title}>
                    {project.title}
                  </h2>

                  <p className={styles.category}>
                    {project.category}
                  </p>
                </div>

                <span
                  className={`${styles.status} ${
                    project.status === "finished"
                      ? styles.statusFinished
                      : styles.statusProgress
                  }`}
                >
                  {project.status === "finished"
                    ? getText(
                        "Terminé",
                        "Completed",
                      )
                    : getText(
                        "En cours",
                        "In progress",
                      )}
                </span>
              </header>

              <div className={styles.description}>
                <span className={styles.label}>
                  {getText(
                    "Contexte",
                    "Context",
                  )}
                </span>

                <p>{desc}</p>
              </div>

              {role && (
                <div className={styles.role}>
                  <span className={styles.label}>
                    {getText("Rôle", "Role")}
                  </span>

                  <p>{role}</p>
                </div>
              )}

              {caseStudy && (
                <div className={styles.details}>

                  {caseStudy.context && (
                    <div
                      className={
                        styles.detailBlock
                      }
                    >
                      <span
                        className={
                          styles.label
                        }
                      >
                        {getText(
                          "Problème",
                          "Problem",
                        )}
                      </span>

                      <p>
                        {getText(
                          caseStudy.problemFr ||
                            caseStudy.contextFr,
                          caseStudy.problemEn ||
                            caseStudy.contextEn,
                        )}
                      </p>
                    </div>
                  )}

                  {caseStudy.constraints && (
                    <div
                      className={
                        styles.detailBlock
                      }
                    >
                      <span
                        className={
                          styles.label
                        }
                      >
                        {getText(
                          "Contraintes",
                          "Constraints",
                        )}
                      </span>

                      <p>
                        {getText(
                          caseStudy.constraintsFr,
                          caseStudy.constraintsEn,
                        )}
                      </p>
                    </div>
                  )}

                  {caseStudy.decision && (
                    <div
                      className={
                        styles.detailBlock
                      }
                    >
                      <span
                        className={
                          styles.label
                        }
                      >
                        {getText(
                          "Décision",
                          "Decision",
                        )}
                      </span>

                      <p>
                        {getText(
                          caseStudy.decisionFr,
                          caseStudy.decisionEn,
                        )}
                      </p>
                    </div>
                  )}

                  {caseStudy.implementation && (
                    <div
                      className={
                        styles.detailBlock
                      }
                    >
                      <span
                        className={
                          styles.label
                        }
                      >
                        {getText(
                          "Implémentation",
                          "Implementation",
                        )}
                      </span>

                      <p>
                        {getText(
                          caseStudy.implementationFr,
                          caseStudy.implementationEn,
                        )}
                      </p>
                    </div>
                  )}

                </div>
              )}

              {proof && (
                <div className={styles.proof}>
                  <span className={styles.label}>
                    {getText(
                      "Preuve / validation",
                      "Evidence / validation",
                    )}
                  </span>

                  <p>{proof}</p>
                </div>
              )}

              {caseStudy?.limits && (
                <div
                  className={
                    styles.detailBlock
                  }
                >
                  <span className={styles.label}>
                    {getText(
                      "Limites",
                      "Limits",
                    )}
                  </span>

                  <p>
                    {getText(
                      caseStudy.limitsFr,
                      caseStudy.limitsEn,
                    )}
                  </p>
                </div>
              )}

              {caseStudy?.takeaway && (
                <div
                  className={
                    styles.takeaway
                  }
                >
                  <span className={styles.label}>
                    {getText(
                      "Ce que j'en retiens",
                      "What I learned",
                    )}
                  </span>

                  <p>
                    {getText(
                      caseStudy.takeawayFr,
                      caseStudy.takeawayEn,
                    )}
                  </p>
                </div>
              )}

              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <FaGithub size={17} />

                    <span>GitHub</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                    />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink
                      size={16}
                      strokeWidth={1.7}
                    />

                    <span>
                      {getText(
                        "Voir le projet",
                        "View project",
                      )}
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                    />
                  </a>
                )}

                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink
                      size={16}
                      strokeWidth={1.7}
                    />

                    <span>Figma</span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                    />
                  </a>
                )}
              </div>
            </div>

            {/* PREUVE VISUELLE */}

            <aside className={styles.visual}>
              <div
                className={
                  styles.visualFrame
                }
              >
                <div
                  className={
                    styles.visualBar
                  }
                >
                  <span>
                    {getText(
                      "Preuve visuelle",
                      "Visual evidence",
                    )}
                  </span>

                  <span>
                    {String(
                      PROJECTS.findIndex(
                        (item) =>
                          item.id === project.id,
                      ) + 1,
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={
                    styles.visualContent
                  }
                >
                  <ProjectVisual
                    project={project}
                    lang={lang}
                  />
                </div>
              </div>
            </aside>

          </article>
        </Reveal>
      </div>
    </section>
  );
}