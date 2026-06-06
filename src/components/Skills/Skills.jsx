import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { SKILLS } from '../../data/index';
import styles from './Skills.module.css';

export default function Skills({ t }) {
  return (
    <section id="skills" className={`${styles.section} section`}>
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.skills.sectionTag}
            title={t.skills.title}
            sub={t.skills.sub}
          />
        </Reveal>

        {/* Grille compétences */}
        <div className={styles.grid}>
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.04}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardLeft}>
                    <span className={styles.icon}>{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <span className={styles.category}>{skill.category}</span>
                </div>
                <div className={styles.bars}>
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className={`${styles.bar} ${dot <= skill.level ? styles.barActive : ''}`}
                    />
                  ))}
                </div>
                <span className={styles.levelLabel}>
                  {t.skills.levels[skill.level - 1]}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Qualités + Intérêts */}
        <div className={styles.extras}>
          <Reveal direction="left">
            <div className={styles.extraCard}>
              <h3 className={styles.extraTitle}>{t.skills.qualities}</h3>
              <ul className={styles.qualityList}>
                {t.skills.qualityList.map((q) => (
                  <li key={q} className={styles.qualityTag}>✦ {q}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className={styles.extraCard}>
              <h3 className={styles.extraTitle}>{t.skills.interests}</h3>
              <ul className={styles.interestList}>
                {t.skills.interestList.map((item) => (
                  <li key={item} className={styles.interestItem}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
