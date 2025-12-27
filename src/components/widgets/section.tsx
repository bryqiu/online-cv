import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

function Section(props: SectionProps) {
  const { title, children, className = '' } = props
  return (
    <section className={cn('', className)}>
      <h2 className="text-lg font-semibold mb-3 border-b border-border pb-1 tracking-tight text-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
