// Schema.org structured data for the salon
export const salonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Le Salon de Paris",
  image: "https://www.salondeparis-marrakech.com/salondeparis-logo.png",
  logo: "https://www.salondeparis-marrakech.com/salondeparis-logo.png",
  "@id": "https://www.salondeparis-marrakech.com",
  url: "https://www.salondeparis-marrakech.com",
  telephone: "+21252442273",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue Ibn Atya",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-tensift-al Haouz",
    postalCode: "40000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6294,
    longitude: -8.00795,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/salondeparis.marrakech/"],
  description:
    "Salon de coiffure et beauté d'exception à Marrakech depuis 1980. Expertise française, élégance intemporelle et service personnalisé.",
  foundingDate: "1980",
  founder: {
    "@type": "Person",
    name: "Si Ahmed",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de coiffure",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Coupe de cheveux",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Coloration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soins capillaires",
        },
      },
    ],
  },
}

// Schema for blog posts
export const createBlogPostSchema = (post: {
  title: string
  description: string
  slug: string
  datePublished: string
  image: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: "Le Salon de Paris",
    },
    publisher: {
      "@type": "Organization",
      name: "Le Salon de Paris",
      logo: {
        "@type": "ImageObject",
        url: "https://www.salondeparis-marrakech.com/salondeparis-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.salondeparis-marrakech.com/blog/${post.slug}`,
    },
  }
}

