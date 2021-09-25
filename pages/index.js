import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import SocialMedia from '../components/SocialMedia'

export default function Home() {

  return (
    <>
      <div className={styles.hero}>

            <div className={styles.heroImage}>
              <Image src="/heroImage.png"
              height={400}
              width={400}
              alt="Amine Amhoume"
        
               />
            </div>
                <div className={styles.heroText}>
                     <h1>Hi, <br/>
                     I’m Amine Amhoume.    
                     </h1>
                    <p>
                     I’m a web developer and a security researcher based in Morocco.
                    </p>

                    <Link href="/resume">

                    <a className={styles.button}>See more</a>
                    </Link>
                </div>
       </div>

       <SocialMedia />
    </>
  )
}
