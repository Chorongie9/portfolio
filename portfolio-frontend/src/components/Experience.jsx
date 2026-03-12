import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <motion.div
      ref={ref}
      className="text-center mt-10 mb-20"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-10"
        variants={itemVariants}
      >
        experience & education.
      </motion.h2>

      <div className="max-w-3xl mx-auto px-4 space-y-8">
        {[
          {
            title: 'bsc compsci & stats @ university of auckland: mar. 2023 – present',
            bullets: [
              'graduating in the middle of 2026 with an interest in post graduate studies.',
              '7.5 / 9 gpa, ',
              'relevant courses: data structures & algorithms, applied algorithmics, object orientated programming, operating systems, discrete structures in mathematics, machine learning, modelling & analytics in operations research, statistical computing'
            ]
          },
          {
            title: 'events co-lead @ uoacs: nov. 2024 – present',
            bullets: [
              'promoted to co-lead of events, responsible for ensuring consistent and smooth running of events.',
              'leading a team of 6 to plan and execute events for the largest computer science society in auckland.',
              'notable events include beginners hackathon (60+ attendees) and industry night (100+ attendees).',
              'facilitiated collaboration with sponsorship partner potentia for behavioural interview workshop with 40+ attendees.'
            ]
          },
          {
            title: 'events exec @ uoacs: jun. 2024 – nov. 2024',
            bullets: [
              'general executive member; initiated collaboration between uoacs & esports club for a 50+ attendee event.'
            ]
          },
          {
            title: 'dev @ wdcc – tansa project: apr. 2025 – nov. 2025',
            bullets: [
              'part of a 10-person team building a website for TANSA.',
              'primary responsibilities included front-end development and building the meet-the-team page.'
            ]
          }
        ].map((item, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <ExperienceItem {...item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
