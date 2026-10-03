import { useEffect, useId, useRef, useState } from "react";
import {
  SiCss,
  SiCssmodules,
  SiFastapi,
  SiFigma,
  SiFilament,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPython,
  SiReact,
  SiSqlite,
  SiVite,
} from "react-icons/si";
import { FlaskConical } from "lucide-react";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

import styles from "./Skills.module.css";

/* =================================
   LA VIE D'UN PRODUIT
   Cinq étapes, chacune avec : ce que je fais, les outils, les preuves.
   Chaque ligne doit correspondre à quelque chose de réellement fait :
   à valider avant publication.
================================= */

const STEPS = [
  {
    id: "design",
    fr: {
      name: "Concevoir",
      text: "Je transforme un besoin en parcours d'utilisateur, puis en maquettes d'applications.",
    },
    en: {
      name: "Design",
      text: "I turn a need into a user journey, then into app mockups.",
    },
    tools: ["Figma"],
    proofsFr: ["FarmFresh Benin", "KAUD"],
    proofsEn: ["FarmFresh Benin", "KAUD"],
  },
  {
    id: "interface",
    fr: {
      name: "Interface",
      text: "Je construis des interfaces responsives et bilingues, des sites vitrines aux applications interactives.",
    },
    en: {
      name: "Interface",
      text: "I build responsive, bilingual interfaces, from showcase sites to interactive apps.",
    },
    tools: ["HTML", "CSS", "JavaScript", "React", "Vite", "CSS Modules"],
    proofsFr: ["CV Generator", "Africa Pulse", "Ce portfolio"],
    proofsEn: ["CV Generator", "Africa Pulse", "This portfolio"],
  },
  {
    id: "system",
    fr: {
      name: "Système",
      text: "Je conçois l'API, l'authentification et le back-office qui font tourner un produit.",
    },
    en: {
      name: "System",
      text: "I design the API, authentication and back-office that keep a product running.",
    },
    tools: ["Laravel", "PHP", "API REST", "Sanctum", "Filament"],
    proofsFr: ["DigiMama", "CAVI-Alibori"],
    proofsEn: ["DigiMama", "CAVI-Alibori"],
  },
  {
    id: "data",
    fr: {
      name: "Données",
      text: "Je modélise les données, je les traite et je les rends lisibles, avec un microservice Python quand il faut classer du texte.",
    },
    en: {
      name: "Data",
      text: "I model data, process it and make it readable, with a Python microservice when text needs classifying.",
    },
    tools: ["SQL", "MySQL", "SQLite", "Python", "FastAPI"],
    proofsFr: ["CAVI-Alibori", "Africa Pulse"],
    proofsEn: ["CAVI-Alibori", "Africa Pulse"],
  },
  {
    id: "ship",
    fr: {
      name: "Livrer",
      text: "Je versionne mon code, je teste les parcours critiques et je mets en ligne.",
    },
    en: {
      name: "Ship",
      text: "I version my code, test the critical flows and put it online.",
    },
    tools: ["Git", "GitHub", "Netlify", "PHPUnit"],
    proofsFr: ["DigiMama (tests)", "Ce portfolio (déploiement)"],
    proofsEn: ["DigiMama (tests)", "This portfolio (deployment)"],
  },
];

/* =================================
   LOGOS DES OUTILS
   Logos des marques (jeu Simple Icons, déjà inclus dans react-icons).
   Couleur officielle de la marque ; si elle manque de contraste sur la plaque
   sombre (CSS, CSS Modules, SQLite, GitHub), repli en blanc.

   PHPUnit : pas de logo simple-icons → on utilise FlaskConical (lucide-react),
   qui symbolise les tests / le laboratoire.
   Sans logo : SQL, API REST, Sanctum → affichés en chip texte.
================================= */

const LOGOS = {
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#FFFFFF" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  Vite: { Icon: SiVite, color: "#9135FF" },
  "CSS Modules": { Icon: SiCssmodules, color: "#FFFFFF" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Filament: { Icon: SiFilament, color: "#FDAE4B" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  SQLite: { Icon: SiSqlite, color: "#FFFFFF" },
  Python: { Icon: SiPython, color: "#3776AB" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  Git: { Icon: SiGit, color: "#F03C2E" },
  GitHub: { Icon: SiGithub, color: "#FFFFFF" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
  PHPUnit: { Icon: FlaskConical, color: null },
};

/* Langue : celle passée par App (prop `lang`), sinon celle de <html lang>,
   que App tient à jour. Le texte suit donc le sélecteur FR/EN dans tous les cas. */
function useLang(propLang) {
  const read = () =>
    typeof document === "undefined"
      ? "fr"
      : document.documentElement.getAttribute("lang") || "fr";

  const [docLang, setDocLang] = useState(read);

  useEffect(() => {
    if (propLang) return undefined;

    const observer = new MutationObserver(() => setDocLang(read()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, [propLang]);

  return propLang || docLang;
}

const DEFAULT_STEP = 2; // « Système » : ton cœur de métier, visible dès l'arrivée
const AUTO_ADVANCE_MS = 15000;

export default function Skills({ lang: langProp }) {
  const lang = useLang(langProp);
  const isFr = lang === "fr";
  const [active, setActive] = useState(DEFAULT_STEP);
  const [isPaused, setIsPaused] = useState(false);

  const baseId = useId();
  const tabRefs = useRef([]);

  const last = STEPS.length - 1;
  const step = STEPS[active];
  const copy = isFr ? step.fr : step.en;
  const proofs = isFr ? step.proofsFr : step.proofsEn;
  const number = (index) => String(index + 1).padStart(2, "0");

  useEffect(() => {
    if (isPaused) return undefined;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (mediaQuery.matches) return undefined;

    const advance = () => {
      if (document.visibilityState !== "visible") return;

      setActive((current) => (current + 1) % STEPS.length);
    };

    const timer = window.setInterval(advance, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const select = (index) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  /* Clavier : flèches circulaires, Début et Fin (motif ARIA « onglets »). */
  const handleKeyDown = (event, index) => {
    let nextIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % STEPS.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + STEPS.length) % STEPS.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    select(nextIndex);
  };

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={isFr ? "Compétences" : "Skills"}
            title={isFr ? "De l'idée à la mise en ligne." : "From idea to launch."}
            sub={
              isFr
                ? "Cinq étapes, les outils que j'utilise dans chacune, et les projets qui le prouvent."
                : "Five stages, the tools I use in each, and the projects that prove it."
            }
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className={`${styles.flow} ${isPaused ? styles.flowPaused : ""}`}
            style={{ "--progress": active / last }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <div className={styles.rail} aria-hidden="true">
              <span className={styles.railFill} />
            </div>

            <div
              role="tablist"
              aria-label={
                isFr
                  ? "Les étapes de la vie d'un produit"
                  : "The stages of a product's life"
              }
              className={styles.tabs}
              aria-orientation="horizontal"
            >
              {STEPS.map((item, index) => {
                const label = isFr ? item.fr.name : item.en.name;
                const state =
                  index === active
                    ? styles.current
                    : index < active
                      ? styles.done
                      : "";

                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${item.id}`}
                    aria-selected={index === active}
                    aria-label={`${index + 1}. ${label}`}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={index === active ? 0 : -1}
                    className={`${styles.tab} ${state}`}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className={styles.node} aria-hidden="true">
                      {number(index)}
                    </span>
                    <span className={styles.tabLabel}>{label}</span>
                  </button>
                );
              })}
            </div>

            <div className={styles.timerTrack} aria-hidden="true">
              <span key={step.id} className={styles.timerFill} />
            </div>

            <div
              key={step.id}
              role="tabpanel"
              id={`${baseId}-panel`}
              aria-labelledby={`${baseId}-tab-${step.id}`}
              tabIndex={0}
              className={styles.panel}
            >
              <div className={styles.panelMain}>
                <p className={styles.panelStep}>
                  {number(active)} · {copy.name}
                </p>
                <p className={styles.panelText}>{copy.text}</p>
              </div>

              <div className={styles.panelMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>{isFr ? "Avec" : "With"}</span>
                  <ul className={styles.chips}>
                    {step.tools.map((tool) => {
                      const logo = LOGOS[tool];
                      const Logo = logo?.Icon;

                      /* Tuile icône (logo disponible) */
                      if (Logo) {
                        return (
                          <li
                            key={tool}
                            className={styles.tile}
                            aria-label={tool}
                            data-tooltip={tool}
                          >
                            <span className={styles.tileIcon} aria-hidden="true">
                              <Logo
                                style={logo.color ? { color: logo.color } : undefined}
                              />
                            </span>
                            <span className={styles.tileLabel} aria-hidden="true">
                              {tool}
                            </span>
                          </li>
                        );
                      }

                      /* Chip texte (pas de logo) */
                      return (
                        <li key={tool} className={styles.chipText}>
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>
                    {isFr ? "Preuves" : "Proof"}
                  </span>
                  <ul className={styles.proofs}>
                    {proofs.map((proof) => (
                      <li key={proof}>{proof}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}