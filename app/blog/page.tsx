"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "elegance-intemporelle",
      title: "L'élégance intemporelle du Salon de Paris",
      subtitle: "Une histoire d'excellence depuis 1980",
      excerpt:
        "Depuis plus de quatre décennies, Le Salon de Paris s'est imposé comme une référence incontournable dans l'univers de la coiffure de prestige.",
      date: "15 Mars 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "chic-parisien",
      title: "Chic parisien",
      subtitle: "Les coiffures intemporelles qui ne se démodent jamais",
      excerpt:
        "La coiffure parisienne incarne l'élégance naturelle et la simplicité sophistiquée dans toute sa splendeur.",
      date: "10 Mars 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "soins-capillaires",
      title: "Le secret des cheveux sublimes",
      subtitle: "Nos soins capillaires exclusifs",
      excerpt: "Une belle coiffure s'épanouit sur un terrain fertile : des cheveux en pleine santé.",
      date: "5 Mars 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "coiffure-mariee",
      title: "Coiffure de mariée",
      subtitle: "Le guide ultime pour être sublime le jour J",
      excerpt:
        "Le jour de votre mariage représente l'apogée de votre mise en beauté, et votre coiffure doit être aussi resplendissante que votre tenue.",
      date: "28 Février 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "massage-cuir-chevelu",
      title: "Les bienfaits du massage du cuir chevelu",
      subtitle: "Le secret pour des cheveux forts et en bonne santé",
      excerpt:
        "Le massage du cuir chevelu est une pratique ancestrale trop souvent négligée, pourtant fondamentale pour la vitalité capillaire.",
      date: "20 Février 2025",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // For animated sections
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  const postsRef = useRef<HTMLDivElement>(null)
  const postsInView = useInView(postsRef, { once: true, amount: 0.1 })

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
              Conseils & Astuces
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-salon-black mb-4">
              Notre Blog
            </h1>
            <div className="h-1 w-20 bg-cream-dark rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-salon-gray">
              Découvrez nos conseils et astuces pour prendre soin de vos cheveux et rester à la pointe des tendances.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-cream-dark/30 blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-cream-dark/30 blur-3xl"></div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div ref={postsRef} className="salon-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <article className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-cream/30 hover:border-cream/70 transition-all duration-300">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-salon-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-cream-light/20">
                      <div className="flex items-center gap-2 text-sm text-salon-gray mb-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime="2023-01-01">{post.date}</time>
                      </div>
                      <h3 className="text-xl font-heading font-bold transition-colors group-hover:text-salon-gray">
                        {post.title}
                      </h3>
                      <p className="text-salon-gray mt-1 font-medium">{post.subtitle}</p>
                      <p className="text-salon-gray mt-3 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="inline-flex items-center text-salon-black font-medium group">
                        Lire plus
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

