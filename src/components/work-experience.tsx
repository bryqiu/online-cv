import type { WorkExperience as WorkExperienceProp } from '@/types'
import DescriptionList from './widgets/description-list'
import Section from './widgets/section'
import TimelineItem from './widgets/timeline-item'

function WorkExperience({ works}: { works: WorkExperienceProp[] }) {
  return (
    <Section title="工作经历">
      <div className="space-y-4">
        {works.map((work, index) => (
          <article key={index} className="flex flex-col gap-y-2 text-card-foreground">
            <TimelineItem title={work.company} meta={work.position} startTime={work.startTime} endTime={work.endTime} url={work.url} />
            <DescriptionList items={work.highlights}></DescriptionList>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default WorkExperience
