import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Experience from '../components/Experience.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import { motion } from 'framer-motion'
function Home() {





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
            </motion.div>
        </section>
    </div>
  )
}

export default Home
