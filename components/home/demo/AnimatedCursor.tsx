"use client"
import { motion } from "framer-motion"
import { memo } from "react"
import { useTheme } from "next-themes"

interface AnimatedCursorProps {
  position: { x: number; y: number }
  clicking: boolean
}

export const AnimatedCursor = memo(({ position, clicking }: AnimatedCursorProps) => {
  const { theme } = useTheme()
  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const cursorColor = isDark ? "text-white" : "text-black"
  const glowColor = isDark ? "bg-white/50" : "bg-black/50"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        left: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        top: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
      className="absolute w-8 h-8 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          scale: clicking ? 2 : 1.2,
          opacity: clicking ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute inset-0 rounded-full blur-2xl ${glowColor}`}
      />

      {/* Cursor SVG - color adapts to light/dark mode */}
      <motion.svg
        animate={{ scale: clicking ? 0.85 : 1 }}
        transition={{ duration: 0.15 }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={`drop-shadow-2xl relative z-10 ${cursorColor}`}
      >
        <path
          d="M7 5L25 16L16 17.5L12.5 26L7 5Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.svg>

      {clicking && (
        <motion.div
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`absolute inset-0 border-2 border-current rounded-full ${isDark ? "border-white" : "border-black"}`}
        />
      )}
    </motion.div>
  )
})

AnimatedCursor.displayName = "AnimatedCursor"
