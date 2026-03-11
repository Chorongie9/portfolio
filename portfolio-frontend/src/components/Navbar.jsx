import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 items-center p-4">
    {/* Left */}
    <div className="justify-self-start text-black font-bold text-lg">
      <Link to="/" className="hover:text-gray-400">
        josh lin // 林页风
      </Link>
    </div>

    {/* Center */}
    <ul className="flex justify-center items-center space-x-4 text-black font-medium">
        <li>
          <Link to="/about" className="hover:text-gray-400">about</Link>
        </li>
        <span className="text-gray-500">|</span>
        <li>
        <Link to="/projects" className="hover:text-gray-400">projects</Link>
        </li>
        <span className="text-gray-500">|</span>
        <li>
        <Link to="/contact" className="hover:text-gray-400">contact</Link>
        </li>
    </ul>

    {/* Right (empty spacer) */}
    <div />
    </nav>
  )
}



export default Navbar
