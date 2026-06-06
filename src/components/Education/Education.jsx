// Education.jsx
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { EDUCATION } from '../../data/index';
import styles from './Education.module.css';

export default function Education({ t, lang }) {
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
          <div className={styles.line} />
          {EDUCATION.map((edu, i) => {
            const year   = lang === 'fr' ? edu.year : edu.yearEn;
            const degree = lang === 'fr' ? edu.degreeFr : edu.degreeEn;
            const details= lang === 'fr' ? edu.detailsFr : edu.detailsEn;
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
                        {details && (
                          <p className={styles.details}>{details}</p>
                        )}
                      </div>
                      {edu.current && (
                        <span className={styles.currentBadge}>
                          {t.education.current}
                        </span>
                      )}
                    </div>
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
