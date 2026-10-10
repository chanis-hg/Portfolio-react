import { useId, useRef, useState } from "react";
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
   Cinq étapes : ce que je fais, avec quels outils, et quel projet le prouve.
   Règle : chaque preuve doit pointer vers un projet présent sur le site.
================================= */

const STEPS = [
  {
    id: "design",
    fr: {
      name: "Concevoir",
      text: "Je transforme un besoin en parcours utilisateur et en maquettes, et je conçois des identités visuelles.",
    },
    en: {
      name: "Design",
      text: "I turn a need into a user journey and mockups, and I design visual identities.",
    },
    tools: ["Figma"],
    proofsFr: ["FarmFresh Benin (maquettes)", "KAUD (identité visuelle)"],
    proofsEn: ["FarmFresh Benin (mockups)", "KAUD (visual identity)"],
  },
  {
    id: "interface",
    fr: {
      name: "Interface",
      text: "Je construis des interfaces responsives, des formulaires guidés aux tableaux de bord interactifs.",
    },
    en: {
      name: "Interface",
      text: "I build responsive interfaces, from guided forms to interactive dashboards.",
    },
    tools: ["HTML", "CSS", "JavaScript", "React", "Vite", "CSS Modules"],
    proofsFr: ["CV Generator", "Africa Pulse", "Ce portfolio"],
    proofsEn: ["CV Generator", "Africa Pulse", "This portfolio"],
  },
  {
    id: "system",
    fr: {
      name: "Système",
      text: "Je développe l'API, la logique métier et le back-office qui font tourner un produit.",
    },
    en: {
      name: "System",
      text: "I build the API, business logic and back-office that keep a product running.",
    },
    tools: ["Laravel", "PHP", "API REST", "Sanctum", "Filament", "FFmpeg"],
    proofsFr: ["DigiMama (API des paramètres)", "CAVI-Alibori (pipeline, back-office)"],
    proofsEn: ["DigiMama (settings API)", "CAVI-Alibori (pipeline, back-office)"],
  },
  {
    id: "data",
    fr: {
      name: "Données",
      text: "Je modélise et traite les données, je les rends lisibles en graphiques, et j'ai prototypé un microservice Python qui classe du texte.",
    },
    en: {
      name: "Data",
      text: "I model and process data, make it readable through charts, and prototyped a Python microservice that classifies text.",
    },
    tools: ["SQL", "MySQL", "SQLite", "Python", "FastAPI"],
    proofsFr: ["CAVI-Alibori (prototype)", "Africa Pulse"],
    proofsEn: ["CAVI-Alibori (prototype)", "Africa Pulse"],
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
    tools: ["Git", "GitHub", "Pest", "PHPUnit", "Netlify"],
    proofsFr: ["DigiMama (14 tests Pest)", "CV Generator et Africa Pulse (en ligne)"],
    proofsEn: ["DigiMama (14 Pest tests)", "CV Generator and Africa Pulse (live)"],
  },
];

/* Logos (Simple Icons via react-icons). Ils sont posés sur une plaque sombre
   fixe (.tile), donc les logos blancs restent visibles en thème clair.
   Sans logo : SQL, API REST, Sanctum, FFmpeg → affichés en chip texte. */
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

const DEFAULT_STEP = 2; // « Système » : le cœur du profil, visible dès l'arrivée

const pad = (index) => String(index + 1).padStart(2, "0");

export default function Skills({ lang = "fr" }) {
  const isFr = lang === "fr";
  const [active, setActive] = useState(DEFAULT_STEP);

  const baseId = useId();
  const tabRefs = useRef([]);

  const last = STEPS.length - 1;
  const step = STEPS[active];
  const copy = isFr ? step.fr : step.en;
  const proofs = isFr ? step.proofsFr : step.proofsEn;

  const select = (index) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  /* Clavier : flèches circulaires, Début et Fin (motif ARIA « onglets »). */
  const handleKeyDown = (event, index) => {
    const keys = {
      ArrowRight: (index + 1) % STEPS.length,
      ArrowLeft: (index - 1 + STEPS.length) % STEPS.length,
      Home: 0,
      End: last,
    };

    if (!(event.key in keys)) return;

    event.preventDefault();
    select(keys[event.key]);
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
          <div className={styles.flow} style={{ "--progress": active / last }}>
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
              aria-orientation="horizontal"
              className={styles.tabs}
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
                    aria-controls={`${baseId}-panel`}
                    tabIndex={index === active ? 0 : -1}
                    className={`${styles.tab} ${state}`}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className={styles.node} aria-hidden="true">
                      {pad(index)}
                    </span>
                    <span className={styles.tabLabel}>{label}</span>
                  </button>
                );
              })}
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
                  {pad(active)} · {copy.name}
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

                      /* Outil sans logo : chip texte */
                      if (!Logo) {
                        return (
                          <li key={tool} className={styles.chipText}>
                            {tool}
                          </li>
                        );
                      }

                      /* Outil avec logo : le nom reste toujours visible
                         (pas d'information cachée derrière un survol). */
                      return (
                        <li key={tool} className={styles.tool}>
                          <span className={styles.tile} aria-hidden="true">
                            <span className={styles.tileIcon}>
                              <Logo
                                style={logo.color ? { color: logo.color } : undefined}
                              />
                            </span>
                          </span>
                          <span>{tool}</span>
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