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
      projectUrl: "https://www.figma.com/proto/k4F9bAcpAdNWlIBWK7AZkB/Shaxsiy-kitobim?page-id=0%3A1&node-id=126-626&viewport=361%2C363%2C0.02&t=4oImui3XcvnAEj7V-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A209",
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
      projectUrl: "https://www.figma.com/proto/k4F9bAcpAdNWlIBWK7AZkB/Shaxsiy-kitobim?page-id=1%3A245&node-id=1-286&viewport=491%2C-1014%2C0.25&t=OlnGiP3QzBmI8DHB-1&scaling=min-zoom&content-scaling=fixed",
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
      projectUrl: "https://github.com/MasharipovErgashboy/su_academy.git",
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
      projectUrl: "https://www.figma.com/proto/NPMY3Mtwq5A6FPterjt1rO/Stadion-zakaz-qilish?page-id=1%3A1844&node-id=1-2863&viewport=346%2C102%2C0.26&t=wgmpmtcU7ixQDpFd-1&scaling=min-zoom&content-scaling=fixed",
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
      projectUrl: "https://www.figma.com/proto/ESIwqwEafSTHDvgE6g7Ypi/EcoSoil?page-id=0%3A1&node-id=1-5&viewport=35%2C318%2C0.09&t=N6OWNLTaxcBbfHRW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=92%3A147",
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
      projectUrl: "https://tas-cp.uz/",
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
      projectUrl: "https://asaxiy.uz/uz/product/ergashboy-masharipov-bir-kunda-bir-suhbat-yapon-tilida-urganing",
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
