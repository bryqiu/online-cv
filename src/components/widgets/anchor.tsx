'use client'

import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  linkText: string
  underline?: boolean
  canCopy?: boolean
}

function Anchor(props: AnchorProps) {
  const { href, target = '_blank', className, linkText, canCopy = true, underline = true, ...rest } = props
  const [copied, setCopied] = useState(false)

  // 拷贝逻辑
  const handleCopy = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!href)
      return
    // 复制链接文本，去掉协议前缀
    const textToCopy = href.replace(/^[a-z]+:/i, '')
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      // 2秒后重置图标状态
      setTimeout(() => setCopied(false), 2000)
    }
    catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn('hover:text-primary/80 transition-colors', className)}
      {...rest}
    >
      <span className="inline-flex items-center gap-x-1.5 group/item relative">
        <span className={cn(
          'duration-200',
          'hover:text-primary',
          underline && 'group-hover/item:underline group-hover/item:underline-offset-2',
        )}
        >
          {linkText}
        </span>

        {canCopy && (
          <span
            onClick={handleCopy}
            role="button"
            aria-label="Copy link"
            className={cn(
              'inline-flex items-center justify-center p-0.5 rounded hover:bg-muted hover:text-primary transition-all',
              'opacity-0 group-hover/item:opacity-100',
              'print:hidden',
            )}
          >
            {copied
              ? (
                  <Check className="size-3 text-primary" />
                )
              : (
                  <Copy className="size-3 opacity-0 group-hover/item:opacity-100 print:hidden duration-200" />
                )}
          </span>
        )}
      </span>
    </a>
  )
}

export default Anchor
