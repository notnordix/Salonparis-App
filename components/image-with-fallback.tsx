"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
  fallbackAlt?: string
  containerClassName?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder.svg?height=400&width=400&text=Image+non+disponible",
  fallbackAlt,
  containerClassName,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [imgAlt, setImgAlt] = useState(alt)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setImgAlt(fallbackAlt || alt)
      setHasError(true)
    }
  }

  return (
    <div className={cn("relative", containerClassName)}>
      <Image src={imgSrc || "/placeholder.svg"} alt={imgAlt} className={className} onError={handleError} {...rest} />
    </div>
  )
}

