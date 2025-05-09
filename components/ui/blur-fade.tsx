"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type BlurFadeVariant = "left" | "right" | "up" | "down" | "none"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  variant?: BlurFadeVariant
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

export default function BlurFade({ children, className }: BlurFadeProps) {
  return <div className={cn(className)}>{children}</div>
}