import type React from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SILIC.ONE - Brand Audit & Strategic Positioning",
  description: "Luxury tech brand audit and strategic positioning presentation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[#fefbf3] text-[#2C2C2C] antialiased">{children}</body>
    </html>
  )
}
