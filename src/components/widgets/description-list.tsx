import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Markdown from './mark-down'

interface DescriptionListProps {
  items: string[]
  // 可选：如果是对象数组，通过这个函数告诉组件怎么渲染每一项
  renderItem?: (item: string, index: number) => ReactNode
  className?: string
  itemClassName?: string
}

function DescriptionList({
  items,
  renderItem,
  className,
  itemClassName,
}: DescriptionListProps) {
  if (!items || !items.length)
    return null

  return (
    <ul className={cn('list-disc list-outside ml-4 space-y-1 text-foreground/80', className)}>
      {items.map((item, index) => {
        if (renderItem) {
          return (
            <li key={index} className={cn('text-xs pl-1', itemClassName)}>
              {renderItem(item, index)}
            </li>
          )
        }

        return (
          <li key={index} className={cn('text-xs pl-1', itemClassName)}>
            <Markdown>{item}</Markdown>
          </li>
        )
      })}
    </ul>
  )
}

export default DescriptionList
