"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-5",
      )}
    >
      <div className="salon-container">
        <div className="flex items-center justify-between">
          {/* Instagram Icon (Left) */}
          <div className="flex items-center">
            <Link
              href="https://www.instagram.com/salondeparis.marrakech/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled
                  ? "bg-gold text-salon-black hover:bg-gold-dark"
                  : pathname === "/"
                    ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                    : "bg-gold text-salon-black hover:bg-gold-dark",
              )}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center justify-center">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-2 py-1 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? isScrolled || pathname !== "/"
                        ? "text-salon-black"
                        : "text-white"
                      : isScrolled
                        ? "text-salon-gray hover:text-salon-black"
                        : pathname === "/"
                          ? "text-white/80 hover:text-white"
                          : "text-salon-gray hover:text-salon-black",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 w-full rounded-full",
                        isScrolled || pathname !== "/" ? "bg-gold" : "bg-white",
                      )}
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Logo (Center) - Added Logo Here */}
          <Link href="/" className="lg:hidden">
            <span
              className={cn(
                "text-xl font-heading font-light tracking-wide transition-colors",
                isScrolled || isOpen ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
              )}
            >
              Le Salon de Paris
            </span>
          </Link>

          {/* Reserve Button (Right) */}
          <div className="hidden lg:flex items-center">
            <Link href="tel:+21252442273">
              <Button
                className={cn(
                  "rounded-full transition-colors",
                  isScrolled
                    ? "bg-gold text-salon-black hover:bg-gold-dark"
                    : pathname === "/"
                      ? "bg-white text-salon-black hover:bg-white/90"
                      : "bg-gold text-salon-black hover:bg-gold-dark",
                )}
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Réserver
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 rounded-full"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{
              backgroundColor: isOpen
                ? "white"
                : isScrolled
                  ? "rgba(255, 215, 0, 0.9)"
                  : pathname === "/"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 215, 0, 0.9)",
            }}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-salon-black" />
            ) : (
              <Menu className={cn("h-5 w-5", isScrolled || pathname !== "/" ? "text-salon-black" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="salon-container h-full flex flex-col justify-center items-center">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-heading text-salon-black hover:text-salon-gray transition-colors",
                        pathname === link.href && "font-semibold",
                      )}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Link
                  href="https://www.instagram.com/salondeparis.marrakech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-salon-black hover:bg-gold-dark transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Link>

                <Link
                  href="tel:+21252442273"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-salon-black text-white hover:bg-salon-black/80 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Réserver
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

