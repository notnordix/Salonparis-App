"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

type AnimationType = "border-spin" | "pulse" | "shimmer" | "gradient-flow" | "bounce"

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  animation?: AnimationType
  variant?: "primary" | "secondary" | "outline" | "dark"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  tel?: boolean
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className,
  animation = "border-spin",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  tel = false,
}: AnimatedButtonProps) {
  // Base styles
  const baseStyles = cn(
    "relative overflow-hidden font-medium rounded-full inline-flex items-center justify-center transition-all",
    "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2",
    {
      // Size variants
      "text-sm px-4 py-2": size === "sm",
      "text-base px-6 py-3": size === "md",
      "text-lg px-8 py-4": size === "lg",

      // Color variants
      "bg-gold text-salon-black hover:bg-gold-dark": variant === "primary",
      "bg-white text-salon-black border-2 border-gold hover:bg-gold-light": variant === "secondary",
      "bg-transparent text-gold border-2 border-gold hover:bg-gold/10": variant === "outline",
      "bg-salon-black text-white hover:bg-salon-black/80": variant === "dark",
    },
    className,
  )

  // Animation specific elements
  const renderAnimationElements = () => {
    switch (animation) {
      case "border-spin":
        return (
          <>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <motion.span
                className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-gold via-gold-dark to-gold"
                style={{
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "200% 200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </span>
            <span
              className={cn("absolute inset-[2px] rounded-full z-10", {
                "bg-gold": variant === "primary",
                "bg-white": variant === "secondary",
                "bg-transparent": variant === "outline",
                "bg-salon-black": variant === "dark",
              })}
            />
            <span className="relative z-20">{children}</span>
          </>
        )

      case "pulse":
        return (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-gold/30"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">{children}</span>
          </>
        )

      case "shimmer":
        return (
          <>
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <motion.span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ translateX: ["0%", "200%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </span>
            <span className="relative z-10">{children}</span>
          </>
        )

      case "gradient-flow":
        return (
          <>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-gold via-gold-dark to-gold-light rounded-full"
              style={{ backgroundSize: "200% 100%" }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <span className="relative z-10 text-salon-black font-medium">{children}</span>
          </>
        )

      case "bounce":
        return (
          <>
            <motion.span
              className="absolute -inset-1 rounded-full bg-gold/20"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10">{children}</span>
          </>
        )

      default:
        return <span>{children}</span>
    }
  }

  // Content with icon
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  )

  // Render as link or button
  if (href) {
    return (
      <Link href={tel ? `tel:${href}` : href} className={baseStyles} onClick={onClick}>
        {renderAnimationElements()}
      </Link>
    )
  }

  return (
    <button className={baseStyles} onClick={onClick}>
      {renderAnimationElements()}
    </button>
  )
}

