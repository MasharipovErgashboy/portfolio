import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ergashboy Masharipov",
  description: "Full Stack Developer & UI/UX Designer",
  icons: {
    icon: "/favicon.png", // public/favicon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO: Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ergashboy.uz" />
        <meta property="og:title" content="Ergashboy Masharipov — Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer | Node.js, React, UI/UX & More" />


       

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ergashboy Masharipov",
            "url": "https://ergashboy.uz",
            "jobTitle": "Full Stack Developer",
          })
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
