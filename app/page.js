import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/svg/logo.svg" alt="Pixel on Pixel logo" width={460} height={168} />
        <h1 className={styles.title}>
          <span className={styles.visuallyHidden}>Pixel on Pixel</span>
        </h1>

        <div className={styles.withCursor}>
          <p className={styles.description}>&gt; Hand crafted binary</p>
          <div className={styles.cursor}></div>
        </div>

        <div className={styles.social}>
          <a href="mailto:hello@pixelonpixel.com">
            <div className={styles.mailButton}>
              <Image src="/svg/mailbox.svg" role="presentation" alt="" width={32} height={32} />
              <span>say hi!</span>
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>© Copyright {new Date().getFullYear()} | Pixel on Pixel</footer>
    </div>
  )
}
