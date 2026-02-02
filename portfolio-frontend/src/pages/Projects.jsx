import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'tansa website',
    description: 'website made as apart of wdcc projects team for the tansa club, designed with react, nextjs and tailwindcss.',
    image: '/images/tansa.png',
  },
  {
    title: 'personal portfolio',
    description: 'a personal portfolio designed to highlight a bit about myself. designed with react, tailwindcss and javascript.',
    image: '/images/portfolio.png',
  },
  {
    title: 'podcast library',
    description: 'a podcast library app that allows users to search, review and comment on podcasts. built with html/css, flask, jinja and python as apart of a university paper alongside 2 others.',
    image: '/images/podcast_lib.png',
  },
  {
    title: 'nba player / team app',
    description: 'an nba player app that allowed users to view player / team stats based on seasons, as well as compare players. built using react frontend, with python backend relying on fastapi and nba_api to scrape data.',
    image: '/images/nba_screenshot2.png',
  }
]

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8">projects.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
