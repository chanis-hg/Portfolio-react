import {
  FileText,
  Sparkles,
  GitBranch,
  ArrowRight,
  UserRound,
  Layers3,
  Smartphone,
  SlidersHorizontal,
  FileDown,
  BarChart3,
  Globe2,
  Map as MapIcon,
} from "lucide-react";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./ProjectVisual.module.css";

function FlowArrow({ className }) {
  return (
    <ArrowRight className={className} size={16} strokeWidth={1.5} aria-hidden="true" />
  );
}

function CaviVisual({ lang }) {
  const isFr = lang === "fr";
  const [ref, isOn] = useScrollReveal(0.4);

  const steps = [
    { icon: FileText, label: "Bulletin" },
    { icon: Sparkles, label: "Extraction" },
    { icon: GitBranch, label: isFr ? "Règle" : "Rule" },
    { icon: null, label: "Audio" },
  ];

  return (
    <div ref={ref} className={`${styles.caviVisual} ${isOn ? styles.isOn : ""}`}>
      <div className={styles.caviHeader}>
        <span>CAVI-ALIBORI</span>
        <span>PIPELINE</span>
      </div>

      <div className={styles.caviFlow}>
        {steps.map(({ icon: Icon, label }, index) => (
          <div className={styles.caviStepWrap} key={label} style={{ "--i": index }}>
            <div className={styles.caviStep}>
              <div className={styles.caviIcon}>
                {Icon ? (
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                ) : (
                  <span className={styles.wave} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </div>
              <span>{label}</span>
            </div>

            {index < steps.length - 1 && <FlowArrow className={styles.caviArrow} />}
          </div>
        ))}
      </div>

      <div className={styles.caviFooter}>
        <span>HACKATHON · 72 H</span>
        <span>{isFr ? "Démo : bariba" : "Demo: Bariba"}</span>
      </div>
    </div>
  );
}

function DigiMamaVisual({ lang }) {
  const isFr = lang === "fr";

  return (
    <div className={styles.systemVisual}>
      <div className={styles.visualHeader}>
        <span>DIGIMAMA</span>
        <span>API · TESTS</span>
      </div>

      <div className={styles.systemFlow}>
        <div className={styles.flowNode}>
          <Smartphone size={20} strokeWidth={1.6} aria-hidden="true" />
          <span>{isFr ? "App mobile" : "Mobile app"}</span>
        </div>

        <FlowArrow className={styles.flowArrow} />

        <div className={styles.flowNodeAccent}>
          <SlidersHorizontal size={20} strokeWidth={1.6} aria-hidden="true" />
          <span>{isFr ? "Paramètres" : "Settings"}</span>
        </div>

        <FlowArrow className={styles.flowArrow} />

        <div className={styles.flowNodeGroup}>
          <span>{isFr ? "LANGUE" : "LANGUAGE"}</span>
          <span>{isFr ? "ALERTES" : "ALERTS"}</span>
          <span>{isFr ? "QUOTA Mo" : "MB LIMIT"}</span>
          <span>OFFLINE</span>
        </div>
      </div>

      <div className={styles.visualFooter}>
        <span>Laravel 12 · Pest</span>
        <span>{isFr ? "14 tests communauté" : "14 community tests"}</span>
      </div>
    </div>
  );
}

function CvGeneratorVisual({ lang }) {
  const isFr = lang === "fr";

  const steps = [
    { icon: UserRound, label: isFr ? "Formulaire" : "Form" },
    { icon: Layers3, label: isFr ? "Aperçu" : "Preview" },
    { icon: Sparkles, label: isFr ? "Thème" : "Theme" },
    { icon: FileDown, label: "PDF A4" },
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
              <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </div>

            {index < steps.length - 1 && <FlowArrow className={styles.flowArrow} />}
          </div>
        ))}
      </div>

      <div className={styles.visualFooter}>
        <span>React · Vite · html2pdf</span>
        <span>{isFr ? "4 thèmes" : "4 themes"}</span>
      </div>
    </div>
  );
}

function AfricaPulseVisual({ lang }) {
  const isFr = lang === "fr";

  const metrics = [
    { icon: Globe2, value: "15", label: isFr ? "Pays africains" : "African countries" },
    { icon: BarChart3, value: isFr ? "PIB" : "GDP", label: isFr ? "Économie" : "Economy" },
    { icon: MapIcon, value: isFr ? "RÉGIONS" : "REGIONS", label: isFr ? "Filtres régionaux" : "Regional filters" },
  ];

  return (
    <div className={styles.pulseVisual}>
      <div className={styles.visualHeader}>
        <span>AFRICA PULSE</span>
        <span>15 {isFr ? "PAYS" : "COUNTRIES"}</span>
      </div>

      <div className={styles.pulseGrid}>
        {metrics.map(({ icon: Icon, value, label }) => (
          <div className={styles.pulseMetric} key={label}>
            <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.visualFooter}>
        <span>React · Recharts · Vite</span>
        <span>{isFr ? "Vue pays" : "Country view"}</span>
      </div>
    </div>
  );
}

const VISUALS = {
  cavi: CaviVisual,
  digimama: DigiMamaVisual,
  "cv-generator": CvGeneratorVisual,
  "africa-pulse": AfricaPulseVisual,
};

function ImageVisual({ project, lang }) {
  const isKaud = project.id === "kaud";
  const alt =
    lang === "fr"
      ? `Aperçu du projet ${project.title}`
      : `Preview of the ${project.title} project`;

  return (
    <div className={`${styles.cardVisual} ${isKaud ? styles.kaudVisual : ""}`}>
      <img
        src={project.image}
        alt={alt}
        className={styles.cardImg}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function PlaceholderVisual({ project }) {
  return (
    <div className={styles.cardVisual}>
      <div className={styles.cardPlaceholder} aria-hidden="true">
        <span>{project.title?.charAt(0)}</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ project, lang = "fr", preferImage = false }) {
  if (preferImage && project.image) {
    return <ImageVisual project={project} lang={lang} />;
  }

  const CustomVisual = project.visual ? VISUALS[project.visual] : null;

  if (CustomVisual) return <CustomVisual lang={lang} />;
  if (project.image) return <ImageVisual project={project} lang={lang} />;

  return <PlaceholderVisual project={project} />;
}