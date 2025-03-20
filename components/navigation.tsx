"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scissors, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
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
    { href: "/services", label: "Services" },
    { href: "/about", label: "À Propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="salon-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50" onClick={closeMenu}>
          <Scissors
            className={cn(
              "h-6 w-6 transition-colors",
              isScrolled || isOpen ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
            )}
          />
          <span
            className={cn(
              "text-xl font-heading font-semibold transition-colors",
              isScrolled || isOpen ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
            )}
          >
            Le Salon de Paris
          </span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link",
                pathname === link.href && "nav-link-active",
                isScrolled ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:+21252442273" className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border transition-colors rounded-full",
                isScrolled
                  ? "border-salon-black text-salon-black hover:bg-salon-black hover:text-white"
                  : pathname === "/"
                    ? "border-white text-white hover:bg-white hover:text-salon-black"
                    : "border-salon-black text-salon-black hover:bg-salon-black hover:text-white",
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              Réserver
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? (
            <X
              className={cn(
                "h-6 w-6",
                isScrolled ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
              )}
            />
          ) : (
            <Menu
              className={cn(
                "h-6 w-6",
                isScrolled ? "text-salon-black" : pathname === "/" ? "text-white" : "text-salon-black",
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-cream flex flex-col justify-center items-center transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xl font-heading text-salon-black hover:text-salon-gray transition-colors",
                pathname === link.href && "font-semibold",
                `animate-fadeIn animate-delay-${index * 100}`,
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link href="tel:+21252442273" className="mt-4 animate-fadeIn animate-delay-500" onClick={closeMenu}>
            <Button className="btn-primary rounded-full">
              <Phone className="mr-2 h-4 w-4" />
              Réserver
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

