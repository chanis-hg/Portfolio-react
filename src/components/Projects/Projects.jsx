import { useState } from 'react';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { PROJECTS } from '../../data/index';
import styles from './Projects.module.css';

function BrowserMockup({ url, title }) {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockupBar}>
        <span className={styles.mockupDot} style={{ background: '#ff5f57' }} />
        <span className={styles.mockupDot} style={{ background: '#febc2e' }} />
        <span className={styles.mockupDot} style={{ background: '#28c840' }} />
        <span className={styles.mockupUrl}>{url.replace('https://', '')}</span>
      </div>
      <div className={styles.mockupContent}>
        <iframe
          src={url}
          title={title}
          className={styles.mockupIframe}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.mockupOverlay}
          aria-label={`Voir ${title}`}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, t, lang }) {
  const isFeatured = project.featured;
  const desc = lang === 'fr' ? project.descFr : project.descEn;

  const renderVisual = () => {
    if (isFeatured) {
      return <BrowserMockup url={project.previewUrl} title={project.title} />;
    }
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className={styles.cardImg}
        />
      );
    }
    return (
      <div
        className={styles.cardEmoji}
        style={{ background: `linear-gradient(135deg, ${project.color}18, ${project.color}35)` }}
      >
        <span className={styles.emoji}>{project.emoji}</span>
      </div>
    );
  };

  return (
    <div className={`${styles.card} ${isFeatured ? styles.cardFeatured : ''}`}>
      {renderVisual()}

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <span className={styles.cardType}>{t.projects.filters[project.type]}</span>
        </div>
        {isFeatured && (
          <span className={styles.featuredBadge}>{t.projects.featured}</span>
        )}
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
              {project.demo.includes('figma') ? '🎨 Prototype →' : t.projects.demo}
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkGhost}>
              🐙 {t.projects.code}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ t, lang }) {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  const filterKeys = ['all', 'real', 'academic', 'personal', 'design'];

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.projects.sectionTag}
            title={t.projects.title}
            sub={t.projects.sub}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.filters}>
            {filterKeys.map((key) => (
              <button
                key={key}
                className={`${styles.filterBtn} ${filter === key ? styles.filterActive : ''}`}
                onClick={() => setFilter(key)}
              >
                {t.projects.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} t={t} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
