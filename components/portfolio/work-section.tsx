"use client"

import { motion } from "framer-motion"
import { Filter, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image: string
  category: string
  status: string
  year: string
  features: string[]
  tech: string[]
  type: string
  projectUrl?: string
}

interface WorkSectionProps {
  filteredProjects: Project[]
  projectFilter: string
  setProjectFilter: (filter: string) => void
  projectCategories: { id: string; label: string }[]
}

export default function WorkSection({
  filteredProjects,
  projectFilter,
  setProjectFilter,
  projectCategories,
}: WorkSectionProps) {
  return (
    <motion.div
      key="work"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 sm:space-y-6"
    >
      {/* Enhanced Project Filters */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-xl">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
            <Filter className="w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="text-base sm:text-xl font-bold">Project Categories</h3>
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
                {category.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl font-bold text-blue-600">7+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl font-bold text-green-600">15+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl font-bold text-purple-600">85%</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-3 sm:p-4 text-center">
            <div className="text-lg sm:text-2xl font-bold text-orange-600">98%</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-sm sm:text-lg mb-1 dark:text-white line-clamp-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-2">{project.type}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-3 sm:mb-4">
                  <h4 className="font-medium text-xs sm:text-sm mb-2 dark:text-white">Key Features:</h4>
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

                <Button
                size="sm"
                className="w-full text-xs sm:text-sm h-7 sm:h-9"
                onClick={() => {
                    if (project.projectUrl) {
                    window.open(project.projectUrl, "_blank");
                    }
                }}
                >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                View Project
                </Button>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
