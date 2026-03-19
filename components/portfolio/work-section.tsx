"use client"

import { motion } from "framer-motion"
import { Filter, ExternalLink, Github, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"

interface Project {
  title: string
  title_en?: string
  title_ru?: string
  title_jp?: string
  description: string
  description_en?: string
  description_ru?: string
  description_jp?: string
  image: string
  category: string
  status: string
  year: string
  features: string[]
  tech: string[]
  type: string
  type_en?: string
  type_ru?: string
  type_jp?: string
  projectUrl?: string
  slug: string
  video_url?: string
  github_link?: string
  live_link?: string
}

interface WorkSectionProps {
  filteredProjects: Project[]
  projectFilter: string
  setProjectFilter: (filter: string) => void
  projectCategories: { id: string; label: string; label_en?: string; label_ru?: string; label_jp?: string }[]
}

export default function WorkSection({
  filteredProjects,
  projectFilter,
  setProjectFilter,
  projectCategories,
}: WorkSectionProps) {
  const t = useTranslations("Work")
  const locale = useLocale()

  const getLocalized = (item: any, field: string) => {
    if (!item) return ""
    if (locale === "uz") return item[field]
    const localizedField = `${field}_${locale}`
    return item[localizedField] || item[field]
  }

  return (
    <motion.div
      key="work"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* ── Filters ────────────────────────────────────── */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
            <Filter className="w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="text-base sm:text-xl font-bold">{t("hero_title")}</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                variant={projectFilter === category.id ? "secondary" : "outline"}
                size="sm"
                onClick={() => setProjectFilter(category.id)}
                className={`text-xs h-6 sm:h-8 px-2 sm:px-3 ${
                  projectFilter === category.id
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "border-white/30 text-white hover:bg-white/10 bg-transparent"
                }`}
              >
                {getLocalized(category, "label")}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Stats ──────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { value: `${filteredProjects.length}+`, label: t("stats.total_projects"), color: "text-blue-600" },
          { value: `${Math.floor(filteredProjects.length * 1.2) + 2}+`, label: t("stats.happy_clients"), color: "text-green-600" },
          {
            value: `${filteredProjects.length > 0 ? Math.round((filteredProjects.filter(p => p.status === "Completed").length / filteredProjects.length) * 100) : 0}%`,
            label: t("stats.completed"),
            color: "text-purple-600",
          },
          { value: "99%", label: t("stats.success_rate"), color: "text-orange-600" },
        ].map((stat, i) => (
          <Card key={i} className="dark:bg-gray-800/50 dark:border-gray-700 shadow-sm border-gray-100 hover:shadow-md transition-shadow">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className={`text-2xl sm:text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Projects Grid ──────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug || project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -7, transition: { duration: 0.22 } }}
            className="flex h-full"
          >
            <div className="group w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-shadow duration-300 flex flex-col">

              {/* ── Thumbnail ───────────────────────────── */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={getLocalized(project, "title")}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* dark gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                {/* Year pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-black/70 text-gray-800 dark:text-white backdrop-blur-sm shadow-sm">
                  {project.year}
                </span>

                {/* Status pill */}
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm shadow-sm ${
                  project.status === "Completed"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-amber-400/90 text-gray-900"
                }`}>
                  {project.status === "Completed" ? t("ProjectDetail.completed") : project.status}
                </span>

                {/* Quick-links overlay (appears on hover) */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-xs font-semibold border border-white/20 transition"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm text-white text-xs font-semibold border border-blue-400/30 transition"
                    >
                      <Globe className="w-3.5 h-3.5" /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* ── Body ────────────────────────────────── */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                {/* type */}
                <p className="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.18em]">
                  {getLocalized(project, "type")}
                </p>

                {/* title */}
                <h3 className="font-bold text-lg leading-snug line-clamp-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {getLocalized(project, "title")}
                </h3>

                {/* description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
                  {getLocalized(project, "description")}
                </p>

                {/* ── Action row ──────────────────────── */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                  <div className="flex items-center gap-2">

                    {/* Primary CTA */}
                    <Button
                      size="sm"
                      className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow hover:shadow-blue-500/30 transition-all"
                      onClick={() =>
                        window.open("https://uz.linkedin.com/in/ergashboy-masharipov-0a9820298", "_blank")
                      }
                    >
                      {t("view_project")}
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </Button>

                    {/* GitHub icon btn */}
                    {project.github_link ? (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-700 cursor-not-allowed">
                        <Github className="w-4 h-4" />
                      </div>
                    )}

                    {/* Live link icon btn */}
                    {project.live_link ? (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                        className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-100 dark:border-gray-800 text-gray-300 dark:text-gray-700 cursor-not-allowed">
                        <Globe className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
