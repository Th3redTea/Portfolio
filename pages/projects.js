import React from 'react'
import PageTitle from '../components/PageTitle'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/projects.module.scss'

function projects() {
    return (
        <>
            <PageTitle title="Projects" />
            <div className={styles.projectsContainer + ' ' +  styles.container}>
                    <div className={styles.post} id={styles.learntocode}>
                        <Link href="https://fervent-kare-e1a328.netlify.app/">
                        <a target="_blank" rel="noreferrer">
                            <Image src="/learnToCode.jpg" 
                            alt="Learn to code"
                            width={500}
                            height={300}
                            >
                        
                            </Image>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.post} id={styles.todo}>
                        <Link href="https://fancy-todo-app.netlify.app/">
                        <a target="_blank" rel="noreferrer">
                            <Image src="/TODO.png" 
                            alt="todo app with vanilla Javascript"
                            width={500}
                            height={300}
                            >
                        
                            </Image>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.post} id={styles.insightcard}>
                        <Link href="https://insightcard.netlify.app/" >
                        <a target="_blank" rel="noreferrer">
                            <Image src="/cartGetInsigh.png" 
                            alt="Learn to code"
                            width={500}
                            height={300}
                            >
                        
                            </Image>
                        </a>
                        </Link>
                    </div>
                    <div className={styles.post} id={styles.carousel}>
                        <Link href="https://gracious-bartik-17488b.netlify.app/">
                        <a target="_blank" rel="noreferrer">
                            <Image src="/Carousel.png" 
                            alt="Learn to code"
                            width={500}
                            height={300}
                            >
                        
                            </Image>
                        </a>
                        </Link>
                    </div>
            </div>
                <div className={styles.button-2}>
                    <a href="https://github.com/aminequ" target="_blank" rel="noreferrer">See more projects on my github</a>
                </div>
        </>
    )
}

export default projects
