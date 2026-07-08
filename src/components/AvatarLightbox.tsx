import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './AvatarLightbox.module.css'

interface Props {
  src: string
  fullSrc: string
  alt: string
  className: string
  width: number
  height: number
}

export default function AvatarLightbox({ src, fullSrc, alt, className, width, height }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <img
        className={`${className} ${styles.thumb}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`Expand photo of ${alt}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      />
      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <img className={styles.full} src={fullSrc} alt={alt} onClick={(e) => e.stopPropagation()} />
          </div>,
          document.body,
        )}
    </>
  )
}
