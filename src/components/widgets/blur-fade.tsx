import { cn } from '@/lib/utils'

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

function BlurFade({ children, className = '', delay = 0 }: BlurFadeProps) {
  return (
    <div className={cn('animate-blur-in opacity-0 print:break-inside-avoid', className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default BlurFade
