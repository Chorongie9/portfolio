import React, { useRef } from 'react'
import Experience from '../components/Experience.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

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

const About = () => {
  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" })
  const galleryRef = useRef(null)
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mt-[30rem]"> about me.</h2>
      </motion.div>
    
      <motion.div 
        className="max-w-4xl mx-auto mt-10 px-4"
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Text */}
          <motion.div className="flex-1 text-lg leading-relaxed" variants={itemVariants}>
            <p>
              hi, my name is josh and i'm a final year student studying a double major
              in computer science & statistics at the university of auckland. i'm an aspiring
              software dev, and seeing as im in my final year with the everlooming dread of finding a j*b, 
              this site is the beginning of me "locking in".
              outside of my studies i love travelling, running, working out and going to festivals.
            </p>
            <p>
              here you can find&nbsp;
              <a 
                href="/documents/ylin - cv.pdf" 
                target="_blank" 
                class="underline text-black-600 hover:text-gray-800"
              >
                my resume.
              </a>
            </p>
          </motion.div>

          {/* Image */}
          <motion.div className="flex-shrink-0" variants={imageVariants}>
            <img
              src="/images/me.jpeg"
              alt="me"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-md"
            />
          </motion.div>

        </div>
      </motion.div>
      <motion.section 
        id="experience"
        className="mt-80" // add extra top margin
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Experience />
      </motion.section>

      <motion.section 
        id="gallery"
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mt-100px">
          <motion.h2 className="text-4xl font-bold mt-[7rem]" variants={itemVariants}>snippets from my life.</motion.h2>
          <motion.div variants={itemVariants}>
            <GalleryCard images={galleryImages} interval={4000} />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
