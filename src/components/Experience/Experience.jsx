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
            const role = lang === 'fr' ? exp.roleFr : exp.roleEn;
            const type = lang === 'fr' ? exp.typeFr : exp.typeEn;
            const desc = lang === 'fr' ? exp.descFr : exp.descEn;
            const stack = lang === 'fr' ? exp.stackFr : exp.stackEn;
            const period = lang === 'fr' ? exp.period : exp.periodEn;
            const points = lang === 'fr' ? exp.highlights : exp.highlightsEn;

            const hasEvidence = points.length > 0 || exp.images.length > 0;

            return (
              <Reveal
                key={exp.id}
                direction="left"
                delay={i * 0.12}
              >
                <article
                  className={`${styles.card} ${
                    hasEvidence
                      ? styles.cardFeatured
                      : styles.cardCompact
                  }`}
                >
                  <header className={styles.cardHead}>
                    <div className={styles.identity}>
                      <span className={styles.period}>{period}</span>

                      <h3 className={styles.company}>
                        {exp.company}
                      </h3>

                      <p className={styles.role}>{role}</p>
                    </div>

                    <div className={styles.metaRight}>
                      <span className={styles.type}>{type}</span>

                      {exp.current && (
                        <span className={styles.currentBadge}>
                          {t.experience.present}
                        </span>
                      )}
                    </div>
                  </header>

                  <div className={styles.body}>
                    <div className={styles.main}>
                      <p className={styles.desc}>{desc}</p>

                      {points.length > 0 && (
                        <div className={styles.highlights}>
                          <span className={styles.blockLabel}>
                            {lang === 'fr'
                              ? 'Ma contribution'
                              : 'My contribution'}
                          </span>

                          <ul className={styles.points}>
                            {points.map((point, j) => (
                              <li
                                key={j}
                                className={styles.point}
                              >
                                <span className={styles.pointDot} />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {stack.length > 0 && (
                        <div className={styles.stack}>
                          {stack.map(item => (
                            <span
                              key={item}
                              className={styles.stackTag}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {exp.images.length > 0 && (
                      <div className={styles.evidence}>
                        <span className={styles.blockLabel}>
                          {lang === 'fr'
                            ? 'Preuves visuelles'
                            : 'Visual evidence'}
                        </span>

                        <div className={styles.images}>
                          {exp.images.map((img, j) => (
                            <img
                              key={j}
                              src={img}
                              alt={`${exp.company} ${j + 1}`}
                              className={styles.imgThumb}
                            />
                          ))}
                        </div>
                      </div>
                    )}
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