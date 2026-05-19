import { resume } from '../data/resume'
import styles from './Contact.module.css'

export default function Contact() {
  const { contact } = resume
  return (
    <div>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>open --links</span>
      </p>

      <div className={styles.links}>
        <a href={contact.github} target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.icon}>⬡</span>
          <span>github.com/raghav-dev0</span>
        </a>
        <a href={`mailto:${contact.email}`} className={styles.link}>
          <span className={styles.icon}>@</span>
          <span>{contact.email}</span>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
          <span className={styles.icon}>in</span>
          <span>linkedin</span>
        </a>
      </div>

      <p className={styles.footer}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.caret}>█</span>
      </p>
    </div>
  )
}
