import type { projectExperience as projectExperienceProps } from '@/types'
import { Badge } from '@/components/ui/badge'
import DescriptionList from './widgets/description-list'
import Section from './widgets/section'
import TimelineItem from './widgets/timeline-item'

function ProjectExperience({ projects }: { projects: projectExperienceProps[] }) {
  return (
    <Section title="项目经验">
      <div className="flex flex-col gap-y-1.5">
        {
          projects.map((project, index) => (
            <article key={index} className="flex flex-col gap-y-2">
              <TimelineItem title={project.name} meta={project.position} startTime="2021-01" endTime="2021-02" />
              <div className="flex gap-x-1.5 gap-y-1 items-center flex-wrap">
                {project.techStack.length && project.techStack.map(tech => (
                  <Badge key={tech} variant="secondary" className="rounded text-xs py-0">{tech}</Badge>
                ))}
              </div>
              <span className="text-xs text-foreground">{project.summary}</span>
              <DescriptionList items={project.description} />
            </article>
          ))
        }
      </div>
    </Section>
  )
}

export default ProjectExperience
