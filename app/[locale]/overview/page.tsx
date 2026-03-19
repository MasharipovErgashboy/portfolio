"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, BookOpen, Code, GraduationCap, Star, Award, ShoppingCart, Eye, Users, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import { useLocale, useTranslations } from "next-intl"
import useSWR from "swr"
import { getStats, getAboutMe, getExperiences, getSkillCategories, getSkills, getProfessionalCourses, getUniversities } from "@/lib/api"

const fetcher = (fn: () => Promise<any>) => fn().then((res) => res.data)

export default function OverviewPage() {
  const t = useTranslations("Overview")
  const locale = useLocale()
  const [skillFilter, setSkillFilter] = useState("all")

  // API Data — locale key ga qo'shildi, til o'zgarganda qayta fetch bo'ladi
  const { data: statsData, error: statsError } = useSWR(`stats-${locale}`, () => getStats().then(res => res.data))
  const { data: aboutData, error: aboutError } = useSWR(`aboutMe-${locale}`, () => getAboutMe().then(res => res.data))
  const { data: experiencesData, error: experiencesError } = useSWR(`experiences-${locale}`, () => getExperiences().then(res => res.data))
  const { data: skillCategoriesData, error: skillCategoriesError } = useSWR(`skillCategories-${locale}`, () => getSkillCategories().then(res => res.data))
  const { data: skillsData } = useSWR(`skills-${locale}`, () => getSkills().then(res => res.data))
  const { data: universitiesData } = useSWR(`universities-${locale}`, () => getUniversities().then(res => res.data))

  const about = aboutData?.[0] || null
  const stats = Array.isArray(statsData) ? statsData : (statsData?.results || [])
  const experiences = Array.isArray(experiencesData) ? experiencesData : (experiencesData?.results || [])
  const skillCategories = Array.isArray(skillCategoriesData) ? skillCategoriesData : (skillCategoriesData?.results || [])
  const skills = Array.isArray(skillsData) ? skillsData : (skillsData?.results || [])

  const getLocalized = (item: any, field: string) => {
    if (!item) return ""
    if (locale === "uz") return item[field]
    const localizedField = `${field}_${locale}`
    return item[localizedField] || item[field]
  }

  const staticUniversities = [
    {
      name: "Japan Digital University",
      name_en: "Japan Digital University",
      name_ru: "Японский Цифровой Университет",
      name_jp: "ジャパン・デジタル大学",
      degree: "IT Engineering",
      degree_en: "IT Engineering",
      degree_ru: "IT-инженерия",
      degree_jp: "ITエンジニアリング",
      period: "2022-2025",
      status: "Active",
      image: "/jdu.png",
      website: "https://jdu.uz",
      country: "🇯🇵 Yaponiya",
      country_en: "🇯🇵 Japan",
      country_ru: "🇯🇵 Япония",
      country_jp: "🇯🇵 日本",
      description: "Innovatsion raqamli texnologiyalar va dasturiy ta'minot muhandisligi, AI va Machine Learning yo'nalishlarida ixtisoslashish.",
      description_en: "Specializing in modern software engineering and digital technologies with focus on AI and machine learning applications.",
      description_ru: "Специализация на современной программной инженерии и цифровых технологиях с акцентом на ИИ и машинное обучение.",
      description_jp: "AIと機械学習アプリケーションに焦点を当てた、現代のソフトウェアエンジニアリングとデジタル技術の専門化。",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Best Project Award", "AI Research"],
      achievements_en: ["Dean's List", "Best Project Award", "AI Research"],
      achievements_ru: ["Список декана", "Награда за лучший проект", "Исследования ИИ"],
      achievements_jp: ["成績優秀者名簿", "最優秀プロジェクト賞", "AI研究"],
    },
    {
      name: "Kyoto Tachibana University",
      name_en: "Kyoto Tachibana University",
      name_ru: "Университет Киото Татибана",
      name_jp: "京都橘大学",
      degree: "Psixologiya",
      degree_en: "Psychology",
      degree_ru: "Психология",
      degree_jp: "心理学",
      period: "2023-2026",
      status: "Active",
      image: "/kyoto.png",
      website: "https://www.tachibana-u.ac.jp/english/",
      country: "🇯🇵 Yaponiya",
      country_en: "🇯🇵 Japan",
      country_ru: "🇯🇵 Япония",
      country_jp: "🇯🇵 日本",
      description: "Inson xulq-atvori va kognitiv jarayonlarni o'rganish, madaniyatlararo psixologiya va til o'zlashtirishga urg'u berish.",
      description_en: "Understanding human behavior and cognitive processes with emphasis on cross-cultural psychology and language acquisition.",
      description_ru: "Понимание человеческого поведения и когнитивных процессов с акцентом на кросс-культурную психологию и освоение языка.",
      description_jp: "比較文化心理学と言語習得に重点を置いた、人間の行動と認知プロセスの理解。",
      gpa: "3.9/4.0",
      achievements: ["Research Excellence", "Cultural Exchange Program", "Psychology Award"],
      achievements_en: ["Research Excellence", "Cultural Exchange Program", "Psychology Award"],
      achievements_ru: ["Исследовательское мастерство", "Программа культурного обмена", "Награда по психологии"],
      achievements_jp: ["研究優秀賞", "文化交流プログラム", "心理学賞"],
    },
    {
      name: "UzSWLU",
      name_en: "UzSWLU",
      name_ru: "УзГУМЯ",
      name_jp: "ウズベキスタン世界言語大学",
      degree: "Kompyuter lingvistikasi",
      degree_en: "Computer Linguistics",
      degree_ru: "Компьютерная лингвистика",
      degree_jp: "コンピュータ言語学",
      period: "2023-2027",
      status: "Active",
      image: "/jahon_tillari.png",
      website: "https://uzswlu.uz",
      country: "🇺🇿 O'zbekiston",
      country_en: "🇺🇿 Uzbekistan",
      country_ru: "🇺🇿 Узбекистан",
      country_jp: "🇺🇿 ウズベキスタン",
      description: "Matematik lingvistika va tabiiy tilni qayta ishlash, ko'p tilli tizimlar va AI yordamida tarjima qilishga e'tibor qaratish.",
      description_en: "Computational linguistics and natural language processing with focus on multilingual systems and AI-powered translation.",
      description_ru: "Компьютерная лингвистика и обработка естественного языка с акцентом на многоязычные системы и перевод на основе ИИ.",
      description_jp: "多言語システムと言語処理に焦点を当てた、計算言語学と自然言語処理の研究。",
      gpa: "4.9/5.0",
      achievements: ["Top Student", "Linguistics Competition Winner", "Research Publication"],
      achievements_en: ["Top Student", "Linguistics Competition Winner", "Research Publication"],
      achievements_ru: ["Лучший студент", "Победитель конкурса лингвистики", "Научная публикация"],
      achievements_jp: ["最優秀学生", "言語学コンテスト優勝", "研究出版"],
    },
  ]

  const fetchedUniversities = Array.isArray(universitiesData) ? universitiesData : (universitiesData?.results || [])
  const universities = fetchedUniversities.length > 0 ? fetchedUniversities : staticUniversities

  const categories = [{ id: "all", name: locale === "uz" ? "Barchasi" : (locale === "ru" ? "Все" : (locale === "jp" ? "すべて" : "All")), icon: "🌟" }, ...skillCategories.map((c: any) => ({ ...c, name: getLocalized(c, 'name') }))]

  const filteredSkills = skillFilter === "all" 
    ? skills 
    : skills.filter((skill: any) => skill.category.toString() === skillFilter)

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Hero Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-xs sm:text-sm">{t("stats.total_projects")}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{stats.find((s: any) => s.key === "total_projects")?.value || "7+"}</p>
                </div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <Code className="w-5 h-5 sm:w-8 sm:h-8 text-blue-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs sm:text-sm">{t("stats.happy_clients")}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{stats.find((s: any) => s.key === "happy_clients")?.value || "15+"}</p>
                </div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <Users className="w-5 h-5 sm:w-8 sm:h-8 text-purple-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-xs sm:text-sm">{t("stats.completed")}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{stats.find((s: any) => s.key === "completed")?.value || "85%"}</p>
                </div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-green-100" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-xs sm:text-sm">{t("stats.success_rate")}</p>
                  <p className="text-2xl sm:text-3xl font-bold">{stats.find((s: any) => s.key === "success_rate")?.value || "98%"}</p>
                </div>
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8 text-orange-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 dark:text-white">
              <User className="w-5 h-5" />
              <span>{t("about.title")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {getLocalized(about, 'description_1') || t("about.description1")}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {getLocalized(about, 'description_2') || t("about.description2")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{t("badges.developer")}</Badge>
                  <Badge variant="secondary">{t("badges.designer")}</Badge>
                  <Badge variant="secondary">{t("badges.author")}</Badge>
                  <Badge variant="secondary">{t("badges.student")}</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">{t("about.focus")}</h4>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">
                    {getLocalized(about, 'current_focus') || "Building AI-powered language learning platforms and studying across multiple disciplines"}
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">{t("about.available")}</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    {getLocalized(about, 'available_for') || "Freelance projects, collaborations, and consulting opportunities"}
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
              {t("experience_title")}
            </h3>
            <div className="max-h-[200px] sm:max-h-[250px] space-y-2 sm:space-y-3 overflow-hidden pb-4 sm:pb-6 pt-2 sm:pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
            <div className="relative h-48 overflow-hidden space-y-2 sm:space-y-3 group">
              <div className="animate-scroll-y space-y-2 sm:space-y-3 group-hover:[animation-play-state:paused]">
                {experiences.map((exp: any, index: number) => (
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
                        <h6 
                          className={`text-xs sm:text-sm font-semibold text-gray-900 dark:text-white transition-colors ${exp.url ? "cursor-pointer hover:text-blue-600" : ""}`}
                          onClick={() => exp.url && window.open(exp.url, "_blank")}
                        >
                          {exp.company}
                        </h6>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{getLocalized(exp, 'position')}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">{getLocalized(exp, 'description')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="animate-scroll-y space-y-2 sm:space-y-3 group-hover:[animation-play-state:paused]">
                {experiences.map((exp: any, index: number) => (
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
                        <h6 
                          className={`text-xs sm:text-sm font-semibold text-gray-900 dark:text-white transition-colors ${exp.url ? "cursor-pointer hover:text-blue-600" : ""}`}
                          onClick={() => exp.url && window.open(exp.url, "_blank")}
                        >
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
          </div>

          {/* My Personal Book */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white border-0 overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-bold mb-4 text-white">{t("book.title")}</h3>

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
                    <h4 className="text-lg font-bold mb-1">{t("book.name")}</h4>
                    <p className="text-sm text-emerald-100 mb-3">{t("book.subtitle")}</p>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold">500+</div>
                        <div className="text-xs text-emerald-200">{t("book.readers")}</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">4.9</div>
                        <div className="text-xs text-emerald-200">{t("book.rating")}</div>
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
                    <span>{t("book.buy")}</span>
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
                    <span>{t("book.read_online")}</span>
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
              <span>{t("studies_title")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.slice(0, 3).map((uni: any, index: number) => (
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
                            alt={getLocalized(uni, 'name')}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 truncate">{getLocalized(uni, 'name')}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{getLocalized(uni, 'country')}</p>
                          <Badge variant={uni.status === "Active" ? "default" : "secondary"} className="text-xs mt-1">
                            {uni.status === "Active" ? t("status_active") : (uni.status === "Completed" ? t("status_completed") : uni.status)}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400">{getLocalized(uni, 'degree')}</h4>
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
                <span>{t("skills_title")}</span>
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {categories.map((category: any) => (
                  <button
                    key={category.id}
                    onClick={() => setSkillFilter(category.id === "all" ? "all" : category.id.toString())}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center space-x-2 border dark:border-gray-600 ${
                      skillFilter === (category.id === "all" ? "all" : category.id.toString())
                        ? "text-white border-blue-600"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 bg-transparent"
                    }`}
                  >
                    {skillFilter === (category.id === "all" ? "all" : category.id.toString()) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-full -z-0"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-1.5">
                      {category.icon && <span className="text-sm">{category.icon}</span>}
                      <span>{category.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredSkills.slice(0, 12).map((skill: any) => (
                <div
                  key={skill.id || skill.name}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-800/40 backdrop-blur-sm group"
                >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-medium text-sm dark:text-white truncate">{getLocalized(skill, 'name')}</span>
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${skill.percentage}%` }}
                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]"
                      />
                    </div>
                  </div>
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
