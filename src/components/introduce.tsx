'use client'

import type { ContactMethod, Introduce as IntroduceProps } from '@/types'
import { Paperclip } from 'lucide-react'
import { useMemo } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { SOCIAL_ICON_MAP } from '@/constant/icon'
import { cn } from '@/lib/utils'
import Anchor from './widgets/anchor'
import MarkDown from './widgets/mark-down'

function ContactItem(prop: ContactMethod, index: number) {
  const { type, value } = prop
  const Icon = SOCIAL_ICON_MAP[type] || Paperclip
  const isCopy = useMemo(() => ['email', 'phone', 'wx'].includes(type), [type])
  return (
    <div key={index} className="flex items-center gap-x-1.5 text-xs text-muted-foreground">
      <Icon className="size-3 shrink-0" />
      <Anchor href={value} linkText={value} canCopy={isCopy} />
    </div>
  )
}

function Introduce(props: IntroduceProps) {
  const { name, tags, about, contactMethods, avatarUrl, avatarFallback } = props

  return (
    <header className="flex flex-col gap-y-2">
      {/** 基本介绍 */}
      <div className={cn('flex  gap-x-6', avatarUrl && 'justify-between')}>
        <div className="flex flex-col gap-1.5 flex-1">
          <h1 className="text-2xl font-bold">
            {name}
          </h1>
          <div className="flex items-center gap-x-2 flex-wrap text-sm font-semibold">
            {tags?.join(' / ')}
          </div>

          <MarkDown className="text-sm text-foreground/80 text-pretty">{about}</MarkDown>

          {/** 联系信息 & 社交平台 */}
          <div className="mt-2 grid grid-cols-2 gap-1">
            {contactMethods.map((item, index) => ContactItem(item, index))}
          </div>
        </div>
        {
          avatarUrl && (
            <div className="flex items-center justify-center">
              <Avatar className="rounded-lg size-26">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{avatarFallback || name}</AvatarFallback>
              </Avatar>
            </div>
          )
        }
      </div>

    </header>
  )
}

export default Introduce
