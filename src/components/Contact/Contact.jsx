import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { CONTACT_LINKS, FORMSPREE_ID } from "../../data/index";
import styles from "./Contact.module.css";

const REQUEST_TIMEOUT_MS = 15000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY_FORM = { name: "", email: "", message: "", _gotcha: "" };

/* Ordre pensé pour le Bénin : WhatsApp et téléphone d'abord */
const CHANNELS = [
  { match: (href) => href.includes("wa.me"), icon: FaWhatsapp, order: 1 },
  { match: (href) => href.startsWith("tel:"), icon: FaPhone, order: 2 },
  { match: (href) => href.startsWith("mailto:"), icon: FaEnvelope, order: 3 },
  { match: (href) => href.includes("linkedin.com"), icon: FaLinkedinIn, order: 4 },
  { match: (href) => href.includes("github.com"), icon: FaGithub, order: 5 },
];

const LINKS = CONTACT_LINKS.map((link) => {
  const channel = CHANNELS.find(({ match }) => match(link.href));
  return { ...link, icon: channel?.icon ?? FiArrowUpRight, order: channel?.order ?? 9 };
}).sort((a, b) => a.order - b.order);

const COPY = {
  fr: {
    hint: "Réponse par e-mail, ou directement sur WhatsApp.",
    required: "obligatoire",
    nameError: "Indiquez votre nom (2 caractères minimum).",
    emailError: "Indiquez une adresse e-mail valide, par exemple nom@exemple.com.",
    messageError: "Votre message doit contenir au moins 10 caractères.",
    offline: "Vous semblez hors ligne. Vérifiez votre connexion, ou écrivez-moi sur WhatsApp.",
    timeout: "L'envoi prend trop de temps (connexion lente ?). Réessayez ou écrivez-moi sur WhatsApp.",
  },
  en: {
    hint: "I reply by email, or directly on WhatsApp.",
    required: "required",
    nameError: "Please enter your name (at least 2 characters).",
    emailError: "Please enter a valid email address, e.g. name@example.com.",
    messageError: "Your message must be at least 10 characters long.",
    offline: "You seem to be offline. Check your connection, or message me on WhatsApp.",
    timeout: "Sending is taking too long (slow connection?). Try again or message me on WhatsApp.",
  },
};

function validate(form, copy) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = copy.nameError;
  if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = copy.emailError;
  if (form.message.trim().length < 10) errors.message = copy.messageError;
  return errors;
}

export default function Contact({ t, lang = "fr" }) {
  const copy = lang === "fr" ? COPY.fr : COPY.en;
  const whatsapp = LINKS.find((link) => link.href.includes("wa.me"));

  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorText, setErrorText] = useState("");
  const fieldRefs = useRef({});

  const onChange = (event) => {
    const { name, value } = event.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (status !== "sending") setStatus("idle");
    if (submitted) setErrors(validate(next, copy));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const found = validate(form, copy);
    setErrors(found);

    const firstInvalid = ["name", "email", "message"].find((key) => found[key]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setErrorText(copy.offline);
      setStatus("error");
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _gotcha: form._gotcha,
        }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setForm(EMPTY_FORM);
      setSubmitted(false);
      setErrors({});
      setStatus("sent");
    } catch (error) {
      setErrorText(error.name === "AbortError" ? copy.timeout : t.contact.error);
      setStatus("error");
    } finally {
      window.clearTimeout(timer);
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange,
    ref: (el) => {
      fieldRefs.current[name] = el;
    },
    className: `${styles.input} ${name === "message" ? styles.textarea : ""}`,
    "aria-required": "true",
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  const renderError = (name) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className={styles.fieldError}>
        {errors[name]}
      </p>
    ) : null;

  const renderLabel = (name, text) => (
    <label className={styles.label} htmlFor={`contact-${name}`}>
      {text}
      <span className={styles.requiredMark} aria-hidden="true"> *</span>
      <span className={styles.srOnly}> ({copy.required})</span>
    </label>
  );

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader tag={t.contact.sectionTag} title={t.contact.title} sub={t.contact.sub} />
        </Reveal>

        <div className={styles.wrapper}>
          <Reveal direction="left">
            <ul className={styles.links}>
              {LINKS.map(({ label, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className={styles.link}
                    >
                      <span className={styles.linkIcon} aria-hidden="true">
                        <Icon />
                      </span>
                      <span className={styles.linkLabel}>{label}</span>
                      <span className={styles.linkArrow} aria-hidden="true">
                        <FiArrowUpRight />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.formHeader}>
                <span className={styles.formKicker}>MESSAGE</span>
                <p>{copy.hint}</p>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  {renderLabel("name", t.contact.name)}
                  <input {...fieldProps("name")} type="text" autoComplete="name" />
                  {renderError("name")}
                </div>

                <div className={styles.field}>
                  {renderLabel("email", t.contact.email)}
                  <input
                    {...fieldProps("email")}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                  />
                  {renderError("email")}
                </div>
              </div>

              <div className={styles.field}>
                {renderLabel("message", t.contact.message)}
                <textarea {...fieldProps("message")} rows={5} />
                {renderError("message")}
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="contact-gotcha">Ne pas remplir</label>
                <input
                  id="contact-gotcha"
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form._gotcha}
                  onChange={onChange}
                />
              </div>

              <div aria-live="polite">
                {status === "sent" && (
                  <p className={styles.success} role="status">{t.contact.sent}</p>
                )}
                {status === "error" && (
                  <p className={styles.error} role="alert">
                    {errorText}{" "}
                    {whatsapp && (
                      <a href={whatsapp.href} target="_blank" rel="noreferrer">
                        WhatsApp
                      </a>
                    )}
                  </p>
                )}
              </div>

              <button type="submit" className={styles.btn} disabled={status === "sending"}>
                {status === "sending" ? t.contact.sending : t.contact.send}
                <FiArrowUpRight aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}