'use client'

import type { Introduce as IntroduceProps } from '@/types'
import { Mail, MapPin, Phone } from 'lucide-react'
import Anchor from '@/components/widgets/anchor'
import MarkDown from './widgets/mark-down'
import SocialButton from './widgets/social-button'

function Introduce(props: IntroduceProps) {
  const { name, tags, about, location, social, contact } = props

  return (
    <header className="flex flex-col gap-y-2">
      {/** 基本介绍 */}
      <div className="flex justify-between gap-x-6">
        <div className="flex flex-col gap-1.5 flex-1">
          <h1 className="text-2xl font-bold">
            {name}
          </h1>
          <div className="flex items-center gap-x-2 flex-wrap text-sm font-semibold">
            {tags?.join(' / ')}
          </div>
          <MarkDown className="text-sm text-foreground/80 text-pretty">{about}</MarkDown>

          <div className="flex flex-col mt-2 gap-y-1.5 text-muted-foreground">
            <div className="grid grid-cols-5 gap-x-2 text-xs">
              {location && (
                <div className="flex items-center gap-x-1 col-span-1">
                  <MapPin className="size-3 shrink-0" />
                  <span>{location}</span>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-x-1 col-span-2">
                  <Mail className="size-3 shrink-0" />
                  <Anchor href={`mailto:${contact.email}`} linkText={contact.email} />
                </div>
              )}
              {contact.phone && (
                <div className="flex items-center gap-x-1 col-span-2">
                  <Phone className="size-3 shrink-0" />
                  <Anchor href={`tel:${contact.phone}`} linkText={contact.phone} />
                </div>
              )}
            </div>
            {/** 社交平台 */}
            <div className="flex flex-wrap gap-x-3 text-xs text-muted-foreground">
              {social?.map((item, index) => (
                <div className="flex items-center gap-x-1.5" key={index}>
                  <SocialButton socialName={item.socialName} url={item.url} accountName={item.accountName}></SocialButton>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/** 头像 */}
        <div className="flex items-center justify-center">
          <div className="size-26 rounded-lg bg-secondary flex items-center justify-center">头像</div>
        </div>
      </div>

    </header>
  )
}

export default Introduce
