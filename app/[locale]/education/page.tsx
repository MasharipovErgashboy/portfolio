"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle, Briefcase as Certificate } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import { useLocale, useTranslations } from "next-intl"
import useSWR from "swr"
import { getProfessionalCourses, getUniversities } from "@/lib/api"

export default function EducationPage() {
  const t = useTranslations("Education")
  const locale = useLocale()
  const { data: coursesData } = useSWR(`courses-${locale}`, () => getProfessionalCourses().then(res => res.data))
  const { data: universitiesData } = useSWR(`universities-${locale}`, () => getUniversities().then(res => res.data))
  
  const courses = Array.isArray(coursesData) ? coursesData : (coursesData?.results || [])
  
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
      country: "🇯🇵 Japan",
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
      country: "🇯🇵 Japan",
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

  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Universities */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl dark:text-white">{t("universities")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {universities.map((uni: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 dark:border-gray-600 shadow-md"
                    onClick={() => window.open(uni.website, "_blank")}
                  >
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center sm:items-start space-x-4 mb-5 sm:mb-6 text-left">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-600 shadow-lg flex-shrink-0">
                          <img
                            src={uni.image || "/placeholder.svg"}
                            alt={getLocalized(uni, 'name')}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1 truncate">{getLocalized(uni, 'name')}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{getLocalized(uni, 'country')}</p>
                          <Badge variant={uni.status === "Active" ? "default" : "secondary"} className="text-[10px] sm:text-xs">
                            {uni.status === "Active" ? t("status_active") : (uni.status === "Completed" ? t("status_completed") : uni.status)}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4 text-left">
                        <div>
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-base sm:text-lg">{getLocalized(uni, 'degree')}</h4>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{uni.period}</p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">{getLocalized(uni, 'description')}</p>

                        <div>
                          <h5 className="font-bold text-xs sm:text-sm mb-2 dark:text-white uppercase tracking-wider text-gray-400">{t("achievements")}</h5>
                          <div className="space-y-1.5">
                            {((locale === 'uz' ? uni.achievements : uni[`achievements_${locale}`]) || uni.achievements || []).map((achievement: any, idx: number) => (
                              <div key={idx} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-1">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent hover:bg-blue-600 hover:text-white transition-all h-9 sm:h-10 dark:border-gray-600 dark:hover:bg-blue-600 dark:hover:border-blue-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{t("visit")}</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Professional Courses */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">{t("courses")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course: any, index: number) => (
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
                            alt={getLocalized(course, 'company')}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2">
                            {getLocalized(course, 'name')}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">{getLocalized(course, 'company')}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {getLocalized(course, 'platform')} • {course.completed}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          {getLocalized(course, 'certificate')}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 dark:text-white">{t("skills_gained")}</h4>
                          <div className="flex flex-wrap gap-1">
                            {((locale === 'uz' ? course.skills_list : course[`skills_${locale}_list`]) || course.skills_list || []).map((skill: any, idx: number) => (
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
                          <span>{t("status_completed")}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent dark:border-gray-600 dark:hover:bg-gray-600"
                          onClick={() => window.open(course.certificateUrl, "_blank")}
                        >
                          <Certificate className="w-4 h-4 mr-2" />
                          {t("view_certificate")}
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
    </PortfolioLayout>
  )
}
