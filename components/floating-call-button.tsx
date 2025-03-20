"use client"

import { Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative">
            {/* Pulsing background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full bg-green-500/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-full h-full rounded-full bg-green-500/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </div>

            {/* Main button */}
            <motion.a
              href="tel:+21252442273"
              className={cn(
                "flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg relative z-10",
                isHovered ? "shadow-green-500/30" : "shadow-green-500/20",
              )}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Appeler le salon"
            >
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
              >
                <Phone className="h-7 w-7" />
              </motion.div>
            </motion.a>

            {/* Label that appears on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute right-full mr-4 transform -top-1/2 -translate-y-1/2 bg-white text-green-600 font-medium py-2.5 px-5 rounded-lg shadow-md whitespace-nowrap flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  Réserver maintenant
                  <div
                    className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 
                    border-y-[8px] border-l-[8px] border-y-transparent border-l-white"
                  ></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

