"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, ChevronLeft, Globe, ChevronDown, CheckCircle, Sun, Moon, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Sidebar from "./sidebar"

import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"

interface PortfolioLayoutProps {
  children: React.ReactNode
}

const languages = [
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "jp", name: "日本語", flag: "🇯🇵" },
]

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const t = useTranslations("Sidebar")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Get active tab from current pathname, ignoring the locale prefix
  const getActiveTab = () => {
    const segments = pathname.split('/')
    const tab = segments[2] || "overview"
    return tab
  }

  const [activeTab, setActiveTab] = useState(getActiveTab())

  // Handle tab changes and navigation
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab)
    router.push(`/${locale}/${tab}`)
  }

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setSidebarExpanded(true)
      }
    }

    checkMobile()
    setMounted(true)
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTab())
  }, [pathname])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <motion.div
        initial={false}
        animate={{
          marginLeft: isMobile ? 0 : sidebarExpanded ? 320 : 80,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="min-h-screen"
      >
        <div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 px-3 sm:px-6 py-2 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Sidebar Toggle Button */}
              <button
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 rounded-md dark:border-gray-600 dark:hover:bg-gray-700"
                title={sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  <motion.div
                    animate={{ 
                      rotate: sidebarExpanded ? 0 : 0,
                      opacity: isMobile && sidebarExpanded ? 0 : 1
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {isMobile ? <Menu className="w-4 h-4" /> : <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${sidebarExpanded ? "" : "rotate-180"}`} />}
                  </motion.div>
                  {isMobile && (
                    <motion.div
                      animate={{ opacity: sidebarExpanded ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              </button>

              <div className="min-w-0 flex-1">
                <h2 className="text-sm sm:text-2xl font-bold text-gray-900 dark:text-white capitalize truncate">
                  {t(activeTab)}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden lg:block">
                  {activeTab === "overview" && t("page_subtitles.overview")}
                  {activeTab === "work" && t("page_subtitles.work")}
                  {activeTab === "education" && t("page_subtitles.education")}
                  {activeTab === "blog" && t("page_subtitles.blog")}
                  {activeTab === "contact" && t("page_subtitles.contact")}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:border-gray-600 dark:hover:bg-gray-700 bg-transparent h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm"
                  >
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
                    <span className="hidden xs:inline">
                      {languages.find((lang) => lang.code === locale)?.flag}
                    </span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="dark:hover:bg-gray-700"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                      {locale === lang.code && <CheckCircle className="w-4 h-4 ml-auto text-blue-600" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="dark:border-gray-600 dark:hover:bg-gray-700 h-8 w-8 sm:h-9 sm:w-9 p-0"
              >
                {mounted && (resolvedTheme === "dark" ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />)}
                {!mounted && <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0" />}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://lnks.uz/I'mMasharipov")}
                className="dark:border-gray-600 dark:hover:bg-gray-700 hidden md:flex h-9 text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>{t("contact_btn")}</span>
              </Button>
              <Button
                size="sm"
                onClick={() => window.open("/cv.pdf")}
                className="h-8 sm:h-9 px-2.5 sm:px-4 text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden xs:inline">{t("download_cv")}</span>
                <span className="xs:hidden">CV</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 max-w-7xl mx-auto">{children}</div>
      </motion.div>
    </div>
  )
}
