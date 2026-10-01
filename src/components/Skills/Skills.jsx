import { useId, useRef, useState } from "react";

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

const DEFAULT_STEP = 2; // « Système » : ton cœur de métier, visible dès l'arrivée

export default function Skills({ lang = "fr" }) {
  const isFr = lang === "fr";
  const [active, setActive] = useState(DEFAULT_STEP);

  const baseId = useId();
  const tabRefs = useRef([]);

  const last = STEPS.length - 1;
  const step = STEPS[active];
  const copy = isFr ? step.fr : step.en;
  const proofs = isFr ? step.proofsFr : step.proofsEn;
  const number = (index) => String(index + 1).padStart(2, "0");

  const select = (index) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  /* Clavier : flèches, Début, Fin (motif ARIA « onglets ») */
  const handleKeyDown = (event, index) => {
    const targets = {
      ArrowRight: Math.min(index + 1, last),
      ArrowLeft: Math.max(index - 1, 0),
      Home: 0,
      End: last,
    };

    if (!(event.key in targets)) return;

    event.preventDefault();
    select(targets[event.key]);
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
                    aria-label={`${index + 1}. ${label}`}
                    aria-controls={index === active ? `${baseId}-panel` : undefined}
                    tabIndex={index === active ? 0 : -1}
                    className={`${styles.tab} ${state}`}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className={styles.node}>{number(index)}</span>
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
                  {number(active)} · {copy.name}
                </p>
                <p className={styles.panelText}>{copy.text}</p>
              </div>

              <div className={styles.panelMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>{isFr ? "Avec" : "With"}</span>
                  <ul className={styles.chips}>
                    {step.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
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