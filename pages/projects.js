import React from 'react'
import PageTitle from '../components/PageTitle'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/project.module.scss'
import { Icon } from '@iconify/react';
import Head from 'next/head'





const Project = ({ title, srcImage, description, alt, linkPreview, linkGithub }) => {

    return(
        <div className={styles.project}>
            <div className={styles.imageContainer}>
                <Image 
                    src={srcImage}
                    alt={alt}
                    width={500}
                    height={300}
                
                />
            </div>
            <div className={styles.text} >
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.iconsContainer}>
                <Link href={linkPreview}>
                    <a target="_blank" rel="noreferrer" >
                        <Icon icon="ic:baseline-preview" className={styles.preview}/>
                    </a>
                </Link>

                <Link href={linkGithub}>
                    <a target="_blank" rel="noreferrer">
                        <Icon icon="fa-brands:github-square" className={styles.github}/>

                    </a>
                </Link>
            </div>
            </div>

        </div>
    )
}


function projects() {
    return (
        <>
        <Head>
          <title>Amine Amhoume | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="frontend web developer" />
      </Head>
            <PageTitle title="Projects" />
            <Project 
                srcImage="/TODO.png"
                description="This vanilla javascript todo app represent a challenge from Frontend mentor"
                title="Todo App"
                alt="Vanilla Javascript Todo App"
                linkGithub="https://github.com/aminequ/todo-app-main"
                linkPreview="https://fancy-todo-app.netlify.app/"

            />

            <Project 
                srcImage="/topmatches.png"
                description="topmatches is a website to discover everything related to Laliga and Premier League teams. It's build with ReactJS, NextJS, Sass and deployed on Vercel."
                title="Topmacthes"
                alt="See today's top matches"
                linkGithub="https://github.com/aminequ/react-topmatches"
                linkPreview="https://topmatches.vercel.app/"

            />

            <Project 
                srcImage="/learnToCode.jpg"
                description="Another frontend mentor challenge. It's made with vanilla Javascript and HTML/Sass"
                title="Form Validation challenge"
                alt="Frontend mentor challenge Signup Form"
                linkGithub="https://github.com/aminequ/intro-signup-form"
                linkPreview="https://fervent-kare-e1a328.netlify.app/"

            />

            <Project 
                srcImage="/sunnyside.png"
                description="A landing-page for a marketing agency called 'Sunnyside'. I created this project to practice my tailwind css. Also, it's hosted on vercel"
                title="Sunnyside Agency"
                alt="Sunnyside Agency"
                linkGithub="https://github.com/aminequ/sunnyside"
                linkPreview="https://sunnyside-ochre.vercel.app/"

            />
        </>
    )
}

export default projects
