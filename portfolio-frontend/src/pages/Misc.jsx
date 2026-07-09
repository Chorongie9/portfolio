import GalleryCard from '../components/GalleryCard.jsx'

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

const Misc = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-center font-bold text-3xl mb-2">misc</h1>
      <p className="text-center text-gray-500 mb-8">
        a couple of random things i added.
      </p>

      <GalleryCard images={galleryImages} />
    </div>
  )
}

export default Misc
