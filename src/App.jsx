import { useCallback, useEffect, useState } from "react";
import { TRANSLATIONS, PROJECTS } from "./data/index";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Capabilities from "./components/Capabilities/Capabilities";

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("lang");

  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  const browserUsesEnglish = browserLanguages.some((language) =>
    language?.toLowerCase().startsWith("en"),
  );

  return browserUsesEnglish ? "en" : "fr";
}

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  const [lang, setLang] = useState(getInitialLanguage);

  const [activeProjectId, setActiveProjectId] = useState(
    PROJECTS[0]?.id || null,
  );

  // Passe à true quand le preloader a fini : lance l’animation d’ouverture du Hero.
  const [ready, setReady] = useState(false);
  const handlePreloaderDone = useCallback(() => setReady(true), []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <>
      <CustomCursor />

      <Preloader
        lang={lang}
        onComplete={handlePreloaderDone}
      />

      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <Hero
          t={t}
          lang={lang}
          ready={ready}
        />

        <section
          id="projects"
          className="projects-section"
        >
          <ProjectsCarousel
            t={t}
            lang={lang}
            onActiveChange={setActiveProjectId}
          />

          <Projects
            t={t}
            lang={lang}
            activeProjectId={activeProjectId}
          />
        </section>

        <section
          id="journey"
          className="journey-section"
        >
          <Experience
            t={t}
            lang={lang}
          />
        </section>

        <Capabilities
          t={t}
          lang={lang}
        />

        <Skills
          t={t}
          lang={lang}
        />

        <Education
          t={t}
          lang={lang}
        />

        <Contact t={t} />
      </main>

      <Footer
        t={t}
        lang={lang}
      />
    </>
  );
}
