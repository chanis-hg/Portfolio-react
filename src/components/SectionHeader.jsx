import styles from './SectionHeader.module.css';

export default function SectionHeader({ tag, title, sub }) {
  return (
    <div className={styles.header}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>{title}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  );
}
