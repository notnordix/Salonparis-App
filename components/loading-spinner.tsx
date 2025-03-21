import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "gold" | "white" | "black"
  className?: string
}

export default function LoadingSpinner({ size = "md", color = "gold", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  const colorClasses = {
    gold: "border-gold/30 border-t-gold",
    white: "border-white/30 border-t-white",
    black: "border-salon-black/30 border-t-salon-black",
  }

  return (
    <div
      className={cn("rounded-full animate-spin", sizeClasses[size], colorClasses[color], className)}
      role="status"
      aria-label="Chargement"
    >
      <span className="sr-only">Chargement...</span>
    </div>
  )
}

