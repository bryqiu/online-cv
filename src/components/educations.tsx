import type { Education as EducationProps } from '@/types'
import DescriptionList from './widgets/description-list'
import Section from './widgets/section'
import TimelineItem from './widgets/timeline-item'

function Educations({ educations}: { educations: EducationProps[] }) {
  return (
    <Section title="教育经历">
      <div className="space-y-4">
        {
          educations.map((item, index) => (
            <article key={index} className="flex flex-col gap-y-2">
              <TimelineItem title={item.school} meta={item.degree ? [item.major, item.degree] : [item.major]} startTime={item.startTime} endTime={item.endTime}></TimelineItem>
              <DescriptionList items={item.description || []}></DescriptionList>
            </article>
          ))
        }
      </div>
    </Section>
  )
}

export default Educations
