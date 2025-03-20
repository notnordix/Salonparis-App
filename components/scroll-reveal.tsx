"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationType = "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight" | "scaleIn"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  threshold?: number
  className?: string
}

export default function ScrollReveal({
  children,
  animation = "fadeIn",
  delay = 0,
  threshold = 0.1,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeIn":
        return "animate-fadeIn"
      case "slideUp":
        return "animate-slideUp"
      case "slideInLeft":
        return "animate-slideInLeft"
      case "slideInRight":
        return "animate-slideInRight"
      case "scaleIn":
        return "animate-scaleIn"
      default:
        return "animate-fadeIn"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass() : "opacity-0",
        delay ? `[animation-delay:${delay}ms]` : "",
        className,
      )}
      style={{ animationDelay: delay ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

