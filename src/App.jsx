import { useState, useEffect } from 'react';
import { TRANSLATIONS } from './data/index';

import Navbar     from './components/Navbar/Navbar';
import Hero       from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects   from './components/Projects/Projects';
import Skills     from './components/Skills/Skills';
import Education  from './components/Education/Education';
import Contact    from './components/Contact/Contact';
import Footer     from './components/Footer/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang,  setLang]  = useState(() => localStorage.getItem('lang')  || 'fr');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero       t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Projects   t={t} lang={lang} />
        <Skills     t={t} />
        <Education  t={t} lang={lang} />
        <Contact    t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
