import ActionToolbar from '@/components/action-toolbar'
import Educations from '@/components/educations'
import Introduce from '@/components/introduce'
import Projects from '@/components/projects'

import Skills from '@/components/skills'
import BlurFade from '@/components/widgets/blur-fade'
import WorkExperience from '@/components/work-experience'
import { resumeData } from '@/constant'

export default function Home() {
  return (
    <main className="relative overflow-auto p-4 pb-16 md:p-16 print:p-0 print:m-0 print:overflow-visible">
      <ActionToolbar></ActionToolbar>
      <section className="h-full mx-auto space-y-6 print:space-y-3 max-w-[600px] px-0 print:max-w-none print:w-full">
        <BlurFade delay={0.05}>
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
