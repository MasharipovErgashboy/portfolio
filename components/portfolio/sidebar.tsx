"use client"
import { motion } from "framer-motion"
import {
  User,
  Briefcase,
  GraduationCap,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

interface Tab {
  id: string
  label: string
  icon: any
  color: string
}

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  sidebarExpanded: boolean
  setSidebarExpanded: (expanded: boolean) => void
  isMobile: boolean
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarExpanded,
  setSidebarExpanded,
  isMobile,
}: SidebarProps) {
  const t = useTranslations("Sidebar")
  const pathname = usePathname()
  const router = useRouter()

  const tabs: Tab[] = [
    { id: "overview", label: t("overview"), icon: User, color: "text-blue-600" },
    { id: "work", label: t("work"), icon: Briefcase, color: "text-purple-600" },
    { id: "education", label: t("education"), icon: GraduationCap, color: "text-green-600" },
    { id: "blog", label: t("blog"), icon: BookOpen, color: "text-orange-600" },
    { id: "contact", label: t("contact"), icon: Mail, color: "text-red-600" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && sidebarExpanded && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarExpanded(false)} />
      )}

      {/* Sidebar */}
      <motion.div
        initial={isMobile ? { x: "-100%" } : false}
        animate={{
          width: isMobile ? "280px" : (sidebarExpanded ? 320 : 80),
          x: isMobile ? (sidebarExpanded ? 0 : "-100%") : 0,
        }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 300,
          mass: 0.8
        }}
        className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-2xl z-40 overflow-y-auto border-r border-gray-200 dark:border-gray-700 md:max-w-[320px]"
      >
        <div className="p-4 sm:p-6 min-h-full flex flex-col">
          {/* Close Button Mobile */}
          {isMobile && sidebarExpanded && (
            <div className="flex justify-end mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSidebarExpanded(false)}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          )}

          {/* Profile Section - Expanded */}
          {sidebarExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-6 sm:mb-10"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 p-1 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-white dark:border-gray-800">
                  <img
                    src="/kkkk.png"
                    alt="Masharipov Ergashboy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Masharipov Ergashboy
              </h1>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 mb-3">{t("role")}</p>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 hover:bg-blue-100 px-3 py-1">
                {t("badge")}
              </Badge>
            </motion.div>
          )}

          {/* Profile Section - Collapsed */}
          {!sidebarExpanded && !isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-10"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xl text-white shadow-lg">
                👨‍💻
              </div>
            </motion.div>
          )}

          {/* Navigation Menu */}
          <nav className="flex-1">
            <ul className="space-y-1 sm:space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id)
                      if (isMobile) setSidebarExpanded(false)
                    }}
                    className={`nav-item w-full flex items-center ${
                      sidebarExpanded ? "justify-start px-4" : "justify-center"
                    } py-3 sm:py-3.5 rounded-xl transition-all duration-200 ${
                      activeTab === tab.id 
                        ? "bg-blue-600 text-white shadow-md active-tab" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <tab.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        activeTab === tab.id ? "text-white" : "text-gray-500 group-hover:text-blue-600"
                      } ${sidebarExpanded ? "mr-3" : ""}`}
                    />
                    {sidebarExpanded && (
                      <span className="font-semibold text-base">
                        {tab.label}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Info - Expanded Only */}
            {sidebarExpanded && (
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-2">
                  {t("contact_title")}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group cursor-pointer">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">ergashmasharipov88@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group cursor-pointer">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">+998 88 709 50 66</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group cursor-pointer">
                    <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Uzbekistan / Tashkent</span>
                  </div>
                </div>
              </div>
            )}

            {/* Social Links */}
            {sidebarExpanded && (
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-2">
                  {t("follow_title")}
                </h3>
                <div className="flex items-center gap-2 px-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open("https://github.com/MasharipovErgashboy")}
                    className="w-10 h-10 rounded-xl border-gray-200 dark:border-gray-700 hover:text-blue-600 transition-all shadow-sm"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open("https://linkedin.com/in/ergashboy-masharipov-0a9820298")}
                    className="w-10 h-10 rounded-xl border-gray-200 dark:border-gray-700 hover:text-blue-600 transition-all shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open("https://www.instagram.com/iam_masharipov/")}
                    className="w-10 h-10 rounded-xl border-gray-200 dark:border-gray-700 hover:text-blue-600 transition-all shadow-sm"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </motion.div>
    </>
  )
}
