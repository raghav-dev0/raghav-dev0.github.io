import { useState, useEffect } from 'react'
import { resume } from './data/resume'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Research from './components/Research'
import AvatarLightbox from './components/AvatarLightbox'
import styles from './App.module.css'

const NAV = ['whoami', 'stats', 'skills', 'experience', 'education', 'research', 'contact']

export default function App() {
  const [active, setActive] = useState('whoami')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    NAV.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <div className={styles.sideHandle}>
          <AvatarLightbox
            className={styles.sideAvatar}
            src="/profile-image.jpeg"
            fullSrc="/profile-image-full.jpeg"
            alt={resume.name}
            width={64}
            height={64}
          />
          <span className={styles.sideUser}>{resume.handle}</span>
          <span className={styles.sideSep}>@github</span>
        </div>
        <ul className={styles.navList}>
          {NAV.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.navLink} ${active === id ? styles.navActive : ''}`}
              >
                <span className={styles.navPrompt}>$</span> {id}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.sideFooter}>
          <span className={styles.cursor}>█</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.termBar}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.termTitle}>{resume.handle}@github:~ — portfolio</span>
        </div>

        <div className={styles.content}>
          <section id="whoami"><Hero /></section>
          <section id="stats"><Stats /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><Experience /></section>
          <section id="education"><Education /></section>
          <section id="research"><Research /></section>
          <section id="contact"><Contact /></section>
        </div>
      </main>
    </div>
  )
}
