import Image from 'next/image'
import styles from './page.module.css'
import LinkNext from './components/linknext'
import React from 'react'
export default function Home() {
  return (
    <main className={styles.main}>
     <LinkNext path={"/ruta"}> <div>ruta</div></LinkNext>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
         
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>



   
    </main>
  )
}
