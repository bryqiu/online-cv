'use client'

import { Moon, Printer, Sun } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import GitHubIcon from './icons/github-icon'

interface ActionToolbarItem {
  icon: React.ReactNode
  btnProps?: React.ComponentProps<typeof Button>
  tipText: string
  tipProps?: React.ComponentProps<typeof Tooltip>
  tipContent?: React.ComponentProps<typeof TooltipContent>
  tipTrigger?: React.ComponentProps<typeof TooltipTrigger>
  actionClick?: () => void
}

function ActionToolbar() {
  const actionList: ActionToolbarItem[] = [
    {
      icon: <Printer className="size-4" />,
      tipText: '打印',
      actionClick: () => {
        window.print()
      },
    },
    {
      icon: (
        <React.Fragment>
          <Moon className="size-4 dark:hidden" />
          <Sun className="size-4 hidden dark:block" />
        </React.Fragment>
      ),
      tipText: '切换主题',
      actionClick: () => document.documentElement.classList.toggle('dark'),
    },
    {
      icon: <GitHubIcon className="size-4" />,
      tipText: 'GitHub 源码',
      actionClick: () => {
        window.open('https://github.com/bryqiu/online-cv', '_blank')
      },
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 print:hidden">
      <div className="flex flex-col gap-y-3">
        {
          actionList.map((item, index) => (
            <Tooltip key={index} {...item.tipProps}>
              <TooltipTrigger asChild {...item.tipTrigger}>
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer" onClick={item.actionClick} {...item.btnProps}>
                  {item.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" {...item.tipContent}>
                <span>{item.tipText}</span>
              </TooltipContent>
            </Tooltip>
          ))
        }
      </div>
    </div>
  )
}

export default ActionToolbar
