"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Instagram, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="salon-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2">
                <Image
                  src="/salondeparis-logo.png?height=48&width=150"
                  alt="Salon de Paris Logo"
                  width={150}
                  height={150}
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Depuis 1980, Le Salon de Paris s'impose comme une référence incontournable dans le domaine de la coiffure
              et de la beauté à Marrakech.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/salondeparis.marrakech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-salon-black hover:bg-gold hover:text-salon-black transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="tel:+21252442273"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-salon-black hover:bg-gold hover:text-salon-black transition-colors shadow-sm"
                aria-label="Téléphone"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@salondeparis.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-salon-black hover:bg-gold hover:text-salon-black transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Combined Liens Rapides and Horaires on mobile */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {/* Liens Rapides - Completely Redesigned */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-heading font-bold text-white">Liens Rapides</h3>
                <div className="h-1 w-12 bg-gold rounded-full"></div>

                <nav className="mt-8 grid grid-cols-1 gap-4">
                  {[
                    { href: "/", label: "Accueil" },
                    { href: "/about", label: "À Propos" },
                    { href: "/blog", label: "Blog" },
                    { href: "/contact", label: "Contact" },
                  ].map((link, index) => (
                    <Link key={link.href} href={link.href} className="flex items-center group">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3 group-hover:bg-gold transition-colors duration-300">
                        <span className="text-xs font-bold text-gold group-hover:text-salon-black transition-colors duration-300">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-white/80 group-hover:text-gold transition-colors duration-300">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </motion.div>

              {/* Horaires d'ouverture */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-heading font-bold text-white">Horaires d'ouverture</h3>
                <div className="h-1 w-12 bg-gold rounded-full"></div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">Toute la semaine</p>
                      <p className="text-xs text-white/70">9h - 21h</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-bold text-white">Contact</h3>
            <div className="h-1 w-12 bg-gold rounded-full"></div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">
                  Rue Ibn Atya, Marrakesh 40000, Morocco, Marrakech, Marrakech-tensift-al Haouz 40000
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <Link href="tel:+21252442273" className="text-sm text-white/80 hover:text-white transition-colors">
                  +212 5244-22737
                </Link>
              </div>

              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-gold shrink-0" />
                <Link
                  href="https://www.instagram.com/salondeparis.marrakech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  @salondeparis.marrakech
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="salon-container flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/60 font-light">
            &copy; {currentYear} Le Salon de Paris. Tous droits réservés.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="/contact" className="text-xs text-white/60 hover:text-white transition-colors mx-2">
              Contactez-nous
            </Link>
            <span className="text-white/30 mx-2">•</span>
            <Link href="/about" className="text-xs text-white/60 hover:text-white transition-colors mx-2">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

