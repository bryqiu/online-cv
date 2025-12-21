import React, { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface MarkdownProps {
  children: React.ReactNode
  className?: string
}

const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
  const renderedContent = useMemo(() => {
    if (typeof children !== 'string')
      return children
    if (!children)
      return null

    // 仅匹配：***粗斜体***, **粗体**, *斜体*
    const regex = /(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g
    const parts = children.split(regex)

    return parts.map((part, index) => {
      if (part.startsWith('***') && part.endsWith('***')) {
        return (
          <strong key={index} className="font-bold italic text-primary">
            {part.slice(3, -3)}
          </strong>
        )
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-primary">
            {part.slice(2, -2)}
          </strong>
        )
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={index} className="italic text-card-foreground/90">
            {part.slice(1, -1)}
          </em>
        )
      }
      return part
    })
  }, [children])

  return <span className={cn('inline', className)}>{renderedContent}</span>
}

export default React.memo(Markdown)
