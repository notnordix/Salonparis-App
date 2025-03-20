"use client"

import { useRef } from "react"
import Link from "next/link"
import { Phone, MapPin, Instagram } from "lucide-react"
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

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-cream overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>

        <div className="salon-container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-salon-gray border-b-2 border-cream-dark pb-1 uppercase tracking-wider text-sm font-medium mb-4">
              Contactez-nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-salon-black mb-4">
              Contactez-Nous
            </h1>
            <div className="h-1 w-20 bg-cream-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous accueillir dans notre salon.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-cream-dark/30 blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-cream-dark/30 blur-3xl"></div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="salon-container">
          <motion.div
            ref={contactInfoRef}
            className="bg-cream-light/50 p-8 rounded-xl shadow-lg border border-cream/50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={contactInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-salon-black">Nos Coordonnées</h2>
              <div className="h-1 w-16 bg-cream-dark rounded-full mx-auto"></div>
              <p className="text-salon-gray text-lg">
                N'hésitez pas à nous contacter pour toute information ou pour prendre rendez-vous.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream shrink-0 shadow-md">
                  <MapPin className="h-7 w-7 text-salon-black" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-salon-gray">
                    Rue Ibn Atya, Marrakesh 40000, Morocco, Marrakech, Marrakech-tensift-al Haouz 40000
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream shrink-0 shadow-md">
                  <Phone className="h-7 w-7 text-salon-black" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Téléphone</h3>
                  <Link href="tel:+21252442273" className="text-salon-gray hover:text-salon-black transition-colors">
                    +212 5244-22737
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream shrink-0 shadow-md">
                  <Instagram className="h-7 w-7 text-salon-black" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Instagram</h3>
                  <Link
                    href="https://www.instagram.com/salondeparis.marrakech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-salon-gray hover:text-salon-black transition-colors"
                  >
                    @salondeparis.marrakech
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-6 bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-bold text-lg mb-4 border-b border-cream pb-2 text-center">
                Horaires d'ouverture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-4 bg-cream-light/50 rounded-lg">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span className="text-salon-gray bg-cream py-1 px-3 rounded-full text-sm mt-2">9h - 19h</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-cream-light/50 rounded-lg">
                  <span className="font-medium">Samedi</span>
                  <span className="text-salon-gray bg-cream py-1 px-3 rounded-full text-sm mt-2">9h - 18h</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-cream-light/50 rounded-lg">
                  <span className="font-medium">Dimanche</span>
                  <span className="text-salon-gray bg-cream py-1 px-3 rounded-full text-sm mt-2">Fermé</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="tel:+21252442273">
                <Button className="bg-salon-black text-white hover:bg-salon-black/80 px-8 py-4 rounded-full shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Réserver Maintenant
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

