import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Experience from '../components/Experience.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import { motion } from 'framer-motion'
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
    <div>
        <section id="home">
            <motion.div
                className="flex flex-col items-center text-center mt-[250px]"
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

                <motion.button
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-[10rem] text-8xl text-gray-300 hover:text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                >
                ↓
                </motion.button>
            </motion.div>
            </section>
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            >
            <AboutMe />
        </motion.section>
        <section id="experience">
            <Experience />
        </section>
        <section id="gallery">
            <div className="text-center">
                <h2 className="text-4xl font-bold mt-[7rem]">snippets from my life.</h2>
                <GalleryCard images={galleryImages} interval={4000} />
            </div>
            </section>
    </div>
  )
}

export default Home
