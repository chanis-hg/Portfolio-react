import {
  FileText,
  Sparkles,
  GitBranch,
  Volume2,
  ArrowRight,
  UserRound,
  Layers3,
  FileDown,
  Database,
  BarChart3,
  Globe2,
  Map,
} from "lucide-react";

import styles from "./ProjectVisual.module.css";

/* =================================
   CAVI-ALIBORI
================================= */

function CaviVisual({ lang }) {
  const labels =
    lang === "fr"
      ? {
          input: "Bulletin météo",
          extraction: "Extraction",
          decision: "Décision",
          output: "Consigne vocale",
          languages: "Bariba · Peulh · Dendi",
        }
      : {
          input: "Weather bulletin",
          extraction: "Extraction",
          decision: "Decision",
          output: "Voice instruction",
          languages: "Bariba · Peulh · Dendi",
        };

  const steps = [
    { icon: FileText, label: labels.input },
    { icon: Sparkles, label: labels.extraction },
    { icon: GitBranch, label: labels.decision },
    { icon: Volume2, label: labels.output },
  ];

  return (
    <div className={styles.caviVisual}>
      <div className={styles.caviHeader}>
        <span>CAVI-ALIBORI</span>
        <span>PIPELINE</span>
      </div>

      <div className={styles.caviFlow}>
        {steps.map(({ icon: Icon, label }, index) => (
          <div className={styles.caviStepWrap} key={label}>
            <div className={styles.caviStep}>
              <div className={styles.caviIcon}>
                <Icon size={19} strokeWidth={1.7} />
              </div>

              <span>{label}</span>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight
                className={styles.caviArrow}
                size={16}
                strokeWidth={1.5}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.caviFooter}>
        <span>48–72H · MVP HACKATHON</span>
        <span>{labels.languages}</span>
      </div>
    </div>
  );
}

/* =================================
   DIGIMAMA
================================= */

function DigiMamaVisual({ lang }) {
  const isFr = lang === "fr";

  return (
    <div className={styles.systemVisual}>
      <div className={styles.visualHeader}>
        <span>DIGIMAMA</span>
        <span>BACKEND</span>
      </div>

      <div className={styles.systemFlow}>
        <div className={styles.flowNode}>
          <UserRound size={20} strokeWidth={1.6} />
          <span>{isFr ? "Action utilisateur" : "User action"}</span>
        </div>

        <ArrowRight className={styles.flowArrow} />

        <div className={styles.flowNodeAccent}>
          <Layers3 size={20} strokeWidth={1.6} />
          <span>GamificationService</span>
        </div>

        <ArrowRight className={styles.flowArrow} />

        <div className={styles.flowNodeGroup}>
          <span>XP</span>
          <span>LEVEL</span>
          <span>STREAK</span>
          <span>BADGE</span>
        </div>

        <ArrowRight className={styles.flowArrow} />

        <div className={styles.flowNode}>
          <Database size={20} strokeWidth={1.6} />
          <span>{isFr ? "Persistance" : "Persistence"}</span>
        </div>
      </div>

      <div className={styles.visualFooter}>
        <span>Laravel 12 · Filament · MySQL</span>
        <span>lockForUpdate()</span>
      </div>
    </div>
  );
}

/* =================================
   CV GENERATOR
================================= */

function CvGeneratorVisual({ lang }) {
  const isFr = lang === "fr";

  const steps = [
    {
      icon: UserRound,
      label: isFr ? "Formulaire" : "Form",
    },
    {
      icon: Layers3,
      label: isFr ? "Aperçu" : "Preview",
    },
    {
      icon: Sparkles,
      label: isFr ? "Thème" : "Theme",
    },
    {
      icon: FileDown,
      label: "PDF A4",
    },
  ];

  return (
    <div className={styles.systemVisual}>
      <div className={styles.visualHeader}>
        <span>CV GENERATOR</span>
        <span>FR · EN</span>
      </div>

      <div className={styles.systemFlow}>
        {steps.map(({ icon: Icon, label }, index) => (
          <div className={styles.flowStepWrap} key={label}>
            <div className={styles.flowNode}>
              <Icon size={19} strokeWidth={1.6} />
              <span>{label}</span>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight
                className={styles.flowArrow}
                size={16}
                strokeWidth={1.5}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.visualFooter}>
        <span>React · Vite · html2pdf</span>
        <span>4 thèmes</span>
      </div>
    </div>
  );
}

/* =================================
   AFRICA PULSE
================================= */

function AfricaPulseVisual({ lang }) {
  const isFr = lang === "fr";

  return (
    <div className={styles.pulseVisual}>
      <div className={styles.visualHeader}>
        <span>AFRICA PULSE</span>
        <span>15 {isFr ? "PAYS" : "COUNTRIES"}</span>
      </div>

      <div className={styles.pulseGrid}>
        <div className={styles.pulseMetric}>
          <Globe2 size={20} strokeWidth={1.5} />
          <strong>15</strong>
          <span>
            {isFr ? "Pays africains" : "African countries"}
          </span>
        </div>

        <div className={styles.pulseMetric}>
          <BarChart3 size={20} strokeWidth={1.5} />
          <strong>GDP</strong>
          <span>{isFr ? "Économie" : "Economy"}</span>
        </div>

        <div className={styles.pulseMetric}>
          <Map size={20} strokeWidth={1.5} />
          <strong>REGIONS</strong>
          <span>
            {isFr ? "Filtres régionaux" : "Regional filters"}
          </span>
        </div>
      </div>

      <div className={styles.visualFooter}>
        <span>React · Recharts · Vite</span>
        <span>{isFr ? "Vue pays" : "Country view"}</span>
      </div>
    </div>
  );
}

/* =================================
   VISUAL MAPPING
================================= */

const VISUALS = {
  cavi: CaviVisual,
  digimama: DigiMamaVisual,
  "cv-generator": CvGeneratorVisual,
  "africa-pulse": AfricaPulseVisual,
};

/* =================================
   IMAGE
================================= */

function ImageVisual({ project }) {
  const isKaud = project.id === "kaud";

  return (
    <div
      className={`${styles.cardVisual} ${
        isKaud ? styles.kaudVisual : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={styles.cardImg}
      />
    </div>
  );
}

/* =================================
   FALLBACK
================================= */

function PlaceholderVisual({ project }) {
  return (
    <div className={styles.cardVisual}>
      <div className={styles.cardPlaceholder}>
        <span>{project.title?.charAt(0)}</span>
      </div>
    </div>
  );
}

/* =================================
   MAIN
================================= */

export default function ProjectVisual({ project, lang }) {
  const CustomVisual = project.visual
    ? VISUALS[project.visual]
    : null;

  if (CustomVisual) {
    return <CustomVisual lang={lang} />;
  }

  if (project.image) {
    return <ImageVisual project={project} />;
  }

  return <PlaceholderVisual project={project} />;
}