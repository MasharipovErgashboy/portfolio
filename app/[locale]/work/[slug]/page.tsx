"use client"

import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import useSWR from "swr"
import { getProjectBySlug } from "@/lib/api"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Globe, 
  ArrowLeft, 
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectDetailPage() {
  const t = useTranslations("ProjectDetail")
  const params = useParams()
  const slug = params?.slug as string
  const locale = params?.locale as string

  const { data: project, error } = useSWR(slug ? `project-${slug}` : null, () => 
    getProjectBySlug(slug).then(res => res.data)
  )

  const getLocalized = (item: any, field: string) => {
    if (!item) return ""
    if (locale === "uz") return item[field]
    const localizedField = `${field}_${locale}`
    return item[localizedField] || item[field]
  }

  if (error) return (
    <PortfolioLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-xl font-bold mb-4 dark:text-white">{t("not_found")}</h1>
        <Link href={`/${locale}/work`}>
          <Button variant="outline" className="rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Button>
        </Link>
      </div>
    </PortfolioLayout>
  )

  if (!project) return (
    <PortfolioLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-medium text-gray-500 uppercase tracking-widest">{t("loading")}</p>
      </div>
    </PortfolioLayout>
  )

  return (
    <PortfolioLayout>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-20">
          
          {/* Top Navigation */}
          <Link 
            href={`/${locale}/work`} 
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("back")}
          </Link>

          {/* Title Section */}
          <div className="mb-12 space-y-4">
            <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-0 font-bold">
              {getLocalized(project, 'type')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold dark:text-white leading-tight">
              {getLocalized(project, 'name')}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Media Section */}
              <div className="rounded-3xl overflow-hidden border dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm">
                {project.video_url ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={project.video_url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video w-full">
                     <img
                      src={project.image || "/placeholder.svg"}
                      alt={getLocalized(project, 'name')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold dark:text-white">{t("about")}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
                  {getLocalized(project, 'description')}
                </p>
              </section>

              {/* Tech Stack */}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold dark:text-white">{t("technologies")}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map((tech: string, i: number) => (
                      <Badge key={i} variant="outline" className="px-4 py-2 rounded-xl border-gray-200 dark:border-gray-800 text-sm font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}

              {/* Features */}
              {((locale === 'uz' ? project.key_features_list : project[`key_features_${locale}_list`]) || project.key_features_list || []).length > 0 && (
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold dark:text-white">{t("features")}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {((locale === 'uz' ? project.key_features_list : project[`key_features_${locale}_list`]) || project.key_features_list || []).map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start p-5 rounded-2xl border dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 transition-colors hover:bg-white dark:hover:bg-gray-900">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="rounded-3xl border dark:border-gray-800 dark:bg-gray-900/50 shadow-none">
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("details")}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{t("status")}</span>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 dark:bg-green-900/10 font-bold">
                          {project.status === "Completed" ? t("completed") : project.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{t("year")}</span>
                        <span className="font-bold dark:text-white">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t dark:border-gray-800">
                    {project.live_link && (
                      <Button 
                        onClick={() => window.open(project.live_link, "_blank")}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl h-14 font-bold"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {t("live_demo")}
                      </Button>
                    )}
                    {project.github_link && (
                      <Button 
                        onClick={() => window.open(project.github_link, "_blank")}
                        variant="outline"
                        className="w-full rounded-2xl h-14 font-bold border-gray-200 dark:border-gray-800"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t("github_code")}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Simple CTA */}
              <Link href={`/${locale}/contact`}>
                <div className="p-8 rounded-3xl bg-gray-900 text-white space-y-4 hover:bg-blue-600 transition-colors cursor-pointer group shadow-xl">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest group-hover:text-white transition-colors">{t("need_project")}</p>
                  <h4 className="text-2xl font-bold">{t("contact_me")}</h4>
                  <div className="flex items-center text-sm font-bold text-white/70 group-hover:text-white transition-colors pt-2">
                    {t("contact")} <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  )
}
