import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider"

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

import { notFound } from "next/navigation"

const locales = ["uz", "ru", "en", "jp"]

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound()
  }

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    messages = (await import(`../../messages/uz.json`)).default
  }

  return (
    <html lang={locale}>
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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
