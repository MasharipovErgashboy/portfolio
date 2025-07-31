"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Briefcase, GraduationCap, BookOpen, Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink, Download, Award, CheckCircle, Calendar, Clock, Menu, X, Star, Code, Globe, ShoppingCart, Eye, Filter, BadgeIcon as Certificate, Sun, Moon, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [skillFilter, setSkillFilter] = useState("all")
  const [projectFilter, setProjectFilter] = useState("all")
  const [blogFilter, setBlogFilter] = useState("all")
  const [currentLanguage, setCurrentLanguage] = useState("uz")
  const [darkMode, setDarkMode] = useState(false)

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const languages = [
    { code: "uz", name: "O'zbekcha", flag: "🇺🇿" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: User, color: "text-blue-600" },
    { id: "work", label: "Work", icon: Briefcase, color: "text-purple-600" },
    { id: "education", label: "Education", icon: GraduationCap, color: "text-green-600" },
    { id: "blog", label: "Blog", icon: BookOpen, color: "text-orange-600" },
    { id: "contact", label: "Contact", icon: Mail, color: "text-red-600" },
  ]

  const experiences = [
    {
      company: "SU Academy",
      position: "Founder & Full Stack Developer",
      period: "2024 - 2025",
      logo: "/placeholder.svg?height=32&width=32&text=SU",
      description: "Language learning platform for Uzbek-Japanese speakers",
    },
    {
      company: "Freelance",
      position: "UI/UX Designer & Developer",
      period: "2024 - 2025",
      logo: "/placeholder.svg?height=32&width=32&text=FL",
      description: "Mobile and web application design projects",
    },
    {
      company: "Japan Digital University",
      position: "Full Stack Developer",
      period: "2023 - 2025",
      logo: "/jdu.png",
      description: "React.js and modern web development",
    },
  ]

const skills = [
    // Frontend
    { name: "React.js", level: 95, category: "frontend", iconurl: "/react.png" },
    { name: "Next.js", level: 90, category: "frontend", icon: "▲" },
    { name: "Vue.js", level: 85, category: "frontend", icon: "💚" },
    { name: "TypeScript", level: 88, category: "frontend", icon: "📘" },
    { name: "JavaScript", level: 92, category: "frontend", icon: "🟨" },
    { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon: "🎨" },

    // Backend
    { name: "Node.js", level: 90, category: "backend", icon: "🟢" },
    { name: "Laravel", level: 82, category: "backend", icon: "🔴" },
    { name: "PHP", level: 80, category: "backend", icon: "🐘" },
    { name: "Python", level: 85, category: "backend", icon: "🐍" },
    { name: "Django", level: 78, category: "backend", icon: "🎯" },

    // Database
    { name: "MySQL", level: 85, category: "database", icon: "🗄️" },
    { name: "MongoDB", level: 80, category: "database", icon: "🍃" },
    { name: "PostgreSQL", level: 75, category: "database", icon: "🐘" },

    // Design
    { name: "Figma", level: 92, category: "design", icon: "🎨" },
    { name: "Adobe XD", level: 85, category: "design", icon: "🎭" },
    { name: "UI/UX Design", level: 88, category: "design", icon: "✨" },
    { name: "Prototyping", level: 90, category: "design", icon: "🔧" },

    // Mobile
    { name: "React Native", level: 80, category: "mobile", icon: "📱" },
    { name: "Flutter", level: 70, category: "mobile", icon: "🦋" },

    // Languages
    { name: "Japanese", level: 88, category: "language", icon: "🇯🇵" },
    { name: "English", level: 85, category: "language", icon: "🇺🇸" },
    { name: "Russian", level: 90, category: "language", icon: "🇷🇺" },
    { name: "Turkish", level: 75, category: "language", icon: "🇹🇷" },

    // AI/ML & Tools
    { name: "AI/ML", level: 70, category: "ai", icon: "🤖" },
    { name: "Git/GitHub", level: 90, category: "tools", icon: "🔗" },
    { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  ]



  const projects = [
    {
      title: "SU Academy Web Platform",
      description: "Comprehensive language learning platform for Uzbek-Japanese speakers with AI integration",
      image: "/SU_Academy_Web_design.png",
      category: "UI/UX Design",
      status: "Completed",
      year: "2024",
      features: ["25 Topic Modules", "AI Chat Integration", "E-book Access"],
      tech: ["Figma", "UI/UX", "System Design"],
      type: "Platform Design",
    },
    {
      title: "SU Academy Mobile App",
      description: "Mobile companion app for the SU Academy platform with offline capabilities",
      image: "/su_academy_mobile.jpg",
      category: "UI/UX Design",
      status: "Completed",
      year: "2024",
      features: ["Offline Learning", "Progress Tracking", "Native Experience"],
      tech: ["Figma", "Mobile UI", "UX Research"],
      type: "Mobile Design",
    },
    {
      title: "SU Academy Development",
      description: "Full-stack development of the language learning platform",
      image: "/su_academy_ful.jpg",
      category: "Web Development",
      status: "In Progress",
      year: "2024",
      features: ["Real-time Chat", "AI Tutoring", "Progress Analytics"],
      tech: ["React.js", "Node.js", "AI Integration"],
      type: "Full Stack",
    },
    {
      title: "Maydon.uz",
      description: "Online football field booking platform with complete admin panel",
      image: "/Maydon_uz.jpg",
      category: "UI/UX Design",
      status: "Completed",
      year: "2025",
      features: ["Online Booking", "Payment Integration", "Admin Dashboard"],
      tech: ["Figma", "System Design", "Admin Panel"],
      type: "Platform Design",
    },
    {
      title: "EcoSoil",
      description: "AI-powered agricultural diagnosis platform for crops and soil analysis",
      image: "/EcoSoil.jpg",
      category: "UI/UX Design",
      status: "Completed",
      year: "2023",
      features: ["AI Diagnosis", "Crop Analysis", "Soil Testing"],
      tech: ["Figma", "AI/ML Design", "Admin Panel"],
      type: "AI Platform",
    },
    {
      title: "TAS Capital Partners",
      description: "Corporate website UI/UX design for Uzbekistan branch",
      image: "/TAS.png",
      category: "UI/UX Design",
      status: "Completed",
      year: "2023",
      features: ["Corporate Identity", "Responsive Design", "Multi-language"],
      tech: ["Figma", "Corporate Design", "UI/UX"],
      type: "Corporate Website",
    },
    {
      title: "Japanese Learning Book",
      description: "Complete design and layout for 'Bir Kunda Bir Suhbat' book",
      image: "/kitob.png",
      category: "Design",
      status: "Published",
      year: "2023",
      features: ["Professional Layout", "Bilingual Design", "Print Ready"],
      tech: ["Book Design", "Layout", "Typography"],
      type: "Book Design",
    },
  ]

const universities = [
  {
    name: "Japan Digital University",
    degree: "IT Engineering",
    period: "2022-2027",
    status: "Active",
    image: "/jdu.png",
    website: "https://jdu.uz", // ✅ YANGI
    country: "🇯🇵 Japan",
    description:
      "Specializing in modern software engineering and digital technologies with focus on AI and machine learning applications.",
    gpa: "3.8/4.0",
    achievements: ["Dean's List", "Best Project Award", "AI Research"],
  },
  {
    name: "Kyoto Tachibana University",
    degree: "Psychology",
    period: "2023-2027",
    status: "Active",
    image: "/kyoto.png",
    website: "https://www.tachibana-u.ac.jp/english/", // ✅ YANGI
    country: "🇯🇵 Japan",
    description:
      "Understanding human behavior and cognitive processes with emphasis on cross-cultural psychology and language acquisition.",
    gpa: "3.9/4.0",
    achievements: ["Research Excellence", "Cultural Exchange Program", "Psychology Award"],
  },
  {
    name: "Uzbekistan State World University",
    degree: "Computer Linguistics",
    period: "2023-2027",
    status: "Active",
    image: "/jahon_tillari.png",
    website: "https://www.uzswlu.uz/", // ✅ YANGI
    country: "🇺🇿 Uzbekistan",
    description:
      "Computational linguistics and natural language processing with focus on multilingual systems and AI-powered translation.",
    gpa: "4.9/5.0",
    achievements: ["Top Student", "Linguistics Competition Winner", "Research Publication"],
  },
];



  const courses = [
    {
      title: "Full Stack Development",
      provider: "Amazon",
      platform: "Coursera",
      completed: "2023",
      certificate: "Professional Certificate",
      image: "/amazon1.jpg",
      skills: ["AWS", "Full Stack", "Cloud Computing"],
      certificateUrl: "https://coursera.org/certificate/aws-fullstack",
    },
    {
      title: "Introduction to Backend Development",
      provider: "Meta",
      platform: "Coursera",
      completed: "2023",
      certificate: "Professional Certificate",
      image: "/meta.png",
      skills: ["Backend", "APIs", "Database Design"],
      certificateUrl: "https://coursera.org/certificate/meta-backend",
    },
    {
      title: "International Business",
      provider: "University of London",
      platform: "Coursera",
      completed: "2022",
      certificate: "Specialization",
      image: "/University_of_London.png",
      skills: ["Business Strategy", "Global Markets", "Management"],
      certificateUrl: "https://coursera.org/certificate/uol-business",
    },
    {
      title: "Introduction to Project Management",
      provider: "IBM",
      platform: "Coursera",
      completed: "2022",
      certificate: "Professional Certificate",
      image: "/IBM.png",
      skills: ["Project Management", "Agile", "Leadership"],
      certificateUrl: "https://coursera.org/certificate/ibm-pm",
    },
  ]

  const blogPosts = [
  {
    title: "Release Date of My Book's Audio Edition!",
    excerpt: "‘One Conversation a Day’ is now available in audio format – listen as a study companion!",
    date: "2025-07-23",
    category: "education",
    readTime: "4 min read",
    image: "/book_audio.jpeg",
    content: "The audio edition of my book titled 'One Conversation a Day' is now available. This format makes it convenient to listen while preparing lessons, reviewing, or even on the go. Each topic is presented with its own voice narration.",
  },
  {
    title: "SU Academy Web Platform – Official Launch Date Announced",
    excerpt: "The official web platform will be launched on October 1st, 2025!",
    date: "2025-07-22",
    category: "technology",
    readTime: "3 min read",
    image: "/open.png",
    content: "SU Academy now has a fully functional web platform! The launch event will take place on October 1st. Through this platform, you’ll be able to access textbooks, video lessons, vocabulary resources, and an AI assistant.",
  },
];


  const filteredSkills = skillFilter === "all" ? skills : skills.filter((skill) => skill.category === skillFilter)
  const filteredProjects =
    projectFilter === "all" ? projects : projects.filter((project) => project.category === projectFilter)
  const filteredBlogs = blogFilter === "all" ? blogPosts : blogPosts.filter((post) => post.category === blogFilter)

  const skillCategories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "design", label: "Design" },
    { id: "mobile", label: "Mobile" },
    { id: "language", label: "Language" },
    { id: "ai", label: "AI/ML" },
    { id: "tools", label: "Tools" },
  ]

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "Web Development", label: "Web Development" },
    { id: "Mobile Apps", label: "Mobile Apps" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Design", label: "Design" },
  ]

  const blogCategories = [
    { id: "all", label: "All Posts" },
    { id: "personal", label: "Personal" },
    { id: "education", label: "Education" },
    { id: "technology", label: "Technology" },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{
            width: sidebarExpanded ? 320 : 80,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-2xl z-40 overflow-y-auto border-r border-gray-200 dark:border-gray-700"
        >
          {/* Sidebar Toggle Button */}

          <div className="p-4">
            {/* Profile Section - Expanded */}
            {sidebarExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center mb-8 mt-4"
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


                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Masharipov Ergashboy</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Full Stack Developer</p>
                <Badge variant="outline" className="text-xs">
                  Multi-University Student
                </Badge>
              </motion.div>
            )}

            {/* Profile Section - Collapsed */}
            {!sidebarExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center mb-8 mt-4"
              >
                <div className="relative w-14 h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-md hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden">
                    <img
                      src="/photo_2024-12-27_18-18-25.jpg"
                      alt="User Avatar"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>

              </motion.div>
            )}

            {/* Navigation Menu */}
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center ${
                        sidebarExpanded ? "justify-start" : "justify-center"
                      } p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors ${
                        activeTab === tab.id ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300" : ""
                      }`}
                      title={!sidebarExpanded ? tab.label : ""}
                    >
                      <tab.icon
                        className={`w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ${
                          activeTab === tab.id ? tab.color : ""
                        } ${sidebarExpanded ? "mr-3" : ""}`}
                      />
                      {sidebarExpanded && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
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
                  className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                      <span className="text-sm">ergashmasharipov88@gmail.com</span>
                    </div>
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                      <span className="text-sm">+998 88 709 50 66</span>
                    </div>
                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                      <span className="text-sm">Uzbekistan / Tashkent</span>
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
                className={`${sidebarExpanded ? "mt-6" : "mt-8"}`}
              >
                {sidebarExpanded && (
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                    Follow
                  </h3>
                )}
                <div className={`${sidebarExpanded ? "space-y-2" : "space-y-3"}`}>
                  <button
                    onClick={() => window.open("https://github.com/ergashboy")}
                    className={`w-full flex items-center ${
                      sidebarExpanded ? "justify-start" : "justify-center"
                    } p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    title={!sidebarExpanded ? "GitHub" : ""}
                  >
                    <Github className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-3" : ""}`} />
                    {sidebarExpanded && <span className="text-sm">GitHub</span>}
                  </button>
                  <button
                    onClick={() => window.open("https://linkedin.com/in/ergashboy")}
                    className={`w-full flex items-center ${
                      sidebarExpanded ? "justify-start" : "justify-center"
                    } p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    title={!sidebarExpanded ? "LinkedIn" : ""}
                  >
                    <Linkedin className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-3" : ""}`} />
                    {sidebarExpanded && <span className="text-sm">LinkedIn</span>}
                  </button>
                  <button
                    onClick={() => window.open("https://instagram.com/ergashboy")}
                    className={`w-full flex items-center ${
                      sidebarExpanded ? "justify-start" : "justify-center"
                    } p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    title={!sidebarExpanded ? "Instagram" : ""}
                  >
                    <Instagram className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${sidebarExpanded ? "mr-3" : ""}`} />
                    {sidebarExpanded && <span className="text-sm">Instagram</span>}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={false}
          animate={{
            marginLeft: sidebarExpanded ? 320 : 80,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {/* Top Bar */}
          <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Sidebar Toggle Button */}
                <button
                  onClick={() => setSidebarExpanded(!sidebarExpanded)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-md dark:border-gray-600 dark:hover:bg-gray-700"
                  title={sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                >
                  <motion.div animate={{ rotate: sidebarExpanded ? 0 : 180 }} transition={{ duration: 0.3 }}>
                    <ChevronLeft className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{activeTab}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activeTab === "overview" && "Personal information and skills overview"}
                    {activeTab === "work" && "Portfolio of projects and achievements"}
                    {activeTab === "education" && "Academic background and certifications"}
                    {activeTab === "blog" && "Latest thoughts and insights"}
                    {activeTab === "contact" && "Get in touch with me"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Language Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="dark:border-gray-600 dark:hover:bg-gray-700 bg-transparent"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {languages.find((lang) => lang.code === currentLanguage)?.flag}
                      <ChevronDown className="w-4 h-4 ml-2" />
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
                  className="dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("ergashmasharipov88@gmail.com")}
                  className="dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm" onClick={() => window.open("/cv.pdf")}>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Hero Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-100 text-sm">Book Readers</p>
                            <p className="text-3xl font-bold">500+</p>
                          </div>
                          <BookOpen className="w-8 h-8 text-blue-200" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-100 text-sm">Major Projects</p>
                            <p className="text-3xl font-bold">6+</p>
                          </div>
                          <Code className="w-8 h-8 text-purple-200" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-green-100 text-sm">Universities</p>
                            <p className="text-3xl font-bold">3</p>
                          </div>
                          <GraduationCap className="w-8 h-8 text-green-200" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-orange-100 text-sm">Client Rating</p>
                            <p className="text-3xl font-bold">4.9</p>
                          </div>
                          <Star className="w-8 h-8 text-orange-200" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* About Section */}
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 dark:text-white">
                        <User className="w-5 h-5" />
                        <span>About Me</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Creating innovative digital solutions while pursuing degrees in IT, Psychology, and
                            Linguistics across Japan and Uzbekistan. Author of Japanese learning book with 5000+
                            readers.
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            I specialize in full-stack development, UI/UX design, and creating educational platforms
                            that bridge language barriers and cultural gaps. My work combines technical expertise with
                            deep understanding of user psychology and linguistic principles.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Full Stack Developer</Badge>
                            <Badge variant="secondary">UI/UX Designer</Badge>
                            <Badge variant="secondary">Author</Badge>
                            <Badge variant="secondary">Multi-University Student</Badge>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Current Focus</h4>
                            <p className="text-blue-700 dark:text-blue-400 text-sm">
                              Building AI-powered language learning platforms and studying across multiple disciplines
                            </p>
                          </div>
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Available For</h4>
                            <p className="text-green-700 dark:text-green-400 text-sm">
                              Freelance projects, collaborations, and consulting opportunities
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Professional Experience & Book - Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Professional Experience - Half Width */}
                    <div className="group rounded-2xl bg-white dark:bg-gray-800 px-6 pt-0 shadow dark:shadow-gray-900/20 border dark:border-gray-700">
                      <h3 className="relative z-10 bg-white dark:bg-gray-800 pb-2 pt-6 text-xl font-semibold dark:text-white">
                        Professional Experience
                      </h3>
                      <div className="max-h-[250px] space-y-3 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                        <div className="animate-scroll-y space-y-3 group-hover:[animation-play-state:paused]">
                          {experiences.map((exp, index) => (
                            <div key={index} className="flex flex-col gap-1 md:flex-row md:gap-6">
                              <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400 md:w-20 flex-shrink-0">
                                {exp.period}
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="grid h-7 w-7 shrink-0 place-content-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                  <img
                                    src={exp.logo || "/placeholder.svg"}
                                    alt={exp.company}
                                    className="h-4 w-4 rounded"
                                  />
                                </div>
                                <div>
                                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white">{exp.company}</h6>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">{exp.position}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">
                                    {exp.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Duplicate for seamless scroll */}
                        <div className="animate-scroll-y space-y-3 group-hover:[animation-play-state:paused]">
                          {experiences.map((exp, index) => (
                            <div key={`dup-${index}`} className="flex flex-col gap-1 md:flex-row md:gap-6">
                              <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400 md:w-20 flex-shrink-0">
                                {exp.period}
                              </p>
                              <div className="flex items-center gap-3">
                                <div className="grid h-7 w-7 shrink-0 place-content-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                  <img
                                    src={exp.logo || "/placeholder.svg"}
                                    alt={exp.company}
                                    className="h-4 w-4 rounded"
                                  />
                                </div>
                                <div>
                                  <h6 className="text-sm font-semibold text-gray-900 dark:text-white">{exp.company}</h6>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">{exp.position}</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">
                                    {exp.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* My Personal Book - Half Width */}
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white border-0 overflow-hidden relative shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

                      <div className="relative z-10 p-6">
                        <h3 className="text-xl font-bold mb-4 text-white">My Book</h3>

                        <div className="flex flex-col space-y-4">
                          {/* Book Image and Info */}
                          <div className="flex items-center space-x-4">
                            <div className="w-20 h-28 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center border border-white/30 flex-shrink-0">
                              <img
                                src="/photo_2025-02-01_20-52-03.jpg"
                                alt="Bir Kunda Bir Suhbat"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>

                            <div className="flex-1">
                              <h4 className="text-lg font-bold mb-1">"Bir Kunda Bir Suhbat"</h4>
                              <p className="text-sm text-emerald-100 mb-3">Japanese Conversation Guide</p>

                              {/* Stats */}
                              <div className="grid grid-cols-2 gap-3 text-center">
                                <div>
                                  <div className="text-lg font-bold">500+</div>
                                  <div className="text-xs text-emerald-200">Students</div>
                                </div>
                                <div>
                                  <div className="text-lg font-bold">4.9</div>
                                  <div className="text-xs text-emerald-200">Reyting</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex items-center space-x-2 text-xs"
                              onClick={() => window.open("https://asaxiy.uz", "_blank")}
                            >
                              <ShoppingCart className="w-3 h-3" />
                              <span>Shopping</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/30 text-white hover:bg-white/10 bg-transparent flex items-center space-x-2 text-xs"
                              onClick={() => {
                                alert("Kitobning bir nechta sahifasini online o'qish...")
                              }}
                            >
                              <Eye className="w-3 h-3" />
                              <span>online reading</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Studies - Improved Design */}
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 dark:text-white">
                        <GraduationCap className="w-5 h-5" />
                        <span>Current Studies</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {universities.slice(0, 3).map((uni, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                          >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border-2 hover:border-blue-200 dark:border-gray-600 dark:hover:border-blue-500">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-600 shadow-lg flex-shrink-0">
                                    <img
                                      src={uni.image || "/placeholder.svg"}
                                      alt={uni.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{uni.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{uni.country}</p>
                                    <Badge
                                      variant={uni.status === "Active" ? "default" : "secondary"}
                                      className="text-xs mt-1"
                                    >
                                      {uni.status}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">{uni.degree}</h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{uni.period}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-2 dark:text-white">
                          <Award className="w-5 h-5" />
                          <span>Skills & Technologies</span>
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          {skillCategories.slice(0, 5).map((category) => (
                            <Button
                              key={category.id}
                              variant={skillFilter === category.id ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSkillFilter(category.id)}
                              className="text-xs dark:border-gray-600"
                            >
                              {category.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredSkills.slice(0, 12).map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all dark:bg-gray-700/50"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{skill.icon}</span>
                                <span className="font-medium text-sm dark:text-white">{skill.name}</span>
                              </div>
                              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                      {filteredSkills.length > 12 && (
                        <div className="text-center mt-6">
                          <Button variant="outline" size="sm" className="dark:border-gray-600 bg-transparent">
                            View All Skills ({filteredSkills.length})
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === "work" && (
                <motion.div
                  key="work"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Enhanced Project Filters */}
                  <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Filter className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Project Categories</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {projectCategories.map((category) => (
                          <Button
                            key={category.id}
                            variant={projectFilter === category.id ? "secondary" : "outline"}
                            size="sm"
                            onClick={() => setProjectFilter(category.id)}
                            className={`${
                              projectFilter === category.id
                                ? "bg-white text-purple-600 hover:bg-gray-100"
                                : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                            }`}
                          >
                            {category.label}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">7+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">15+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600">98%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge variant="secondary" className="text-xs">
                                {project.year}
                              </Badge>
                            </div>
                            <div className="absolute top-3 right-3">
                              <Badge
                                variant={project.status === "Completed" ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-1 dark:text-white">{project.title}</h3>
                            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{project.type}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                              {project.description}
                            </p>

                            <div className="mb-4">
                              <h4 className="font-medium text-sm mb-2 dark:text-white">Key Features:</h4>
                              <div className="flex flex-wrap gap-1">
                                {project.features.slice(0, 2).map((feature, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                                {project.features.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{project.features.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <Button size="sm" className="w-full">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
              

                  {/* Professional Courses */}
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Professional Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.map((course, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="h-full hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                              <CardContent className="p-6">
                                <div className="flex items-start space-x-4 mb-4">
                                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center shadow-md">
                                    <img
                                      src={course.image || "/placeholder.svg"}
                                      alt={course.provider}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{course.title}</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{course.provider}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      {course.platform} • {course.completed}
                                    </p>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {course.certificate}
                                  </Badge>
                                </div>

                                <div className="space-y-3 mb-4">
                                  <div>
                                    <h4 className="font-medium text-sm mb-2 dark:text-white">Skills Gained:</h4>
                                    <div className="flex flex-wrap gap-1">
                                      {course.skills.map((skill, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Certificate Earned</span>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full bg-transparent dark:border-gray-600 dark:hover:bg-gray-600"
                                    onClick={() => window.open(course.certificateUrl, "_blank")}
                                  >
                                    <Certificate className="w-4 h-4 mr-2" />
                                    View Certificate
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                   {/* Universities */}
                  <Card className="dark:bg-gray-800 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="dark:text-white">Universities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {universities.map((uni, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card
                              className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 dark:border-gray-600"
                              onClick={() => window.open(uni.website, "_blank")}
                            >
                              <CardContent className="p-6">
                                <div className="flex items-start space-x-4 mb-6">
                                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-600 shadow-lg flex-shrink-0">
                                    <img
                                      src={uni.image || "/placeholder.svg"}
                                      alt={uni.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 text-left">
                                      {uni.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-left">
                                      {uni.country}
                                    </p>
                                    <Badge
                                      variant={uni.status === "Active" ? "default" : "secondary"}
                                      className="text-xs"
                                    >
                                      {uni.status}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="space-y-4 text-left">
                                  <div>
                                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-lg">
                                      {uni.degree}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{uni.period}</p>
                                    <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                                      GPA: {uni.gpa}
                                    </p>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{uni.description}</p>

                                  <div>
                                    <h5 className="font-medium text-sm mb-2 dark:text-white">Achievements:</h5>
                                    <div className="space-y-1">
                                      {uni.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-sm">
                                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:border-gray-600"
                                  >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Visit University
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {activeTab === "blog" && (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Enhanced Blog Filters */}
                  <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Filter className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Blog Categories</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {blogCategories.map((category) => (
                          <Button
                            key={category.id}
                            variant={blogFilter === category.id ? "secondary" : "outline"}
                            size="sm"
                            onClick={() => setBlogFilter(category.id)}
                            className={`${
                              blogFilter === category.id
                                ? "bg-white text-orange-600 hover:bg-gray-100"
                                : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                            }`}
                          >
                            {category.label}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Blog Posts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                          <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge
                                variant={
                                  post.category === "personal"
                                    ? "default"
                                    : post.category === "education"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="text-xs capitalize"
                              >
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-2 line-clamp-2 dark:text-white">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <Button
                              size="sm"
                              className="w-full"
                              onClick={() => {
                                alert(`Opening: ${post.title}\n\n${post.content}`)
                              }}
                            >
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
{activeTab === "contact" && (
  <motion.div
    key="contact"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    {/* Contact Hero */}
    <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0 shadow-xl">
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="w-16 h-16 mx-auto mb-4 text-white/90" />
          <h1 className="text-3xl font-bold mb-2">Let's Work Together</h1>
          <p className="text-red-100 text-lg">
            Ready to bring your ideas to life? I'm here to help you create amazing digital experiences.
          </p>
        </motion.div>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        {/* Personal Info Card */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <User className="w-5 h-5" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-blue-600 dark:text-blue-400">ergashmasharipov88@gmail.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Send me an email anytime</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("mailto:ergashmasharipov88@gmail.com")}
                className="bg-transparent hover:bg-blue-600 hover:text-white dark:border-blue-400"
              >
                Send Email
              </Button>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-green-600 dark:text-green-400">+998 88 709 50 66</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Available 9 AM - 6 PM (GMT+5)</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("tel:+998887095066")}
                className="bg-transparent hover:bg-green-600 hover:text-white dark:border-green-400"
              >
                Call Now
              </Button>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                <p className="text-purple-600 dark:text-purple-400">Tashkent, Uzbekistan</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Currently studying in Japan</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("https://maps.google.com/?q=Tashkent,Uzbekistan")}
                className="bg-transparent hover:bg-purple-600 hover:text-white dark:border-purple-400"
              >
                View Map
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <Globe className="w-5 h-5" />
              <span>Social Media</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <button
                onClick={() => window.open("https://github.com/MasharipovErgashboy")}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white hover:shadow-md transition-all group"
              >
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ergashboy</p>
                </div>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => window.open("https://www.linkedin.com/in/ergashboy-masharipov-0a9820298/")}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ergashboy</p>
                </div>
              </button>

              {/* Instagram */}
              <button
                onClick={() => window.open("https://www.instagram.com/iam_masharipov/")}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-pink-500 hover:shadow-md transition-all group"
              >
                <Instagram className="w-8 h-8 text-pink-600 group-hover:text-pink-700" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Instagram</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ergashboy</p>
                </div>
              </button>

              {/* Telegram */}
              <button
                onClick={() => window.open("https://t.me/Masharipov_Ergashboy")}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  T
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Telegram</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ergashboy</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Availability Status */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Available for Projects</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Currently accepting new freelance opportunities and collaborations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault()
              alert("Message sent successfully! I'll get back to you soon.")
            }}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development Project</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-plus">$10,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Response Info */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Quick Response Guarantee</h3>
                <p className="text-blue-700 dark:text-blue-400 text-sm mb-3">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call or message me directly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    24h Response
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Free Consultation
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    No Obligation Quote
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What services do you offer?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    I specialize in full-stack web development, mobile app development, UI/UX design, and educational platform creation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's your typical project timeline?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 2-3 months.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you work with international clients?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Yes! I work with clients globally and am comfortable with different time zones and communication preferences.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What technologies do you use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    I work with React, Next.js, Node.js, Python, mobile development frameworks, and modern design tools like Figma.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you provide ongoing support?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Yes, I offer maintenance and support packages to keep your projects running smoothly after launch.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How do you handle payments?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    I typically work with 50% upfront and 50% upon completion, with milestone payments for larger projects.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </motion.div>
)}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-y {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-scroll-y {
          animation: scroll-y 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
