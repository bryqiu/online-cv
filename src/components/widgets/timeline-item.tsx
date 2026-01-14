import type { ClassValue } from 'clsx'
import type { TimeRange } from '@/types'
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

function MetaItem({ metaList }: { metaList: string[] }) {
  return (
    <div className="flex items-center flex-wrap sm:mt-0">
      {' '}
      {metaList.length && metaList.map((item, index) => (
        <React.Fragment key={index}>
          <span className={cn('text-xs text-card-foreground/50 mx-0.5', {
            'hidden sm:inline': index === 0,
          })}
          >
            |
          </span>
          <span className="text-xs font-medium text-card-foreground/80 sm:mr-0">
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  )
}

function TimeDisplay({ startTime, endTime, className }: TimeRange & { className?: string }) {
  return (
    <div className={cn('text-xs text-card-foreground/60 whitespace-nowrap tabular-nums shrink-0', className)}>
      {`${startTime} - ${endTime}`}
    </div>
  )
}

function TimelineItem(props: TimelineItemProps) {
  const { title, meta, startTime, endTime, className, url } = props

  const metaList = Array.isArray(meta) ? meta : [meta]

  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center justify-between sm:gap-x-3', className)}>
      <div className="flex flex-col w-full sm:w-auto sm:flex-row sm:items-center gap-1 flex-1 min-w-0">
        <div className="flex items-center justify-between w-full sm:w-auto gap-x-2">
          {
            url
              ? (
                  <Anchor href={url} text={title} className="text-sm font-semibold wrap-break-word whitespace-normal text-left">
                  </Anchor>
                )
              : <h3 className="font-semibold text-sm wrap-break-word whitespace-normal text-left">{title}</h3>
          }
          <TimeDisplay startTime={startTime} endTime={endTime} className="sm:hidden" />
        </div>
        <MetaItem metaList={metaList} />
      </div>
      <TimeDisplay startTime={startTime} endTime={endTime} className="hidden sm:block" />
    </div>
  )
}

export default TimelineItem
