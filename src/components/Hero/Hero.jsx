import { useState, useEffect } from 'react';
import Reveal from '../Reveal';
import styles from './Hero.module.css';

export default function Hero({ t }) {
  const [wordIndex, setWordIndex] = useState(0);
  const roles = ['Creative Developer', 'UI/UX Designer', 'Laravel Backend', 'React Frontend'];

  useEffect(() => {
    const timer = setInterval(() => setWordIndex(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <Reveal delay={0.05}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {t.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className={styles.greeting}>{t.hero.greeting}</p>
            <h1 className={styles.name}>
              Gaïus Chanis<br />
              <span className={styles.nameAccent}>HONTONWAKOU</span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <div className={styles.roleWrap}>
              <span className={styles.rolePrefix}>—</span>
              <span className={styles.roleAnimated} key={wordIndex}>{roles[wordIndex]}</span>
            </div>
            <p className={styles.location}>📍 {t.hero.location}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className={styles.bio}>{t.hero.bio}</p>
          </Reveal>

          <Reveal delay={0.36}>
            <ul className={styles.passions}>
              {t.hero.passions.map(p => <li key={p} className={styles.passionTag}>{p}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.42}>
            <div className={styles.ctas}>
              <button className={styles.ctaPrimary} onClick={() => scrollTo('projects')}>{t.hero.cta1}</button>
              <a href="/Gaïus Chanis HONTONWAKOU CV_fr.pdf" download className={styles.ctaOutline}>{t.hero.cta2}</a>
            </div>
          </Reveal>

          <Reveal delay={0.48}>
            <div className={styles.socials}>
              {[
                ['🐙 GitHub',   'https://github.com/chanis-hg'],
                ['💼 LinkedIn', 'https://linkedin.com/in/gaïus-chanis-08a782365'],
                ['💬 WhatsApp', 'https://wa.me/22953505501'],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialLink}>{label}</a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <Reveal direction="scale" delay={0.2}>
          <div className={styles.right}>
            <div className={styles.liquidRing} />
            <div className={styles.photoWrap}>
              <img src="moi.jpeg" alt="Gaïus Chanis HONTONWAKOU" className={styles.photo} />
              <span className={styles.photoBadge}>Creative Dev</span>
            </div>
            <blockquote className={styles.quote}>
              <p>"{t.hero.quote}"</p>
              <footer>{t.hero.quoteAuthor}</footer>
            </blockquote>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
