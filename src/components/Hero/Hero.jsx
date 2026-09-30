import { MapPin } from "lucide-react";
import Reveal from "../Reveal";

import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

import styles from "./Hero.module.css";

export default function Hero({ t, lang }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/chanis-hg",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/gaïus-chanis-08a782365",
      icon: FaLinkedinIn,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/22953505501",
      icon: FaWhatsapp,
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61577300496519",
      icon: FaFacebookF,
    },
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        {/*PHOTO */}

        <Reveal direction="scale" delay={0.1}>
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <div className={styles.photoInner}>
                <img
                  src="moi.jpeg"
                  alt="Gaïus Chanis HONTONWAKOU"
                  className={styles.photo}
                />
              </div>
            </div>

            <div className={styles.photoMeta}>
              <span>GAÏUS CHANIS</span>
              <span>01 / 01</span>
            </div>
          </div>
        </Reveal>

        {/*PRÉSENTATION */}

        <div className={styles.content}>
          <Reveal delay={0.12}>
            <span className={styles.sectionTag}>Hello</span>
          </Reveal>

          <Reveal delay={0.18}>
            <div className={styles.heading}>
              {lang === "fr" ? (
                <p className={styles.intro}>Je suis</p>
              ) : (
                <p className={styles.intro}>I am</p>
              )}

              <h1 className={styles.name}>
                Gaïus Chanis <span>HONTONWAKOU.</span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className={styles.location}>
              <MapPin size={15} strokeWidth={1.7} />
              <span>Cotonou, Bénin · IFRI / UAC · Internet & Multimédia</span>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={styles.bio}>
              <div className={styles.bio}>
                <div className={styles.bio}>
                  {lang === "fr" ? (
                    <>
                      <p>
                        Étudiant en{" "}
                        <strong>Internet & Multimédia à l’IFRI</strong>, je
                        conçois et développe des{" "}
                        <strong>produits numériques</strong> en partant d’abord
                        du problème à résoudre et des{" "}
                        <strong>contraintes réelles</strong> auxquelles ils
                        doivent répondre.
                      </p>

                      <p>
                        Je travaille principalement sur le{" "}
                        <strong>développement web</strong>, du backend à
                        l’interface, avec un intérêt particulier pour la{" "}
                        <strong> logique des systèmes</strong>, l’
                        <strong>expérience utilisateur</strong> et la qualité du
                        produit final.
                      </p>

                      <p>
                        Mes projets m’amènent également à explorer l’
                        <strong>UX/UI</strong>, la{" "}
                        <strong>visualisation de données</strong> et le{" "}
                        <strong>design graphique</strong>. J’aime comprendre un
                        problème, structurer une solution, puis la transformer
                        en quelque chose de{" "}
                        <strong>réellement utilisable</strong>.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        I’m an{" "}
                        <strong>Internet & Multimedia student at IFRI</strong>,
                        designing and developing{" "}
                        <strong>digital products</strong> by starting with the
                        problem to solve and the{" "}
                        <strong>real-world constraints</strong> the product must
                        address.
                      </p>

                      <p>
                        I mainly work on <strong>web development</strong>, from
                        backend systems to interfaces, with a particular
                        interest in <strong>system logic</strong>,{" "}
                        <strong> user experience</strong>, and the quality of
                        the final product.
                      </p>

                      <p>
                        My projects also lead me to explore{" "}
                        <strong>UX/UI</strong>,{" "}
                        <strong> data visualization</strong>, and{" "}
                        <strong>graphic design</strong>. I like understanding a
                        problem, structuring a solution, and turning it into
                        something <strong>genuinely usable</strong>.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            
          </Reveal>

          <Reveal delay={0.36}>
            <div className={styles.signature}>
              {lang === "fr" ? (
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
            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              <span>
                {lang === "fr"
                  ? "Disponible pour stage / alternance"
                  : "Available for internship / apprenticeship"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className={styles.socials}>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon size={17} strokeWidth={1.7} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
