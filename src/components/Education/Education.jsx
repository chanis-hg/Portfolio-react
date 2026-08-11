import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { EDUCATION, CERTIFICATIONS } from '../../data/index';
import styles from './Education.module.css';

export default function Education({ t, lang }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal><SectionHeader tag={t.education.sectionTag} title={t.education.title} sub={t.education.sub} /></Reveal>

        {/* Timeline formation */}
        <div className={styles.timeline}>
          <div className={styles.line} />
          {EDUCATION.map((edu, i) => {
            const year   = lang === 'fr' ? edu.year     : edu.yearEn;
            const degree = lang === 'fr' ? edu.degreeFr : edu.degreeEn;
            const detail = lang === 'fr' ? edu.detailsFr: edu.detailsEn;
            return (
              <Reveal key={i} direction="left" delay={i * 0.15}>
                <div className={styles.item}>
                  <div className={`${styles.dot} ${edu.current ? styles.dotActive : ''}`} />
                  <div className={`${styles.card} ${edu.current ? styles.cardActive : ''}`}>
                    <div className={styles.cardHead}>
                      <div>
                        <span className={styles.year}>{year}</span>
                        <h3 className={styles.school}>{edu.school}</h3>
                        <p className={styles.degree}>{degree}</p>
                        <p className={styles.place}>📍 {edu.place}</p>
                        {detail && <p className={styles.detail}>{detail}</p>}
                      </div>
                      {edu.current && <span className={styles.currentBadge}>{t.education.current}</span>}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications */}
        <Reveal delay={0.2}>
          <h3 className={styles.certTitle}>Certifications</h3>
        </Reveal>
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert, i) => {
            const title = lang === 'fr' ? cert.titleFr : cert.titleEn;
            const desc  = lang === 'fr' ? cert.descFr  : cert.descEn;
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className={styles.certCard}>
                  <span className={styles.certIcon}>{cert.icon}</span>
                  <div className={styles.certBody}>
                    <span className={styles.certOrg}>{cert.org}</span>
                    <h4 className={styles.certName}>{title}</h4>
                    <p className={styles.certDesc}>{desc}</p>
                    <span className={styles.certBadge}>{t.education.certified}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
