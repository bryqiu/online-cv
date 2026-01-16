import type { Project } from '@/types'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from './ui/badge'
import Anchor from './widgets/anchor'
import Section from './widgets/section'

function Projects({ projects}: { projects: Project[] }) {
  return (
    <Section title="项目经验">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          projects.map((project, index) => (
            <div key={index} className="bg-card rounded-md p-3 border flex flex-col gap-y-2">
              <div className={cn({ 'flex items-start justify-between gap-2': project.stars })}>
                <div className="flex items-center gap-x-1 flex-1">
                  { project.logo && typeof project.logo === 'string'
                    ? (
                        <Image src={project.logo} alt={project.name} className="size-4" />
                      )
                    : (
                        project.logo
                      )}
                  <Anchor href={project.url} text={project.name} className="text-sm font-semibold w-full" />
                </div>
                {
                  project.stars && (
                    <div className="flex items-center gap-x-1">
                      <Star className="size-3" />
                      <span className="text-xs">{project.stars}</span>
                    </div>
                  )
                }
              </div>
              <span className="text-xs text-card-foreground/80 line-clamp-2 flex-1">{project.description}</span>
              <div className="flex items-center gap-x-1 flex-wrap">
                {project.techStack?.map(tech => (
                  <Badge key={tech} className="py-0 text-[0.65rem]" variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default Projects
