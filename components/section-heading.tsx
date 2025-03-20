import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  subtitleClassName?: string
  divider?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  className,
  subtitleClassName,
  divider = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(center && "text-center", "mb-12")}>
      <h2 className={cn("section-title", className)}>{title}</h2>

      {divider && <div className="divider" />}

      {subtitle && <p className={cn("section-subtitle", subtitleClassName)}>{subtitle}</p>}
    </div>
  )
}

