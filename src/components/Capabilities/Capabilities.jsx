import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { CAPABILITIES } from "../../data/index";

import styles from "./Capabilities.module.css";

export default function Capabilities({ t, lang }) {
  const isFr = lang === "fr";

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.capabilities.sectionTag}
            title={t.capabilities.title}
            sub={t.capabilities.sub}
          />
        </Reveal>

        <div className={styles.grid}>
          {CAPABILITIES.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 0.1}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <img
                    className={styles.image}
                    src={capability.image}
                    alt={isFr ? capability.altFr : capability.altEn}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <span
                      className={styles.index}
                      aria-hidden="true"
                    >
                      {capability.number}
                    </span>

                    <span className={styles.category}>
                      {isFr
                        ? capability.categoryFr
                        : capability.categoryEn}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.title}>
                      {isFr
                        ? capability.titleFr
                        : capability.titleEn}
                    </h3>

                    <p className={styles.description}>
                      {isFr
                        ? capability.descriptionFr
                        : capability.descriptionEn}
                    </p>
                  </div>

                  <ul className={styles.points}>
                    {(isFr
                      ? capability.pointsFr
                      : capability.pointsEn
                    ).map((point) => (
                      <li key={point}>
                        <span
                          className={styles.pointMark}
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
