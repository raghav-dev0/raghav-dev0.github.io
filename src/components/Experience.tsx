import { resume } from '../data/resume'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <div>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>git log --oneline career</span>
      </p>

      <div className={styles.timeline}>
        {resume.experience.map((job, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.commitLine}>
              <span className={styles.hash}>{job.hash}</span>
              <div className={styles.meta}>
                <span className={styles.role}>{job.title}</span>
                <span className={styles.at}>@</span>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.loc}>{job.location}</span>
                <span className={styles.period}>{job.period}</span>
              </div>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
