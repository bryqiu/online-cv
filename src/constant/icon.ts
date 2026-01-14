import type { ContactType, SocialType } from '@/types'
import { Mail as MailIcon, Phone as PhoneIcon } from 'lucide-react'
import BlogIcon from '@/components/icons/blog-icon'
import GithubIcon from '@/components/icons/github-icon'
import InstagramIcon from '@/components/icons/instagram-icon'
import JueJinIcon from '@/components/icons/jue-jin-icon'
import LinkedInIcon from '@/components/icons/linkedin-icon'
import WeChatIcon from '@/components/icons/wechat-icon'
import XIcon from '@/components/icons/x-icon'

export const CONTACT_ICON_MAP: Record<ContactType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  email: MailIcon,
  phone: PhoneIcon,
  wx: WeChatIcon,
}

export const SOCIAL_ICON_MAP: Record<SocialType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  x: XIcon,
  instagram: InstagramIcon,
  jueJin: JueJinIcon,
  github: GithubIcon,
  linkedin: LinkedInIcon,
  blog: BlogIcon,
}
