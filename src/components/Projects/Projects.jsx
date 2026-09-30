import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { PROJECTS } from "../../data/index";
import ProjectVisual from "../ProjectVisual/ProjectVisual";

import styles from "./Projects.module.css";

/* Bloc réutilisable : affiche un texte OU une liste (tableau) */
function Block({ label, value, className }) {
  const isEmpty = !value || (Array.isArray(value) && value.length === 0);
  if (isEmpty) return null;

  return (
    <div className={className}>
      <span className={styles.label}>{label}</span>

      {Array.isArray(value) ? (
        <ul style={{ display: "grid", gap: "0.35rem" }}>
          {value.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}

export default function Projects({ t, lang, activeProjectId }) {
  const project =
    PROJECTS.find((item) => item.id === activeProjectId) || PROJECTS[0];

  if (!project) return null;

  const getText = (fr, en) => (lang === "fr" ? fr : en);

  const desc = getText(project.descFr, project.descEn);
  const role = getText(project.roleFr, project.roleEn);
  const caseStudy = project.caseStudy;

  // La preuve de l'étude de cas prime sur celle du projet
  const proof = getText(
    caseStudy?.proofFr || project.proofFr,
    caseStudy?.proofEn || project.proofEn,
  );

  const familyLabels = {
    development: getText("DÉVELOPPEMENT", "DEVELOPMENT"),
    design: "DESIGN",
    ux: getText("UX / CONCEPTION", "UX / DESIGN"),
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.projects.sectionTag}
            title={getText("Comprendre le projet.", "Understand the project.")}
            sub={getText(
              "Au-delà du résultat, voici le problème, les choix et les contraintes.",
              "Beyond the result: the problem, decisions and constraints.",
            )}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className={styles.caseStudy}>
            {/* COLONNE TEXTE */}

            <div className={styles.content}>
              <header className={styles.header}>
                <div>
                  <span className={styles.family}>
                    {familyLabels[project.family] || project.family}
                  </span>

                  <h2 className={styles.title}>{project.title}</h2>

                  <p className={styles.category}>{project.category}</p>
                </div>

                <span
                  className={`${styles.status} ${
                    project.status === "finished"
                      ? styles.statusFinished
                      : styles.statusProgress
                  }`}
                >
                  {project.status === "finished"
                    ? getText("Terminé", "Completed")
                    : getText("En cours", "In progress")}
                </span>
              </header>

              <div className={styles.description}>
                <span className={styles.label}>
                  {getText("Contexte", "Context")}
                </span>

                <p>{desc}</p>
              </div>

              {role && (
                <div className={styles.role}>
                  <span className={styles.label}>{getText("Rôle", "Role")}</span>

                  <p>{role}</p>
                </div>
              )}

              {caseStudy && (
                <>
                  <div className={styles.details}>
                    <Block
                      className={styles.detailBlock}
                      label={getText("Problème", "Problem")}
                      value={getText(
                        caseStudy.problemFr || caseStudy.contextFr,
                        caseStudy.problemEn || caseStudy.contextEn,
                      )}
                    />

                    <Block
                      className={styles.detailBlock}
                      label={getText("Contraintes", "Constraints")}
                      value={getText(
                        caseStudy.constraintsFr,
                        caseStudy.constraintsEn,
                      )}
                    />

                    <Block
                      className={styles.detailBlock}
                      label={getText("Décision", "Decision")}
                      value={getText(
                        caseStudy.decisionFr,
                        caseStudy.decisionEn,
                      )}
                    />

                    <Block
                      className={styles.detailBlock}
                      label={getText("Implémentation", "Implementation")}
                      value={getText(
                        caseStudy.implementationFr,
                        caseStudy.implementationEn,
                      )}
                    />
                  </div>

                  <Block
                    className={styles.proof}
                    label={getText("Preuve / validation", "Evidence / validation")}
                    value={proof}
                  />

                  <Block
                    className={styles.detailBlock}
                    label={getText("Limites", "Limits")}
                    value={getText(caseStudy.limitsFr, caseStudy.limitsEn)}
                  />

                  <Block
                    className={styles.takeaway}
                    label={getText("Ce que j'en retiens", "What I learned")}
                    value={getText(caseStudy.takeawayFr, caseStudy.takeawayEn)}
                  />
                </>
              )}

              {/* Cas sans étude de cas : on garde la preuve simple */}
              {!caseStudy && (
                <Block
                  className={styles.proof}
                  label={getText("Preuve / validation", "Evidence / validation")}
                  value={proof}
                />
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
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink size={16} strokeWidth={1.7} />
                    <span>{getText("Voir le projet", "View project")}</span>
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </a>
                )}

                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink size={16} strokeWidth={1.7} />
                    <span>Figma</span>
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </a>
                )}
              </div>
            </div>

            {/* PREUVE VISUELLE */}

            <aside className={styles.visual}>
              <div className={styles.visualFrame}>
                <div className={styles.visualBar}>
                  <span>{getText("Preuve visuelle", "Visual evidence")}</span>

                  <span>
                    {String(
                      PROJECTS.findIndex((item) => item.id === project.id) + 1,
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.visualContent}>
                  <ProjectVisual project={project} lang={lang} />
                </div>
              </div>
            </aside>
          </article>
        </Reveal>
      </div>
    </section>
  );
}