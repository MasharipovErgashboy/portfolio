"use client"

import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useLocale } from "next-intl"

export default function HomePage() {
  const router = useRouter()
  const locale = useLocale()

  useEffect(() => {
    router.push(`/${locale}/overview`)
  }, [router, locale])

  return (
    <PortfolioLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    </PortfolioLayout>
  )
}
