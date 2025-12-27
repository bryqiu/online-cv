import type { CommunicationType, SocialPlatform } from '@/types'
import { Mail, Phone } from 'lucide-react'
import BlogIcon from '@/components/icons/blog-icon'
import GithubIcon from '@/components/icons/github-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import JueJinIcon from '@/components/icons/jue-jin-icon'
import LinkedInIcon from '@/components/icons/linkedin-icon'
import WeChatIcon from '@/components/icons/wechat-icon'
import XIcon from '@/components/icons/x-icon'

export const SOCIAL_ICON_MAP: Record<SocialPlatform | CommunicationType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  x: XIcon,
  instagram: InstagramIcon,
  jueJin: JueJinIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
  blog: BlogIcon,
  email: Mail,
  phone: Phone,
  wx: WeChatIcon,
}
