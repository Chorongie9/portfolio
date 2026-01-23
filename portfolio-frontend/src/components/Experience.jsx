import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <div className="text-center mt-10 mb-20">
      <h2 className="text-4xl font-bold mb-10">experience.</h2>

      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <ExperienceItem
          title="events co-lead @ uoacs: nov 2024 – present"
          bullets={[
            'promoted to co-lead of events, responsible for ensuring consistent and smooth running of events.',
            'leading a team of 6 to plan and execute events for the largest computer science society in auckland.',
            'notable events include beginners hackathon (60+ attendees) and industry night (100+ attendees).'
          ]}
        />

        <ExperienceItem
          title="events exec @ uoacs: june 2024 – nov 2024"
          bullets={[
            'general executive member; initiated collaboration between uoacs & esports club for a 50+ attendee event.'
          ]}
        />

        <ExperienceItem
          title="dev @ wdcc – tansa project: apr 2025 – nov 2025"
          bullets={[
            'part of a 10-person team building a website for TANSA.',
            'primary responsibilities included front-end development and building the meet-the-team page.'
          ]}
        />
      </div>
    </div>
  )
}

export default Experience
