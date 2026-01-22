import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-center">contact me.</h1>
      <h2 className="text-center">contact links</h2>
        <ul className="list-disc list-inside text-center">
            <li> 
                email: lin.josh2004@gmail.com
            </li>
            <li>
                <a href="https://www.linkedin.com/in/joshua-lin-55130a27a/" className="text-blue-500 hover:underline">linkedin</a>
            </li>
        </ul>
    </div>
  )
}

export default Contact
