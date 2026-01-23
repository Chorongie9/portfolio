import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import AboutMe from '../components/AboutMe.jsx'
import GalleryCard from '../components/GalleryCard.jsx'

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
             <div className="flex flex-col items-center text-center mt-[250px]">
                <h1 className="text-9xl font-bold">josh lin.</h1>
                <h2 className="text-2xl">welcome to my portfolio.</h2>

                {/* Scroll arrow */}
                <button
                onClick={() => {
                    const aboutSection = document.getElementById('about')
                    aboutSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-[10rem] text-8xl text-gray-300 hover:text-gray-100 animate-bounce"
                >
                ↓
                </button>
            </div>
            </section>
        <section id="about">
            <AboutMe />
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
