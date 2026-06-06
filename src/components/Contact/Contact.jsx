import { useState } from 'react';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import { CONTACT_LINKS, FORMSPREE_ID } from '../../data/index';
import styles from './Contact.module.css';

export default function Contact({ t }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            tag={t.contact.sectionTag}
            title={t.contact.title}
            sub={t.contact.sub}
          />
        </Reveal>

        <div className={styles.wrapper}>
          {/* Liens directs */}
          <Reveal direction="left">
            <div className={styles.links}>
              {CONTACT_LINKS.map(({ icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={styles.link}
                >
                  <span className={styles.linkIcon}>{icon}</span>
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkArrow}>→</span>
                </a>
              ))}
              <a
                href="/CV_GaiusChanis_HONTONWAKOU.pdf"
                download
                className={styles.link}
              >
                <span className={styles.linkIcon}>📄</span>
                <span className={styles.linkLabel}>Télécharger mon CV</span>
                <span className={styles.linkArrow}>↓</span>
              </a>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal direction="right">
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>{t.contact.name}</label>
                  <input
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
                  <label className={styles.label}>{t.contact.email}</label>
                  <input
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
                <label className={styles.label}>{t.contact.message}</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t.contact.message}
                  rows={5}
                  required
                />
              </div>

              {status === 'sent' && (
                <p className={styles.success}>{t.contact.sent}</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>{t.contact.error}</p>
              )}

              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
