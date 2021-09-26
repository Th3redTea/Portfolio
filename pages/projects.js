import React from 'react'
import PageTitle from '../components/PageTitle'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/project.module.scss'
import { Icon } from '@iconify/react';





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
                        <Icon icon="ic:baseline-preview" className={styles.icons}/>
                    </a>
                </Link>

                <Link href={linkGithub}>
                    <a target="_blank" rel="noreferrer">
                        <Icon icon="fa-brands:github" className={styles.icons}/>
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
                srcImage="/TODO.png"
                description="This vanilla javascript todo app represent a challenge from Frontend mentor"
                title="Todo App"
                alt="Vanilla Javascript Todo App"
                linkGithub="https://github.com/aminequ/todo-app-main"
                linkPreview="https://fancy-todo-app.netlify.app/"

            />
        </>
    )
}

export default projects
