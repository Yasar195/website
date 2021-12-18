import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home = () => {

  return(
    <div className={styles.home}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.maindiv}>
        <motion.div
          whileHover={{
            scale: 1.03
          }}
          className={styles.subdiv}
        >
          <section className={styles.links}>
            <Link href="/services"><motion.h1
              whileHover={{
                scale: 1.1,
                color: 'rgb(125, 49, 247)'
              }}
              className={styles.link}
            >Services</motion.h1></Link>
            <motion.h1
              whileHover={{
                scale: 1.1,
                color: 'rgb(125, 49, 247)'
              }}
              className={styles.link}
            >Resume</motion.h1>
            <motion.h1
              whileHover={{
                scale: 1.1,
                color: 'rgb(125, 49, 247)'
              }}
              className={styles.link}
            >Projects</motion.h1>
            <Link href="/contact"><motion.h1
              whileHover={{
                scale: 1.1,
                color: 'rgb(125, 49, 247)'
              }}
              className={styles.link}
            >Contact</motion.h1></Link>
          </section>
          <motion.div
            drag
            dragConstraints={{
              top: -10,
              right: 10,
              bottom: 10,
              left: -10
            }}
           className={styles.circle}></motion.div>
           <section className={styles.textsection}>
            <h1 className={styles.hi}>Hi i am</h1>
            <h1 className={styles.name}>Yasar Arafath S</h1>
            <p className={styles.loc}>A full stack developer from kerala</p>
           </section>
        </motion.div>
      </div>
      <div className={styles.maindiv}>
        <motion.div
          whileHover={{
            scale: 1.03
          }} 
          className={styles.subdiv}>
            <section className={styles.aboutme}><h1>Let me introduce you myself</h1></section>
              <section className={styles.para}>
                <p>
                  Hey i am yasar arafath i am 20 year web developer and academically i am persuing my undergraduate degree in computer science and engineering.
                </p>
              </section>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;