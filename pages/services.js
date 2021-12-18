import Head from 'next/head';
import React from 'react';
import styles from '../styles/Services.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
    return(
          <div className={styles.services}>
            <Head>
                <title>Services</title>
            </Head>
                <div className={styles.mainDiv}>
                    <motion.div className={styles.subDiv}
                        whileHover={{
                              scale: 1.03
                        }}
                    >
                         <section className={styles.heading}>
                              <Link href="/"><motion.div 
                                                  whileHover={{
                                                      scale: 1.1,
                                                      backgroundColor: 'rgb(125, 49, 247)',
                                                      cursor: 'pointer',
                                                      color: 'white'
                                                  }}
                                                  className={styles.arrow}
                                                  >
                                                  <BiArrowBack size="30" className={styles.icon}/>
                              </motion.div></Link>
                              <h1>Services that i am offering</h1>
                        </section>
                        <section className={styles.skills}>
                              <div className={styles.skill}>
                                   <h1>Front-end Skills</h1>
                                   <ul className={styles.list}>
                                        <li>React js</li>
                                        <li>Next js</li>
                                        <li>HTML</li>
                                        <li>css</li>
                                        <li>Javascript</li>
                                   </ul>
                              </div>
                              <div className={styles.skill}>
                                   <h1>Back-end Skills</h1>
                                   <ul className={styles.list}>
                                        <li>Django</li>
                                        <li>Flask</li>
                                        <li>Express js</li>  
                                        <li>django-rest-framework</li>                                    
                                   </ul>
                              </div>
                              <div className={styles.skill}>
                                   <h1>Databases</h1>
                                   <ul className={styles.list}>
                                        <li>Postgresql</li>                                
                                   </ul>
                              </div>
                        </section>
                    </motion.div>
              </div>
          </div>
          )
}

export default Services;

