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
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:title" content="Ergashboy Masharipov — Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer | Node.js, React, UI/UX & More" />
        <meta property="og:image" content="https://yourdomain.com/profile-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ergashboy Masharipov — Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer | Node.js, React, UI/UX & More" />
        <meta name="twitter:image" content="https://yourdomain.com/profile-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ergashboy Masharipov",
            "url": "https://yourdomain.com",
            "image": "https://yourdomain.com/profile-image.png",
            "jobTitle": "Full Stack Developer",
            "sameAs": [
              "https://linkedin.com/in/yourusername",
              "https://github.com/yourusername"
            ]
          })
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
