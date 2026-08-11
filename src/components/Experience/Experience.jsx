import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { EXPERIENCES } from '../../data/index';
import styles from './Experience.module.css';

export default function Experience({ t, lang }) {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.experience.sectionTag}
            title={t.experience.title}
            sub={t.experience.sub}
          />
        </Reveal>

        <div className={styles.list}>
          {EXPERIENCES.map((exp, i) => {
            const role     = lang === 'fr' ? exp.roleFr     : exp.roleEn;
            const type     = lang === 'fr' ? exp.typeFr     : exp.typeEn;
            const desc     = lang === 'fr' ? exp.descFr     : exp.descEn;
            const stack    = lang === 'fr' ? exp.stackFr    : exp.stackEn;
            const period   = lang === 'fr' ? exp.period     : exp.periodEn;
            const points   = lang === 'fr' ? exp.highlights : exp.highlightsEn;

            return (
              <Reveal key={exp.id} direction="left" delay={i * 0.12}>
                <div className={`${styles.card} ${exp.current ? styles.cardCurrent : ''}`}>
                  {/* Header */}
                  <div className={styles.cardHead}>
                    <div className={styles.cardMeta}>
                      <span className={styles.period}>{period}</span>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.role}>{role}</p>
                      <span className={styles.type}>{type}</span>
                    </div>
                    {exp.current && (
                      <span className={styles.currentBadge}>{t.experience.present}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className={styles.desc}>{desc}</p>

                  {/* Points clés */}
                  {points.length > 0 && (
                    <ul className={styles.points}>
                      {points.map((pt, j) => (
                        <li key={j} className={styles.point}>
                          <span className={styles.pointDot} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Stack */}
                  <div className={styles.stack}>
                    {stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                  </div>

                  {/* Images DigiMama */}
                  {exp.images.length > 0 && (
                    <div className={styles.images}>
                      {exp.images.map((img, j) => (
                        <img key={j} src={img} alt={`${exp.company} ${j + 1}`} className={styles.imgThumb} />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
