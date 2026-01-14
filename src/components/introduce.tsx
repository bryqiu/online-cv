'use client'

import type { ContactMethod, Introduce as IntroduceProps, SocialMethod } from '@/types'
import { Paperclip } from 'lucide-react'
import { toast } from 'sonner'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { CONTACT_ICON_MAP, SOCIAL_ICON_MAP } from '@/constant/icon'
import { cn } from '@/lib/utils'
import Anchor from './widgets/anchor'
import MarkDown from './widgets/mark-down'

function ContactItem(prop: ContactMethod, index: number) {
  const { type, value } = prop
  const Icon = CONTACT_ICON_MAP[type] || Paperclip

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      toast.success('已复制到剪切板')
    }).catch(() => {
      toast.error('复制失败')
    })
  }

  return (
    <div key={index} className="flex items-center gap-x-1.5 text-xs text-muted-foreground hover:text-primary cursor-pointer" onClick={handleCopy}>
      <Icon className="size-3 shrink-0" />
      <span>{value}</span>
    </div>
  )
}

function SocialItem(prop: SocialMethod, index: number) {
  const { type, value, label } = prop
  const Icon = SOCIAL_ICON_MAP[type] || Paperclip
  return (
    <div key={index} className="flex items-center gap-x-1.5 text-xs text-muted-foreground hover:text-primary overflow-hidden">
      <Icon className="size-3 shrink-0" />
      <Anchor href={value} text={label || value} className="flex-1 overflow-hidden" textClassName="truncate" />
    </div>
  )
}

function Introduce(props: IntroduceProps) {
  const { name, tags, about, contactMethods, socialMethods, avatarUrl, avatarFallback } = props

  return (
    <header className="flex flex-col gap-y-2">
      {/** 基本介绍 */}
      <div className={cn('flex flex-col-reverse gap-y-4 sm:flex-row sm:gap-x-6 sm:gap-y-0', avatarUrl && 'justify-between')}>
        <div className="flex flex-col gap-1.5 flex-1">
          <h1 className="text-xl sm:text-2xl font-bold">
            {name}
          </h1>
          <div className="flex items-center gap-x-2 flex-wrap text-xs sm:text-sm font-semibold">
            {tags?.join(' / ')}
          </div>

          <MarkDown className="text-xs sm:text-sm text-foreground/80 text-pretty">{about}</MarkDown>

          <div className="flex flex-col gap-y-1 mt-2">
            {/** 联系信息 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {contactMethods.map((item, index) => ContactItem(item, index))}
            </div>
            {/** 社交平台 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {socialMethods.map((item, index) => SocialItem(item, index))}
            </div>
          </div>

        </div>
        {
          avatarUrl && (
            <div className="flex items-center justify-start sm:justify-center">
              <Avatar className="rounded-lg size-20 sm:size-26">
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
