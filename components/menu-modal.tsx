"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [currentSide, setCurrentSide] = useState<"front" | "back">("front")
  const [isLoading, setIsLoading] = useState(true)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Reset to front side when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSide("front")
      setIsLoading(true)
    }
  }, [isOpen])

  const handleDownloadPDF = () => {
    // Open PDF in new tab for download
    window.open("/Salondeparis-Menu.pdf", "_blank")
  }

  const toggleSide = () => {
    setCurrentSide(currentSide === "front" ? "back" : "front")
    setIsLoading(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gold/20">
                <h2 className="text-xl font-heading font-bold text-salon-black flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-gold" />
                  Notre Menu
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-cream/50 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5 text-salon-black" />
                </button>
              </div>

              {/* Content */}
              <div className="relative flex-1 overflow-hidden">
                {/* Loading indicator */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Menu images */}
                <div className="relative h-full overflow-auto">
                  <div className="min-h-[500px] max-h-[70vh] relative flex justify-center">
                    <AnimatePresence mode="wait">
                      {currentSide === "front" ? (
                        <motion.div
                          key="front"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex justify-center"
                        >
                          <Image
                            src="/Menu1.png?height=1200&width=800"
                            alt="Menu (Recto)"
                            width={800}
                            height={1200}
                            className="h-auto object-contain max-h-[70vh] max-w-full"
                            onLoad={() => setIsLoading(false)}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="back"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex justify-center"
                        >
                          <Image
                            src="/Menu2.png?height=1200&width=800"
                            alt="Menu (Verso)"
                            width={800}
                            height={1200}
                            className="h-auto object-contain max-h-[70vh] max-w-full"
                            onLoad={() => setIsLoading(false)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 p-2">
                  <button
                    onClick={toggleSide}
                    className={cn(
                      "p-3 rounded-full bg-white/80 shadow-lg hover:bg-gold/20 transition-colors",
                      currentSide === "back" ? "opacity-100" : "opacity-0",
                    )}
                    aria-label="Voir le recto"
                    disabled={currentSide === "front"}
                  >
                    <ChevronLeft className="h-6 w-6 text-salon-black" />
                  </button>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
                  <button
                    onClick={toggleSide}
                    className={cn(
                      "p-3 rounded-full bg-white/80 shadow-lg hover:bg-gold/20 transition-colors",
                      currentSide === "front" ? "opacity-100" : "opacity-0",
                    )}
                    aria-label="Voir le verso"
                    disabled={currentSide === "back"}
                  >
                    <ChevronRight className="h-6 w-6 text-salon-black" />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gold/20 flex items-center justify-between">
                <div className="text-sm text-salon-gray">{currentSide === "front" ? "Recto" : "Verso"} du menu</div>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-gold text-salon-black rounded-full hover:bg-gold-dark transition-colors shadow-md"
                >
                  <Download className="h-4 w-4" />
                  <span>Télécharger PDF</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

