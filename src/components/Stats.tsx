import { useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume'
import styles from './Stats.module.css'

function useInView(ref: React.RefObject<Element | null>) {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSeen(true) }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
  return seen
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)
  const { stats } = resume

  return (
    <div ref={ref}>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>./impact --summary</span>
      </p>

      {/* headline numbers */}
      <div className={styles.grid}>
        {stats.headline.map((s, i) => (
          <div
            key={s.label}
            className={`${styles.card} ${visible ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
            <span className={styles.sub}>{s.sub}</span>
          </div>
        ))}
      </div>

      {/* scale breakdown */}
      <div className={`${styles.breakdown} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '340ms' }}>
        <div className={styles.scaleRow}>
          {/* B2C */}
          <div className={styles.scaleCard}>
            <div className={styles.scaleTop}>
              <span className={styles.scaleBadge} data-type="b2c">B2C</span>
              <span className={styles.scaleValue}>{stats.scale.b2c.value}</span>
            </div>
            <p className={styles.scaleDesc}>{stats.scale.b2c.desc}</p>
          </div>

          <div className={styles.scaleDivider} />

          {/* B2B */}
          <div className={styles.scaleCard}>
            <div className={styles.scaleTop}>
              <span className={styles.scaleBadge} data-type="b2b">B2B</span>
              <span className={styles.scaleValue}>{stats.scale.b2b.value}</span>
            </div>
            <p className={styles.scaleDesc}>{stats.scale.b2b.desc}</p>
          </div>
        </div>

        {/* regions */}
        <div className={styles.regions}>
          <span className={styles.regionLabel}>reach</span>
          <div className={styles.regionTags}>
            {stats.regions.map((r) => (
              <span key={r} className={styles.regionTag}>{r}</span>
            ))}
          </div>
          <span className={styles.regionNote}>{stats.regionNote}</span>
        </div>
      </div>
    </div>
  )
}
