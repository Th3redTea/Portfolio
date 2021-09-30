import React from 'react'
import styles from '../styles/resume.module.scss'
import PageTitle from '../components/PageTitle'
import Head from 'next/head'

function resume() {
    return (
        <>
        <Head>
          <title>Amine Amhoume | Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="frontend web developer" />
      </Head>
            <section id="resume">
                <PageTitle title="Resume"/>
                <div className={styles.ExperiencesContainer + ' ' + styles.container}>
                    <div className={styles.experiences}>
                        <h1>Synack Red Teaming — Security Researcher</h1>
                        <h2>July 2021- PRESENT</h2>
                        <ul>
                            <li>Test various web applications for bugs and vulnerabilities.</li>
                            <li>Documenting findings in reports and working with teams on remediation.</li>
                            <li>Understand application security methodologies and frameworks.</li>
                            <li>Familiarity with exploitation mitigation technologies.</li>
                            <li>Create working proof of concepts for exposed vulnerabilities.</li>
                        </ul>
                    </div>
                    <div className={styles.experiences}>
                        <h1>Freelancer — Cyber Security Writer</h1>
                        <h2>September 2018 - January 2021</h2>
                        <li>Create content related to cybersecurity and penetration testing.</li>
                        <li>Help edit technical documentation for cybersecurity companies.</li>
                        <li>Optimize website withd SEO best practices.</li>
                    </div>
                    <div className={styles.experiences}>
                        <h1>Local school,— English Teacher</h1>
                        <h2>May 2019 - January 2020</h2>
                        <li>Teaching local kids the basics of the English language.</li>
                        <li>Teaching young people how to speak English.</li>
                    </div>
                </div>
        </section> 
        </>
    )
}

export default resume
