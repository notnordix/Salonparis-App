import type React from "react"
import "./globals.css"
import { Montserrat, Raleway, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingCallButton from "@/components/floating-call-button"

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

export const metadata = {
  title: "Le Salon de Paris - Marrakech",
  description: "Salon de coiffure et beauté d'exception à Marrakech depuis 1980",
    generator: 'v0.dev'
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
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <FloatingCallButton />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'