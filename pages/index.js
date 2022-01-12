import Head from 'next/head'
import Image from 'next/image'
import SocialMedia from '../components/SocialMedia'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Slide from 'react-reveal/Slide';


export default function Home() {

  return (
    <>
        <Head>
          <title>Amine Amhoume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="frontend web developer" />
      </Head>
      <div className={styles.hero}>
            <Slide left>
            <div className={styles.heroImage}>
              <Image src="/heroImage.png"
              height={400}
              width={400}
              alt="Amine Amhoume"
              
              />
            </div>
              </Slide>
              

                <div className={styles.heroText}>
            <Slide bottom>
                     <h1>Hi, <br/>
                     I’m Amine Amhoume.    
                     </h1>
                    <p>
                    I am a front-end web developer. I work with Javascript, Typescript,  CSS/Sass, ReactJS, and NextJS on the frontend.  
                    Also, I can assist on the backend using Django, REST framework for APIs, and nodeJS. 
                    I am good with design systems and accessibility. Not only this but, I am a part-time security researcher and self-learning fanatic.
                    </p>

                </Slide>
                    <Link href="/resume">

                    <a className={styles.button}>See more</a>
                    </Link>
                </div>
       </div>
      <Slide right>
       <SocialMedia />
      </Slide>
    </>
  )
}
