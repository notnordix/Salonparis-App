"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Instagram, Mail, Clock, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  // For animated sections
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  const contactInfoRef = useRef<HTMLDivElement>(null)
  const contactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 })

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG-20250321-WA0004.jpg?height=1080&width=1920&text=Contact"
            alt="Salon de Paris Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-salon-black/80 to-salon-black/60" />
        </div>

        <div className="salon-container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-gold border-b-2 border-gold pb-1 uppercase tracking-wider text-sm font-medium mb-4">
              Contactez-nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Contactez-Nous</h1>
            <div className="h-1 w-20 bg-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/80">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous accueillir dans notre salon.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-gold/20 blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-gold/20 blur-3xl"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cream/30 blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cream/30 blur-3xl -z-0"></div>

        <div className="salon-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-salon-black mb-4">Prenons Contact</h2>
            <div className="h-1 w-20 bg-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray max-w-2xl mx-auto">
              Que ce soit pour une réservation, une question ou simplement pour nous dire bonjour, nous sommes toujours
              ravis d'échanger avec vous.
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            ref={contactInfoRef}
            className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-cream/50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-10 text-center">
              <h3 className="text-2xl font-heading font-bold text-salon-black">Nos Coordonnées</h3>
              <div className="h-1 w-16 bg-cream-dark rounded-full mx-auto"></div>
              <p className="text-salon-gray">
                Retrouvez-nous au cœur de Marrakech pour une expérience de beauté exceptionnelle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream shrink-0 shadow-md mt-1">
                  <MapPin className="h-6 w-6 text-salon-black" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Adresse</h4>
                  <p className="text-salon-gray">
                    Rue Ibn Atya, Marrakesh 40000, Morocco, Marrakech, Marrakech-tensift-al Haouz 40000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream shrink-0 shadow-md mt-1">
                  <Phone className="h-6 w-6 text-salon-black" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Téléphone</h4>
                  <Link href="tel:+21252442273" className="text-salon-gray hover:text-gold transition-colors">
                    +212 5244-22737
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream shrink-0 shadow-md mt-1">
                  <Instagram className="h-6 w-6 text-salon-black" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Instagram</h4>
                  <Link
                    href="https://www.instagram.com/salondeparis.marrakech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-salon-gray hover:text-gold transition-colors"
                  >
                    @salondeparis.marrakech
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream shrink-0 shadow-md mt-1">
                  <Mail className="h-6 w-6 text-salon-black" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Email</h4>
                  <Link
                    href="mailto:contact@salondeparis.ma"
                    className="text-salon-gray hover:text-gold transition-colors"
                  >
                    contact@salondeparis.ma
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-cream">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream shrink-0 shadow-md mt-1">
                  <Clock className="h-6 w-6 text-salon-black" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-lg mb-4">Horaires d'ouverture</h4>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="bg-cream/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-salon-gray font-medium">Toute la semaine</span>
                        <span className="text-salon-black font-medium bg-cream py-1 px-3 rounded-full text-sm">
                          9h - 21h
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 flex justify-center">
              <Link href="tel:+21252442273">
                <Button className="bg-salon-black text-white hover:bg-salon-black/80 px-8 py-6 rounded-full shadow-lg group">
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Réserver par Téléphone
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="salon-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-salon-black mb-4">Notre Emplacement</h2>
            <div className="h-1 w-20 bg-cream-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray">Venez nous rendre visite au cœur de Marrakech</p>
          </motion.div>

          <motion.div
            ref={mapRef}
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9661932707!2d-8.00795!3d31.6294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzQ1LjgiTiA4wrAwMCc0Ny4wIlc!5e0!3m2!1sen!2sus!4v1647427822764!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Carte du Salon de Paris"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg z-10">
              <p className="font-medium text-salon-black text-sm">Salon de Paris - Marrakech</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

