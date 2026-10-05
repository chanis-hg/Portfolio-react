import { useState } from "react";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { CONTACT_LINKS, FORMSPREE_ID } from "../../data/index";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const getContactIcon = (href) => {
  if (href.startsWith("tel:")) return <FaPhone />;
  if (href.startsWith("mailto:")) return <FaEnvelope />;
  if (href.includes("linkedin.com")) return <FaLinkedinIn />;
  if (href.includes("wa.me")) return <FaWhatsapp />;
  return <FiArrowUpRight />;
};

const PRIMARY_CONTACT_LINKS = CONTACT_LINKS.filter(({ href }) =>
  /mailto:|wa\.me|linkedin\.com/.test(href),
);

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      setStatus(response.ok ? "sent" : "error");
      if (response.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.contact.sectionTag}
            title={t.contact.title}
            sub={t.contact.sub}
          />
        </Reveal>

        <div className={styles.wrapper}>
          <Reveal direction="left">
            <div className={styles.contactIntro}>
              <div className={styles.links}>
                {PRIMARY_CONTACT_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={styles.link}
                  >
                    <span className={styles.linkIcon} aria-hidden="true">
                      {getContactIcon(href)}
                    </span>
                    <span className={styles.linkLabel}>{label}</span>
                    <span className={styles.linkArrow} aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.formHeader}>
                <span className={styles.formKicker}>01 / MESSAGE</span>
                <p>{t.contact.send}</p>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-name">
                    {t.contact.name}
                  </label>
                  <input
                    id="contact-name"
                    className={styles.input}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={t.contact.name}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-email">
                    {t.contact.email}
                  </label>
                  <input
                    id="contact-email"
                    className={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={t.contact.email}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-message">
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t.contact.message}
                  rows={5}
                  required
                />
              </div>

              {status === "sent" && (
                <p className={styles.success} role="status">
                  {t.contact.sent}
                </p>
              )}
              {status === "error" && (
                <p className={styles.error} role="alert">
                  {t.contact.error}
                </p>
              )}

              <button
                type="submit"
                className={styles.btn}
                disabled={status === "sending"}
              >
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
