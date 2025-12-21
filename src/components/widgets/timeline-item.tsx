import type { ClassValue } from 'clsx'
import type { TimeRange } from '@/types'
import { SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import Anchor from './anchor'

interface TimelineItemProps extends TimeRange {
  /**
   * 标题
   */
  title: string
  /**
   * 链接
   */
  url?: string
  /**
   * 元数据
   */
  meta: string | string[]
  /**
   * 自定义类名
   */
  className?: ClassValue
}

function TimelineItem(props: TimelineItemProps) {
  const { title, meta, startTime, endTime, className, url } = props

  const metaItems = Array.isArray(meta) ? meta : [meta]

  return (
    <div className={cn('flex items-center justify-between gap-x-3', className)}>
      <div className="flex items-center gap-1 flex-1 truncate">
        {
          url
            ? (
                <div className="flex items-center gap-x-1">
                  <Anchor href={url} linkText={title} canCopy={false} className="text-sm font-semibold">
                  </Anchor>
                  <SquareArrowOutUpRight className="size-3 shrink-0 text-card-foreground/50" />
                </div>
              )
            : <h3 className="font-semibold text-sm">{title}</h3>
        }
        {metaItems.length && metaItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-xs text-card-foreground/50">|</span>
            <span className="text-xs font-medium text-card-foreground/80">
              {item}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="text-xs text-card-foreground/60 whitespace-nowrap tabular-nums">{`${startTime} - ${endTime}`}</div>
    </div>
  )
}

export default TimelineItem
