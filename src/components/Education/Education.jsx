import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { FaGraduationCap } from "react-icons/fa";
import {
  EDUCATION,
  CERTIFICATIONS,
  LINKEDIN_COURSES,
} from "../../data/index";
import styles from "./Education.module.css";

export default function Education({ t, lang }) {
  const isFr = lang === "fr";

  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.education.sectionTag}
            title={t.education.title}
            sub={t.education.sub}
          />
        </Reveal>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {EDUCATION.map((edu, index) => {
            const year = isFr ? edu.year : edu.yearEn;
            const degree = isFr ? edu.degreeFr : edu.degreeEn;
            const detail = isFr ? edu.detailsFr : edu.detailsEn;

            return (
              <Reveal
                key={`${edu.school}-${index}`}
                direction="left"
                delay={index * 0.15}
              >
                <article
                  className={`${styles.item} ${edu.current ? styles.itemActive : ""}`}
                  aria-current={edu.current ? "step" : undefined}
                >
                  <span
                    className={`${styles.dot} ${edu.current ? styles.dotActive : ""}`}
                    aria-hidden="true"
                  >
                    <FaGraduationCap className={styles.dotIcon} />
                  </span>

                  <div className={`${styles.card} ${edu.current ? styles.cardActive : ""}`}>
                    <div className={styles.cardHead}>
                      <div className={styles.main}>
                        <span className={styles.year}>{year}</span>
                        <h3 className={styles.school}>{edu.school}</h3>
                        <p className={styles.degree}>{degree}</p>
                        <p className={styles.place}>{edu.place}</p>
                        {detail && <p className={styles.detail}>{detail}</p>}
                      </div>

                      {edu.current && (
                        <span className={styles.currentBadge}>{t.education.current}</span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className={styles.sectionDivider}>
            <span>{isFr ? "Formations complémentaires" : "Additional training"}</span>
          </div>

          <dl className={styles.trainingList}>
            <div className={styles.trainingRow}>
              <dt>Sololearn</dt>
              <dd>
                <ul className={styles.trainingChips}>
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.titleFr}>{isFr ? cert.titleFr : cert.titleEn}</li>
                  ))}
                </ul>
                <p className={styles.trainingNote}>
                  {isFr ? "Certificats de fin de parcours" : "Course completion certificates"}
                </p>
              </dd>
            </div>

            <div className={styles.trainingRow}>
              <dt>LinkedIn Learning</dt>
              <dd>
                <ul className={styles.trainingChips}>
                  {LINKEDIN_COURSES.map((course) => (
                    <li key={course.title}>{course.title}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}