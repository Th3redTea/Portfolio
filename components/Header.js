import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles  from '../styles/header.module.scss'
import { Icon } from '@iconify/react';


function Header() {


    const [nav, setNav] = useState(false)

    
    return (
        <>
            <header className={styles.header}>
                <div className={styles.desktopNav}>
                    <nav className={styles.leftNav}>
                        <ul>
                            <li><Link href="/"><a >Home</a></Link></li>   
                            <li><Link href="/resume"><a >Resume</a></Link></li>   
                            <li><Link href="/projects"><a >Projects</a></Link></li>   
                        </ul>
                    </nav>
            
                    <div  className={styles.logo}>
                        <Image 
                        src='/am.png'
                        width={81}
                        height={57}
                        alt="Amine Amhoume Logo"

                        />
                    </div>
            
                    <nav className={styles.rightNav}>
                        <ul>
                            <li><Link href="/skills"><a >Skills</a></Link></li>   
                            <li><Link href="/blog"><a >Blog</a></Link></li>   
                            <li><Link href="/contact"><a >Contact</a></Link></li>   
                        </ul>
                    </nav>
                    <div className={styles.openMenu}>
                    <Icon 
                        onClick={() => setNav(!nav)}
                        icon="dashicons:menu-alt3"
                        className={styles.iconify + ' ' + styles.openMenu} 
                        id={styles.openMenu}
         
                        />
                    </div>
                </div>

        </header>
                <nav className={!nav ? styles.mobileNav : styles.showNav} >
                <Icon 
                onClick={() => setNav(!nav)}
                icon="eva:close-fill" 
                className={styles.iconify + ' ' + styles.closeIcon}  
                />

                    <ul>
                        <li><Link href="/"><a >Home</a></Link></li>   
                        <li><Link href="/resume"><a >Resume</a></Link></li>   
                        <li><Link href="/projects"><a >Projects</a></Link></li>   
                        <li><Link href="/skills"><a >Skills</a></Link></li>   
                        <li><Link href="/blog"><a >Blog</a></Link></li>   
                        <li><Link href="/contact"><a >Contact</a></Link></li>    
                    </ul>
                </nav>
        </>
    )
}

export default Header
