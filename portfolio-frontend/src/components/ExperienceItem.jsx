import { useState } from 'react'

const ExperienceItem = ({ title, bullets }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-left pb-4">

      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-xl font-bold"
      >
        <span>{title}</span>
      </button>

      {/* Dropdown content */}
      {open && (
        <ul className="mt-4 space-y-2 text-lg pl-4">
          {bullets.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span>{'>'}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceItem
