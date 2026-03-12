import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GalleryCard = ({ images }) => {
  const [index, setIndex] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  if (!images || images.length === 0) return null

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className="text-center">
      <motion.h2
        className="text-4xl font-bold mt-[7rem]"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        snippets from my life.
      </motion.h2>

      <motion.div
        ref={ref}
        className="max-w-xl mx-auto mt-8 border rounded-lg overflow-hidden bg-white shadow-sm"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* IMAGE CONTAINER */}
        <div className="relative h-100 w-100 bg-gray-100 group">
          <img
            src={images[index]}
            alt="gallery"
            className="w-full h-full object-cover"
          />

          {/* LEFT BUTTON */}
          <button
            onClick={prevImage}
            className="
              absolute left-3 top-1/2 -translate-y-1/2
              bg-black/50 hover:bg-black/70 text-white
              w-10 h-10 rounded-full flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextImage}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              bg-black/50 hover:bg-black/70 text-white
              w-10 h-10 rounded-full flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            ›
          </button>
        </div>

        <div className="p-3 text-sm text-gray-500 text-center">
          a few highlights from my travels
        </div>
      </motion.div>
    </div>
  )
}

export default GalleryCard
