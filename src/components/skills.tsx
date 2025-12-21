import type { ResumeSchema } from '../types'
import DescriptionList from './widgets/description-list'
import Section from './widgets/section'

function Skills({ skills}: { skills: ResumeSchema['skills'] }) {
  return (
    <Section title="技术能力" className="animate-fade-in-blur">
      <DescriptionList items={skills}>
      </DescriptionList>
    </Section>
  )
}

export default Skills
