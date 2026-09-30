import { useEffect, useState } from 'react';
import {
  Menu,
  Home,
  FolderKanban,
  GraduationCap,
  Mail,
} from 'lucide-react';

import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Accueil',
    icon: Home,
  },
  {
    id: 'projects',
    label: 'Projets',
    icon: FolderKanban,
  },
  {
    id: 'journey',
    label: 'Parcours',
    icon: GraduationCap,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setActive(id);
    setMobileOpen(false);
  };

  return (
    <aside
      className={`${styles.sidebar} ${
        mobileOpen ? styles.mobileOpen : ''
      }`}
    >
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setMobileOpen(value => !value)}
        aria-label="Ouvrir la navigation"
        aria-expanded={mobileOpen}
      >
        <Menu size={21} strokeWidth={1.8} />
      </button>

      <nav
        className={styles.nav}
        aria-label="Navigation principale"
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`${styles.navItem} ${
              active === id ? styles.active : ''
            }`}
            onClick={() => handleNavigation(id)}
          >
            <Icon
              className={styles.icon}
              size={19}
              strokeWidth={1.8}
            />

            <span className={styles.label}>
              {label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}