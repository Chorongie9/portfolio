import { useEffect, useState } from 'react'

const GalleryCard = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length === 0) return

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  return (
    <div className="max-w-xl mx-auto mt-8 border rounded-lg overflow-hidden bg-white shadow-sm">
      
      <div className="aspect-video bg-gray-100">
        <img
          src={images[index]}
          alt="gallery"
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="p-3 text-sm text-gray-500 text-center">
        a few highlights from my travels
      </div>
    </div>
  )
}

export default GalleryCard
