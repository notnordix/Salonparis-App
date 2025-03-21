"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Phone, ArrowRight, Calendar } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedButton from "@/components/animated-button"
import StructuredData from "@/components/structured-data"
import ImageWithFallback from "@/components/image-with-fallback"

// Typewriter effect component
const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(text.substring(0, index + 1))
        setIndex((prev) => prev + 1)

        // If we've typed the full text
        if (index === text.length) {
          // Pause at the end
          setTypingSpeed(1500)
          setIsDeleting(true)
        } else {
          // Normal typing speed
          setTypingSpeed(150)
        }
      } else {
        // Deleting
        setDisplayText(text.substring(0, index - 1))
        setIndex((prev) => prev - 1)

        // If we've deleted everything
        if (index === 0) {
          setIsDeleting(false)
          // Pause before starting again
          setTypingSpeed(1000)
        } else {
          // Faster deletion speed
          setTypingSpeed(75)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [index, isDeleting, text, typingSpeed])

  return (
    <div className="flex items-center justify-center">
      <span className="text-sm md:text-sm font-heading tracking-widest text-gold border-b-2 border-gold px-2 py-1">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
}

export default function Home() {
  // For parallax effect in hero section
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImageTransform = useTransform(scrollY, [0, 500], [0, 100])

  // For animated sections
  const historyRef = useRef<HTMLDivElement>(null)
  const historyInView = useInView(historyRef, { once: true, amount: 0.2 })

  const principlesRef = useRef<HTMLDivElement>(null)
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.2 })

  const blogRef = useRef<HTMLDivElement>(null)
  const blogInView = useInView(blogRef, { once: true, amount: 0.2 })

  const mapRef = useRef<HTMLDivElement>(null)
  const mapInView = useInView(mapRef, { once: true, amount: 0.5 })

  // For viewport height fixing on mobile
  useEffect(() => {
    // This helps fix the 100vh issue on mobile browsers
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVh()
    window.addEventListener("resize", setVh)

    return () => {
      window.removeEventListener("resize", setVh)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <StructuredData type="salon" />
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full flex items-center justify-center"
        style={{ height: "calc(100vh - 0px)", minHeight: "550px", maxHeight: "950px" }}
      >
        {/* Background with parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y: heroImageTransform }} className="absolute inset-0 w-full h-[120%] top-[-10%]">
            <Image
              src="/IMG-20250320-WA0014.jpg?height=1080&width=1920&text=Salon+de+Paris"
              alt="Salon de Paris - Élégance intemporelle à Marrakech"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-salon-black/90 to-salon-black/60" />
          </motion.div>
        </div>

        {/* Content container - centered */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
          {/* Logo centered */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-8">
            <ImageWithFallback
              src="/salondeparis-logo.png?height=150&width=150"
              alt="Salon de Paris Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Typewriter animation for "DEPUIS 1980" - MOVED BEFORE H1 */}
          <motion.div
            className="mb-2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypewriterEffect text="DEPUIS 1980" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            L'élégance intemporelle à Marrakech
          </motion.h1>

          {/* New paragraph */}
          <motion.p
            className="text-base md:text-base text-white/70 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Le Salon de Paris, où chaque détail raconte une histoire de style et de maîtrise. L'élégance y est
            intemporelle, portée par un savoir-faire transmis.
          </motion.p>

          {/* Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <AnimatedButton
              href="+21252442273"
              tel={true}
              size="md"
              variant="outline"
              animation="border-spin"
              icon={<Phone className="h-5 w-5" />}
              iconPosition="left"
              className="shadow-xl text-black"
            >
              Réserver maintenant
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire - Redesigned */}
      <section ref={historyRef} className="py-28 bg-gradient-to-b from-white to-gold-light relative">
        <div className="salon-container">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={historyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-salon-gray border-b-2 border-gold-dark pb-1 uppercase tracking-wider text-sm font-medium mb-4">
                Notre Héritage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black mb-4">
                L'Art de la Coiffure
              </h2>
              <div className="h-1 w-20 bg-gold-dark rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-salon-gray max-w-2xl mx-auto">
                Une tradition d'excellence et de raffinement depuis 1980
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="relative z-10">
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold-dark rounded-xl"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src="/about.jpg?height=600&width=600"
                      alt="Salon de Paris - Excellence depuis 1980"
                      width={600}
                      height={600}
                      className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-salon-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gold-dark">
                  <h3 className="text-2xl font-heading font-bold text-salon-black mb-4">Un Héritage de Prestige</h3>
                  <p className="text-salon-gray text-lg mb-6">
                    Le Salon de Paris incarne l'élégance et le raffinement de la coiffure française au cœur de
                    Marrakech. Notre approche allie techniques traditionnelles et innovations contemporaines pour créer
                    des styles qui subliment votre beauté naturelle.
                  </p>
                  <p className="text-salon-gray text-lg">
                    Chaque visite au Salon de Paris est une expérience sensorielle complète, où expertise technique et
                    service personnalisé se rencontrent dans un cadre luxueux et apaisant.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <motion.div
                    className="bg-gold p-3 md:p-6 rounded-xl shadow-md text-salon-gray hover:text-white"
                    whileHover={{ y: -10, backgroundColor: "black" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xl md:text-3xl font-heading font-bold mb-1 md:mb-2">40+</div>
                    <p className="text-xs md:text-base">Années d'excellence</p>
                  </motion.div>
                  <motion.div
                    className="bg-gold p-3 md:p-6 rounded-xl shadow-md text-salon-gray hover:text-white"
                    whileHover={{ y: -10, backgroundColor: "black"}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xl md:text-3xl font-heading font-bold mb-1 md:mb-2">8</div>
                    <p className="text-xs md:text-base">Artistes coiffeurs</p>
                  </motion.div>
                  <motion.div
                    className="bg-gold p-3 md:p-6 rounded-xl shadow-md text-salon-gray hover:text-white"
                    whileHover={{ y: -10, backgroundColor: "black" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xl md:text-3xl font-heading font-bold mb-1 md:mb-2">∞</div>
                    <p className="text-xs md:text-base">Possibilités créatives</p>
                  </motion.div>
                </div>

                <div>
                  <AnimatedButton
                    href="/about"
                    variant="dark"
                    animation="shimmer"
                    icon={<ArrowRight className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Notre Histoire
                  </AnimatedButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Principes - Redesigned */}
      <section ref={principlesRef} className="py-28 bg-white relative">
        <div className="salon-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-salon-gray border-b-2 border-gold-dark pb-1 uppercase tracking-wider text-sm font-medium mb-4">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black mb-4">
              Nos Principes
            </h2>
            <div className="h-1 w-20 bg-gold-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray max-w-2xl mx-auto">
              Les valeurs qui guident notre travail au quotidien pour vous offrir une expérience exceptionnelle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: "url('/IMG-20250320-WA0009.jpg?height=400&width=300&text=Principe')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-salon-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <div className="relative z-10 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Scissors className="h-6 w-6 text-salon-black" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">L'amour du métier</h3>
                <p className="text-white/80 text-sm font-bold leading-relaxed">
                  Chaque coupe, chaque couleur, chaque coiffure est réalisée avec passion et précision.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: "url('/IMG-20250321-WA0009.jpg?height=400&width=300&text=Principe')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-salon-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <div className="relative z-10 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-salon-black"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">Toujours à la pointe</h3>
                <p className="text-white/80 text-sm font-bold  leading-relaxed">
                  Nous suivons les tendances et innovons pour offrir le meilleur à nos clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: "url('/IMG-20250321-WA0007.jpg?height=400&width=300&text=Principe')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-salon-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <div className="relative z-10 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-salon-black"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">Une écoute attentive</h3>
                <p className="text-white/80 text-sm font-bold  leading-relaxed">
                  Parce que chaque personne est unique, nous prenons le temps de comprendre vos envies.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: "url('/IMG-20250320-WA0027.jpg?height=400&width=300&text=Principe')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-salon-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <div className="relative z-10 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-salon-black"
                  >
                    <path d="M9.731 5.33 11.5 1.66c.293-.727 1.33-.727 1.624 0l1.77 3.67c.083.21.26.371.48.437l3.96 1.19c.753.23 1.052 1.2.556 1.78L16.798 12l3.087 3.263c.496.58.197 1.55-.556 1.78l-3.96 1.19c-.22.066-.397.227-.48.437l-1.77 3.67c-.293.727-1.33.727-1.624 0l-1.77-3.67c-.083-.21-.26-.371-.48-.437Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">L'élégance au naturel</h3>
                <p className="text-white/80 text-sm font-bold  leading-relaxed">
                  Un style raffiné, une ambiance chaleureuse, et une expérience haut de gamme.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: "url('/IMG-20250320-WA0023.jpg?height=400&width=300&text=Principe')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0 transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-salon-black transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              <div className="relative z-10 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-salon-black"
                  >
                    <path d="M12 2v20" />
                    <path d="M2 5h20" />
                    <path d="M3 2h18" />
                    <path d="M7 14a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-white">Un héritage vivant</h3>
                <p className="text-white/80 text-sm font-bold  leading-relaxed">
                  Fondé par Si Ahmed, aujourd'hui porté par Nada, le salon perpétue une tradition de qualité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section ref={blogRef} className="py-24 bg-gold-light relative">
        <div className="salon-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-salon-gray border-b-2 border-gold-dark pb-1 uppercase tracking-wider text-sm font-medium mb-4">
              Conseils & Astuces
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black mb-4">
              Notre Blog
            </h2>
            <div className="h-1 w-20 bg-gold-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray max-w-2xl mx-auto">
              Découvrez nos derniers articles pour prendre soin de vos cheveux et rester à la pointe des tendances.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={blogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href="/blog/elegance-intemporelle" className="block group h-full">
                <article className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-gold/30 hover:border-gold/70 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="/blog1.jpg?height=400&width=600"
                      alt="L'élégance intemporelle du Salon de Paris"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gold-light/20">
                    <div className="flex items-center gap-2 text-sm text-salon-gray mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-03-15">15 Mars 2025</time>
                    </div>
                    <h3 className="text-xl font-heading font-bold transition-colors group-hover:text-salon-gray">
                      L'élégance intemporelle du Salon de Paris
                    </h3>
                    <p className="text-salon-gray mt-2 mb-4 flex-grow">Une histoire d'excellence depuis 1980</p>
                    <div className="inline-flex items-center text-salon-black font-medium group">
                      Lire plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={blogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Link href="/blog/chic-parisien" className="block group h-full">
                <article className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-gold/30 hover:border-gold/70 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="/blog2.jpg?height=400&width=600"
                      alt="Chic parisien"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gold-light/20">
                    <div className="flex items-center gap-2 text-sm text-salon-gray mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-03-10">10 Mars 2025</time>
                    </div>
                    <h3 className="text-xl font-heading font-bold transition-colors group-hover:text-salon-gray">
                      Chic parisien
                    </h3>
                    <p className="text-salon-gray mt-2 mb-4 flex-grow">
                      Les coiffures intemporelles qui ne se démodent jamais
                    </p>
                    <div className="inline-flex items-center text-salon-black font-medium group">
                      Lire plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={blogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Link href="/blog/soins-capillaires" className="block group h-full">
                <article className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-gold/30 hover:border-gold/70 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="/blog3.webp?height=400&width=600"
                      alt="Le secret des cheveux sublimes"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-gold-light/20">
                    <div className="flex items-center gap-2 text-sm text-salon-gray mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime="2025-03-05">5 Mars 2025</time>
                    </div>
                    <h3 className="text-xl font-heading font-bold transition-colors group-hover:text-salon-gray">
                      Le secret des cheveux sublimes
                    </h3>
                    <p className="text-salon-gray mt-2 mb-4 flex-grow">Nos soins capillaires exclusifs</p>
                    <div className="inline-flex items-center text-salon-black font-medium group">
                      Lire plus
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AnimatedButton href="/blog" animation="pulse" className="shadow-lg">
              Voir tous les articles
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gold-dark/30 blur-3xl"></div>
        <div className="absolute top-[20%] left-[-100px] w-[200px] h-[200px] rounded-full bg-gold-dark/30 blur-3xl"></div>
      </section>

      {/* Map Section (replacing CTA) - Changed background to match other sections */}
      <section ref={mapRef} className="py-24 bg-white relative overflow-hidden">
        <div className="salon-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-salon-black mb-4">
              Notre Emplacement
            </h2>
            <div className="h-1 w-20 bg-gold-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray max-w-2xl mx-auto">Venez nous rendre visite au cœur de Marrakech</p>
          </motion.div>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer">
              <Link
                href="https://www.google.com/maps/place/Salon+Paris+beauty+show/@31.6322143,-8.0075798,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0xdafee8a486b1d37:0x7bfd841a081f0ceb!2sJXJW%2BV2J,+Rue+Ibn+Atya,+Marrakesh+40000!2m2!1d-8.0049978!2d31.6322373!3m5!1s0xdafee8a486b1d37:0x7bfd841a081f0ceb!8m2!3d31.6322143!4d-8.0049995!16s%2Fg%2F11cnr_xz12?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9661932707!2d-8.00795!3d31.6294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8a486b1d37:0x7bfd841a081f0ceb!2sSalon%20Paris%20beauty%20show!5e0!3m2!1sen!2sus!4v1647427822764!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Carte du Salon de Paris"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-salon-black/0 transition-colors duration-300 group-hover:bg-salon-black/10"></div>
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg z-10">
                  <p className="font-medium text-salon-black text-sm">Salon Paris beauty show</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-500">
                      <span>★★★★</span>
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-xs text-salon-gray ml-1">(103)</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-salon-black flex items-center">
                    Voir sur Google Maps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedButton
              href="+21252442273"
              tel={true}
              variant="dark"
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

        {/* Decorative elements */}
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gold-dark/30 blur-3xl"></div>
      </section>

      <Footer />
    </div>
  )
}

