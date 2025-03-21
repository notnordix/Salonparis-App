"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts } from "./blogPosts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  // For animated sections
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Article non trouvé</h1>
        <Link href="/blog">
          <Button variant="link">Retour au blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-32">
        <article className="salon-container max-w-4xl mx-auto py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-salon-gray hover:text-salon-black mb-8 bg-cream px-4 py-2 rounded-full transition-all hover:bg-cream-dark"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
          </motion.div>

          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm text-salon-gray bg-cream-light px-4 py-2 rounded-full inline-block">
              <Calendar className="h-4 w-4" />
              <time dateTime="2023-01-01">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-salon-black">{post.title}</h1>
            <p className="text-xl text-salon-gray">{post.subtitle}</p>
          </motion.div>

          <motion.div
            className="relative aspect-video mb-12 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-salon-black/20 to-transparent"></div>
          </motion.div>

          <motion.div
            ref={contentRef}
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-salon-black prose-p:text-salon-gray prose-strong:text-salon-black prose-li:text-salon-gray prose-headings:font-bold rounded-xl bg-white p-8 shadow-sm border border-cream/30"
            dangerouslySetInnerHTML={{ __html: post.content }}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            ref={ctaRef}
            className="mt-16 pt-8 border-t border-cream"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 bg-cream rounded-xl shadow-inner">
              <h3 className="text-2xl font-heading font-bold mb-4 text-salon-black">Vous avez aimé cet article ?</h3>
              <p className="text-salon-gray mb-6">
                Contactez-nous pour prendre rendez-vous et bénéficier de notre expertise.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="tel:+21252442273">
                  <Button className="btn-primary rounded-full shadow-md">
                    <Phone className="mr-2 h-4 w-4" />
                    Réserver un rendez-vous
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

