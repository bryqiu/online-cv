import type { LinkProps } from 'next/link'
import type { IconWrapperProps } from './icon-wrapper'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import IconWrapper from './icon-wrapper'

type NextLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps<any>> & LinkProps<any>

interface AnchorProps extends NextLinkProps {
  /**
   * 链接文本
   */
  text: string
  /**
   * 是否下划线
   */
  underline?: boolean
  /**
   * 图标
   */
  icon?: React.ReactNode
  /**
   * 是否显示图标
   */
  showIcon?: boolean
  /**
   * 图标容器自定义属性
   */
  iconWrapperProps?: IconWrapperProps
  /**
   * 自定义类名
   */
  className?: string
  /**
   * 文本类名
   */
  textClassName?: string
}

function Anchor(props: AnchorProps) {
  const { text, underline = true, showIcon = true, icon, className, textClassName, iconWrapperProps, ...originLinkProps } = props

  const iconComponent = icon || <SquareArrowOutUpRight className="size-3 shrink-0 text-card-foreground/50 print:hidden" />

  const linkProps: NextLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    ...originLinkProps,
    className: cn('inline-flex gap-x-1 items-center', className),
  }

  return (
    <Link
      {...linkProps}
    >
      <span className={cn(
        underline && 'hover:underline hover:underline-offset-2',
        textClassName,
      )}
      >
        {text}
      </span>
      {showIcon && (
        <IconWrapper className="shrink-0 text-card-foreground/50 h-full print:hidden" {...iconWrapperProps}>
          {iconComponent}
        </IconWrapper>
      )}
    </Link>
  )
}

export default Anchor
