import Head from "next/head";
import React from "react";
import styles from '../styles/contact.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsTwitter, BsLinkedin} from 'react-icons/bs'

const Contact = () => {
     return(
          <div className={styles.contact}>
               <Head>
                    <title>Contact</title>
               </Head>
               <div className={styles.mainDiv}>
                    <div className={styles.subdiv}>
                         <section className={styles.header}>
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
                              <h1>Feel free to contact me</h1>
                         </section>
                         <div className={styles.body}>
                              <input className={styles.input} type="text" placeholder="Enter your e-mail"/>
                              <textarea className={styles.textfield} placeholder="Enter your message"/>
                         </div>
                         <div className={styles.section}>
                              <motion.button
                                   whileHover={{
                                        scale: 1.1,
                                        cursor: 'pointer '
                                   }}
                                   whileTap={{
                                        scale: 0.9,
                                   }}
                                   className={styles.button}>
                                        Send
                              </motion.button>
                         </div>
                         <section className={styles.social}>
                              <BsTwitter className={styles.icon} size="30"/>
                              <BsLinkedin className={styles.icon} size="30"/>
                         </section>
                    </div>
               </div>
          </div>
     )
}

export default Contact;