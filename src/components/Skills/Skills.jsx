import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";

import { FaCss3Alt, FaPaintBrush } from "react-icons/fa";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiLaravel,
  SiPhp,
  SiFigma,
} from "react-icons/si";

import { ArrowUpRight, Database, PanelsTopLeft, Cable } from "lucide-react";

import { SKILLS } from "../../data/index";
import styles from "./Skills.module.css";

const ICONS = {
  "html-css": (
    <span className={styles.dualIcon}>
      <SiHtml5 />
      <FaCss3Alt />
    </span>
  ),

  javascript: <SiJavascript />,
  react: <SiReact />,
  laravel: <SiLaravel />,
  php: <SiPhp />,
  sql: <Database />,
  api: <Cable />,
  figma: <SiFigma />,
  canva: <FaPaintBrush />,
  "ux-ui": <PanelsTopLeft />,
};

export default function Skills({ t }) {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.skills.sectionTag}
            title={t.skills.title}
            sub={t.skills.sub}
          />
        </Reveal>

        <div className={styles.grid}>
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <article
                className={styles.card}
                style={{ "--skill-color": SKILL_COLORS[skill.icon] }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.index}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.category}>{skill.category}</span>
                </div>

                <div className={styles.iconWrap}>
                  <div className={styles.icon}>{ICONS[skill.icon]}</div>

                  <ArrowUpRight
                    className={styles.arrow}
                    size={17}
                    strokeWidth={1.7}
                  />
                </div>

                <div className={styles.cardBottom}>
                  <h3 className={styles.name}>{skill.name}</h3>

                  <span className={styles.line} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_COLORS = {
  "html-css": "#E34F26",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  laravel: "#FF2D20",
  php: "#777BB4",
  sql: "#4479A1",
  api: "#8B5CF6",
  figma: "#F24E1E",
  canva: "#00C4CC",
  "ux-ui": "#A259FF",
};
