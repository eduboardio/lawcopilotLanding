"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  variant?: any
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

// Simplified component that just renders children without animations
export default function BlurFade({ children, className }: BlurFadeProps) {
  return <div className={cn(className)}>{children}</div>
}
