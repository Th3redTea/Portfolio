import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.scss'
import { Icon } from '@iconify/react';
import Head from 'next/head'




function Post() {
    
    const [articles, setArticles] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {

            const req = await fetch("https://dev.to/api/articles?username=amiinequ")
            const respn = await req.json()
            setArticles(respn)
                    
    }, [])

            

    return(
         articles.map(article => {
                
            return(
              <div key={article.id} className={styles.post}>
              <div className={styles.ImageContainer}>
              <Image
                  src={article.cover_image}
                  alt={article.title}
                  height={322}
                  width={650}
              />
                <h1>{article.title}</h1>
              </div>

              <p className={styles.description}>{article.description}</p>
              <div className={styles.link}>
                  <Link  href={article.url}>
                      <a  target="_blank" rel="noreferrer">
                          Read more
                          <Icon icon="eva:external-link-fill" />
                      </a>
                  </Link>
              </div>
          </div>
            )  
          
          })
    )    
        
}



function blog() {
    return (
        <>
        <Head>
          <title>Amine Amhoume | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="frontend web development blog" />
      </Head>
        <div className={styles.container}>
            <Post />
        </div>
        </>
    )
}

export default blog
