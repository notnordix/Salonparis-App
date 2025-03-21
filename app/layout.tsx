import type React from "react"
import "./globals.css"
import { Montserrat, Raleway, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingCallButton from "@/components/floating-call-button"
import type { Metadata } from "next"

// Font optimization with display swap
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["300", "400", "700"],
})

// Improved metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Le Salon de Paris - Coiffure d'Exception à Marrakech",
    template: "%s | Le Salon de Paris Marrakech",
  },
  description:
    "Salon de coiffure et beauté d'exception à Marrakech depuis 1980. Expertise française, élégance intemporelle et service personnalisé.",
  keywords: ["salon de coiffure", "coiffeur Marrakech", "salon de beauté", "coiffure Marrakech", "Le Salon de Paris"],
  authors: [{ name: "Le Salon de Paris" }],
  creator: "Le Salon de Paris",
  publisher: "Le Salon de Paris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.salondeparis-marrakech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Le Salon de Paris - Coiffure d'Exception à Marrakech",
    description:
      "Salon de coiffure et beauté d'exception à Marrakech depuis 1980. Expertise française, élégance intemporelle et service personnalisé.",
    url: "https://www.salondeparis-marrakech.com",
    siteName: "Le Salon de Paris",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Salon de Paris Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Salon de Paris - Coiffure d'Exception à Marrakech",
    description:
      "Salon de coiffure et beauté d'exception à Marrakech depuis 1980. Expertise française, élégance intemporelle et service personnalisé.",
    images: ["/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${raleway.variable} ${lato.variable} light`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Prevent automatic translation */}
        <meta name="google" content="notranslate" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

