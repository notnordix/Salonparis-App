import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.salondeparis-marrakech.com"

  // Blog posts data
  const blogPosts = [
    { slug: "elegance-intemporelle", lastModified: new Date() },
    { slug: "chic-parisien", lastModified: new Date() },
    { slug: "soins-capillaires", lastModified: new Date() },
    { slug: "coiffure-mariee", lastModified: new Date() },
    { slug: "massage-cuir-chevelu", lastModified: new Date() },
  ]

  // Main pages
  const routes = ["", "/about", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}

