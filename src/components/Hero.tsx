import { useEffect, useRef, useState } from 'react'
import { resume } from '../data/resume'
import AvatarLightbox from './AvatarLightbox'
import styles from './Hero.module.css'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const ref = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const text = resume.name
    let i = 0
    ref.current = setInterval(() => {
      setDisplayed(text.slice(0, ++i))
      if (i >= text.length) {
        clearInterval(ref.current!)
        setDone(true)
      }
    }, 60)
    return () => clearInterval(ref.current!)
  }, [])

  return (
    <div className={styles.hero}>
      <p className={styles.prompt}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>whoami</span>
      </p>

      <div className={`${styles.output} ${styles.identity}`}>
        <AvatarLightbox
          className={styles.avatar}
          src="/profile-image.jpeg"
          fullSrc="/profile-image-full.jpeg"
          alt={resume.name}
          width={96}
          height={96}
        />
        <div>
          <h1 className={styles.name}>
            {displayed}
            {!done && <span className={styles.caret}>|</span>}
          </h1>
          <p className={styles.title}>{resume.title}</p>
          <p className={styles.tagline}># {resume.tagline}</p>
        </div>
      </div>

      <p className={styles.prompt} style={{ marginTop: 32 }}>
        <span className={styles.user}>raghav@github</span>
        <span className={styles.sep}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>cat about.txt</span>
      </p>

      <div className={styles.output}>
        {resume.about.split('\n').map((line, i) => (
          <p key={i} className={styles.about}>{line}</p>
        ))}
      </div>
    </div>
  )
}
