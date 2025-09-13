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
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
  const tabs: Tab[] = [
    { id: "overview", label: "Overview", icon: User, color: "text-blue-600" },
    { id: "work", label: "Work", icon: Briefcase, color: "text-purple-600" },
    { id: "education", label: "Education", icon: GraduationCap, color: "text-green-600" },
    { id: "blog", label: "Blog", icon: BookOpen, color: "text-orange-600" },
    { id: "contact", label: "Contact", icon: Mail, color: "text-red-600" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && sidebarExpanded && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarExpanded(false)} />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: sidebarExpanded ? (isMobile ? 280 : 320) : isMobile ? 0 : 80,
          x: isMobile && !sidebarExpanded ? -280 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-2xl z-40 overflow-y-auto border-r border-gray-200 dark:border-gray-700"
      >
        <div className="p-3 sm:p-4">
          {/* Profile Section - Expanded */}
          {sidebarExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center mb-4 sm:mb-8 mt-2 sm:mt-4"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white overflow-hidden">
                  <img
                    src="/photo_2024-12-27_18-18-25.jpg"
                    alt="User"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <h1 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white">Masharipov Ergashboy</h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">Full Stack Developer</p>
              <Badge variant="outline" className="text-xs">
                Multi-University Student
              </Badge>
            </motion.div>
          )}

          {/* Profile Section - Collapsed */}
          {!sidebarExpanded && !isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center mb-8 mt-4"
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-lg text-white shadow-lg">
                👨‍💻
              </div>
            </motion.div>
          )}

          {/* Navigation Menu */}
          <div className="py-2 sm:py-4 overflow-y-auto">
            <ul className="space-y-1 sm:space-y-2 font-medium">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id)
                      if (isMobile) setSidebarExpanded(false)
                    }}
                    className={`w-full flex items-center ${
                      sidebarExpanded ? "justify-start" : "justify-center"
                    } p-2 sm:p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors ${
                      activeTab === tab.id ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""
                    }`}
                    title={!sidebarExpanded ? tab.label : ""}
                  >
                    <tab.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                        activeTab === tab.id ? tab.color : ""
                      } ${sidebarExpanded ? "mr-2 sm:mr-3" : ""}`}
                    />
                    {sidebarExpanded && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs sm:text-base"
                      >
                        {tab.label}
                      </motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Info - Expanded Only */}
            {sidebarExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-gray-200 dark:border-gray-600"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-4">
                  Contact
                </h3>
                <div className="space-y-1 sm:space-y-3">
                  <div className="flex items-center p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">ergashmasharipov88@gmail.com</span>
                  </div>
                  <div className="flex items-center p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Phone className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">+998 88 709 50 66</span>
                  </div>
                  <div className="flex items-center p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <MapPin className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Uzbekistan / Tashkent</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: sidebarExpanded ? 0.2 : 0 }}
              className={`${sidebarExpanded ? "mt-3 sm:mt-6" : "mt-6 sm:mt-8"}`}
            >
              {sidebarExpanded && (
                <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-4">
                  Follow
                </h3>
              )}
              <div className={`${sidebarExpanded ? "space-y-1 sm:space-y-2" : "space-y-2 sm:space-y-3"}`}>
                <button
                  onClick={() => window.open("https://github.com/MasharipovErgashboy")}
                  className={`w-full flex items-center ${
                    sidebarExpanded ? "justify-start" : "justify-center"
                  } p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  title={!sidebarExpanded ? "GitHub" : ""}
                >
                  <Github
                    className={`w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-2 sm:mr-3" : ""}`}
                  />
                  {sidebarExpanded && <span className="text-xs sm:text-sm">GitHub</span>}
                </button>
                <button
                  onClick={() => window.open("https://linkedin.com/in/ergashboy-masharipov-0a9820298")}
                  className={`w-full flex items-center ${
                    sidebarExpanded ? "justify-start" : "justify-center"
                  } p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  title={!sidebarExpanded ? "LinkedIn" : ""}
                >
                  <Linkedin
                    className={`w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-2 sm:mr-3" : ""}`}
                  />
                  {sidebarExpanded && <span className="text-xs sm:text-sm">LinkedIn</span>}
                </button>
                <button
                  onClick={() => window.open("https://www.instagram.com/iam_masharipov/")}
                  className={`w-full flex items-center ${
                    sidebarExpanded ? "justify-start" : "justify-center"
                  } p-1 sm:p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                  title={!sidebarExpanded ? "Instagram" : ""}
                >
                  <Instagram
                    className={`w-3 h-3 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-2 sm:mr-3" : ""}`}
                  />
                  {sidebarExpanded && <span className="text-xs sm:text-sm">Instagram</span>}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
