import Educations from '@/components/educations'
import Introduce from '@/components/introduce'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

import BlurFade from '@/components/widgets/blur-fade'
import WorkExperience from '@/components/work-experience'
import { resumeData } from '@/constant'

export default function Home() {
  return (
    <main className="relative scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="h-full mx-auto max-w-[600px] px-0 print:p-0 space-y-6">
        <BlurFade>
          <Introduce {...resumeData.introduce}></Introduce>
        </BlurFade>
        <BlurFade delay={0.1}>
          <Skills skills={resumeData.skills}></Skills>
        </BlurFade>
        <BlurFade delay={0.2}>
          <WorkExperience works={resumeData.workExperiences}></WorkExperience>
        </BlurFade>
        <BlurFade delay={0.3}>
          <Projects projects={resumeData.projects}></Projects>
        </BlurFade>
        <BlurFade delay={0.4}>
          <Educations educations={resumeData.educations}></Educations>
        </BlurFade>
      </section>
    </main>
  )
}
