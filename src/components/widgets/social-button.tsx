import type { ClassValue } from 'clsx'
import type { Social, SocialPlatform } from '@/types'
import BlogIcon from '@/components/icons/blog-icon'
import GithubIcon from '@/components/icons/github-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import JueJinIcon from '@/components/icons/jue-jin-icon'
import LinkedInIcon from '@/components/icons/linkedin-icon'
import XIcon from '@/components/icons/x-icon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { isUrl } from '@/utils'

const SOCIAL_ICON_MAP: Record<SocialPlatform, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  x: XIcon,
  instagram: InstagramIcon,
  jueJin: JueJinIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
  blog: BlogIcon,
}

interface SocialButtonProps extends Social {
  btnClassName?: ClassValue
  iconClassName?: ClassValue
  showAccountName?: boolean
}

function SocialButton(props: SocialButtonProps) {
  const { socialName, btnClassName, iconClassName, url, accountName, showAccountName = true } = props
  const SocialIcon = SOCIAL_ICON_MAP[socialName]

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn('h-6', [url && 'cursor-pointer'], btnClassName)}
      onClick={() => {
        url && isUrl(url) && window.open(url)
      }}
    >
      <SocialIcon className={cn('size-3', iconClassName)} />
      {showAccountName && accountName && <span className="text-xs">{accountName}</span>}
    </Button>
  )
}

export default SocialButton
