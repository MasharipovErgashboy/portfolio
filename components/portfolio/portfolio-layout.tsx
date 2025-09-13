"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ChevronLeft, Globe, ChevronDown, CheckCircle, Sun, Moon, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Sidebar from "./sidebar"

interface PortfolioLayoutProps {
  children: React.ReactNode
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
]

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const router = useRouter()
  const pathname = usePathname()

  // Get active tab from current pathname
  const getActiveTab = () => {
    if (pathname === "/" || pathname === "/overview") return "overview"
    if (pathname === "/work") return "work"
    if (pathname === "/education") return "education"
    if (pathname === "/blog") return "blog"
    if (pathname === "/contact") return "contact"
    return "overview"
  }

  const [activeTab, setActiveTab] = useState(getActiveTab())

  // Handle tab changes and navigation
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab)
    router.push(tab === "overview" ? "/overview" : `/${tab}`)
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
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTab())
  }, [pathname])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setSidebarExpanded(!sidebarExpanded)}
      >
        {sidebarExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

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
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Sidebar Toggle Button */}
              <button
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9 rounded-md dark:border-gray-600 dark:hover:bg-gray-700"
                title={sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
              >
                <motion.div animate={{ rotate: sidebarExpanded ? 0 : 180 }} transition={{ duration: 0.3 }}>
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
              </button>

              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-2xl font-bold text-gray-900 dark:text-white capitalize truncate">
                  {activeTab}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  {activeTab === "overview" && "Personal information and skills overview"}
                  {activeTab === "work" && "Portfolio of projects and achievements"}
                  {activeTab === "education" && "Academic background and certifications"}
                  {activeTab === "blog" && "Latest thoughts and insights"}
                  {activeTab === "contact" && "Get in touch with me"}
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
                    className="dark:border-gray-600 dark:hover:bg-gray-700 bg-transparent h-7 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm"
                  >
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                    <span className="hidden sm:inline">
                      {languages.find((lang) => lang.code === currentLanguage)?.flag}
                    </span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 sm:ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className="dark:hover:bg-gray-700"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                      {currentLanguage === lang.code && <CheckCircle className="w-4 h-4 ml-auto text-blue-600" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Dark Mode Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="dark:border-gray-600 dark:hover:bg-gray-700 h-7 w-7 sm:h-9 sm:w-9 p-0"
              >
                {darkMode ? <Sun className="w-3 h-3 sm:w-4 sm:h-4" /> : <Moon className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://lnks.uz/I'mMasharipov")}
                className="dark:border-gray-600 dark:hover:bg-gray-700 hidden sm:flex h-7 sm:h-9 text-xs sm:text-sm"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
              <Button
                size="sm"
                onClick={() => window.open("/cv.pdf")}
                className="h-7 sm:h-9 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">CV</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6">{children}</div>
      </motion.div>
    </div>
  )
}
