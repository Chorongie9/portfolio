import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import FunFactCard from '../components/FunFactCard.jsx'
import AboutMe from '../components/AboutMe.jsx'

function Home() {


    const funFacts = [
        "i've met an artist with a 100 million stream song.",
        "the philadelphia 76ers have lost me probably over a hundred dollars this season",
        "i've won 2 national championships in league of legends.",
    ]

    const [currentFact, setCurrentFact] = useState(funFacts[0]);

    const getRandomFact = () => {
        let next
        do {
            next = funFacts[Math.floor(Math.random() * funFacts.length)]
        } while (next === currentFact)

        setCurrentFact(next)
    }


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
        <section id="fun-facts">
            <div className="text-center">
                <h2 className="text-4xl font-bold mt-[7rem]">fun facts.</h2>

                <FunFactCard
                fact={currentFact}
                onNext={getRandomFact}
                />
            </div>
            </section>
    </div>
  )
}

export default Home
