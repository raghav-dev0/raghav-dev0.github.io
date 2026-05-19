import { resume } from '../data/resume'
import styles from './Education.module.css'

export default function Education() {
  const { education: ed } = resume
  return (
    <div>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>cat education.txt</span>
      </p>

      <div className={styles.card}>
        <div className={styles.top}>
          <span className={styles.institution}>{ed.institution}</span>
          <span className={styles.period}>{ed.period}</span>
        </div>
        <div className={styles.bottom}>
          <span className={styles.degree}>{ed.degree}</span>
          <span className={styles.location}>{ed.location}</span>
        </div>
      </div>
    </div>
  )
}
