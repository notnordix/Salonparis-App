"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseIntersectionObserverProps {
  ref: RefObject<Element>
  options?: IntersectionObserverInit
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  ref,
  options = { threshold: 0 },
  freezeOnceVisible = true,
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const element = ref?.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && freezeOnceVisible) {
        observer.unobserve(element)
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options, freezeOnceVisible])

  return isIntersecting
}

