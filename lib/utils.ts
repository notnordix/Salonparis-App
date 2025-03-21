import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to format date strings
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

// Function to generate image placeholder URLs
export function getPlaceholderImage(width: number, height: number, text?: string): string {
  const textParam = text ? `&text=${encodeURIComponent(text)}` : ""
  return `/placeholder.svg?height=${height}&width=${width}${textParam}`
}

// Function to detect touch devices
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false
  return "ontouchstart" in window || navigator.maxTouchPoints > 0
}

// Function to get viewport dimensions
export function getViewportDimensions() {
  if (typeof window === "undefined") return { width: 0, height: 0 }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

// Function to create a debounced function
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

