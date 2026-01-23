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
                        hi, my name is josh and i'm a final year student studying a double major
                        in computer science & statistics at the university of auckland. i'm an aspiring
                        software dev, and seeing as im in my final year this site is the beginning of me "locking in".
                        outside of my studies i love travelling, running, working out, electronic music and going to festivals.
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
    </div>
  )
}

export default AboutMe
