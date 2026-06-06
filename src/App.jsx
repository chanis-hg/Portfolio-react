import { useState, useEffect } from 'react';
import { TRANSLATIONS } from './data/index';

import Navbar         from './components/Navbar/Navbar';
import Hero           from './components/Hero/Hero';
import Skills         from './components/Skills/Skills';
import Projects       from './components/Projects/Projects';
import Education      from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Contact        from './components/Contact/Contact';
import Footer         from './components/Footer/Footer';

export default function App() {
  // ---- Thème ----
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ---- Langue ----
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'fr'
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <>
      <Navbar
        t={t}
        lang={lang}    setLang={setLang}
        theme={theme}  setTheme={setTheme}
      />

      <main>
        <Hero           t={t} lang={lang} />
        <Skills         t={t} lang={lang} />
        <Projects       t={t} lang={lang} />
        <Education      t={t} lang={lang} />
        <Certifications t={t} lang={lang} />
        <Contact        t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
    </>
  );
}
