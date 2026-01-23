import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <div className="text-center">
                <h2 className="text-4xl font-bold mt-[7rem]"> about me.</h2>
            </div>
            <div className="max-w-4xl mx-auto mt-10 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Text */}
                    <div className="flex-1 text-lg leading-relaxed">
                    <p>
                        hello! my name is josh, and i'm a final year student studying a double major
                        in computer science & statistics at the university of auckland. in my free
                        time, i enjoy travelling, running, working out, going to music festivals and
                        watching the 76ers take years off my lifespan. i decided to make this site
                        because i realised i finally needed to lock in and have something to show so
                        i'm not a complete bum.
                    </p>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0">
                    <img
                        src="/images/me.jpeg"
                        alt="me"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-md"
                    />
                    </div>

                </div>
                </div>
            <div className="text-center mt-10 mb-20">
                <h2 className="text-4xl font-bold">experience.</h2>
                <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto px-4">
                    <ul>
                        <li>events co-lead @ uoacs: nov 2024 - present</li>
                        <li>events exec @ uoacs: june 2024 - nov 2024</li>
                        <li>dev @ wdcc - tansa project: apr 2025 - nov 2025</li>
                    </ul>

                </p>
            </div>
    </div>
  )
}

export default AboutMe
