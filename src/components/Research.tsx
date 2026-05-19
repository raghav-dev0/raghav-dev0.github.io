import { resume } from '../data/resume'
import styles from './Research.module.css'

export default function Research() {
  const { research, contact } = resume
  return (
    <div>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>cat research.shelf</span>
      </p>

      {/* Published */}
      <div className={styles.block}>
        <span className={styles.blockLabel}>── published ────────────────────────────</span>
        {research.published.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer" className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>{p.tag}</span>
              <span className={styles.cardYear}>{p.venue} · {p.year}</span>
            </div>
            <p className={styles.cardTitle}>{p.title}</p>
            <p className={styles.cardCtx}>{p.context}</p>
            <p className={styles.cardDesc}>{p.desc}</p>
            <span className={styles.cardLink}>↗ read paper</span>
          </a>
        ))}
      </div>

      {/* Currently reading */}
      <div className={styles.block}>
        <span className={styles.blockLabel}>── currently reading ────────────────────</span>
        {research.reading.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noreferrer" className={`${styles.card} ${styles.reading}`}>
            <div className={styles.cardTop}>
              <span className={`${styles.cardTag} ${styles.readingTag}`}>{r.tag}</span>
              <span className={styles.readingPulse}>● reading now</span>
            </div>
            <p className={styles.cardTitle}>{r.title}</p>
            <p className={styles.cardCtx}>{r.authors}</p>
            <p className={styles.cardDesc}>{r.desc}</p>
            <span className={styles.cardLink}>↗ open pdf</span>
          </a>
        ))}
      </div>

      {/* Recommend CTA */}
      <div className={styles.block}>
        <span className={styles.blockLabel}>── recommend a read ─────────────────────</span>
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Found a paper or deep-dive worth reading?
            <br />
            I'm always looking for the next rabbit hole — systems, AI, distributed computing, anything that changes how you think.
          </p>
          <div className={styles.ctaLinks}>
            <a href={`mailto:${contact.email}`} className={styles.ctaLink}>
              <span className={styles.ctaIcon}>@</span> email me
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className={styles.ctaLink}>
              <span className={styles.ctaIcon}>in</span> linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
