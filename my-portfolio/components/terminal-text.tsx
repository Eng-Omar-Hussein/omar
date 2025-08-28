"use client"

import { useState, useEffect } from "react"

interface TerminalTextProps {
  text: string
  delay?: number
  className?: string
}

export function TerminalText({ text, delay = 50, className = "" }: TerminalTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span className={`${className} ${currentIndex === text.length ? "terminal-cursor" : ""}`}>{displayText}</span>
}
