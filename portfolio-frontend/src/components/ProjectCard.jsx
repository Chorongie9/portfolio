const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      
      {/* Preview image */}
      <div className="aspect-video bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

      </div>
    </div>
  )
}

export default ProjectCard
