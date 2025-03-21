"use client"

import { useRef } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedButton from "@/components/animated-button"

export default function AboutPage() {
  // For animated sections
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  const historyRef = useRef<HTMLDivElement>(null)
  const historyInView = useInView(historyRef, { once: true, amount: 0.2 })

  const inheritanceRef = useRef<HTMLDivElement>(null)
  const inheritanceInView = useInView(inheritanceRef, { once: true, amount: 0.2 })

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG-20250320-WA0019.jpg?height=1080&width=1920&text=À+Propos"
            alt="Salon de Paris Background"
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
              Notre histoire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              À Propos de Nous
            </h1>
            <div className="h-1 w-20 bg-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/80">
              Découvrez l'histoire et les valeurs qui font du Salon de Paris une référence depuis plus de 40 ans.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-gold/20 blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-gold/20 blur-3xl"></div>
      </section>

      {/* Rest of the page content remains unchanged */}
      {/* Notre Histoire */}
      <section ref={historyRef} className="py-24 bg-white">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-cream-dark z-0 rounded-xl"></div>
              <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/about.jpg?height=600&width=600"
                  alt="Fondateur du Salon de Paris"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-cream-dark z-0 rounded-xl"></div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl max-w-[200px] z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={historyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <p className="text-sm italic text-salon-gray font-medium">
                  "L'excellence est le fruit de la passion et de la persévérance."
                </p>
                <p className="text-right text-xs font-bold mt-2">— Si Ahmed, 1980</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-salon-gray border-b-2 border-cream-dark pb-1 uppercase tracking-wider text-sm font-medium">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black">
                Une tradition d'excellence depuis 1980
              </h2>
              <div className="h-1 w-24 bg-cream-dark rounded-full"></div>
              <p className="text-salon-gray text-lg leading-relaxed">
                Depuis 1980, Le Salon de Paris s'impose comme une référence incontournable dans le domaine de la
                coiffure et de la beauté. Fondé par Si Ahmed, ce salon allie expertise, innovation et excellence pour
                offrir des prestations haut de gamme adaptées aux tendances actuelles.
              </p>
              <p className="text-salon-gray text-lg leading-relaxed">
                Grâce à un savoir-faire reconnu et des techniques de coiffure avancées, Le Salon de Paris attire une
                clientèle fidèle à la recherche d'un service personnalisé et d'une expérience unique. Avec son
                engagement envers la qualité et son souci du détail, il reste aujourd'hui un salon de coiffure
                d'exception, où élégance et professionnalisme se rencontrent pour sublimer chaque client.
              </p>

              <div className="flex gap-4 mt-8">
                <div className="bg-cream-light p-4 rounded-lg flex-1">
                  <h3 className="font-heading font-bold text-xl mb-2">40+</h3>
                  <p className="text-salon-gray text-sm">Années d'expérience</p>
                </div>
                <div className="bg-cream-light p-4 rounded-lg flex-1">
                  <h3 className="font-heading font-bold text-xl mb-2">12K+</h3>
                  <p className="text-salon-gray text-sm">Clients satisfaits</p>
                </div>
                <div className="bg-cream-light p-4 rounded-lg flex-1">
                  <h3 className="font-heading font-bold text-xl mb-2">8</h3>
                  <p className="text-salon-gray text-sm">Experts coiffeurs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D'une génération à l'autre */}
      <section ref={inheritanceRef} className="py-24 bg-cream-light">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={inheritanceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-salon-gray border-b-2 border-cream-dark pb-1 uppercase tracking-wider text-sm font-medium">
                D'une génération à l'autre
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black">
                Un héritage familial précieux
              </h2>
              <div className="h-1 w-24 bg-cream-dark rounded-full"></div>
              <p className="text-salon-gray text-lg leading-relaxed">
                Depuis 1980, Le Salon de Paris incarne l'excellence en coiffure et en beauté. Fondé par Si Ahmed, il a
                su bâtir une réputation d'exception. Après son décès, sa fille Nada a repris le flambeau, alliant
                tradition et modernité pour perpétuer son héritage et offrir une expérience unique à chaque client.
              </p>
              <p className="text-salon-gray text-lg leading-relaxed">
                Sous la direction de Nada, le salon continue d'évoluer tout en préservant les valeurs fondamentales qui
                ont fait son succès : l'excellence technique, l'attention personnalisée et l'innovation constante. Cette
                transmission familiale assure la continuité d'un savoir-faire unique et d'une philosophie centrée sur la
                satisfaction client.
              </p>

              <div className="mt-8 px-6 py-4 bg-white rounded-lg shadow-sm border-l-4 border-cream-dark">
                <p className="text-salon-gray italic">
                  "Notre philosophie reste inchangée : offrir à chaque client une expérience personnalisée où se mêlent
                  expertise technique et attention bienveillante."
                </p>
                <p className="text-right font-medium mt-2">— Nada, Directrice actuelle</p>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={inheritanceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-cream-dark z-0 rounded-xl"></div>
              <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/437A9791.JPG?height=600&width=600"
                  alt="Nada, directrice actuelle du Salon de Paris"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-cream-dark z-0 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-b from-white to-gold-light text-black relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-salon-gray/10 blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-salon-gray/10 blur-3xl"></div>

        <div className="salon-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-black drop-shadow-lg">
                Prêt à transformer votre style?
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-black/80 mb-8 leading-relaxed">
                Réservez votre rendez-vous dès maintenant et découvrez l'excellence du Salon de Paris. Nos experts sont
                prêts à vous accueillir et à vous offrir une expérience unique.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatedButton
                href="+21252442273"
                tel={true}
                variant="primary"
                animation="border-spin"
                size="lg"
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
                className="shadow-xl"
              >
                Réserver Maintenant
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

