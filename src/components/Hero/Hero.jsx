import Reveal from '../Reveal';
import styles from './Hero.module.css';

export default function Hero({ t }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>
        {/* ---- LEFT ---- */}
        <div className={styles.left}>
          {/* Badge disponibilité */}
          <Reveal delay={0.05}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {t.hero.badge}
            </div>
          </Reveal>

          {/* Nom */}
          <Reveal delay={0.15}>
            <p className={styles.greeting}>{t.hero.greeting}</p>
            <h1 className={styles.name}>
              Gaïus Chanis<br />
              <span className={styles.nameAccent}>HONTONWAKOU</span>
            </h1>
          </Reveal>

          {/* Role & localisation */}
          <Reveal delay={0.25}>
            <p className={styles.role}>{t.hero.role}</p>
            <p className={styles.location}>📍 {t.hero.location}</p>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.3}>
            <p className={styles.bio}>{t.hero.bio}</p>
          </Reveal>

          {/* Passions */}
          <Reveal delay={0.35}>
            <ul className={styles.passions}>
              {t.hero.passions.map((p) => (
                <li key={p} className={styles.passionTag}>{p}</li>
              ))}
            </ul>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.4}>
            <div className={styles.ctas}>
              <button
                className={styles.ctaPrimary}
                onClick={() => scrollTo('projects')}
              >
                {t.hero.cta1}
              </button>
              <a
                href="/CV_GaiusChanis_HONTONWAKOU_EN.pdf" download
                className={styles.ctaOutline}
              >
                {t.hero.cta2}
              </a>
            </div>
          </Reveal>

          {/* Liens sociaux */}
          <Reveal delay={0.45}>
            <div className={styles.socials}>
              {[
                ['🐙 GitHub',   'https://github.com/chanis-hg'],
                ['💼 LinkedIn', 'https://linkedin.com/in/gaïus-chanis-08a782365'],
                ['💬 WhatsApp', 'https://wa.me/22901535055501'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---- RIGHT — Photo ---- */}
        <Reveal direction="scale" delay={0.2}>
          <div className={styles.right}>
            {/* Anneaux décoratifs */}
            <div className={styles.ringOuter} />


            {/* Photo */}
            <div className={styles.photoWrap}>
              <img
                src="/profil.jpg"
                alt="Gaïus Chanis HONTONWAKOU"
                className={styles.photo}
                loading="eager"
              />
              <span className={styles.photoBadge}>Designer & Dev</span>
            </div>

            {/* Citation */}
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
