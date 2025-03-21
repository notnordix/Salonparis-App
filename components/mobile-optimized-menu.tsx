"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MenuIcon, X, FileText, Instagram, ChevronRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useRef } from "react"

interface MobileOptimizedMenuProps {
  openMenuModal: () => void
}

export default function MobileOptimizedMenu({ openMenuModal }: MobileOptimizedMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLDivElement>(null)

  // Use intersection observer to detect when header is at the top
  const isAtTop = useIntersectionObserver({
    ref: headerRef,
    options: { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
    freezeOnceVisible: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À Propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <div ref={headerRef} className="absolute top-0 left-0 right-0 h-1 bg-transparent" />

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          {/* Left side - Mobile menu toggle - REMOVED BACKGROUND COLOR */}
          <button
            className="p-2 rounded-full z-50 bg-transparent"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-salon-black" />
            ) : (
              <MenuIcon className={cn("h-6 w-6", isScrolled || pathname !== "/" ? "text-salon-black" : "text-white")} />
            )}
          </button>

          {/* Center - Logo - ONLY SHOW WHEN SCROLLING */}
          <div
            className={cn(
              "flex items-center justify-center transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Link href="/">
              <Image
                src="/LOGO.png?height=40&width=40"
                alt="Salon de Paris Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Right side - Menu button - KEEP ORIGINAL BACKGROUND */}
          <button
            onClick={openMenuModal}
            className={cn(
              "relative overflow-hidden group rounded-full transition-all duration-500",
              "px-3 py-1 font-medium text-sm",
              "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2",
              isScrolled
                ? "bg-gold text-salon-black"
                : pathname === "/"
                  ? "bg-white text-salon-black"
                  : "bg-gold text-salon-black",
            )}
            aria-label="Voir le menu"
          >
            <span className="relative z-10 flex items-center justify-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>Menu</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Drawer - Rest of the code remains the same */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Menu Panel - Optimized for touch */}
              <motion.div
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-50 overflow-y-auto"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="p-6 border-b border-gold/20">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/LOGO.png?height=80&width=80"
                        alt="Salon de Paris Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-salon-gray text-center mt-1">Depuis 1980</p>
                  </div>

                  {/* Navigation Links - Larger touch targets */}
                  <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center justify-between p-4 rounded-lg transition-all",
                              "min-h-[56px]", // Larger touch target
                              pathname === link.href
                                ? "bg-gold/20 text-salon-black font-medium"
                                : "text-salon-gray hover:bg-gold/10 hover:text-salon-black",
                            )}
                            onClick={closeMenu}
                          >
                            <span className="text-lg">{link.label}</span>
                            <ChevronRight className="h-5 w-5 opacity-70" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Quick Actions - Optimized for mobile */}
                  <div className="p-4 border-t border-gold/20">
                    <div className="grid grid-cols-1 gap-3">
                      <Link
                        href="tel:+21252442273"
                        className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gold text-salon-black font-medium"
                        onClick={closeMenu}
                      >
                        <Phone className="h-5 w-5" />
                        <span>Réserver par téléphone</span>
                      </Link>

                      <button
                        onClick={() => {
                          closeMenu()
                          setTimeout(() => {
                            openMenuModal()
                          }, 300)
                        }}
                        className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white border border-gold text-salon-black font-medium"
                      >
                        <FileText className="h-5 w-5" />
                        <span>Voir notre menu</span>
                      </button>

                      <Link
                        href="https://www.instagram.com/salondeparis.marrakech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 p-4 rounded-lg border border-gold/30 text-salon-gray hover:bg-gold/10 hover:text-salon-black transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </Link>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-salon-gray">© {new Date().getFullYear()} Le Salon de Paris</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

