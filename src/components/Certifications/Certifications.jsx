import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { CERTIFICATIONS } from '../../data/index';
import styles from './Certifications.module.css';

export default function Certifications({ t, lang }) {
  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.certif.sectionTag}
            title={t.certif.title}
          />
        </Reveal>

        <div className={styles.grid}>
          {CERTIFICATIONS.map((cert, i) => {
            const title = lang === 'fr' ? cert.titleFr : cert.titleEn;
            const desc  = lang === 'fr' ? cert.descFr  : cert.descEn;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.card}>
                  <span className={styles.icon}>{cert.icon}</span>
                  <div className={styles.body}>
                    <span className={styles.org}>{cert.org}</span>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.desc}>{desc}</p>
                    <span className={styles.badge}>{t.certif.certified}</span>
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
