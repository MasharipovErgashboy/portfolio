"use client"

import { useState } from "react"
import PortfolioLayout from "@/components/portfolio/portfolio-layout"
import WorkSection from "@/components/portfolio/work-section"

export default function WorkPage() {
  const [projectFilter, setProjectFilter] = useState("all")

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
      projectUrl: "https://github.com/yourusername/su-academy-web",
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
      projectUrl: "https://github.com/yourusername/su-academy-mobile",
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
      projectUrl: "https://github.com/yourusername/su-academy-fullstack",
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
      projectUrl: "https://github.com/yourusername/maydon-uz",
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
      projectUrl: "https://www.ergashboy.uz/",
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
      projectUrl: "https://github.com/yourusername/tas-capital",
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
      projectUrl: "https://github.com/yourusername/japanese-learning-book",
    },
  ]

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "Web Development", label: "Web Development" },
    { id: "Mobile Apps", label: "Mobile Apps" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "AI/ML", label: "AI/ML" },
    { id: "Design", label: "Design" },
  ]

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((project) => project.category === projectFilter)

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
