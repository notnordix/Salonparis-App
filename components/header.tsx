"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FileText, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import MenuModal from "./menu-modal"
import MobileOptimizedMenu from "./mobile-optimized-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openMenuModal = () => {
    setIsMenuModalOpen(true)
  }

  const closeMenuModal = () => {
    setIsMenuModalOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À Propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-5",
        )}
      >
        <div className="salon-container">
          {/* Mobile Optimized Menu */}
          <MobileOptimizedMenu openMenuModal={openMenuModal} />

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left - Logo and Instagram */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/salondeparis.marrakech/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isScrolled
                    ? "bg-gold text-salon-black hover:bg-gold-dark "
                    : pathname === "/"
                      ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                      : "bg-gold text-salon-black hover:bg-gold-dark",
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            {/* Center - Navigation */}
            <nav className="flex items-center justify-center">
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-1 py-1 text-sm font-bold transition-colors",
                      pathname === link.href
                        ? isScrolled
                          ? "text-salon-black"
                          : "text-white"
                        : isScrolled
                          ? "text-salon-gray hover:text-salon-black"
                          : pathname === "/"
                            ? "text-white/80 hover:text-white"
                            : "text-white/80 hover:text-white",
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className={cn(
                          "absolute bottom-0 left-0 h-0.5 w-full rounded-full",
                          isScrolled || pathname !== "/" ? "bg-gold-dark" : "bg-white",
                        )}
                        layoutId="underline"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right - Menu Button */}
            <button
              onClick={openMenuModal}
              className={cn(
                "relative overflow-hidden group rounded-full transition-all duration-500",
                "px-6 py-2.5 font-medium text-sm",
                "focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2",
                isScrolled
                  ? "bg-gold text-salon-black"
                  : pathname === "/"
                    ? "bg-white text-salon-black"
                    : "bg-gold text-salon-black",
              )}
            >
              {/* Animated background gradient */}
              <span className="absolute inset-0 w-full h-full">
                <span
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                    "bg-gradient-to-r from-gold-light via-gold-dark to-gold-light bg-[length:200%_100%]",
                    "animate-[gradient_3s_ease_infinite]",
                  )}
                ></span>
              </span>

              {/* Animated border */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-[-2px] rounded-full border-2 border-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100">
                  <span className="absolute top-0 left-[calc(50%-1px)] h-[2px] w-[2px] bg-gold-dark rounded-full shadow-[0_0_5px_1px_rgba(255,213,79,0.7)]"></span>
                </span>
              </span>

              {/* Subtle shimmer effect */}
              <span className="absolute inset-0 overflow-hidden rounded-full opacity-0 group-hover:opacity-100">
                <span className="absolute top-0 left-[-100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_3s_infinite]"></span>
              </span>

              {/* Button content with subtle animation */}
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 relative">
                  <FileText className="h-4 w-4 animate-[pulse_4s_ease-in-out_infinite]" />
                  <span className="absolute inset-0 bg-gold-dark/30 rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></span>
                </span>
                <span className="relative inline-block">
                  <span className="block transform group-hover:translate-y-[-2px] transition-transform duration-300">
                    Menu
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-salon-black/70 group-hover:w-full transition-all duration-300 delay-150"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </>
  )
}

