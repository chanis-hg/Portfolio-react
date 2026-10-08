import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import {
  FaAward,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  EDUCATION,
  CERTIFICATIONS,
  LINKEDIN_COURSES,
} from "../../data/index";
import styles from "./Education.module.css";

const getCertificationIcon = (title = "") => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("python")) return FaPython;
  if (normalizedTitle.includes("sql")) return FaDatabase;
  if (normalizedTitle.includes("java")) return FaJava;

  // Icône générique pour C et C#, compatible avec les versions installées.
  return FaAward;
};

const getCourseIcon = (title = "") => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("html")) return FaHtml5;
  if (normalizedTitle.includes("css")) return FaCss3Alt;
  if (normalizedTitle.includes("javascript")) return FaJs;
  if (normalizedTitle.includes("react")) return FaReact;
  if (normalizedTitle.includes("laravel")) return FaLaravel;
  if (normalizedTitle.includes("php")) return FaPhp;
  if (normalizedTitle.includes("figma")) return FaFigma;

  return FaCode;
};

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
            <span>{isFr ? "Certifications" : "Certifications"}</span>
            <span className={styles.certCount}>
              {CERTIFICATIONS.length.toString().padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert, index) => {
            const title = isFr ? cert.titleFr : cert.titleEn;
            const desc = isFr ? cert.descFr : cert.descEn;
            const CertificationIcon = getCertificationIcon(title);

            return (
              <Reveal key={`${cert.org}-${title}-${index}`} delay={index * 0.07}>
                <article className={styles.certCard}>
                  <div className={styles.certTop}>
                    <span className={styles.certNumber} aria-hidden="true">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className={styles.certIcon} aria-hidden="true">
                      <CertificationIcon size={17} />
                    </span>
                  </div>

                  <div className={styles.certBody}>
                    <span className={styles.certOrg}>{cert.org}</span>
                    <h3 className={styles.certName}>{title}</h3>
                    <p className={styles.certDesc}>{desc}</p>
                    <span className={styles.certBadge}>{t.education.certified}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className={styles.sectionDivider}>
            <span>
              {isFr
                ? "Formations complémentaires — LinkedIn Learning"
                : "Additional training — LinkedIn Learning"}
            </span>
            <span className={styles.certCount}>
              {LINKEDIN_COURSES.length.toString().padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <div className={styles.certGrid}>
          {LINKEDIN_COURSES.map((course, index) => {
            const description = isFr ? course.descFr : course.descEn;
            const CourseIcon = getCourseIcon(course.title);

            return (
              <Reveal key={course.title} delay={index * 0.07}>
                <article className={styles.certCard}>
                  <div className={styles.certTop}>
                    <span className={styles.certNumber} aria-hidden="true">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className={styles.certIcon} aria-hidden="true">
                      <CourseIcon size={17} />
                    </span>
                  </div>

                  <div className={styles.certBody}>
                    <span className={styles.certOrg}>LinkedIn Learning</span>
                    <h3 className={styles.certName}>{course.title}</h3>
                    <p className={styles.certDesc}>{description}</p>
                    <span className={styles.certBadge}>
                      {isFr ? "Formation suivie" : "Course completed"}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
