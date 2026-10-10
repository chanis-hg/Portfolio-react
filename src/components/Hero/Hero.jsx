import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowDown, ChevronDown, Clock, MapPin, MessageCircle } from "lucide-react";

import styles from "./Hero.module.css";

const FLIGHT_MS = 1600;
const FALLBACK_MS = 3000;

const WHATSAPP_URL = "https://wa.me/2290153505501";

const CLOCK = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const canHover = () => window.matchMedia("(hover: hover)").matches;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const HOUR = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  hourCycle: "h23",
});

function getTone() {
  const hour = Number(HOUR.format(new Date()));
  if (hour >= 5 && hour < 8) return "dawn";
  if (hour >= 8 && hour < 17) return "day";
  if (hour >= 17 && hour < 20) return "dusk";
  return "night";
}


function CotonouClock({ lang }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const [hh, mm] = CLOCK.format(now).split(":");
  const colonOn = now.getSeconds() % 2 === 0;

  return (
    <div className={styles.clock}>
      <Clock size={15} strokeWidth={1.7} aria-hidden="true" />
      <span>{lang === "fr" ? "Il est" : "It's"}</span>
      <strong className={styles.clockTime}>
        {hh}
        <span className={colonOn ? styles.colon : styles.colonOff}>:</span>
        {mm}
      </strong>
      <span>{lang === "fr" ? "à Cotonou" : "in Cotonou"}</span>
    </div>
  );
}


function Viewfinder({ lang, frameRef }) {
  const [locked, setLocked] = useState(false);
  const [shot, setShot] = useState(0);

  const isFr = lang === "fr";

  const handleClick = () => {
    setShot((n) => n + 1);
    if (!canHover()) setLocked((value) => !value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setShot((n) => n + 1);
    }
  };

  return (
    <div className={styles.photoColumn}>
      <div ref={frameRef} className={styles.flight}>
        <div
          className={`${styles.viewfinder} ${locked ? styles.locked : ""}`}
          style={{ "--fx": "46%", "--fy": "33%" }}
          role="button"
          tabIndex={0}
          aria-pressed={locked}
          aria-label={
            isFr
              ? "Mise au point sur la photo : afficher mon stack"
              : "Focus on the photo: show my stack"
          }
          onMouseEnter={() => canHover() && setLocked(true)}
          onMouseLeave={() => canHover() && setLocked(false)}
          onFocus={(e) =>
            e.currentTarget.matches(":focus-visible") && setLocked(true)
          }
          onBlur={() => setLocked(false)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.photoInner}>
            <img
              src="/moi.jpeg"
              alt="Gaïus Chanis HONTONWAKOU"
              className={styles.photo}
            />

            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.tr}`} />
            <span className={`${styles.corner} ${styles.bl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
            <span className={styles.reticle} />

            <dl className={styles.exif}>
              <div className={styles.exifRow}>
                <dt>STACK</dt>
                <dd>Laravel · React · Figma</dd>
              </div>
              <div className={styles.exifRow}>
                <dt>BASE</dt>
                <dd>Cotonou · 6.37°N 2.39°E</dd>
              </div>
              <div className={styles.exifRow}>
                <dt>{isFr ? "DISPO" : "OPEN TO"}</dt>
                <dd>
                  {isFr ? "Stage · Freelance" : "Internship · Freelance"}
                </dd>
              </div>
            </dl>

            {shot > 0 && <span key={shot} className={styles.flash} />}
          </div>
        </div>
      </div>

      <div
        className={`${styles.photoMeta} ${styles.line}`}
        style={{ "--i": 9 }}
        aria-hidden="true"
      >
        <span>GAÏUS CHANIS</span>
        <span className={locked ? styles.metaLocked : ""}>
          {locked
            ? isFr
              ? "● NET"
              : "● IN FOCUS"
            : isFr
              ? "SURVOLER · TOUCHER"
              : "HOVER · TAP"}
        </span>
      </div>
    </div>
  );
}


export default function Hero({ t, lang, ready = true }) {
  const [phase, setPhase] = useState(() =>
    prefersReducedMotion() ? "done" : "wait",
  );
  const [moreOpen, setMoreOpen] = useState(false);
  const [tone, setTone] = useState(getTone);
  const heroRef = useRef(null);
  const frameRef = useRef(null);
  const animsRef = useRef([]);

  const isFr = lang === "fr";

  useEffect(() => {
    const id = window.setInterval(() => setTone(getTone()), 5 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero || prefersReducedMotion()) return undefined;

    let frame = 0;

    const updateScrollProgress = () => {
      frame = 0;

      const rect = hero.getBoundingClientRect();
      const progress = clamp(-rect.top / (rect.height * 0.58), 0, 1);

      hero.style.setProperty("--hero-scroll-shift", `${progress * -42}px`);
      hero.style.setProperty("--hero-scroll-opacity", `${1 - progress * 0.2}`);
      hero.style.setProperty("--hero-scroll-glow", `${1 - progress * 0.42}`);
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useLayoutEffect(() => {
    if (phase !== "wait") return;
    const el = frameRef.current;
    if (el) el.style.opacity = "0";
  }, []);

  useEffect(() => {
    if (phase !== "wait") return;

    const start = () => {
      const el = frameRef.current;
      const inner = el?.querySelector(`.${styles.photoInner}`);

      if (!el || !inner || typeof el.animate !== "function") {
        if (el) el.style.opacity = "";
        setPhase("done");
        return;
      }

      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const s = clamp(
        Math.min((vw * 0.9) / rect.width, (vh * 0.78) / rect.height),
        1.05,
        2.4,
      );
      const dx = vw / 2 - (rect.left + rect.width / 2);
      const dy = vh / 2 - (rect.top + rect.height / 2);
      const at = (y, scale) => `translate(${dx}px, ${dy + y}px) scale(${scale})`;

      el.style.zIndex = "30";
      el.style.willChange = "transform, opacity";
      el.style.opacity = "";

      const flight = el.animate(
        [
          { offset: 0, opacity: 0, transform: at(28, s * 0.9), easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
          { offset: 0.27, opacity: 1, transform: at(-12, s), easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
          { offset: 0.45, opacity: 1, transform: at(-4, s), easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
          { offset: 0.62, opacity: 1, transform: at(0, s * 0.95), easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
          { offset: 1, opacity: 1, transform: "translate(0px, 0px) scale(1)" },
        ],
        { duration: FLIGHT_MS, fill: "both" },
      );

      const shadow = inner.animate(
        [
          { offset: 0, boxShadow: "0 40px 80px rgba(0,0,0,0.10), 0 16px 32px rgba(0,0,0,0.06)" },
          { offset: 0.27, boxShadow: "0 60px 100px rgba(0,0,0,0.38), 0 26px 46px rgba(0,0,0,0.22)" },
          { offset: 0.45, boxShadow: "0 56px 94px rgba(0,0,0,0.36), 0 24px 42px rgba(0,0,0,0.20)" },
          { offset: 0.62, boxShadow: "0 14px 32px rgba(0,0,0,0.30), 0 5px 12px rgba(0,0,0,0.18)" },
          { offset: 1, boxShadow: "0 18px 45px rgba(0,0,0,0.28), 0 6px 16px rgba(0,0,0,0.16)" },
        ],
        { duration: FLIGHT_MS, fill: "both" },
      );

      animsRef.current = [flight, shadow];

      flight.onfinish = () => {
        animsRef.current.forEach((a) => a.cancel());
        el.style.zIndex = "";
        el.style.willChange = "";
      };

      setPhase("go");
    };

    if (ready) {
      start();
      return undefined;
    }

    const id = window.setTimeout(start, FALLBACK_MS);
    return () => window.clearTimeout(id);
  }, [phase, ready]);

  useEffect(() => {
    if (phase !== "go") return undefined;

    const skip = () => {
      animsRef.current.forEach((a) => a.finish());
      setPhase("done");
    };

    const events = ["pointerdown", "keydown", "wheel", "touchmove"];
    events.forEach((name) =>
      window.addEventListener(name, skip, { once: true, passive: true }),
    );

    return () =>
      events.forEach((name) => window.removeEventListener(name, skip));
  }, [phase]);

  useEffect(
    () => () => animsRef.current.forEach((a) => a.cancel()),
    [],
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stateClass =
    phase === "wait" ? styles.wait : phase === "go" ? styles.go : "";

  return (
    <section
      ref={heroRef}
      id="home"
      className={`${styles.hero} ${stateClass}`}
      data-tone={tone}
    >
      <div className={styles.inner}>
        <Viewfinder lang={lang} frameRef={frameRef} />

        <div className={styles.content}>
          <span className={`${styles.sectionTag} ${styles.line}`} style={{ "--i": 0 }}>
            Hello
          </span>

          <div className={styles.heading}>
            <p className={`${styles.intro} ${styles.line}`} style={{ "--i": 1 }}>
              {isFr ? "Je suis" : "I am"}
            </p>

            <h1 className={styles.name}>
              <span className={styles.line} style={{ "--i": 2 }}>
                Gaïus Chanis
              </span>
              <span
                className={`${styles.line} ${styles.nameAccent}`}
                style={{ "--i": 3 }}
              >
                HONTONWAKOU.
              </span>
            </h1>
          </div>

          <div className={`${styles.role} ${styles.line}`} style={{ "--i": 4 }}>
            <p className={styles.roleTitle}>
              {isFr
                ? "Développeur web orienté produit"
                : "Product-focused web developer"}
            </p>
            <p className={styles.roleStack}>Laravel · React · Figma</p>
          </div>

          <div className={`${styles.metaRow} ${styles.line}`} style={{ "--i": 6 }}>
            <div className={styles.location}>
              <MapPin size={16} strokeWidth={1.7} aria-hidden="true" />
              <span>
                {isFr
                  ? "Cotonou, Bénin · IFRI / UAC · Internet & Multimédia"
                  : "Cotonou, Benin · IFRI / UAC · Internet & Multimedia"}
              </span>
            </div>

            <CotonouClock lang={lang} />
          </div>

          <div
            className={`${styles.bio} ${styles.line} ${styles.block}`}
            style={{ "--i": 7 }}
          >
            {isFr ? (
              <>
                <p>
                  Étudiant en <strong>Internet & Multimédia à l’IFRI</strong>, je
                  conçois et développe des <strong>produits numériques</strong>{" "}
                  en partant d’abord du problème à résoudre et des{" "}
                  <strong>contraintes réelles</strong> auxquelles ils doivent
                  répondre.
                </p>

                <div
                  id="hero-bio-more"
                  className={`${styles.more} ${moreOpen ? styles.moreOpen : ""}`}
                >
                  <div className={styles.moreInner}>
                    <p>
                      Je travaille principalement sur le{" "}
                      <strong>développement web</strong>, du backend à
                      l’interface, avec un intérêt particulier pour la{" "}
                      <strong>logique des systèmes</strong>, l’
                      <strong>expérience utilisateur</strong> et la qualité du
                      produit final.
                    </p>

                    <p>
                      Mes projets m’amènent également à explorer l’
                      <strong>UX/UI</strong>, la{" "}
                      <strong>visualisation de données</strong> et le{" "}
                      <strong>design graphique</strong>. J’aime comprendre un
                      problème, structurer une solution, puis la transformer en
                      quelque chose de <strong>réellement utilisable</strong>.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>
                  I’m an <strong>Internet & Multimedia student at IFRI</strong>,
                  designing and developing <strong>digital products</strong> by
                  starting with the problem to solve and the{" "}
                  <strong>real-world constraints</strong> the product must
                  address.
                </p>

                <div
                  id="hero-bio-more"
                  className={`${styles.more} ${moreOpen ? styles.moreOpen : ""}`}
                >
                  <div className={styles.moreInner}>
                    <p>
                      I mainly work on <strong>web development</strong>, from
                      backend systems to interfaces, with a particular interest
                      in <strong>system logic</strong>,{" "}
                      <strong>user experience</strong>, and the quality of the
                      final product.
                    </p>

                    <p>
                      My projects also lead me to explore <strong>UX/UI</strong>,{" "}
                      <strong>data visualization</strong>, and{" "}
                      <strong>graphic design</strong>. I like understanding a
                      problem, structuring a solution, and turning it into
                      something <strong>genuinely usable</strong>.
                    </p>
                  </div>
                </div>
              </>
            )}

            <button
              type="button"
              className={styles.readMore}
              aria-expanded={moreOpen}
              aria-controls="hero-bio-more"
              onClick={() => setMoreOpen((value) => !value)}
            >
              <span>
                {moreOpen
                  ? isFr
                    ? "Réduire"
                    : "Show less"
                  : isFr
                    ? "Lire la suite"
                    : "Read more"}
              </span>
              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className={moreOpen ? styles.chevronUp : ""}
                aria-hidden="true"
              />
            </button>
          </div>

          <div
            className={`${styles.signature} ${styles.line} ${styles.block}`}
            style={{ "--i": 8 }}
          >
            {isFr ? (
              <>
                <strong>Construire des produits qui ont du sens, </strong>
                <span>pas seulement des interfaces qui fonctionnent.</span>
              </>
            ) : (
              <>
                <strong>Building products that make sense, </strong>
                <span>not just interfaces that work.</span>
              </>
            )}
          </div>

          <div
            className={`${styles.footerRow} ${styles.line} ${styles.block}`}
            style={{ "--i": 5 }}
          >
            <p className={styles.availability}>
              <span className={styles.availabilityDot} aria-hidden="true" />
              <span>
                {isFr
                  ? "Disponible pour un stage ou une mission freelance"
                  : "Available for an internship or freelance work"}
              </span>
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.primaryCta}
                onClick={() => scrollTo("projects")}
              >
                <span>{isFr ? "Voir les projets" : "See the projects"}</span>
                <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryCta}
              >
                <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
                <span>{isFr ? "Écrire sur WhatsApp" : "Message on WhatsApp"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}