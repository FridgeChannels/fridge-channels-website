"use client"

import { useRef, ReactNode } from "react"
import { motion, Variants, useInView } from "framer-motion"

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLDivElement>
  customVariants?: Variants
  className?: string
  [key: string]: any
}

export function TimelineContent({
  as = "div",
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: animationNum * 0.1,
      },
    },
  }

  const variants = customVariants || defaultVariants

  const Component = as as any

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  )
}

