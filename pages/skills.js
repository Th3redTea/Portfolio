import React from 'react'
import styles from '../styles/skills.module.scss'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import PageTitle from '../components/PageTitle'
import Head from 'next/head';




const Skill = ({     
    ImageSrc, 
    alt, 
    title
}) => {
    return(
        <div className={styles.skill}>
            <Image
                src={ImageSrc}
                alt={alt}
                width={66}
                height={66}
            />
            <h2>{title}</h2>
        </div>
    )
}


const SoftSkills = () => {
    return(
        <div className={styles.softSkills}>
            <h1>Soft Skills</h1>

            <div className={styles.skillsContainer}>
                <Skill 
                    ImageSrc="/skills/management.svg"
                    alt="soft skill management"
                    title="Managemet"
                />

            <Skill 
                    ImageSrc="/skills/adaptation.svg"
                    alt="soft skill adaptation"
                    title="Adaptation"
                />
            <Skill 
                    ImageSrc="/skills/open-mind.svg"
                    alt="soft skill open-mindness"
                    title="Open-mindness"
                /> 
            <Skill 
                    ImageSrc="/skills/conversation.svg"
                    alt="soft skill communication"
                    title="Communication"
                />
            <Skill 
                    ImageSrc="/skills/design-thinking.svg"
                    alt="soft skill Creativity"
                    title="Creativity"
                /> 
            <Skill 
                    ImageSrc="/skills/patience.svg"
                    alt="soft skill Patience"
                    title="Patience"
                />
            <Skill 
                    ImageSrc="/skills/problem.svg"
                    alt="soft skill Problem-Solving"
                    title="Problem-solving"
                />
            <Skill 
                    ImageSrc="/skills/united.svg"
                    alt="soft skill Teamwork"
                    title="Teamwork"
                />
            <Skill 
                    ImageSrc="/skills/empathy.svg"
                    alt="soft skill Empathy"
                    title="Empathy"
                />
                           
            </div>
        </div>
    )
}


const MyStack = () => {
    return(
        <div className={styles.MyStack}>
            <h1>Tools & Hard Skills</h1>
            <div className={styles.skillsContainer}>
                <Skill ImageSrc="/skills/hardskills/html.svg" 
                    alt="hard skills HTML"
                    title="HTML"
                />
                <Skill ImageSrc="/skills/hardskills/css.svg" 
                    alt="hard skills CSS/Sass"
                    title="CSS/Sass"
                />
                <Skill ImageSrc="/skills/hardskills/javascript.svg" 
                    alt="hard skills Javascript"
                    title="Javascript"
                />
                <Skill ImageSrc="/skills/hardskills/react.svg" 
                    alt="hard skills ReactJS"
                    title="ReactJS"
                />
                <Skill ImageSrc="/skills/hardskills/nexjs.svg" 
                    alt="hard skills NextJS"
                    title="NextJS"
                />
                <Skill ImageSrc="/skills/hardskills/git.svg" 
                    alt="hard skills Git"
                    title="Version Control"
                />
                <Skill ImageSrc="/skills/hardskills/materialUI.svg" 
                    alt="hard skills MaterialUI"
                    title="MaterialUI"
                />
                <Skill ImageSrc="/skills/hardskills/shield.svg" 
                        alt="hard skills Security"
                        title="Security"
                    />
                <Skill ImageSrc="/skills/hardskills/webpack.svg" 
                    alt="hard skills webpack"
                    title="Webpack"
                />
                <Skill ImageSrc="/skills/hardskills/GraphQL.svg" 
                    alt="hard skills GraphQL"
                    title="GraphQL"
                />
                <Skill ImageSrc="/skills/hardskills/gulp.svg" 
                    alt="hard skills Gulp"
                    title="Gulp"
                />
                <Skill ImageSrc="/skills/hardskills/writing.svg" 
                    alt="hard skills tech writing"
                    title="writing"
                />
            </div>
        </div>
    )
}


function skills() {
    return (
       <> 
        <Head>
          <title>Amine Amhoume | Skills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="frontend web developer" />
      </Head>
        <PageTitle title="Skills" />
        <div className={styles.container}>
            <MyStack />
            <SoftSkills />
        </div>
        </>
    )
}

export default skills
