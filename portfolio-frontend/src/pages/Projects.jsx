import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'tansa website',
    description: 'website made as apart of wdcc projects team for the tansa club, designed with react, nextjs and tailwindcss.',
    image: '/images/tansa.png',
    tags: ['react', 'next.js', 'tailwind css'],
  },
  {
    title: 'personal portfolio',
    description: 'a personal portfolio designed to highlight a bit about myself. designed with react, tailwindcss and javascript.',
    image: '/images/portfolio.png',
    tags: ['react', 'tailwind css', 'javascript'],
  },
  {
    title: 'podcast library',
    description: 'a podcast library app that allows users to search, review and comment on podcasts. built with <strong>html/css, flask, jinja and python</strong> as apart of a university paper alongside 2 others.',
    image: '/images/podcast_lib.png',
    tags: ['html/css', 'flask', 'jinja', 'python'],
  },
  {
    title: 'nba player / team app',
    description: 'an nba player app that allowed users to view player / team stats based on seasons, as well as compare players. built using react frontend, with python backend relying on fastapi and nba_api to scrape data.',
    image: '/images/nba_screenshot2.png',
    tags: ['react', 'fastapi', 'python', 'nba_api'],
  },
  {
    title: 'league of legends prediction model',
    description: 'currently working on a machine learning project that predicts the outcome of league of legends matches based on the draft entirely. done with a random forest classifier and the sklearn library. currently a work in progress, trying to use it for the first stand tournament.',
    image: '/images/work_in_progress.jpg',
    tags: ['python', 'sklearn', 'random forest', 'machine learning'],

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
