import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ergashboy Masharipov",
  description: "Full Stack Developer & UI/UX Designer",
  authors: [{ name: "Ergashboy Masharipov", url: "https://ergashboy.uz" }],
  keywords: ["Ergashboy Masharipov", "Full Stack Developer", "UI/UX Designer"],
  openGraph: {
    title: "Ergashboy Masharipov",
    description: "Full Stack Developer & UI/UX Designer",
    url: "https://ergashboy.uz",
    siteName: "Ergashboy Masharipov",
    images: [
      {
        url: "https://ergashboy.uz/kkkk.png",
        width: 600,
        height: 600,
        alt: "Ergashboy Masharipov",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon qo'shish */}
        <link rel="icon" href="/montenegro.png" type="image/png" sizes="32x32" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ergashboy Masharipov",
              url: "https://ergashboy.uz",
              image: "https://ergashboy.uz/kkkk.png",
              sameAs: [
                "https://github.com/MasharipovErgashboy",
                "https://www.linkedin.com/in/ergashboy-masharipov-0a9820298/",
                "https://www.instagram.com/iam_masharipov/",
              ],
              jobTitle: "Full Stack Developer & UI/UX Designer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
