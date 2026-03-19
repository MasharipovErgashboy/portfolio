"use client"

import { useState } from "react"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import WorkSection from "@/components/portfolio/work-section"
import { useTranslations, useLocale } from "next-intl"
import useSWR from "swr"
import { getProjects, getProjectCategories } from "@/lib/api"

export default function WorkPage() {
  const t = useTranslations("Work")
  const locale = useLocale()
  const [projectFilter, setProjectFilter] = useState("all")

  const { data: projectsData } = useSWR(`projects-${locale}`, () => getProjects().then(res => res.data))
  const { data: categoriesData } = useSWR(`projectCategories-${locale}`, () => getProjectCategories().then(res => res.data))

  const fetchedProjects = Array.isArray(projectsData) ? projectsData : (projectsData?.results || [])
  const fetchedCategories = Array.isArray(categoriesData) ? categoriesData : (categoriesData?.results || [])

  const projectCategories = [
    { id: "all", label: t("categories.all") },
    ...fetchedCategories.map((cat: any) => ({
      id: cat.id.toString(),
      label: cat.name
    }))
  ]

  const projects = fetchedProjects.map((p: any) => ({
    title: p.name,
    description: p.description,
    image: p.image,
    category: p.category?.toString(), 
    status: p.status,
    year: p.year,
    features: p.key_features || [],
    tech: [], 
    type: p.type,
    projectUrl: p.live_link || p.github_link,
    slug: p.slug,
    video_url: p.video_url,
    github_link: p.github_link,
    live_link: p.live_link
  }))

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((project: any) => project.category === projectFilter)

  return (
    <PortfolioLayout>
      <WorkSection
        filteredProjects={filteredProjects}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
        projectCategories={projectCategories}
      />
    </PortfolioLayout>
  )
}
