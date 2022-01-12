import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import styles from '../styles/socialMedia.module.scss'


function SocialMedia() {
    return (
        <div>
             <div className={styles.socialContainer}>


            <Link href="https://twitter.com/AmiineQu"  >
                <a target="_blank">
                    <Icon className={styles.iconify + ' ' + styles.icons} icon="fa-brands:twitter-square" />
                </a>
            
            </Link>


            <Link href="https://www.linkedin.com/in/amine-amhoume-023517109/" >
                <a target="_blank" >
                    <Icon className={styles.iconify + ' ' + styles.icons} icon="fa-brands:linkedin"  />
                </a>
            
            </Link>


            <Link href="https://github.com/aminequ" >
                <a target="_blank" >
                    <Icon className={styles.iconify + ' ' + styles.icons} icon="fa-brands:github-square"  />
                </a>
            
            </Link>


            </div> 
        </div>
    )
}

export default SocialMedia
