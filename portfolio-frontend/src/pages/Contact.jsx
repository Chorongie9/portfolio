import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          contact me.
        </h1>

        <p className="text-center text-gray-500 mb-6">
          reach out to me using any of the links below
        </p>

        <ul className="space-y-4 text-center">
          <li className="text-gray-700">
            <span className="font-medium">Email:</span>{' '}
            <a
              href="mailto:lin.josh2004@gmail.com"
              className="text-gray-600 hover:underline"
            >
              lin.josh2004@gmail.com
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/joshua-lin-55130a27a/"
              className="text-gray-800 hover:text-black-600 transition"
            >
              linkedin
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Chorongie9"
              className="text-gray-800 hover:text-black-600 transition"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
