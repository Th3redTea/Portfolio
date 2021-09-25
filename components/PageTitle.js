import React from 'react'
import styles from '../styles/pageTitle.module.scss'

function PageTitle({ title}) {
    return (
        <>
            <div className={styles.sectioneTitle}>
                <div className={styles.leftLine}></div>
                <h1>{title}</h1>
                <div className={styles.rightLine}></div>
            </div>
        </>
    )
}

export default PageTitle
