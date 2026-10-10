import { useCallback, useEffect, useState } from "react";
import { TRANSLATIONS, PROJECTS } from "./data/index";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Capabilities from "./components/Capabilities/Capabilities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* stockage indisponible (navigation privée) : sans conséquence */
  }
}

export default function App() {
  const [theme, setTheme] = useState(() => readStorage("theme", "dark"));
  const [lang, setLang] = useState(() => readStorage("lang", "fr"));
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0]?.id || null);

  /* La photo du Hero s'anime quand l'intro se retire */
  const [ready, setReady] = useState(false);
  const handleIntroDone = useCallback(() => setReady(true), []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    writeStorage("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    writeStorage("lang", lang);
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <>

      <Preloader lang={lang} onComplete={handleIntroDone} />

      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <Hero t={t} lang={lang} ready={ready} />

        <div id="projects">
          <ProjectsCarousel
            t={t}
            lang={lang}
            onActiveChange={setActiveProjectId}
          />
          <Projects t={t} lang={lang} activeProjectId={activeProjectId} />
        </div>

        <div id="journey">
          <Experience t={t} lang={lang} />
          <Education t={t} lang={lang} />
          <Skills t={t} lang={lang} />
        </div>

        <Capabilities t={t} lang={lang} />

        <Contact t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
    </>
  );
}