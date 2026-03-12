import React from 'react'
import AboutMe from '../components/AboutMe.jsx'
import Experience from '../components/Experience.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import { motion } from 'framer-motion'
import './Home.css'

function Home() {

    const galleryImages = [
        '/images/000001.JPG',
        '/images/000007.JPG',
        '/images/000008.JPG',
        '/images/000010.JPG',
        '/images/000012.JPG',
        '/images/000014 2.JPG',
        '/images/000019.JPG',
        '/images/000021.JPG',
        '/images/000023.JPG',
        '/images/000024.JPG',
        '/images/000025.JPG',
        '/images/000029.JPG',
        '/images/melb1.JPG',
        '/images/melb2.JPG',
        '/images/melb3.JPG',
        '/images/melb4.JPG',
        '/images/melb5.JPG'
    ]



    const scrollToAbout = () => { 
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


  return (
    <div className="page">
        <section id="home" className="section hero-section min-h-screen">
            <motion.div
                className="flex flex-col items-center text-center -mt-16 ml-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.h1
                className="text-9xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                josh lin.
                </motion.h1>

                <motion.h2
                className="text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                welcome to my portfolio.
                </motion.h2>
            </motion.div>
        </section>
        <motion.section
            id="about"
            className="section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <AboutMe />
        </motion.section>
        <motion.section
            id="experience"
            className="section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <Experience />
        </motion.section>
        <motion.section
            id="gallery"
            className="section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <GalleryCard images={galleryImages} />
        </motion.section>
    </div>
  )
}

export default Home
