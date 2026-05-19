import { resume } from '../data/resume'
import styles from './Skills.module.css'

const COLORS: Record<string, string> = {
  languages:  'green',
  frameworks: 'cyan',
  cloud:      'purple',
  tools:      'yellow',
  ai:         'pink',
}

export default function Skills() {
  return (
    <div>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>ls -la skills/</span>
      </p>

      <div className={styles.groups}>
        {Object.entries(resume.skills).map(([group, items]) => (
          <div key={group} className={styles.group}>
            <span className={`${styles.groupLabel} ${styles[COLORS[group] ?? 'green']}`}>
              {group}/
            </span>
            <div className={styles.tags}>
              {items.map((item) => (
                <span key={item} className={`${styles.tag} ${styles[`tag_${COLORS[group] ?? 'green'}`]}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
