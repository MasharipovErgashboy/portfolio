"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, BookOpen, Code, GraduationCap, Star, Award, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"

export default function OverviewPage() {
  const [skillFilter, setSkillFilter] = useState("all")

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
      company: "TAS Capital Partners",
      position: "UI/UX Designer",
      period: "2025(05) - 2025(09)",
      logo: "/placeholder.svg?height=32&width=32&text=TAS",
      description:
        "Qurilish ishlari va uy-joy oldi-sottisi bo'yicha web dizayn strukturasi va interfeys dizayni ustida ishladim.",
    },
  ]

  const skills = [
    // Frontend
   {
    name: "React.js",
    level: 95,
    category: "frontend",
    icon: <img src="/react.png" alt="React.js" className="w-6 h-6" />,
   },
   {
    name: "Next.js",
    level: 90,
    category: "frontend",
    icon: <img src="nextJs.png" alt="Next.js" className="w-6 h-6" />,
   },
   {
    name: "Vue.js",
    level: 85,
    category: "frontend",
    icon: <img src="/Vue.png" alt="Vue.js" className="w-6 h-6" />,
   },
    { name: "TypeScript", level: 88, category: "frontend", icon: <img src="/typescript.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "JavaScript", level: 92, category: "frontend", icon: <img src="/js.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "HTML/CSS", level: 95, category: "frontend", icon: <img src="/html_css.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Tailwind CSS", level: 90, category: "frontend", icon: <img src="/TailwindCSS.png" alt="Vue.js" className="w-6 h-6" /> },

    // Backend
    { name: "Node.js", level: 90, category: "backend", icon: <img src="/nodeJs.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Laravel", level: 82, category: "backend", icon: <img src="/Laravel.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "PHP", level: 80, category: "backend", icon: <img src="/Php.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Python", level: 85, category: "backend", icon: <img src="/python.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Django", level: 78, category: "backend", icon: <img src="/Django.png" alt="Vue.js" className="w-6 h-6" /> },

    // Database
    { name: "MySQL", level: 85, category: "database", icon: <img src="/MySQL.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "MongoDB", level: 80, category: "database", icon: <img src="/mongo_db.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "PostgreSQL", level: 75, category: "database", icon: <img src="/PostgreSQL.png" alt="Vue.js" className="w-6 h-6" /> },

    // Design
    { name: "Figma", level: 92, category: "design", icon: <img src="/figma.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Adobe XD", level: 85, category: "design", icon: <img src="/Adobe_Xd.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "UI/UX Design", level: 88, category: "design", icon: <img src="/ui_ux.png" alt="Vue.js" className="w-6 h-6" /> },
    { name: "Prototyping", level: 90, category: "design", icon: <img src="/Prototyping.png" alt="Vue.js" className="w-6 h-6" /> },


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

  const universities = [
    {
      name: "Japan Digital University",
      degree: "IT Engineering",
      period: "2022-2025",
      status: "Active",
      image: "/jdu.png",
      website: "https://jdu.ac.jp",
      country: "🇯🇵 Japan",
      description:
        "Specializing in modern software engineering and digital technologies with focus on AI and machine learning applications.",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Best Project Award", "AI Research"],
    },
    {
      name: "Kyoto Tachibana University",
      degree: "Psychology",
      period: "2023-2026",
      status: "Active",
      image: "/kyoto.png",
      website: "https://tachibana-u.ac.jp",
      country: "🇯🇵 Japan",
      description:
        "Understanding human behavior and cognitive processes with emphasis on cross-cultural psychology and language acquisition.",
      gpa: "3.9/4.0",
      achievements: ["Research Excellence", "Cultural Exchange Program", "Psychology Award"],
    },
    {
      name: "UzSWLU",
      degree: "Computer Linguistics",
      period: "2023-2027",
      status: "Active",
      image: "/jahon_tillari.png",
      website: "https://uzswlu.uz",
      country: "🇺🇿 Uzbekistan",
      description:
        "Computational linguistics and natural language processing with focus on multilingual systems and AI-powered translation.",
      gpa: "4.9/5.0",
      achievements: ["Top Student", "Linguistics Competition Winner", "Research Publication"],
    },
  ]


  const filteredSkills = skillFilter === "all" ? skills : skills.filter((skill) => skill.category === skillFilter)

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

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Hero Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
                  Creating innovative digital solutions while pursuing degrees in IT, Psychology, and Linguistics across
                  Japan and Uzbekistan. Author of Japanese learning book with 500+ readers.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I specialize in full-stack development, UI/UX design, and creating educational platforms that bridge
                  language barriers and cultural gaps. My work combines technical expertise with deep understanding of
                  user psychology and linguistic principles.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="group rounded-2xl bg-white dark:bg-gray-800 px-4 sm:px-6 pt-0 shadow dark:shadow-gray-900/20 border dark:border-gray-700">
            <h3 className="relative z-10 bg-white dark:bg-gray-800 pb-2 pt-4 sm:pt-6 text-base sm:text-xl font-semibold dark:text-white">
              Professional Experience
            </h3>
            <div className="max-h-[200px] sm:max-h-[250px] space-y-2 sm:space-y-3 overflow-hidden pb-4 sm:pb-6 pt-2 sm:pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
              <div className="animate-scroll-y space-y-2 sm:space-y-3 group-hover:[animation-play-state:paused]">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                    <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400 sm:w-20 flex-shrink-0">
                      {exp.period}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="grid h-5 w-5 sm:h-7 sm:w-7 shrink-0 place-content-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          className="h-3 w-3 sm:h-4 sm:w-4 rounded"
                        />
                      </div>
                      <div>
                        <h6 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                          {exp.company}
                        </h6>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{exp.position}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="animate-scroll-y space-y-2 sm:space-y-3 group-hover:[animation-play-state:paused]">
                {experiences.map((exp, index) => (
                  <div key={`dup-${index}`} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                    <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400 sm:w-20 flex-shrink-0">
                      {exp.period}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="grid h-5 w-5 sm:h-7 sm:w-7 shrink-0 place-content-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          className="h-3 w-3 sm:h-4 sm:w-4 rounded"
                        />
                      </div>
                      <div>
                        <h6 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                          {exp.company}
                        </h6>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{exp.position}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Personal Book */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white border-0 overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Mening Shaxsiy Kitobim</h3>

              <div className="flex flex-col space-y-4">
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
                    <p className="text-sm text-emerald-100 mb-3">Yapon tilida suhbatlashish qo'llanmasi</p>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold">500+</div>
                        <div className="text-xs text-emerald-200">O'quvchilar</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">4.9</div>
                        <div className="text-xs text-emerald-200">Reyting</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex items-center justify-center space-x-2 text-xs"
                    onClick={() =>
                      window.open(
                        "https://asaxiy.uz/product/ergashboy-masharipov-bir-kunda-bir-suhbat-yapon-tilida-urganing",
                        "_blank",
                      )
                    }
                  >
                    <ShoppingCart className="w-3 h-3" />
                    <span>Xarid qilish</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent flex items-center justify-center space-x-2 text-xs"
                    onClick={() => {
                      window.open("https://t.me/su_academya", "_blank")
                    }}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Online o'qish</span>
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Studies */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <GraduationCap className="w-5 h-5" />
              <span>Current Studies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 truncate">{uni.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{uni.country}</p>
                          <Badge variant={uni.status === "Active" ? "default" : "secondary"} className="text-xs mt-1">
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
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
                    className="text-xs h-8 px-3 dark:border-gray-600"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                      <span className="font-medium text-sm dark:text-white truncate">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {skill.level}%
                    </span>
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
    </PortfolioLayout>
  )
}
