import React from 'react'

export interface IconWrapperProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  ref?: React.RefObject<HTMLSpanElement>
}

function IconWrapper(props: IconWrapperProps) {
  const { className, style, children, ref } = props

  return (
    <span ref={ref} className={className} style={style}>
      {children}
    </span>
  )
}

export default IconWrapper
